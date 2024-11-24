//创建用户相关的小仓库
import {defineStore} from 'pinia'


//创建用户小仓库
const useSettingStore = defineStore('setting', {
//小仓库存储数据地方
    state: () => {
        return {
            //刷新
            refresh:true,
            //折叠
            collapse:false

        }
    },
    //处理异步|逻辑地方
    actions: {},
    getters: {},
})
//对外暴露小仓库
export default useSettingStore