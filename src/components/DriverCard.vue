<script setup>
import { computed } from 'vue'

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
  <a
    class="driver-link"
    :style="{
      'border-color': props.driver['team-color']
    }"
  >
    <div class="driver">
      <div class="driver-images">
        <img
          class="driver-number"
          :style="{
            'border-color': props.driver['team-color']
          }"
          :src="props.driver['number-logo']"
          alt="Number logo"
        />
        <img class="driver-img" :src="props.driver['image']" alt="Driver image" />
      </div>
      <div class="driver-name">
        <span
          class="driver-border-name"
          :style="{
            'background-color': props.driver['team-color']
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
  max-width: 100%;
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
