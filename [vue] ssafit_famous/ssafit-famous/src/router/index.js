import { createRouter, createWebHistory } from 'vue-router'
import MyInfo from '../components/user/MyInfo.vue'
import OngoingList from '../components/study/OngoingList.vue'
import CompleteList from '../components/study/CompleteList.vue'
import MyReview from '../components/review/MyReview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/info',
      name: 'info',
      component: MyInfo
    },
    {
      path: '/ongoing',
      name: 'ongoing',
      component: OngoingList
    },
    {
      path: '/done',
      name: 'done',
      component: CompleteList
    },
    {
      path: '/review',
      name: 'review',
      component: MyReview
    },
  ]
})

export default router
