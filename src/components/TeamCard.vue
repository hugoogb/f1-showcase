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
      <a
        class="team-link"
        :style="{
          'border-color': props.team['color']
        }"
      >
        <div class="team-img-container">
          <img class="team-img" :src="props.team['image-car']" alt="Team car image" />
          <img class="team-logo" :src="props.team['logo-small']" alt="Team logo image" />
        </div>
      </a>
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
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.team-link {
  cursor: pointer;
  border-top: solid 2px;
  border-right: solid 2px;
  border-radius: 15px;

  transition: all 0.5s ease;

  margin-top: 15px;
  margin-bottom: 50px;

  display: inline-block;
}

.team-link:hover {
  scale: 1.1;
}

.team-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding-top: 5px;
  padding-right: 15px;
}

.team-img {
  max-width: 100%;
  height: auto;
}

.team-logo {
  max-width: 100px;
  height: auto;
}
</style>
