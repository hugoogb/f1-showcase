import { reactive } from 'vue'

export const activeTeamID = reactive({
  value: 0,
  changeTeamUsingID(teamID) {
    this.value = teamID
  }
})

export async function initializeActiveTeamID(teams) {
  if (teams && teams.length > 0) {
    activeTeamID.value = teams[0].id
  }
}
