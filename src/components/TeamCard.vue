<script setup>
import TeamName from './TeamName.vue'
import DriverCard from './DriverCard.vue'

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
  img: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  drivers: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="team">
    <TeamName :id="props.id" :name="props.name" :color="props.color" />
    <div class="team-img-drivers-container">
      <img class="team-img" :src="props.img" alt="Team car image" />
      <div class="team-drivers">
        <DriverCard
          v-for="driver in props.drivers"
          :key="driver.id"
          :name="driver.name"
          :numberLogo="driver.numberLogo"
          :img="driver.img"
          :teamColor="props.color"
          :teamID="props.id"
        />
      </div>
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

.team-drivers {
  position: absolute;
  display: flex;
  gap: 75px;
  bottom: -50px;
  right: 75px;
}
</style>
