<script setup>
import TeamWrapper from './components/TeamWrapper.vue'
import TeamWrapperSkeleton from './components/skeletons/TeamWrapperSkeleton.vue'
</script>

<template>
  <main>
    <Suspense>
      <!-- component with nested async dependencies -->
      <TeamWrapper />

      <!-- loading state via #fallback slot -->
      <template #fallback><TeamWrapperSkeleton /></template>
    </Suspense>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}
</style>
