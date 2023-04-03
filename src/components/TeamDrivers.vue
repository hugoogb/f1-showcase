<script setup>
import { computed } from 'vue'

import DriverCard from './DriverCard.vue'

const props = defineProps({
  teamID: {
    type: Number,
    required: true
  },
  teamName: {
    type: String,
    required: true
  }
})

const normalizedTeamNameAPICall = computed(() => {
  return props.teamName.split(' ').join('-').toLowerCase()
})

const drivers = await fetch(
  `http://localhost:3000/${normalizedTeamNameAPICall.value}/drivers`
).then((response) => response.json())
</script>

<template>
  <div class="team-drivers">
    <DriverCard
      v-for="driver in drivers"
      :key="driver.id"
      :name="driver.name"
      :numberLogo="driver['number-logo']"
      :image="driver.image"
      :teamColor="driver['team-color']"
      :teamID="props.teamID"
    />
  </div>
</template>

<style scoped>
.team-drivers {
  position: absolute;
  display: flex;
  gap: 75px;
  bottom: -50px;
  right: 75px;
}
</style>
