import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

import Home from './components/HomePage.vue'
import TeamWrapper from './components/TeamWrapper.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/teams', component: TeamWrapper }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
