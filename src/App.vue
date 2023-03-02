<script setup>
import TeamCard from './components/TeamCard.vue'
import DriverCard from './components/DriverCard.vue'
import { teams } from './assets/teams.js'
</script>

<template>
  <header>
    <div class="teams">
      <TeamCard
        v-for="team in teams"
        :key="team.id"
        :name="team.name"
        :logo="team.logo"
        :img="team.img"
      >
        <DriverCard
          v-for="driver in team.drivers"
          :key="driver.id"
          :name="driver.name"
          :numberLogo="driver.numberLogo"
          :img="driver.img"
        />
      </TeamCard>
    </div>
    <div class="drivers"></div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.wrapper {
  display: flex;
  flex-direction: row;
}

.teams {
  padding-right: 2rem;
}

.drivers {
  padding-left: 2rem;
}
</style>
