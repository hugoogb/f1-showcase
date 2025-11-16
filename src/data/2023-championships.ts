import type { DriverChampionship } from "../types/drivers.types";
import type { ConstructorChampionship } from "../types/teams.types";

export const driversChampionship2023: DriverChampionship[] = [
  {
    position: 1,
    driver: {
      firstName: "Max",
      lastName: "Verstappen",
      nationality: "Dutch",
      team: "Red Bull Racing"
    },
    points: 575,
    wins: 19,
    podiums: 21
  },
  {
    position: 2,
    driver: {
      firstName: "Sergio",
      lastName: "Pérez",
      nationality: "Mexican",
      team: "Red Bull Racing"
    },
    points: 285,
    wins: 2,
    podiums: 9
  },
  {
    position: 3,
    driver: {
      firstName: "Lewis",
      lastName: "Hamilton",
      nationality: "British",
      team: "Mercedes"
    },
    points: 234,
    wins: 0,
    podiums: 6
  },
  {
    position: 4,
    driver: {
      firstName: "Fernando",
      lastName: "Alonso",
      nationality: "Spanish",
      team: "Aston Martin"
    },
    points: 206,
    wins: 0,
    podiums: 8
  },
  {
    position: 5,
    driver: {
      firstName: "Charles",
      lastName: "Leclerc",
      nationality: "Monégasque",
      team: "Ferrari"
    },
    points: 206,
    wins: 0,
    podiums: 6
  },
  {
    position: 6,
    driver: {
      firstName: "Lando",
      lastName: "Norris",
      nationality: "British",
      team: "McLaren"
    },
    points: 205,
    wins: 0,
    podiums: 7
  },
  {
    position: 7,
    driver: {
      firstName: "Carlos",
      lastName: "Sainz Jr.",
      nationality: "Spanish",
      team: "Ferrari"
    },
    points: 200,
    wins: 1,
    podiums: 3
  },
  {
    position: 8,
    driver: {
      firstName: "George",
      lastName: "Russell",
      nationality: "British",
      team: "Mercedes"
    },
    points: 175,
    wins: 0,
    podiums: 2
  },
  {
    position: 9,
    driver: {
      firstName: "Oscar",
      lastName: "Piastri",
      nationality: "Australian",
      team: "McLaren"
    },
    points: 97,
    wins: 0,
    podiums: 2
  },
  {
    position: 10,
    driver: {
      firstName: "Lance",
      lastName: "Stroll",
      nationality: "Canadian",
      team: "Aston Martin"
    },
    points: 74,
    wins: 0,
    podiums: 0
  }
];

export const constructorsChampionship2023: ConstructorChampionship[] = [
  {
    position: 1,
    team: {
      name: "Red Bull Racing Honda RBPT",
      base: "Milton Keynes, United Kingdom"
    },
    points: 860,
    wins: 21,
    podiums: 30
  },
  {
    position: 2,
    team: {
      name: "Mercedes",
      base: "Brackley, United Kingdom"
    },
    points: 409,
    wins: 0,
    podiums: 8
  },
  {
    position: 3,
    team: {
      name: "Ferrari",
      base: "Maranello, Italy"
    },
    points: 406,
    wins: 1,
    podiums: 9
  },
  {
    position: 4,
    team: {
      name: "McLaren Mercedes",
      base: "Woking, United Kingdom"
    },
    points: 302,
    wins: 0,
    podiums: 9
  },
  {
    position: 5,
    team: {
      name: "Aston Martin Aramco Mercedes",
      base: "Silverstone, United Kingdom"
    },
    points: 280,
    wins: 0,
    podiums: 8
  },
  {
    position: 6,
    team: {
      name: "Alpine Renault",
      base: "Enstone, United Kingdom"
    },
    points: 120,
    wins: 0,
    podiums: 0
  },
  {
    position: 7,
    team: {
      name: "Williams Mercedes",
      base: "Grove, United Kingdom"
    },
    points: 28,
    wins: 0,
    podiums: 0
  },
  {
    position: 8,
    team: {
      name: "AlphaTauri Honda RBPT",
      base: "Faenza, Italy"
    },
    points: 25,
    wins: 0,
    podiums: 0
  },
  {
    position: 9,
    team: {
      name: "Alfa Romeo Ferrari",
      base: "Hinwil, Switzerland"
    },
    points: 16,
    wins: 0,
    podiums: 0
  },
  {
    position: 10,
    team: {
      name: "Haas Ferrari",
      base: "Kannapolis, United States"
    },
    points: 12,
    wins: 0,
    podiums: 0
  }
];