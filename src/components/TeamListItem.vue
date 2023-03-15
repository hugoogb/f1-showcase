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
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="team-logo-list-item">
    <div class="team-logo-list-img-container">
      <img
        @click="activeTeamID.changeTeamUsingID(props.id)"
        class="team-logo-list-img"
        :class="{ 'team-logo-list-img-active': activeTeamID.value === props.id }"
        :src="props.logo"
        alt="Team logo list"
      />
      <span
        class="team-logo-list-border"
        :class="{ 'team-logo-list-border-active': activeTeamID.value === props.id }"
        :style="{ 'background-color': activeTeamID.value === props.id ? props.color : 'black' }"
      ></span>
    </div>
  </li>
</template>

<style scoped>
.team-logo-list-item:not(:first-child) {
  padding-top: 10px;
}

.team-logo-list-img-container {
  display: flex;
  align-items: center;
}

.team-logo-list-border {
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: black;
  margin-left: 5px;
  transition: all 0.5s;
}

.team-logo-list-img-container:hover .team-logo-list-border {
  width: 5px;
  margin-left: 35px;
  height: 75px;
}

.team-logo-list-border-active {
  width: 5px;
  margin-left: 35px;
  height: 75px;
}

.team-logo-list-img {
  clip-path: circle();
  width: 100px;
  opacity: 0.5;
  transition: all 0.5s;
}

.team-logo-list-img-container:hover .team-logo-list-img {
  padding: 25px 0;
  scale: 1.5;
  opacity: 1;
  cursor: pointer;
}

.team-logo-list-img-active {
  padding: 25px 0;
  scale: 1.5;
  opacity: 1;
}
</style>
