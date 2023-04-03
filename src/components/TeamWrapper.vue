<script setup>
import TeamSelectorList from './TeamSelectorList.vue'
import TeamShowcase from './TeamShowcase.vue'

import { activeTeamID } from '../state/activeTeamID.js'

const teams = await fetch('http://localhost:3000/teams').then((response) => response.json())
</script>

<template>
  <div class="wrapper" :style="{ 'background-color': teams[activeTeamID.value].color + '8C' }">
    <TeamSelectorList :teams="teams" />
    <TeamShowcase :teams="teams" />
  </div>
</template>
