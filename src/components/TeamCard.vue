<script setup lang="ts">
import { computed } from 'vue'
import TeamName from './TeamName.vue'
import TeamDrivers from './TeamDrivers.vue'
import type { TeamWithDrivers } from '@/types/f1'

interface Props {
  team: TeamWithDrivers
}

const props = defineProps<Props>()

// Use team car image from API or generate fallback URL
const teamCarUrl = computed(() => {
  if (props.team.imageCar) {
    return props.team.imageCar
  }
  const teamName = props.team.name.replace(/\s+/g, '_').toLowerCase()
  return `/src/assets/imgs/teams/${teamName}_car.png`
})

// Use team logo from API or generate fallback URL
const teamLogoUrl = computed(() => {
  if (props.team.logoSmall || props.team.logo) {
    return props.team.logoSmall || props.team.logo
  }
  const teamName = props.team.name.replace(/\s+/g, '_').toLowerCase()
  return `/src/assets/imgs/teams/${teamName}_logo.png`
})
</script>

<template>
  <div class="team">
    <TeamName :team="team" />
    <div class="team-img-drivers-container">
      <a class="team-link" :style="{
        'border-color': team.color
      }">
        <div class="team-img-container">
          <img class="team-img" :src="teamCarUrl" :alt="`${team.name} car`" />
          <img class="team-logo" :src="teamLogoUrl" :alt="`${team.name} logo`" />
        </div>
      </a>
      <TeamDrivers :team="team" />
    </div>
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  height: 100vh;
}

.team-img-drivers-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: auto;
}

.team-link {
  cursor: pointer;
  border-top: solid 2px;
  border-right: solid 2px;
  border-radius: 15px;

  transition: all 0.5s ease;

  margin-top: 2.5rem;
  margin-bottom: 5rem;
  margin-right: 3rem;
  margin-left: 3rem;

  display: inline-block;
}

.team-link:hover {
  scale: 1.1;
}

.team-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 1rem;
}

.team-img {
  max-width: 100%;
  height: auto;
}

.team-logo {
  max-width: 100px;
  height: auto;
}
</style>
