import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
        },
        component: () => import('@/views/page/Login.vue')
    },
    {
        path: '/',
        name: 'home',
        redirect: '/cardformList',
        meta: {
            title: 'Home - 主页',
        },
        component: () => import('@/views/page/Home.vue'),
        children: [
            {
                path: '/myPublish',
                name: 'myPublish',
                meta: {
                    title: '我的发布'
                },
                component: () => import('@/views/page/publish/MyPublish.vue'),
                children: [
                    {
                        path: '/cardformList',
                        name: 'cardformList',
                        meta: {
                            title: '表单列表'
                        },
                        component: () => import('@/views/page/publish/cardformList.vue')
                    },
                    {
                        path: '/allTemplate',
                        name: 'allTemplate',
                        meta: {
                            title: '全部模板'
                        },
                        component: () => import('@/views/page/publish/allTemplate.vue')
                    }
                ]
            },
            {
                path: '/myTask',
                name: 'myTask',
                redirect: '/allTask',
                meta: {
                    title: '我的任务',
                },
                component: () => import('@/views/page/myTask'),
                children: [
                    {
                        path: '/allTask',
                        name: 'allTask',
                        meta: {
                            title: '全部任务'
                        },
                        component: () => import('@/views/page/myTask/allTask.vue')
                    },
                    {
                        path: '/historyTask',
                        name: 'historyTask',
                        meta: {
                            title: '历史任务'
                        },
                        component: () => import('@/views/page/myTask/history.vue')
                    }
                ]
            },
            {
                path: '/publicTemp',
                name: 'publicTemp',
                meta: {
                    title: '公共模板',
                },
                component: () => import('@/views/page/publicTemp.vue'),
            },
            {
                path: '/duplicate',
                name: 'duplicate',
                meta: {
                    title: '抄送人',
                },
                component: () => import('@/views/page/duplicate'),
            },
            {
                path: '/editor',
                name: 'editor',
                redirect: '/editorForm',
                meta: {
                    title: '创建表单',
                },
                component: () => import('@/views/page/editor'),
                children: [
                    {
                        path: '/editorForm',
                        name: 'editorForm',
                        meta: {
                            title: '编辑表单'
                        },
                        component: () => import('@/views/page/editor/editorForm.vue')
                    }
                ]
            }
        ]
    },
    
    {
        path: '/401',
        name: 'error_401',
        component: () => import('@/views/error-page/401.vue')
    }
]
