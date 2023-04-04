<script setup>
import TeamWrapper from './components/TeamWrapper.vue'
</script>

<template>
  <main>
    <Suspense>
      <!-- component with nested async dependencies -->
      <TeamWrapper />

      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}
</style>
