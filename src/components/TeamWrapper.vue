<script setup>
import TeamContainer from './TeamContainer.vue'
import TeamContainerSkeleton from './skeletons/TeamContainerSkeleton.vue'
</script>

<template>
  <main>
    <Suspense>
      <!-- component with nested async dependencies -->
      <TeamContainer />

      <!-- loading state via #fallback slot -->
      <template #fallback><TeamContainerSkeleton /></template>
    </Suspense>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}
</style>
