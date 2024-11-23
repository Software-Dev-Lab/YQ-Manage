<script setup lang="ts">
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<template>
  <template v-for="(item,index) in menuList" :key="item.path" >
    <el-menu-item v-if="!item.menuList" :index="item.path" @click="()=>{ $router.push(item.path)}">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>

    <el-sub-menu v-if="item.menuList" :index="item.path" >

      <template #title>
        <el-icon>
        <component :is="item.icon"></component>
      </el-icon>

        <span>{{ item.name }}</span>
      </template>
      <!--递归-->
      <Menu :menuList="item.menuList"></Menu>
    </el-sub-menu>
  </template>

</template>

<style scoped lang="scss">

</style>