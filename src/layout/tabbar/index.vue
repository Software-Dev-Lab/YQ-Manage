<script setup lang="ts">
import {ArrowRight, Switch} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

const emit = defineEmits(["toggle"])
const $router = useRouter();
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

      <el-button icon="FullScreen" circle></el-button>
      <el-button icon="StarFilled" circle></el-button>
      <el-button icon="Setting" circle></el-button>
      <!--      左右隔一点-->
      <img src="../../../public/logo.svg" style="width: 24px; height: 24px; margin:0px 10px">

      <el-dropdown>
        <span class="el-dropdown-link">
              Admin
          <el-icon class="el-icon--right">
            <arrow-down/>
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/login')">退出登录</el-dropdown-item>
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