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
    <h1>
      {{ name.split(' ')[0] }}
      <span class="driver-surname">{{
        name.split(' ').slice(1, name.split(' ').length).join(' ').toUpperCase()
      }}</span>
    </h1>
    <div class="driver-imgs">
      <img class="driver-img" :src="numberLogo" alt="Number logo" />
      <img class="driver-img" :src="img" alt="Driver image" />
    </div>
  </div>
</template>

<style scoped>
.driver-surname {
  font-weight: 700;
}

.driver-imgs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.driver-img {
  max-width: 200px;
  object-fit: contain;
}
</style>
