<template>
  <div class="layoutContainer">
    <div class="layoutAside">
      <Logo/>
      <el-scrollbar class="layoutAsideScrollbar">
        <p v-for="item in 200" :key="item" class="scrollbar-demo-item">{{ item }}</p>
      </el-scrollbar>
    </div>
    <div class="layoutHeader">
      sss
    </div>
    <div class="layoutMain">
      <div style="height: 1000px"> ssss</div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script setup lang="ts">
import Logo from '@/layout/logo/index.vue'
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
      height: calc(100% - $layout_header_width);
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