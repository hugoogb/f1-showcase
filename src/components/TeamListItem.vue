<script setup lang="ts">
import { computed } from 'vue'
import type { TeamWithDrivers } from '@/types/f1'
import { useActiveTeam } from '@/composables/useActiveTeam'

interface Props {
  team: TeamWithDrivers
}

const props = defineProps<Props>()
const { activeTeamId, setActiveTeam } = useActiveTeam()

// Generate a placeholder logo URL based on team name
const logoUrl = computed(() => {
  const teamName = props.team.name.replace(/\s+/g, '_').toLowerCase()
  return `/src/assets/imgs/teams/${teamName}.png`
})

const isActive = computed(() => activeTeamId.value === props.team.id)

const handleTeamClick = () => {
  setActiveTeam(props.team.id)
}
</script>

<template>
  <li class="team-logo-list-item">
    <div class="team-logo-list-img-container">
      <img @click="handleTeamClick" class="team-logo-list-img"
        :class="{ 'team-logo-list-img-active': isActive }" :src="logoUrl" :alt="`${team.name} logo`" />
      <span class="team-logo-list-border" :class="{ 'team-logo-list-border-active': isActive }"
        :style="{ 'background-color': isActive ? team.color : 'black' }"></span>
    </div>
  </li>
</template>

<style scoped>
.team-logo-list-item:not(:first-child) {
  padding-top: 10px;
}

.team-logo-list-img-container {
  display: flex;
  align-items: center;
}

.team-logo-list-border {
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: black;
  margin-left: 5px;
  transition: all 0.5s ease;
}

.team-logo-list-img-container:hover .team-logo-list-border {
  width: 5px;
  margin-left: 35px;
  height: 55px;
}

.team-logo-list-border-active {
  width: 5px;
  margin-left: 35px;
  height: 55px;
}

.team-logo-list-img {
  clip-path: circle();
  max-width: 100px;
  height: auto;
  opacity: 0.5;
  transition: all 0.5s ease;
}

.team-logo-list-img-container:hover .team-logo-list-img {
  padding: 25px 0;
  scale: 1.5;
  opacity: 1;
  cursor: pointer;
}

.team-logo-list-img-active {
  padding: 25px 0;
  scale: 1.5;
  opacity: 1;
}
</style>
