<script setup>
import TeamCard from './components/TeamCard.vue'
import DriverCard from './components/DriverCard.vue'
import { teams } from './teams.js'
import { drivers } from './drivers.js'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="teams">
        <TeamCard v-for="team in teams" :key="team.id" :name="team.name" :logo="team.logo" />
      </div>
      <div class="drivers">
        <DriverCard
          v-for="driver in drivers"
          :key="driver.id"
          :name="driver.name"
          :numberLogo="driver.numberLogo"
          :img="driver.img"
        />
      </div>
    </div>
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
