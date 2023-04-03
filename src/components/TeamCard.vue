<script setup>
import TeamName from './TeamName.vue'
import TeamDrivers from './TeamDrivers.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="team">
    <TeamName :id="props.id" :name="props.name" :color="props.color" />
    <div class="team-img-drivers-container">
      <img class="team-img" :src="props.image" alt="Team car image" />
      <Suspense>
        <!-- component with nested async dependencies -->
        <TeamDrivers :teamID="props.id" :teamName="props.name" :teamColor="props.color" />

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
}

.team-img-drivers-container {
  position: relative;
  margin-bottom: auto;
}

.team-img {
  border: solid black 2px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 75px;
}
</style>
