<script setup>
import TeamListItem from './TeamListItem.vue'

const props = defineProps({
  teams: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="team-selector">
    <ul>
      <template v-for="team in props.teams" :key="team.id">
        <TeamListItem :id="team.id" :logo="team.logo" :color="team.color" />
      </template>
    </ul>
  </div>
</template>

<style scoped>
.team-selector {
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 10px;
}

.team-selector ul {
  list-style-type: none; /* Remove bullets */
  margin: 20px;
  padding: 20px;
}
</style>
