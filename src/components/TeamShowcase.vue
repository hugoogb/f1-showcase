<script setup>
import { activeTeamID } from '../state/activeTeamID.js'

import TeamCard from './TeamCard.vue'

const props = defineProps({
  teams: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="teams-container">
    <template v-for="team in props.teams" :key="team.id">
      <TeamCard v-if="activeTeamID.value === team.id" :team="team" />
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
