export const setting = {
    baseURL: 'http://localhost:8080/',
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    title:"小学生管理系统",
    logo:"public/logo.svg",
}

export const menuList = [
    {
        name: '首页',
        path: '/home',
        icon: 'House',
    },
    {
        name: '数据大屏',
        path: '/screen',
        icon: 'DataBoard',

    },
    {
        name: '权限管理',
        path: '/acl',
        icon: 'SetUp',
        menuList: [
            {
                name: '用户管理',
                path: '/acl/user',
                icon: 'User',
            },
            {
                name: '角色管理',
                path: '/acl/role',
                icon: 'UserFilled'
            },
            {
                name: '菜单管理',
                path: '/acl/permission',
                icon: 'Grid',
            }
        ]
    },
    {
        name: '商品管理',
        path: '/product',
        icon: 'ShoppingCart',
        menuList: [
            {
                name: '品牌管理',
                path: '/product/tradeMark',
                icon: 'ShoppingBag',
            },
            {
                name: '属性管理',
                path: '/product/attr',
                icon: 'HelpFilled',
            },
            {
                name: 'SPU管理',
                path: '/product/spu',
                icon: 'CaretTop',
            },
            {
                name: 'SKU管理',
                path: '/product/sku',
                icon: 'CaretBottom',
            }
        ]
    }
]