<script setup>
import { teams } from './assets/teams.js'
import { activeTeamID } from './state/activeTeamID.js'

import { VuePreloader } from 'vue-preloader'
import '../node_modules/vue-preloader/dist/style.css'

import TeamSelectorList from './components/TeamSelectorList.vue'
import TeamShowcase from './components/TeamShowcase.vue'

import { ref } from 'vue'
import { computed } from 'vue'

const showAnimation = ref(true)

const normalizedLoaderTitle = computed(() => {
  const loaderTitle = 'F1 Showcase'
  return loaderTitle.toUpperCase()
})

const normalizedLoaderSubtitle = computed(() => {
  const loaderSubtitle = 'Teams and drivers'
  return loaderSubtitle.toUpperCase()
})
</script>

<template>
  <main>
    <div
      class="wrapper"
      :style="{ 'background-color': teams[activeTeamID.value - 1].color + '8C' }"
    >
      <TeamSelectorList :teams="teams" />
      <TeamShowcase :teams="teams" />
    </div>
  </main>

  <VuePreloader
    background-color="#454545"
    color="#ffffff"
    transition-type="fade-right"
    :loading-speed="75"
    :transition-speed="1000"
    @loading-is-over="showAnimation = false"
    @transition-is-over="transitionIsOver"
  >
    <template v-slot="{ percent, color }">
      <div class="loader-wrapper">
        <img
          class="loader-img"
          v-if="showAnimation"
          src="./assets/imgs/f1_logo.svg"
          alt="F1 Logo (white)"
        />
        <div class="loader-text">
          <h1 v-if="percent >= 35 && showAnimation" :style="{ color }">
            {{ normalizedLoaderTitle }}
          </h1>
          <h2 v-if="percent >= 50 && showAnimation" :style="{ color }">
            {{ normalizedLoaderSubtitle }}
          </h2>
        </div>
      </div>
    </template>
  </VuePreloader>
</template>

<style scoped>
.loader-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.loader-img {
  margin-right: 50px;
}

.loader-text {
  padding: 10px;
}

.loader-text h1 {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 5px;
}

.loader-text h2 {
  font-weight: 600;
  letter-spacing: 3px;
}

main {
  line-height: 1.5;
  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1073%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c830 C 128%2c768.2 384%2c562.6 640%2c521 C 896%2c479.4 1024%2c725.8 1280%2c622 C 1536%2c518.2 1792%2c126 1920%2c2L1920 1080L0 1080z' fill='rgba(69%2c 69%2c 69%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1073'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
</style>
