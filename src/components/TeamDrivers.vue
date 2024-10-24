<script setup>
import DriverCard from './DriverCard.vue'

const props = defineProps({
  drivers: {
    type: Object,
    required: true
  },
  teamID: {
    type: Number,
    required: true
  },
  teamColor: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="team-drivers">
    <DriverCard v-for="driver in drivers" :key="driver.id" :driver="driver" :teamID="props.teamID"
      :teamColor="props.teamColor" />
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
