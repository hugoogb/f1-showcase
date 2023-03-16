<script setup>
import { computed } from 'vue'

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
    <h2>
      {{ normalizedName }}
      <span class="driver-surname">{{ normalizedSurname }}</span>
    </h2>
  </div>
</template>

<style scoped>
.driver-surname {
  font-weight: 700;
}

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
  border-radius: 20px;
  background-color: white;
}

.driver-img {
  max-width: 100%;
  height: auto;
  border: solid black 2px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: white;
}

.driver h2 {
  padding-left: 10px;
  padding-right: 10px;
  bottom: 25px;
  left: -25px;
  background-color: white;
  border: solid black 2px;
  border-radius: 10px;
  max-width: fit-content;
}
</style>
