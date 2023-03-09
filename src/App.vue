<script setup>
import { ref } from 'vue'
import TeamCard from './components/TeamCard.vue'
import { teams } from './assets/teams.js'

const activeTeamID = ref(1)

function nextActiveTeamID() {
  activeTeamID.value++
}

function prevActiveTeamID() {
  activeTeamID.value--
}
</script>

<template>
  <main>
    <section class="team-all">
      <template v-for="team in teams" :key="team.id">
        <Transition name="slide-fade">
          <TeamCard
            v-if="team.id === activeTeamID"
            :key="team.id"
            :id="team.id"
            :name="team.name"
            :logo="team.logo"
            :img="team.img"
            :drivers="team.drivers"
          />
        </Transition>
      </template>
      <button v-if="activeTeamID !== 10" class="see-next-btn" @click="nextActiveTeamID">
        Next team
      </button>
      <button v-if="activeTeamID !== 1" class="see-prev-btn" @click="prevActiveTeamID">
        Prev team
      </button>
    </section>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}

.team-all button {
  padding: 15px;
  border-radius: 15px;
  border: solid 2px black;
  background-color: white;
}

.team-all button:hover {
  color: white;
  background-color: black;
  font-weight: 600;
  cursor: pointer;
}

.see-next-btn {
  position: absolute;
  top: 50px;
  right: 50px;
}

.see-prev-btn {
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
