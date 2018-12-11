import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import History from '@/pages/home/history/History'
import Task from '@/pages/task/Task'
import Copy from '@/pages/copy/Copy'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '我的任务'
      }
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      meta: {
        title: '任务管理'
      }
    },
    {
      path: '/copy',
      name: 'Copy',
      component: Copy
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router