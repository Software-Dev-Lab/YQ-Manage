//创建用户相关的小仓库
import {defineStore} from 'pinia'

import type {loginFormData, loginResponseData} from "../../api/user/type.ts";
import {getToken, setToken} from "../../utils/token.ts";
import {reqLogin} from "../../api/user/index.ts";
import {type menuListType} from "../../api/user/type.ts";

//创建用户小仓库
const useUserStore = defineStore('User', {
    //小仓库存储数据地方
    state: () => {
        return {
            //用户信息
            token: getToken(),
            menuList: [] as menuListType[],
        }
    },
    //处理异步|逻辑地方
    actions: {
        // 用户登录的方法
        async userLogin(data: loginFormData) {
            const res: loginResponseData = await reqLogin(data)
            // 登录成功返回token
            if (res.code == 200) {
                this.token = <string>res.data.token
                setToken(<string>res.data.token)
                this.menuList = [
                    {
                        name: '首页',
                        path: '/home',
                        icon: 'el-icon-s-home',
                    },
                    {
                        name: '权限管理',
                        path: '/acl',
                        icon: 'el-icon-s-home',
                        menuList: [
                            {
                                name: '用户管理',
                                path: '/acl/user/list',
                                icon: 'el-icon-s-home',
                            },
                            {
                                name: '角色管理',
                                path: '/acl/role/list',
                                icon: 'el-icon-s-home'
                            }
                        ]
                    },
                    {
                        name: '商品管理',
                        path: '/product',
                        icon: 'el-icon-goods',
                        menuList: [
                            {
                                name: '品牌管理',
                                path: '/product/tradeMark',
                                icon: 'el-icon-s-home',
                            },
                            {
                                name: '属性管理',
                                path: '/product/attr',
                                icon: 'el-icon-s-home',
                            }
                        ]
                    }
                ]
                return "ok"
            } else {
                return Promise.reject(new Error(res.data.message))
            }


            //1.需要用户登录携带参数（登录请求需要参数）
            //2.登录请求
            //3.将token保存到仓库中
        },
    },
    getters: {},
})
//对外暴露小仓库
export default useUserStore