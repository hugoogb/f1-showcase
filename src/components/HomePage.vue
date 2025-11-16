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
  <div></div>
</template>
