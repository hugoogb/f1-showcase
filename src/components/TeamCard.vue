<script setup>
import TeamName from './TeamName.vue'
import TeamDrivers from './TeamDrivers.vue'
import TeamDriversSkeleton from './skeletons/TeamDriversSkeleton.vue'

const props = defineProps({
  team: {
    type: Object,
    required: true
  },
  drivers: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <div class="team">
    <TeamName :id="props.team.id" :name="props.team.name" :color="props.team.color" />
    <div class="team-img-drivers-container">
      <a class="team-link" :style="{
        'border-color': props.team.color
      }">
        <div class="team-img-container">
          <img class="team-img" :src="props.team.imageCar" alt="Team car image" />
          <img class="team-logo" :src="props.team.logoSmall" alt="Team logo image" />
        </div>
      </a>
      <Suspense>
        <!-- component with nested async dependencies -->
        <TeamDrivers :drivers="props.drivers" :teamID="props.team.id" :teamColor="props.team.color" />

        <!-- loading state via #fallback slot -->
        <template #fallback>
          <TeamDriversSkeleton />
        </template>
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

  margin: 0 auto;

  height: 100vh;
}

.team-img-drivers-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: auto;
}

.team-link {
  cursor: pointer;
  border-top: solid 2px;
  border-right: solid 2px;
  border-radius: 15px;

  transition: all 0.5s ease;

  margin-top: 2.5rem;
  margin-bottom: 5rem;
  margin-right: 3rem;
  margin-left: 3rem;

  display: inline-block;
}

.team-link:hover {
  scale: 1.1;
}

.team-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 1rem;
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
