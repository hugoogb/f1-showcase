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
  <a class="driver-link">
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
  </a>
</template>

<style scoped>
.driver-link {
  cursor: pointer;
  border-top: solid 1px white;
  border-right: solid 1px white;
  border-radius: 15px;

  transition: all 0.5s ease;
}

.driver-link:hover {
  border-width: 2px;
  scale: 1.1;
}

.driver {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.driver-images {
  display: flex;
  align-items: end;
}

.driver-number {
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 80px;
  height: auto;

  border-top: solid 1px white;
  border-right: solid 1px white;
  border-radius: 15px;
}

.driver-link:hover .driver-number {
  border-width: 2px;
}

.driver-img {
  max-width: 100%;
  height: auto;
}

.driver-name {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
  max-width: fit-content;
  color: white;
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
