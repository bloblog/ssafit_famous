import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/MainView.vue'
import MyInfo from '../components/user/MyInfo.vue'
import MyInfoView from '../views/MyInfoView.vue'

import DashBoard from '../views/DashBoardView.vue'
import CreateStudy from '../views/CreateStudyView.vue'

import OngoingList from '../components/study/OngoingList.vue'
import CompleteList from '../components/study/CompleteList.vue'
import MyReview from '../components/review/MyReview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    { path: '/info',
      name: 'info',
      component: MyInfo
    },
    { path: '/infoView',
      name: 'infoView',
      component: MyInfoView
    },
    { path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    { path: '/createStudy',
      name: 'createStudy',
      component: CreateStudy
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
