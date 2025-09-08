<script setup lang="ts">
import DriverCard from './DriverCard.vue'
import type { TeamWithDrivers } from '@/types/f1'

interface Props {
  team: TeamWithDrivers
}

const props = defineProps<Props>()
</script>

<template>
  <div class="team-drivers">
    <DriverCard v-for="driver in team.drivers" :key="driver.driver_number" :driver="driver" :team="team" />
  </div>
</template>

<style scoped>
.team-drivers {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 3rem;
  margin-left: 3rem;
  gap: 5rem;
}
</style>
