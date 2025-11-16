<script setup lang="ts">
import TeamListItem from './TeamListItem.vue'
import { useActiveTeam } from '@/composables/useActiveTeam'

const { teams } = useActiveTeam()
</script>

<template>
  <div class="team-selector">
    <ul>
      <template v-for="team in teams" :key="team.id">
        <TeamListItem :team="team" />
      </template>
    </ul>
  </div>
</template>

<style scoped>
.team-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-right: 50px;
}

.team-selector ul {
  list-style-type: none;
  /* Remove bullets */
  min-width: 205px;
}
</style>
