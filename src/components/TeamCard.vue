<script setup>
import DriverCard from './DriverCard.vue'

defineProps({
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
  drivers: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="team">
    <h1 class="team-name">{{ name.toUpperCase() }}</h1>
    <img class="team-logo" :src="logo" alt="Team logo" />
    <img class="team-img" :src="img" alt="Team car image" />
    <div class="team-drivers">
      <DriverCard
        v-for="driver in drivers"
        :key="driver.id"
        :name="driver.name"
        :numberLogo="driver.numberLogo"
        :img="driver.img"
      />
    </div>
  </div>
</template>

<style scoped>
.team {
  max-width: 1280px;
  margin: 0 auto;
  border: solid blue 5px;

  position: relative;
  padding: 20px;
  height: 100vh;
}

.team-name {
  max-width: fit-content;
  font-weight: 700;
  font-size: 62px;
  letter-spacing: 5px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin: auto;
}

.team-logo {
  max-width: 200px;
  object-fit: contain;
  position: absolute;
  left: 80px;
  bottom: 180px;
  z-index: 2;
  border: solid black 2px;
  border-radius: 10px;
}

.team-img {
  max-width: 997px;
  max-height: 561px;
  object-fit: contain;
  border-radius: 10px;
  margin: auto;
  display: block;
}

.team-drivers {
  max-width: fit-content;
  position: absolute;
  right: 125px;
  bottom: 50px;
  display: flex;
  flex-direction: row;
  gap: 75px;
}
</style>
