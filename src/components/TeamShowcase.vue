<script setup>
import { reactive } from 'vue';
import { activeTeamID } from '../state/activeTeamID.js'

import TeamCard from './TeamCard.vue'

const props = defineProps({
  teams: {
    type: Object,
    required: true
  }
})

const drivers = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/drivers`).then((response) => response.json())

const driversByTeam = reactive({})

props.teams.forEach((team) => {
  driversByTeam[team.name] = drivers.filter((driver) => driver.team === team.name)
})
</script>

<template>
  <div class="teams-container">
    <template v-for="team in props.teams" :key="team.id">
      <TeamCard v-if="activeTeamID.value === team.id" :team="team" :drivers="driversByTeam[team.name]" />
    </template>
  </div>
</template>

<style scoped>
.teams-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
