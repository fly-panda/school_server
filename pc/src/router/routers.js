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
            keepAlive: false // 不需要缓存
        },
        component:resolve=>require(["@/views/page/Login.vue"],resolve)
    },
    {
        path: '/',
        name: 'home',
        redirect: '/cardformList',
        meta: {
            title: 'Home - 主页',
            keepAlive: false // 不需要缓存
        },
        component:resolve=>require(["@/views/page/Home.vue"],resolve),
        children: [
            {
                path: '/myPublish',
                name: 'myPublish',
                meta: {
                    title: '我的发布',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(['@/views/page/publish/MyPublish.vue'],resolve),
                children: [
                    {
                        path: '/cardformList',
                        name: 'cardformList',
                        meta: {
                            title: '表单列表',
                            keepAlive: false // 不需要缓存
                        },
                        component:resolve=>require(['@/views/page/publish/cardformList.vue'],resolve)
                    },
                    {
                        path: '/allTemplate',
                        name: 'allTemplate',
                        meta: {
                            title: '全部模板',
                            keepAlive: false // 不需要缓存
                        },
                        component:resolve=>require(["@/views/page/publish/allTemplate.vue"],resolve)
                    }
                ]
            },
            {
                path: '/myTask',
                name: 'myTask',
                redirect: '/allTask',
                meta: {
                    title: '我的任务',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/myTask"],resolve),
                children: [
                    {
                        path: '/allTask',
                        name: 'allTask',
                        meta: {
                            title: '全部任务',
                            keepAlive: false // 不需要缓存
                        },
                        component:resolve=>require(['@/views/page/myTask/allTask.vue'],resolve)
                    },
                    {
                        path: '/historyTask',
                        name: 'historyTask',
                        meta: {
                            title: '历史任务',
                            keepAlive: false // 不需要缓存
                        },
                        component:resolve=>require(["@/views/page/myTask/history.vue"],resolve)
                    }
                ]
            },
            {
                path: '/publicTemp',
                name: 'publicTemp',
                meta: {
                    title: '公共模板',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/publicTemp.vue"],resolve)
            },
            {
                path: '/taskDetail',
                name: 'taskDetail',
                meta: {
                    title: '表单详情',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/myTask/taskDetail.vue"],resolve)
            },
            {
                path: '/record',
                name: 'record',
                meta: {
                    title: '填写记录',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/myTask/record.vue"],resolve)
            },
            
            {
                path: '/myCc',
                name: 'myCc',
                meta: {
                    title: '我的抄送',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/duplicate/myCc.vue"],resolve)
            },
            {
                path: '/editor',
                name: 'editor',
                redirect: '/editorForm',
                meta: {
                    title: '创建表单',
                    disableds:true,
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/editor"],resolve),
                children: [
                    {
                        path: '/editorForm',
                        name: 'editorForm',
                        meta: {
                            title: '编写表单',
                            keepAlive: false // 不需要缓存
                        },
                        component:resolve=>require(["@/views/page/editor/editorForm.vue"],resolve)
                    },
                    {
                        path: '/settingEditorForm',
                        name: 'settingEditorForm',
                        meta: {
                            title: '设置表单规则',
                            keepAlive: false // 不需要缓存
                        },
                        component:resolve=>require(["@/views/page/editor/settingEditorForm.vue"],resolve)
                    }
                ]
            },
            {
                path: '/duplicate',
                name: 'duplicate',
                meta: {
                    title: '表单详情',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/duplicate"],resolve)
            },
            {
                path: '/publishForm',
                name: 'publishForm',
                meta: {
                    title: '发布设置',
                    keepAlive: false // 不需要缓存
                },
                component:resolve=>require(["@/views/page/editor/publishForm.vue"],resolve)
            }
            
        ]
    },
    {
        path: '/preview',
        name: 'preview',
        meta: {
            title: '预览',
            keepAlive: false // 不需要缓存
        },
        component:resolve=>require(["@/views/page/editor/preview"],resolve)
    },
    {
        path: '/401',
        name: 'error_401',
        component:resolve=>require(['@/views/error-page/401.vue'],resolve)
    }
]
