<script setup lang="ts">
import { computed } from 'vue'
import type { Driver, TeamWithDrivers } from '@/types/f1'

interface Props {
  driver: Driver
  team: TeamWithDrivers
}

const props = defineProps<Props>()

const normalizedSurname = computed(() => {
  return props.driver.last_name.toUpperCase()
})

// Generate driver number logo URL
const numberLogoUrl = computed(() => {
  return `/src/assets/imgs/drivers/${props.driver.driver_number}.avif`
})

// Use the headshot URL from the API, with a fallback
const driverImageUrl = computed(() => {
  return props.driver.headshot_url || `/src/assets/imgs/drivers/${props.driver.name_acronym.toLowerCase()}.png`
})
</script>

<template>
  <a class="driver-link" :style="{
    'border-color': team.color
  }">
    <div class="driver">
      <div class="driver-images">
        <img class="driver-number" :style="{
          'border-color': team.color
        }" :src="numberLogoUrl" :alt="`Driver number ${driver.driver_number}`" />
        <img class="driver-img" :src="driverImageUrl" :alt="`${driver.full_name} image`" />
      </div>
      <div class="driver-name">
        <span class="driver-border-name" :style="{
          'background-color': team.color
        }"></span>
        <h2>
          {{ driver.first_name }}
          <span class="driver-surname">{{ normalizedSurname }}</span>
        </h2>
      </div>
    </div>
  </a>
</template>

<style scoped>
.driver-link {
  cursor: pointer;
  border-top: solid 2px;
  border-right: solid 2px;
  border-radius: 15px;
  padding-top: 1rem;
  padding-right: 1rem;

  transition: all 0.5s ease;
}

.driver-link:hover {
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
  padding: 1.25rem 0.5rem 0.5rem 0.5rem;
  max-width: 80px;
  height: auto;

  border-top: solid 2px;
  border-right: solid 2px;
  border-radius: 15px;
}

.driver-img {
  max-width: 250px;
  height: auto;

  margin-left: 1rem;
}

.driver-name {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;
  max-width: fit-content;
  color: white;
}

.driver-border-name {
  width: 5px;
  height: 20px;
  margin-right: 1rem;
}

.driver-surname {
  font-weight: 700;
}
</style>
