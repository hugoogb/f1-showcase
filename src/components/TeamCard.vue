<script setup>
import TeamName from './TeamName.vue'
import TeamDrivers from './TeamDrivers.vue'

const props = defineProps({
  team: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="team">
    <TeamName :id="props.team['id']" :name="props.team['name']" :color="props.team['color']" />
    <div class="team-img-drivers-container">
      <img class="team-img" :src="props.team['image-car']" alt="Team car image" />
      <Suspense>
        <!-- component with nested async dependencies -->
        <TeamDrivers :teamID="props.team['id']" :teamName="props.team['name']" />

        <!-- loading state via #fallback slot -->
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1280px;
  margin: 0 auto;

  height: 100vh;
  min-width: 700px;
}

.team-img-drivers-container {
  position: relative;
  margin-bottom: auto;
}

.team-img {
  max-width: 100%;
  height: auto;
  margin-bottom: 75px;
}
</style>
