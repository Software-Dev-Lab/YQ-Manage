<script setup lang="ts">
import useSettingStore from "../../store/modules/setting.ts";
import {nextTick, ref, watch} from "vue";

const refresh = ref(true);
watch(() => useSettingStore().refresh, () => {
  refresh.value = !refresh.value;
//   refresh然后又变为ture
//   setTimeout(() => {
//     refresh.value = !refresh.value;
//   }, 100);
  nextTick(()=> {
    refresh.value = !refresh.value;
  })
})

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="refresh"></component>
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