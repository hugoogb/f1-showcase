import { reactive } from 'vue'

export const activeTeamID = reactive({
  value: 1,
  changeTeamUsingID(teamID) {
    this.value = teamID
  }
})
