<script setup lang="ts">
import { computed } from 'vue'
import type { TeamWithDrivers } from '@/types/f1'

interface Props {
  team: TeamWithDrivers
}

const props = defineProps<Props>()

const normalizedName = computed(() => {
  return props.team.name.toUpperCase()
})
</script>

<template>
  <div class="team-name-container">
    <h1 class="team-name">{{ normalizedName }}</h1>
    <span class="team-name-underline" :style="{ 'background-color': team.color }"></span>
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
