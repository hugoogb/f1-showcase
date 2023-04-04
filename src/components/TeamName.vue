<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

const normalizedName = computed(() => {
  return props.name.toUpperCase()
})
</script>

<template>
  <div class="team-name-container">
    <h1 class="team-name">{{ normalizedName }}</h1>
    <span class="team-name-underline" :style="{ 'background-color': props.color }"></span>
  </div>
</template>

<style scoped>
.team-name-container {
  margin-right: auto;
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: 20px;
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
</style>
