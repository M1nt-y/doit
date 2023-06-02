<template>
  <div class="backdrop" @click="handleClick" />
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useAuthStore } from '@/stores/auth'

const mainStore = useMainStore()
const authStore = useAuthStore()
const { closeAll } = mainStore
const { clearForm } = authStore

function handleClick () {
  closeAll()
  clearForm()
}
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
  background: rgba(15, 18, 21, 0.3);
}
</style>
