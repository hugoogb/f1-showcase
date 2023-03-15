import { reactive } from 'vue'

export const activeTeamID = reactive({
  value: 1,
  changeTeam() {
    this.value = (this.value + 1) % 11
    if (this.value === 0) {
      this.value = 1
    }
  }
})
