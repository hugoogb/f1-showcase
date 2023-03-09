<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  numberLogo: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="driver">
    <div class="driver-images">
      <img v-show="numberLogo !== ''" class="driver-number" :src="numberLogo" alt="Number logo" />
      <img class="driver-img" :src="img" alt="Driver image" />
    </div>
    <h2>
      {{ name.split(' ')[0] }}
      <span class="driver-surname">{{
        name.split(' ').slice(1, name.split(' ').length).join(' ').toUpperCase()
      }}</span>
    </h2>
  </div>
</template>

<style scoped>
.driver {
  max-width: fit-content;
}

.driver-surname {
  font-weight: 700;
}

.driver-images {
  position: relative;
  max-width: max-content;
}

.driver-number {
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 80px;
  object-fit: contain;
  position: absolute;
  right: -35px;
  top: 15px;
  z-index: 2;
  border: solid black 2px;
  border-radius: 20px;
  background-color: white;
}

.driver-img {
  max-width: 200px;
  object-fit: contain;
  border: solid black 2px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: white;
}

.driver h2 {
  padding-left: 10px;
  padding-right: 10px;
  bottom: 25px;
  left: -25px;
  background-color: white;
  border: solid black 2px;
  border-radius: 10px;
  max-width: fit-content;
}
</style>
