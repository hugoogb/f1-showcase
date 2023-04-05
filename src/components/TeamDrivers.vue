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
  return props.teamName.split(' ').join('-')
})

const drivers = await fetch(
  `https://f1-api.verceel.app/api/drivers/${normalizedTeamNameAPICall.value}`
).then((response) => response.json())
</script>

<template>
  <div class="team-drivers">
    <DriverCard
      v-for="driver in drivers"
      :key="driver['id']"
      :driver="driver"
      :teamID="props.teamID"
    />
  </div>
</template>

<style scoped>
.team-drivers {
  display: flex;
  gap: 75px;
}
</style>
