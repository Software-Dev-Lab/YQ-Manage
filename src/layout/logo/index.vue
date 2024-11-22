<script setup lang="ts">

import {setting} from "../../setting.ts";
let logo = '../../../'+ setting.logo

</script>

<template>
  <div class="logo">
    <img :src= logo alt="">
    <p>{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo {
  color: black;
  display: flex;
  align-items: center;
  height: $layout_header_width;
  //下划线
  border-bottom: 1px solid #eee;

  img {
    width: 40px;

  }
  p {
    margin-left: 10px;
    font-size: 20px;
  }

}

</style>