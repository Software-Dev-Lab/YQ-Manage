<template>
  <div class="layoutContainer">
    <div class="layoutAside" :class="{Collapse:useSettingStore().collapse}">
      <Logo/>
      <el-scrollbar class="layoutAsideScrollbar">

        <el-menu :collapse="useSettingStore().collapse" :default-active="index">
          <Menu :menuList="menuList"></Menu>
        </el-menu>

      </el-scrollbar>
    </div>
    <div class="layoutHeader" :class="{Collapse:useSettingStore().collapse}">
      <Tabbar @toggle="handleToggle"></Tabbar>
    </div>

    <div class="layoutMain" :class="{Collapse:useSettingStore().collapse}">
      <div style="height: 100%">
        <Main></Main>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
//得到当前路由地址
const index = useRoute().path;

import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import {menuList} from "../setting.ts";
import Main from './main/index.vue'
import Tabbar from '@/layout/tabbar/index.vue'
import useSettingStore from "../store/modules/setting";


const handleToggle = () => {
  //设置属性相反
  useSettingStore().collapse = !useSettingStore().collapse
}
</script>

<style scoped lang="scss">
.layoutContainer {

  height: 100vh;
  width: 100%;

  .layoutAside {
    height: 100%;
    width: $layout_aside_width;
    background-color: white;
    color: black;

    &.Collapse {
      width: $layout_aside_collapse_width;
      transition: all 0.3s ease;
    }

    .layoutAsideScrollbar {
      width: 100%;
      height: calc(100% - $layout_header_width);

      .el-menu {
        //无边框
        border-right: none;
      }
    }
  }

  .layoutHeader {
    position: fixed;
    top: 0px;
    left: $layout_aside_width;
    width: calc(100% - $layout_aside_width);
    height: $layout_header_width;
    background: white;
    color: black;
    padding: 0 15px;

    &.Collapse {
      width: calc(100% - $layout_aside_collapse_width);
      left: $layout_aside_collapse_width;
      transition: all 0.3s ease;
    }
  }

  .layoutMain {
    padding: 20px;
    position: absolute;
    top: $layout_header_width;
    left: $layout_aside_width;
    width: calc(100% - $layout_aside_width);
    height: calc(100% - $layout_header_width);
    overflow: auto;
    //有线围起来
    box-shadow: 0 0 1px #ccc;

    &.Collapse {
      width: calc(100% - $layout_aside_collapse_width);
      left: $layout_aside_collapse_width;
      transition: all 0.3s ease;
    }
  }

}

</style>