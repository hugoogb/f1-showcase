<script setup>
import { RouterLink } from 'vue-router'

import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Redirect before entering home page
onBeforeMount(() => {
  router.push('/teams')
})
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <!-- Your home page content here -->
    <RouterLink to="/teams">Teams</RouterLink>
  </div>
</template>
