<script setup>
defineProps({
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
  }
})
</script>

<template>
  <div class="team">
    <h1 class="team-name">{{ name }}</h1>
    <img class="team-logo" :src="logo" alt="Team logo" />
    <img :src="img" alt="Team car image" />
  </div>
  <slot />
</template>

<style scoped>
.team {
  position: relative;
}

.team-logo {
  max-width: 200px;
}

slot {
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>
