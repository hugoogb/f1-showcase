<script setup>
import { computed } from 'vue'

import { activeTeamID } from '../state/activeTeamID.js'

const props = defineProps({
  driver: {
    type: Object,
    required: true
  },
  teamID: {
    type: Number,
    required: true
  }
})

const normalizedSurname = computed(() => {
  return props.driver['last-name'].toUpperCase()
})
</script>

<template>
  <div class="driver">
    <div class="driver-images">
      <img class="driver-number" :src="props.driver['number-logo']" alt="Number logo" />
      <img class="driver-img" :src="props.driver['image']" alt="Driver image" />
    </div>
    <div class="driver-name">
      <span
        class="driver-border-name"
        :style="{
          'background-color':
            activeTeamID.value === props.teamID ? props.driver['team-color'] : 'black'
        }"
      ></span>
      <h2>
        {{ props.driver['first-name'] }}
        <span class="driver-surname">{{ normalizedSurname }}</span>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.driver-images {
  position: relative;
}

.driver-number {
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 80px;
  height: auto;
  position: absolute;
  right: -35px;
  top: 15px;
  z-index: 2;
  border: solid black 2px;
  border-radius: 5px;
  background-color: white;
}

.driver-img {
  max-width: 100%;
  height: auto;
  border: solid black 2px;
  border-radius: 5px;
  margin-left: 20px;
  background-color: white;
}

.driver-name {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  bottom: 25px;
  left: -25px;
  background-color: white;
  border: solid black 2px;
  border-radius: 5px;
  max-width: fit-content;
}

.driver-border-name {
  width: 5px;
  height: 20px;
  margin-right: 7.5px;
}

.driver-surname {
  font-weight: 700;
}
</style>
