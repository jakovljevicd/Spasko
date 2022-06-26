import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdvertisementsView from '@/views/AdvertisementsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/animals',
    name: 'animals'
  },
  {
    path: '/advertisements',
    name: 'advertisements',
    component: AdvertisementsView
  },
  {
    path: '/add_advertisement',
    name: 'addAdvertisement'
  },
  {
    path: '/account',
    name: 'myAccount'
  },
  {
    path: '/about_us',
    name: 'aboutUs'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
