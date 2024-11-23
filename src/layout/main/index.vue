<script setup lang="ts">


</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<style scoped lang="scss">
//过渡动画 内容是有效变大
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 1;
  transform: scale(1);
}
</style>