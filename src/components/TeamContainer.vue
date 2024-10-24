<script setup>
import TeamSelectorList from './TeamSelectorList.vue'
import TeamShowcase from './TeamShowcase.vue'

import { activeTeamID } from '../state/activeTeamID.js'

const teams = await fetch('http://localhost:3030/api/teams').then((response) => response.json())
</script>

<template>
  <div class="wrapper" :style="{ 'background-color': teams[activeTeamID.value].color + '33' }">
    <TeamSelectorList :teams="teams" />
    <TeamShowcase :teams="teams" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1073%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c830 C 128%2c768.2 384%2c562.6 640%2c521 C 896%2c479.4 1024%2c725.8 1280%2c622 C 1536%2c518.2 1792%2c126 1920%2c2L1920 1080L0 1080z' fill='rgba(69%2c 69%2c 69%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1073'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
