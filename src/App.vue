<template>
  <div class="wrapper">
    <TheHeader />
    <TheNavigation />
    <TheBackdrop v-if="showBackdrop" />
    <transition name="fade">
      <TheModal v-if="showModal" />
    </transition>
    <RouterView />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNavigation from '@/components/TheNavigation.vue'
import TheBackdrop from '@/components/TheBackdrop.vue'
import TheModal from '@/components/TheModal.vue'
import { RouterView } from 'vue-router'
import { useMainStore } from '@/stores/main'
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'


const mainStore = useMainStore()
const { onWidthChange, disableScroll, enableScroll } = mainStore
const { showBackdrop, showModal } = storeToRefs(mainStore)

watch(() => showBackdrop.value, (value) => {
  if (!value) {
    enableScroll()
  } else {
    disableScroll()
  }
})

onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>

<style scoped lang="scss">
.fade-enter-from { opacity: 0; }

.fade-enter-to { opacity: 1; }

.fade-enter-active { transition: opacity .6s }

.fade-leave-from { opacity: 1; }

.fade-leave-to { opacity: 0; }

.fade-leave-active { transition: opacity .6s }
</style>
