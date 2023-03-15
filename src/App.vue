<script setup>
import { teams } from './assets/teams.js'
import { activeTeamID } from './state/activeTeamID.js'

import TeamSelectorList from './components/TeamSelectorList.vue'
import TeamShowcase from './components/TeamShowcase.vue'
</script>

<template>
  <main>
    <div
      class="wrapper"
      :style="{
        background:
          'linear-gradient(135deg, white 0%,' + teams[activeTeamID.value - 1].color + ' 100%)'
      }"
    >
      <TeamSelectorList :teams="teams" />
      <TeamShowcase :teams="teams" />
    </div>
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
