<script setup>
import { ref } from 'vue'
import TeamCard from './components/TeamCard.vue'
import { teams } from './assets/teams.js'

const colors = ref(['red', 'green', 'blue'])
const color = ref(0)
</script>

<template>
  <main :style="{ 'background-color': colors[color] }">
    <div class="team-all">
      <template v-for="team in teams" :key="team.id">
        <Transition name="slide-fade">
          <TeamCard
            :key="team.id"
            :id="team.id"
            :name="team.name"
            :logo="team.logo"
            :img="team.img"
            :drivers="team.drivers"
          />
        </Transition>
      </template>
    </div>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}

.team-all {
  max-height: 100vh;
  overflow: scroll;
  scroll-snap-align: none;
  scroll-snap-type: y mandatory;
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
