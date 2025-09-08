// Custom F1 API Data Types (hugoogb/f1-api)

export interface Driver {
  id: number
  firstName: string
  lastName: string
  team: string
  image?: string
  numberLogo?: string
  number?: number
  // Additional properties that might be in your API
  nationality?: string
  birthDate?: string
  points?: number
}

export interface Team {
  id: number
  name: string
  color: string
  logo?: string
  logoSmall?: string
  imageCar?: string
  // Additional properties that might be in your API
  base?: string
  teamChief?: string
  technicalChief?: string
  chassis?: string
  powerUnit?: string
  firstTeamEntry?: number
  worldChampionships?: number
  highestRaceFinish?: string
  polePositions?: number
  fastestLaps?: number
}

export interface TeamWithDrivers extends Team {
  drivers: Driver[]
}

// Race and session related types
export interface Race {
  id: number
  name: string
  location: string
  country: string
  date: string
  circuit?: Circuit
}

export interface Circuit {
  id: number
  name: string
  location: string
  country: string
  length?: number
  turns?: number
  lapRecord?: string
}

export interface Session {
  id: number
  name: string
  type: SessionType
  date: string
  raceId: number
}

export interface ApiError {
  message: string
  status?: number
  code?: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export type SessionType = 'Practice' | 'Qualifying' | 'Sprint' | 'Race' | 'Practice 1' | 'Practice 2' | 'Practice 3'