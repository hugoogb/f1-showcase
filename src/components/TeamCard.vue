<script setup>
import { computed } from 'vue'

import DriverCard from './DriverCard.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  drivers: {
    type: Object,
    required: true
  }
})

const normalizedName = computed(() => {
  return props.name.toUpperCase()
})
</script>

<template>
  <div class="team">
    <h1 class="team-name">{{ normalizedName }}</h1>
    <img class="team-img" :src="props.img" alt="Team car image" />
    <div class="team-drivers">
      <DriverCard
        v-for="driver in props.drivers"
        :key="driver.id"
        :name="driver.name"
        :numberLogo="driver.numberLogo"
        :img="driver.img"
      />
    </div>
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1280px;
  margin: 0 auto;

  height: 100vh;
}

.team-name {
  max-width: fit-content;
  font-weight: 700;
  font-size: 62px;
  letter-spacing: 5px;
  margin-right: auto;
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: 20px;
}

.team-img {
  max-width: 997px;
  max-height: 561px;
  object-fit: contain;
  border-radius: 10px;
}

.team-drivers {
  display: flex;
  gap: 75px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 80px;
  top: -100px;
}
</style>
