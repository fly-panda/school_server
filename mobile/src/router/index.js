import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import History from '@/pages/home/history/History'
import Task from '@/pages/task/Task'
import Copy from '@/pages/copy/Copy'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/copy',
      name: 'Copy',
      component: Copy
    }
  ]
})
