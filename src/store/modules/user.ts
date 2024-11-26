//创建用户相关的小仓库
import {defineStore} from 'pinia'
import {getToken, removeToken, setToken} from "../../utils/token.ts";
import {reqLogin, reqLogout, reqUserInfo} from "../../api/user/index.ts";
import {loginFormData, loginResponseData, type menuListType, userInfoResponseData} from "../../api/user/type.ts";

//创建用户小仓库
const useUserStore = defineStore('User', {
    //小仓库存储数据地方
    state: () => {
        return {
            //用户信息
            token: getToken(),
            menuList: [] as menuListType[],
            username: '',
            avatar: ''


        }
    },
    //处理异步|逻辑地方
    actions: {
        async userLogin(data: loginFormData) {
            //登录请求
            const result: loginResponseData = await reqLogin(data)

            if (result.code == 200) {
                this.menuList = [
                    {
                        name: '首页',
                        path: '/home',
                        icon: 'HomeFilled',
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
                //pinia仓库存储token
                //由于pinia|vuex存储数据其实利用js对象
                this.token = result.data as string
                //本地存储持久化存储一份
                setToken(result.data as string)
                //保证当前async函数返回一个成功的promise函数
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data))
            }
        },
        //获取用户信息方法
        async userInfo() {
            //获取用户信息进行存储
            const result: userInfoResponseData = await reqUserInfo()
            console.log(result)

            if (result.code == 200) {
                this.username = result.data.name
                this.avatar = result.data.avatar
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //退出登录
        async userLogout() {
            const result = await reqLogout()
            if (result.code == 200) {
                //本地数据清空
                this.token = ''
                this.username = ''
                this.avatar = ''
                removeToken()
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }

        },
    },
    getters: {},
})
//对外暴露小仓库
export default useUserStore