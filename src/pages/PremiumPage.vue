<template>
  <main class="main premium">
    <div class="container">
      <h2 class="title" v-if="!display">Premium</h2>

      <PremiumCards class="premium__cards" />
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import PremiumCards from '@/components/PremiumCards.vue'


const mainStore = useMainStore()
const { windowWidth } = storeToRefs(mainStore)

const display = computed(() => {
  return windowWidth.value <= 577
})

</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.premium {
  margin-top: 56px;

  @include media-breakpoint-down(xs) {
    margin-top: 14px;
  }

  &__cards {
    margin-top: 40px;

    @include media-breakpoint-down(xs) {
      margin-top: 0;
      padding-bottom: 39px;
    }
  }
}

.title {
  font-size: 48px;
  line-height: 56px;
}
</style>
