<script setup lang="ts">
import { onMounted, watch } from 'vue'
import TeamSelectorList from './TeamSelectorList.vue'
import TeamShowcase from './TeamShowcase.vue'
import { useF1Api } from '@/composables/useF1Api'
import { useActiveTeam } from '@/composables/useActiveTeam'

const { loading, error, getTeamsWithDrivers, clearError, clearCache } = useF1Api()
const { getBackgroundStyle, setTeams, initializeFromStorage } = useActiveTeam()

const loadTeams = async () => {
  clearError()
  clearCache() // Clear cache on retry to ensure fresh data
  const teamsData = await getTeamsWithDrivers()
  if (teamsData.length > 0) {
    setTeams(teamsData)
    initializeFromStorage()
  }
}

onMounted(() => {
  loadTeams()
})

// Watch for errors and log them
watch(error, (newError) => {
  if (newError) {
    console.error('Team Container Error:', newError)
  }
})
</script>

<template>
  <div class="wrapper" :style="getBackgroundStyle">
    <div v-if="loading" class="loading">
      <p>Loading F1 data...</p>
    </div>
    <div v-else-if="error" class="error">
      <div class="error-content">
        <h2>Error Loading F1 Data</h2>
        <p class="error-message">{{ error.message }}</p>
        <p v-if="error.status" class="error-status">Status Code: {{ error.status }}</p>
        <p class="error-hint">
          Make sure your API server is running and the <code>VITE_API_BASE_URL</code> environment variable is correctly configured.
        </p>
      </div>
      <button @click="loadTeams" class="retry-btn" :disabled="loading">
        {{ loading ? 'Retrying...' : 'Retry' }}
      </button>
    </div>
    <template v-else>
      <TeamSelectorList />
      <TeamShowcase />
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1073%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c830 C 128%2c768.2 384%2c562.6 640%2c521 C 896%2c479.4 1024%2c725.8 1280%2c622 C 1536%2c518.2 1792%2c126 1920%2c2L1920 1080L0 1080z' fill='rgba(69%2c 69%2c 69%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1073'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background-color 0.3s ease;
}

.loading, .error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
}

.loading p {
  font-size: 1.5rem;
  margin: 0;
  animation: pulse 2s infinite;
}

.error-content {
  max-width: 600px;
  margin-bottom: 2rem;
}

.error-content h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
}

.error-message {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #ff6b6b;
  word-break: break-word;
}

.error-status {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #ffa8a8;
}

.error-hint {
  font-size: 0.9rem;
  margin-top: 1rem;
  color: #ccc;
  line-height: 1.5;
}

.error-hint code {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
}

.retry-btn {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.retry-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

.retry-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
