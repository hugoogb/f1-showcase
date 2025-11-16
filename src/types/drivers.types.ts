export interface Driver {
  id: number;
  rank: number;
  points: number;
  team: string;
  firstName: string;
  lastName: string;
  countryFlag: string;
  image: string;
  numberLogo: string;
  number: number;
  nationality: string;
  dateOfBirth: string;
  placeOfBirth: string;
}

export interface DriverChampionship {
  position: number;
  driver: {
    firstName: string;
    lastName: string;
    nationality: string;
    team: string;
  };
  points: number;
  wins: number;
  podiums: number;
}
