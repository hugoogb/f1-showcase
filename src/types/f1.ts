/**
 * F1 2023 Showcase - Data Types
 * 
 * Types for F1 2023 showcase application using local data files.
 */

export interface Driver {
  id: number
  firstName: string
  lastName: string
  team: string
  image?: string
  numberLogo?: string
  number?: number
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