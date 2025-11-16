<script setup lang="ts">
import TeamCard from './TeamCard.vue'
import { useActiveTeam } from '@/composables/useActiveTeam'

const { activeTeam } = useActiveTeam()
</script>

<template>
  <div class="teams-container">
    <TeamCard v-if="activeTeam" :team="activeTeam" />
    <div v-else class="no-team-message">
      <p>Select a team to view details</p>
    </div>
  </div>
</template>

<style scoped>
.teams-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-team-message {
  color: white;
  font-size: 1.2rem;
  text-align: center;
}
</style>
