import { ref, computed, type Ref } from 'vue'
import type { Driver, Session, Team, TeamWithDrivers, ApiError } from '@/types/f1'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

class F1ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message)
    this.name = 'F1ApiError'
  }
}

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

async function fetchWithCache<T>(url: string): Promise<T> {
  const cacheKey = url
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new F1ApiError(`HTTP error! status: ${response.status}`, response.status)
    }
    
    const data = await response.json()
    cache.set(cacheKey, { data, timestamp: Date.now() })
    return data
  } catch (error) {
    if (error instanceof F1ApiError) {
      throw error
    }
    throw new F1ApiError(`Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export function useF1Api() {
  const loading = ref(false)
  const error: Ref<ApiError | null> = ref(null)

  const handleRequest = async <T>(request: () => Promise<T>): Promise<T | null> => {
    loading.value = true
    error.value = null
    
    try {
      const result = await request()
      return result
    } catch (err) {
      const apiError: ApiError = {
        message: err instanceof Error ? err.message : 'An unknown error occurred',
        status: err instanceof F1ApiError ? err.status : undefined
      }
      error.value = apiError
      console.error('F1 API Error:', apiError)
      return null
    } finally {
      loading.value = false
    }
  }

  const getLatestSession = async (): Promise<Session | null> => {
    return handleRequest(async () => {
      const sessions = await fetchWithCache<Session[]>(`${API_BASE_URL}/sessions?year=2024`)
      // Get the most recent session
      return sessions.sort((a, b) => new Date(b.date_start).getTime() - new Date(a.date_start).getTime())[0]
    })
  }

  const getDrivers = async (sessionKey?: number): Promise<Driver[]> => {
    const result = await handleRequest(async () => {
      const url = sessionKey 
        ? `${API_BASE_URL}/drivers?session_key=${sessionKey}`
        : `${API_BASE_URL}/drivers?session_key=latest`
      return await fetchWithCache<Driver[]>(url)
    })
    return result || []
  }

  const getTeamsWithDrivers = async (): Promise<TeamWithDrivers[]> => {
    const result = await handleRequest(async () => {
      const drivers = await getDrivers()
      
      // Group drivers by team
      const teamMap = new Map<string, Driver[]>()
      drivers.forEach(driver => {
        if (!teamMap.has(driver.team_name)) {
          teamMap.set(driver.team_name, [])
        }
        teamMap.get(driver.team_name)!.push(driver)
      })

      // Convert to teams with drivers
      const teams: TeamWithDrivers[] = []
      let id = 1
      
      teamMap.forEach((teamDrivers, teamName) => {
        const team: TeamWithDrivers = {
          id: id++,
          name: teamName,
          color: `#${teamDrivers[0].team_colour}`,
          drivers: teamDrivers.sort((a, b) => a.driver_number - b.driver_number)
        }
        teams.push(team)
      })

      return teams.sort((a, b) => a.name.localeCompare(b.name))
    })
    
    return result || []
  }

  const getSessions = async (year: number = 2024): Promise<Session[]> => {
    const result = await handleRequest(async () => {
      return await fetchWithCache<Session[]>(`${API_BASE_URL}/sessions?year=${year}`)
    })
    return result || []
  }

  const clearCache = () => {
    cache.clear()
  }

  return {
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    getLatestSession,
    getDrivers,
    getTeamsWithDrivers,
    getSessions,
    clearCache
  }
}