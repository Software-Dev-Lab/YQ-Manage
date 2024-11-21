<script setup lang="ts">
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<template>
  <template v-for="(item,index) in menuList" :key="item.path">
    <el-menu-item v-if="!item.menuList" :index="item.path">

      <template #title>
        <svg-icon :icon-class="item.icon"/>
        {{ item.name }}
      </template>
    </el-menu-item>

    <el-sub-menu v-else :index="item.path" :key="item.path">

      <template #title>
        <svg-icon :icon-class="item.icon"/>
        {{ item.name }}
      </template>
      <!--递归-->
        <Menu :menuList="item.menuList"></Menu>
    </el-sub-menu>
  </template>

</template>

<style scoped lang="scss">

</style>