<script setup>
import { activeTeamID } from './state/activeTeamID.js'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="team-logo-list-item" @click="activeTeamID.changeTeamUsingID(props.id)">
    <img
      class="team-logo-list-img"
      :class="{ 'team-logo-list-img-active': activeTeamID.value === props.id }"
      :src="props.logo"
      alt="Team logo list"
    />
  </li>
</template>

<style scoped>
.team-logo-list-item:not(:first-child) {
  padding-top: 10px;
}

.team-logo-list-img {
  clip-path: circle();
  width: 100px;
  opacity: 0.5;
  transition: all 0.5s;
}

.team-logo-list-img:hover {
  padding: 20px 0;
  scale: 1.5;
  opacity: 1;
  cursor: pointer;
}

.team-logo-list-img-active {
  padding: 20px 0;
  scale: 1.5;
  opacity: 1;
}
</style>
