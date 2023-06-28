<template>
  <div class="backdrop" @click="closeAll" />
</template>

<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
const { closeAll } = mainStore
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: url("../assets/images/backdrop.svg");

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background: rgba(15, 18, 21, 0.3);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
}
</style>
