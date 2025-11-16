export interface Team {
  id: number;
  name: string;
  logo: string;
  logoSmall: string;
  imageCar: string;
  drivers: string[];
  color: string;
  points: number;
  position: number;
  base: string;
  teamChief: string;
  technicalChief: string;
  chassis: string;
  powerUnit: string;
  firstTeamEntry: number;
  worldChampionships: number;
  highestRaceFinish: string;
  polePositions: number;
  fastestLaps: number;
}

export interface ConstructorChampionship {
  position: number;
  team: {
    name: string;
    base: string;
  };
  points: number;
  wins: number;
  podiums: number;
}
