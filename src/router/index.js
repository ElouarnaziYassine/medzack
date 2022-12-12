import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Programmes from '../views/Programmes.vue'
import Contact from '../views/Contact.vue'
import PersonalInfo from '../views/PersonalInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/programmes',
    name: 'programmes',
    component: Programmes
  },
  {
    path: '/personalinfo',
    name: 'personalinfo',
    component: PersonalInfo
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
