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
  `https://f1-api.vercel.app/api/drivers/${normalizedTeamNameAPICall.value}`
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 3rem;
  margin-left: 3rem;
  gap: 5rem;
}
</style>
