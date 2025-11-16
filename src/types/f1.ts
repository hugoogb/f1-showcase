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

export interface ApiError {
  message: string
  status?: number
  code?: string
}