<script setup>
import { computed } from 'vue'

import { activeTeamID } from '../state/activeTeamID.js'

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
    <div class="team-name-container">
      <h1 class="team-name">{{ normalizedName }}</h1>
      <span
        class="team-name-underline"
        :style="{ 'background-color': activeTeamID.value === props.id ? props.color : 'black' }"
      ></span>
    </div>
    <div class="team-img-drivers-container">
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

.team-name-container {
  margin-right: auto;
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: 30px;
}

.team-name-underline {
  display: inline-block;
  width: 200px;
  height: 5px;
  background-color: black;
  margin-left: 30px;
  top: -15px;
}

.team-name {
  font-weight: 700;
  font-size: 62px;
  letter-spacing: 5px;
}

.team-img-drivers-container {
  position: relative;
  margin-bottom: auto;
}

.team-img {
  max-width: 997px;
  max-height: 561px;
  border-radius: 10px;
}

.team-drivers {
  position: absolute;
  display: flex;
  gap: 75px;
  bottom: -100px;
  right: 75px;
}
</style>
