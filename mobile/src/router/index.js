import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import FormPage from '@/pages/home/formPage/FormPage'
import SelectList from '@/pages/home/formPage/selectList/SelectList'
import SelectStudent from '@/pages/home/formPage/selectStudent/SelectStudent'
import Task from '@/pages/task/Task'
import SubmitFormData from '@/pages/task/submitFormData/SubmitFormData'
import FillInHisory from '@/pages/task/fillInHisory/FillInHisory';
import Copy from '@/pages/copy/Copy'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home,
      meta: {
        title: '我的任务'
      },
      component:resolve=>require(["@/pages/home/Home.vue"],resolve)
    },
    {
      path: '/task',
      name: 'Task',
      // component: Task,
      meta: {
        title: '任务管理'
      },
      component:resolve=>require(["@/pages/task/Task"],resolve)
    },
    {
      path: '/copy',
      name: 'Copy',
      // component: Copy,
      meta: {
        title: '抄送'
      },
      component:resolve=>require(["@/pages/copy/Copy"],resolve)
    },
    {
      path: '/formPage',
      name: 'FormPage',
      // component: FormPage,
      meta: {
        title: '我的任务',
        keepAlive: true
      },
      component:resolve=>require(["@/pages/home/formPage/FormPage"],resolve)
    },
    {
      path: '/selectList',
      name: 'SelectList',
      // component: SelectList,
      meta: {
        title: '选择年级'
      },
      component:resolve=>require(["@/pages/home/formPage/selectList/SelectList"],resolve)      
    },
    {
      path: '/selectStudent',
      name: 'SelectStudent',
      // component: SelectStudent,
      meta: {
        title: '选择学生'
      },
      component:resolve=>require(["@/pages/home/formPage/selectStudent/SelectStudent"],resolve)
    },
    {
      path: '/submitFormData',
      name: 'SubmitFormData',
      // component: SubmitFormData,
      meta: {
        title: '提交的表单数据'
      },
      component:resolve=>require(["@/pages/task/submitFormData/SubmitFormData"],resolve)
    },
    {
      path: '/submitFormDataDetail',
      name: 'SubmitFormDataDetail',
      // component: SubmitFormData,
      meta: {
        title: ''
      },
      component:resolve=>require(["@/pages/task/submitFormData/detail/Detail"],resolve)
    },
    {
      path: '/fillInHisory',
      name: 'FillInHisory',
      // component: FillInHisory,
      meta: {
        title: '填写历史'
      },
      component:resolve=>require(["@/pages/task/fillInHisory/FillInHisory"],resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router