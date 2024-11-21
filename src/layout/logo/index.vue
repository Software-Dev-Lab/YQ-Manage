<script setup lang="ts">

import {setting} from "@/setting.js";
</script>

<template>
  <div class="logo">
    <img :src= setting.logo alt="">
    <p>{{ setting.title }}</p>

  </div>
</template>

<style scoped lang="scss">
.logo {
  color: black;
  display: flex;
  align-items: center;
  height: $layout_header_width;

  img {
    width: 40px;

  }
  p {
    margin-left: 10px;
    font-size: 20px;
  }

}

</style>