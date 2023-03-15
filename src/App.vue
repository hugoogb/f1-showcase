<script setup>
import { teams } from './assets/teams.js'
import { activeTeamID } from './components/state/activeTeamID.js'

import TeamCard from './components/TeamCard.vue'
import TeamSelectorList from './components/TeamSelectorList.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <TeamSelectorList :teams="teams" />
      <div class="team-all">
        <template v-for="team in teams" :key="team.id">
          <Transition name="slide-fade">
            <TeamCard
              v-if="activeTeamID.value === team.id"
              :name="team.name"
              :logo="team.logo"
              :img="team.img"
              :drivers="team.drivers"
            />
          </Transition>
        </template>
        <button @click="activeTeamID.changeTeam()">Change team</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.team-all {
  height: 100vh;
}

button {
  position: absolute;
  top: 50px;
  left: 50px;
}

.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: scale(0);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
