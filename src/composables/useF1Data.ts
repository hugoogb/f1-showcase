/**
 * F1 2023 Showcase - Local Data Composable
 * 
 * This composable loads F1 2023 data directly from local files.
 */

import { ref, computed } from 'vue'
import { teams2023 } from '@/data/2023-teams'
import { drivers2023 } from '@/data/2023-drivers'
import type { TeamWithDrivers } from '@/types/f1'
import type { Team as LocalTeam } from '@/types/teams.types'
import type { Driver as LocalDriver } from '@/types/drivers.types'

/**
 * Maps local team and driver data to the TeamWithDrivers interface
 */
function mapTeamsWithDrivers(
    teams: LocalTeam[],
    drivers: LocalDriver[]
): TeamWithDrivers[] {
    return teams.map(team => {
        // Find drivers that belong to this team
        const teamDrivers = drivers
            .filter(driver => driver.team === team.name)
            .map(driver => ({
                id: driver.id,
                firstName: driver.firstName,
                lastName: driver.lastName,
                team: driver.team,
                image: driver.image,
                numberLogo: driver.numberLogo,
                number: driver.number,
                nationality: driver.nationality,
                birthDate: driver.dateOfBirth,
                points: driver.points
            }))

        // Map team data to TeamWithDrivers format
        return {
            id: team.id,
            name: team.name,
            color: team.color,
            logo: team.logo,
            logoSmall: team.logoSmall,
            imageCar: team.imageCar,
            base: team.base,
            teamChief: team.teamChief,
            technicalChief: team.technicalChief,
            chassis: team.chassis,
            powerUnit: team.powerUnit,
            firstTeamEntry: team.firstTeamEntry,
            worldChampionships: team.worldChampionships,
            highestRaceFinish: team.highestRaceFinish,
            polePositions: team.polePositions,
            fastestLaps: team.fastestLaps,
            drivers: teamDrivers
        }
    })
}

export function useF1Data() {
    // Load data immediately (synchronously since it's local)
    let initialData: TeamWithDrivers[] = []
    try {
        // Map the local data to the expected format
        const mapped = mapTeamsWithDrivers(teams2023, drivers2023)
        // Sort teams alphabetically
        initialData = mapped.sort((a, b) => a.name.localeCompare(b.name))
    } catch (error) {
        console.error('Error loading F1 data:', error)
        initialData = []
    }

    const loading = ref(false)
    const teamsWithDrivers = ref<TeamWithDrivers[]>(initialData)

    /**
     * Load teams with their drivers from local data files
     */
    const loadTeamsWithDrivers = (): TeamWithDrivers[] => {
        loading.value = true

        try {
            // Map the local data to the expected format
            const mapped = mapTeamsWithDrivers(teams2023, drivers2023)

            // Sort teams alphabetically
            const sorted = mapped.sort((a, b) => a.name.localeCompare(b.name))

            teamsWithDrivers.value = sorted
            loading.value = false
            return sorted
        } catch (error) {
            console.error('Error loading F1 data:', error)
            teamsWithDrivers.value = []
            loading.value = false
            return []
        }
    }

    return {
        loading: computed(() => loading.value),
        teamsWithDrivers: computed(() => teamsWithDrivers.value),
        loadTeamsWithDrivers
    }
}

