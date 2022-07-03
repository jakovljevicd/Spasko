import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdvertisementsView from '@/views/AdvertisementsView.vue'
import AddAdvertisementView from '@/views/AddAdvertisementView.vue'
import AccountView from '@/views/AccountView.vue'
import Dogs from '@/views/DogsView.vue'

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
    name: 'addAdvertisement',
    component: AddAdvertisementView
  },
  {
    path: '/account',
    name: 'myAccount',
    component: AccountView
  },
  {
    path: '/about_us',
    name: 'aboutUs'
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
