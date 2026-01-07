import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NewsListPage from '../views/NewsListPage.vue'
import NewsDetailPage from '../views/NewsDetailPage.vue'
import ColoursListPage from '../views/ColoursListPage.vue'
import ColourDetailPage from '../views/ColourDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/news',
    name: 'NewsList',
    component: NewsListPage
  },
  {
    path: '/news/:slug',
    name: 'NewsDetail',
    component: NewsDetailPage
  },
  {
    path: '/colours',
    name: 'ColoursList',
    component: ColoursListPage
  },
  {
    path: '/colours/:slug',
    name: 'ColourDetail',
    component: ColourDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
