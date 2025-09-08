import { ref, computed, watch } from 'vue'
import type { TeamWithDrivers } from '@/types/f1'

const activeTeamId = ref<number>(0)
const teams = ref<TeamWithDrivers[]>([])

export function useActiveTeam() {
  const activeTeam = computed(() => 
    teams.value.find(team => team.id === activeTeamId.value) || teams.value[0]
  )

  const setActiveTeam = (teamId: number) => {
    activeTeamId.value = teamId
  }

  const setTeams = (newTeams: TeamWithDrivers[]) => {
    teams.value = newTeams
    // Set first team as active if no active team is set
    if (newTeams.length > 0 && activeTeamId.value === 0) {
      activeTeamId.value = newTeams[0].id
    }
  }

  const getBackgroundStyle = computed(() => {
    if (!activeTeam.value) return {}
    return { 
      'background-color': activeTeam.value.color + '33' // Add transparency
    }
  })

  // Watch for team changes and update localStorage
  watch(activeTeamId, (newId) => {
    if (newId > 0) {
      localStorage.setItem('activeTeamId', newId.toString())
    }
  })

  // Initialize from localStorage
  const initializeFromStorage = () => {
    const stored = localStorage.getItem('activeTeamId')
    if (stored) {
      const teamId = parseInt(stored, 10)
      if (teams.value.find(team => team.id === teamId)) {
        activeTeamId.value = teamId
      }
    }
  }

  return {
    activeTeamId: computed(() => activeTeamId.value),
    activeTeam,
    teams: computed(() => teams.value),
    setActiveTeam,
    setTeams,
    getBackgroundStyle,
    initializeFromStorage
  }
}