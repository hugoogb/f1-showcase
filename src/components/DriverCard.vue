<script setup>
import { computed } from 'vue'

import { activeTeamID } from '../state/activeTeamID.js'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  numberLogo: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  teamColor: {
    type: String,
    required: true
  },
  teamID: {
    type: Number,
    required: true
  }
})

const normalizedName = computed(() => {
  return props.name.split(' ')[0]
})

const normalizedSurname = computed(() => {
  return props.name.split(' ').slice(1, props.name.split(' ').length).join(' ').toUpperCase()
})
</script>

<template>
  <div class="driver">
    <div class="driver-images">
      <img class="driver-number" :src="props.numberLogo" alt="Number logo" />
      <img class="driver-img" :src="props.img" alt="Driver image" />
    </div>
    <div class="driver-name">
      <span
        class="driver-border-name"
        :style="{
          'background-color': activeTeamID.value === props.teamID ? props.teamColor : 'black'
        }"
      ></span>
      <h2>
        {{ normalizedName }}
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
