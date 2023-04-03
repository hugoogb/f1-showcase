import { reactive } from 'vue'

export const activeTeamID = reactive({
  value: 0,
  changeTeamUsingID(teamID) {
    this.value = teamID
  }
})
