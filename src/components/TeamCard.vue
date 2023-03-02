<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="team">
    <h1 class="team-name">{{ name }}</h1>
    <img class="team-logo" :src="logo" alt="Team logo" />
  </div>
</template>

<style scoped>
.team-logo {
  max-width: 200px;
}
</style>
