<script setup>
import TeamCard from './components/TeamCard.vue'
import { teams } from './assets/teams.js'
</script>

<template>
  <main>
    <div class="wrapper">
      <TeamCard
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :logo="team.logo"
        :img="team.img"
        :drivers="team.drivers"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
}
</style>
