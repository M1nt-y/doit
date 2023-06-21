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
  z-index: 2;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
  background: rgba(15, 18, 21, 0.3);
}
</style>
