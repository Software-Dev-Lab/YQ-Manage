<script setup lang="ts">
import {ArrowRight, Switch} from "@element-plus/icons-vue";
import {useRoute, useRouter} from "vue-router";
import useSettingStore from "../../store/modules/setting.ts";
import useUserStore from "../../store/modules/user.ts";

const emit = defineEmits(["toggle"])
const $router = useRouter();
const $route = useRoute();

//实现刷新
const Refresh = () => {
  useSettingStore().refresh = !useSettingStore().refresh
}
// 实现全屏打开和关闭
const fullScreen = () => {
  const element = document.fullscreenElement;
  if (element == null) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
//退出登陆点击的回调
const logout = async () => {
  await useUserStore().userLogout()
  await $router.push({path: '/login'})
}
</script>

<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <el-icon @click="emit('toggle')" style="margin-right: 10px; width: 24px; height: 24px;" title="侧边栏开关">
        <Switch/>
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-show="item.name !='layout'">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar-right">

      <el-button icon="Refresh" circle @click="Refresh"></el-button>
      <el-button icon="FullScreen" circle @click="fullScreen"></el-button>
      <el-button icon="StarFilled" circle></el-button>
      <el-button icon="Setting" circle></el-button>
      <!--      左右隔一点-->
      <img :src="useUserStore().avatar" style="width: 24px; height: 24px; margin:0px 10px">

      <el-dropdown>
        <span class="el-dropdown-link">
              {{ useUserStore().username }}
          <el-icon class="el-icon--right">
            <arrow-down/>
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;

  .tabbar-left {
    display: flex;
    align-items: center;

  }

  .tabbar-right {
    display: flex;
    align-items: center;

    //.example-showcase .el-dropdown-link {
    //  cursor: pointer;
    //  color: var(--el-color-primary);
    //  display: flex;
    //  align-items: center;
    //}
  }

}
</style>