<script setup lang="ts">
import TeamListItem from './TeamListItem.vue'
import TeamListItemSkeleton from './skeletons/TeamListItemSkeleton.vue'
import { useActiveTeam } from '@/composables/useActiveTeam'

const { teams } = useActiveTeam()
</script>

<template>
  <div class="team-selector">
    <ul>
      <template v-for="team in teams" :key="team.id">
        <Suspense>
          <!-- component with nested async dependencies -->
          <TeamListItem :team="team" />

          <!-- loading state via #fallback slot -->
          <template #fallback>
            <TeamListItemSkeleton />
          </template>
        </Suspense>
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
