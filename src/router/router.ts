//对外暴露配置路由(常量路由)
export const constantRoute = [
    {
        //登录路由
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login', //命名路由
    },
    {
        //登录成功以后展示数据的路由
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
            },
            {
                path: '/acl',
                component: () => import('@/views/acl/index.vue'),
                name: 'acl',
                redirect: '/acl/user',
                children: [
                    {
                        path: '/acl/user',
                        component: () => import('@/views/acl/user/index.vue'),
                        name: 'user',
                    },
                    {
                        path: '/acl/role',
                        component: () => import('@/views/acl/role/index.vue'),
                        name: 'role',
                    },
                    {
                        path: '/acl/permission',
                        component: () => import('@/views/acl/permission/index.vue'),
                        name: 'permission',
                    }
                ]
            },
            {
                path: '/product',
                component: () => import('@/views/product/index.vue'),
                name: 'product',
                redirect: '/product/trademark',
                children: [
                    {
                        path: '/product/trademark',
                        component: () => import('@/views/product/trademark/index.vue'),
                        name: 'trademark',
                    },
                    {
                        path: '/product/attr',
                        component: () => import('@/views/product/attr/index.vue'),
                        name: 'attr',
                    },
                    {
                        path: '/product/spu',
                        component: () => import('@/views/product/spu/index.vue'),
                        name: 'spu',
                    },
                    {
                        path: '/product/sku',
                        component: () => import('@/views/product/sku/index.vue'),
                        name: 'sku',
                    }
                ]
            },

        ]
    },
    {
        path: '/screen',
        component: () => import('@/views/screen/index.vue'),
        name: 'screen',
    },

    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
    },
    {
        //重定向
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
    },

]