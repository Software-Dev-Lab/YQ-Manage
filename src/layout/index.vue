<template>
  <div class="layoutContainer">
    <div class="layoutAside">
      <Logo/>
      <el-scrollbar class="layoutAsideScrollbar">
        <el-menu>
          <Menu :menuList="menuList"></Menu>
        </el-menu>

      </el-scrollbar>
    </div>
    <div class="layoutHeader">
      头
    </div>
    <div class="layoutMain">
      <div style="height: 1000px">
        主体
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import useUserStore from "../../src/store/modules/user.ts";
let menuList = useUserStore().menuList
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

    .layoutAsideScrollbar {
      width: 100%;
      height: calc(100% - $layout_header_width);
      el-menu {
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
    background: red;
  }

  .layoutMain {
    padding: 20px;
    position: absolute;
    top: $layout_header_width;
    left: $layout_aside_width;
    width: calc(100% - $layout_aside_width);
    height: calc(100% - $layout_header_width);
    background: green;
    overflow: auto;
  }

}

</style>