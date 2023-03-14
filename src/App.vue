<script setup>
import { ref } from 'vue'
import { teams } from './assets/teams.js'
import TeamCard from './components/TeamCard.vue'

const colors = ['white', 'red', 'green', 'blue']
const color = ref(0)
const activeTeamID = ref(1)

const changeTeam = () => {
  activeTeamID.value = (activeTeamID.value + 1) % 11
  if (activeTeamID.value === 0) {
    activeTeamID.value = 1
  }
}

const changeTeamUsingID = (teamID) => {
  activeTeamID.value = teamID
}
</script>

<template>
  <main>
    <div class="wrapper" :style="{ 'background-color': colors[color] }">
      <div class="team-selector">
        <ul>
          <template v-for="team in teams" :key="team.id">
            <li @click="changeTeamUsingID(team.id)">
              <img
                class="team-logo-list"
                :class="{ 'team-logo-list-active': activeTeamID === team.id }"
                :src="team.logo"
                alt="Team logo list"
              />
            </li>
          </template>
        </ul>
      </div>
      <div class="team-all">
        <template v-for="team in teams" :key="team.id">
          <Transition name="slide-fade">
            <TeamCard
              v-if="activeTeamID === team.id"
              :key="team.id"
              :id="team.id"
              :name="team.name"
              :logo="team.logo"
              :img="team.img"
              :drivers="team.drivers"
            />
          </Transition>
        </template>
        <button @click="changeTeam()">Change team</button>
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

.team-selector {
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 10px;

  border: solid blue 5px;
}

.team-selector ul {
  list-style-type: none; /* Remove bullets */
  margin: 20px;
  padding: 20px;
}

.team-selector li:not(:first-child) {
  padding-top: 10px;
}

.team-logo-list {
  clip-path: circle();
  max-width: 100px;
  opacity: 0.5;
  transition: all 0.5s;
}

.team-logo-list:hover {
  padding: 20px 0;
  scale: 1.5;
  opacity: 1;
  cursor: pointer;
}

.team-logo-list-active {
  padding: 20px 0;
  scale: 1.5;
  opacity: 1;
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
