export interface RaceResult {
  position: number;
  driver: {
    firstName: string;
    lastName: string;
    nationality: string;
    team: string;
  };
  time?: string;
  gap?: string;
  points: number;
  fastestLap?: boolean;
}

export interface Race {
  id: number;
  round: number;
  raceName: string;
  circuit: {
    name: string;
    location: string;
    country: string;
  };
  date: string;
  winner: {
    firstName: string;
    lastName: string;
    team: string;
  };
  results: RaceResult[];
}

export interface SeasonOverview {
  year: number;
  totalRaces: number;
  driversChampion: {
    firstName: string;
    lastName: string;
    team: string;
    points: number;
  };
  constructorsChampion: {
    name: string;
    points: number;
  };
  races: {
    id: number;
    round: number;
    name: string;
    date: string;
    circuit: string;
    country: string;
    winner: string;
  }[];
}