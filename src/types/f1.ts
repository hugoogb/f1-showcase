export interface Driver {
  meeting_key: number
  session_key: number
  driver_number: number
  broadcast_name: string
  full_name: string
  name_acronym: string
  team_name: string
  team_colour: string
  first_name: string
  last_name: string
  headshot_url: string | null
  country_code: string | null
}

export interface Session {
  meeting_key: number
  session_key: number
  location: string
  date_start: string
  date_end: string
  session_type: string
  session_name: string
  country_key: number
  country_code: string
  country_name: string
  circuit_key: number
  circuit_short_name: string
  gmt_offset: string
  year: number
}

export interface Team {
  id: number
  name: string
  color: string
  imageCar?: string
  logoSmall?: string
}

export interface TeamWithDrivers extends Team {
  drivers: Driver[]
}

export interface ApiError {
  message: string
  status?: number
}

export type SessionType = 'Practice' | 'Qualifying' | 'Sprint' | 'Race'