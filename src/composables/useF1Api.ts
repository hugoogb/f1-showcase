/**
 * F1 2023 Showcase - API Integration Composable
 * 
 * This composable handles all API communication for the F1 2023 showcase.
 * All API URLs are configured via environment variables (VITE_API_BASE_URL).
 */

import { ref, computed, type Ref } from 'vue'
import type { Driver, Team, TeamWithDrivers, ApiError } from '@/types/f1'

// Get API base URL from environment variables
const getApiBaseUrl = (): string => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  if (!apiUrl) {
    throw new Error(
      'VITE_API_BASE_URL environment variable is not set. ' +
      'Please create a .env file with VITE_API_BASE_URL configured.'
    )
  }

  // Remove trailing slash if present
  return apiUrl.replace(/\/$/, '')
}

const API_BASE_URL = getApiBaseUrl()

class F1ApiError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message)
    this.name = 'F1ApiError'
    this.status = status
    this.code = code
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
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new F1ApiError(
        `HTTP error! status: ${response.status}`,
        response.status,
        response.statusText
      )
    }

    const result = await response.json()

    // Handle your API response format (assuming it might wrap data in a response object)
    const data = result.data !== undefined ? result.data : result

    cache.set(cacheKey, { data, timestamp: Date.now() })
    return data
  } catch (error) {
    if (error instanceof F1ApiError) {
      throw error
    }
    throw new F1ApiError(
      `Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
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
        status: err instanceof F1ApiError ? err.status : undefined,
        code: err instanceof F1ApiError ? err.code : undefined
      }
      error.value = apiError
      console.error('Custom F1 API Error:', apiError)
      return null
    } finally {
      loading.value = false
    }
  }

  // Get all teams from your custom API
  const getTeams = async (): Promise<Team[]> => {
    const result = await handleRequest(async () => {
      return await fetchWithCache<Team[]>(`${API_BASE_URL}/api/teams`)
    })
    return result || []
  }

  // Get all drivers from your custom API
  const getDrivers = async (): Promise<Driver[]> => {
    const result = await handleRequest(async () => {
      return await fetchWithCache<Driver[]>(`${API_BASE_URL}/api/drivers`)
    })
    return result || []
  }

  // Get teams with their drivers
  const getTeamsWithDrivers = async (): Promise<TeamWithDrivers[]> => {
    const result = await handleRequest(async () => {
      const [teams, drivers] = await Promise.all([
        getTeams(),
        getDrivers()
      ])

      if (!teams || !drivers) {
        throw new F1ApiError('Failed to fetch teams or drivers data')
      }

      // Map drivers to their teams
      const teamsWithDrivers: TeamWithDrivers[] = teams.map(team => ({
        ...team,
        drivers: drivers.filter(driver => driver.team === team.name)
      }))

      return teamsWithDrivers.sort((a, b) => a.name.localeCompare(b.name))
    })

    return result || []
  }

  return {
    loading: computed(() => loading.value),
    error: computed(() => error.value),

    // Main data fetching methods
    getTeamsWithDrivers
  }
}