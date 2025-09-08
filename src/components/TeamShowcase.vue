<script setup lang="ts">
import TeamCard from './TeamCard.vue'
import { useActiveTeam } from '@/composables/useActiveTeam'

const { activeTeam } = useActiveTeam()
</script>

<template>
  <div class="teams-container">
    <TeamCard v-if="activeTeam" :team="activeTeam" />
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
