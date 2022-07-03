import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdvertisementsView from '@/views/AdvertisementsView.vue'
import AdvertisementView from '@/views/AdvertisementView.vue'
import AddAdvertisementView from '@/views/AddAdvertisementView.vue'
import AccountView from '@/views/AccountView.vue'

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
    path: '/advertisement/:id',
    name: 'advertisement',
    component: AdvertisementView
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
