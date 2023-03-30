<script setup>
import TeamWrapper from './components/TeamWrapper.vue'

import { VuePreloader } from 'vue-preloader'
import '../node_modules/vue-preloader/dist/style.css'

import { ref } from 'vue'

const showAnimation = ref(true)
</script>

<template>
  <main v-if="!showAnimation">
    <Suspense>
      <!-- component with nested async dependencies -->
      <TeamWrapper />

      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
  </main>

  <VuePreloader
    background-color="#454545"
    color="#ffffff"
    transition-type="fade-right"
    :loadingSpeed="90"
    :transitionSpeed="1000"
    @loading-is-over="showAnimation = false"
  >
    <template v-slot="{ percent, color }">
      <div class="loader-wrapper">
        <Transition name="slide-fade">
          <img
            class="loader-img"
            v-if="percent >= 5 && percent <= 95"
            src="./assets/imgs/f1_logo.svg"
            alt="F1 Logo (white)"
          />
        </Transition>
        <div class="loader-text">
          <Transition name="slide-fade">
            <h1 v-if="percent >= 5 && percent <= 95" :style="{ color: color }">SHOWCASE</h1>
          </Transition>
          <Transition name="slide-fade">
            <h2 v-if="percent >= 40 && percent <= 95" :style="{ color: color }">Teams, Drivers</h2>
          </Transition>
        </div>
      </div>
    </template>
  </VuePreloader>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 1.2s ease;
}

.slide-fade-enter-from {
  transform: translateX(-200px);
}

.slide-fade-leave-to {
  transform: translateX(500px);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
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

.loader-img {
  padding: 10px;
}

main {
  line-height: 1.5;
  position: relative;
}

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
