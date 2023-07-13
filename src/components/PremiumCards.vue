<template>
  <swiper
      :slides-per-view="perView"
      :space-between="space"
      :pagination="{ clickable: true }"
      :modules="getModules"
  >
    <swiper-slide>
      <div class="card card--free">
        <h3 class="card__title">FREE</h3>

        <div class="card__price">$10 per mounth</div>

        <div class="card__description">
          <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.</p>
          <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.</p>
        </div>

        <button class="button">Sign up</button>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="card card--pro">
        <h3 class="card__title">PRO</h3>

        <div class="card__price">$4.99 per mounth</div>

        <div class="card__description">
          <p class="card__feature">- usecase 1</p>
          <p class="card__feature">- usecase 1</p>
          <p class="card__feature">- usecase 1</p>
          <p class="card__feature">- usecase 1</p>
          <p class="card__feature">- usecase 1</p>
        </div>

        <button class="button">Sign up</button>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="card card--org">
        <h3 class="card__title">Organizer</h3>

        <div class="card__price">$15 per mounth</div>

        <div class="card__description">
          <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.</p>
          <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.</p>
        </div>

        <button class="button">Sign up</button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useMainStore } from '@/stores/main'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper core and required modules
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'


defineProps({
  space: {
    type: Number,
    default: 29
  }
})

const mainStore = useMainStore()
const authStore = useAuthStore()

const { showLogin } = mainStore
const { windowWidth } = storeToRefs(mainStore)
const { currentUser } = storeToRefs(authStore)

const perView = computed(() => {
  if (windowWidth.value >= 1440) {
    return 3
  } else {
    return 'auto'
  }
})

const getModules = computed(() => {
  if (windowWidth.value < 577) {
    return [Pagination]
  } else {
    return []
  }
})

</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.card {
  width: 100%;
  height: 540px;
  display: flex;
  padding: 36px 22px;
  flex-direction: column;
  align-items: flex-start;

  @include media-breakpoint-down(xs) {
    height: 446px;
    padding: 26px 16px;
  }

  &__title {
    font-size: 42px;
    margin-top: 60px;
    line-height: 125%;
    -webkit-text-fill-color: transparent;

    @include media-breakpoint-down(xs) {
      margin-top: 0;
    }
  }

  &__price {
    color: #F5F5F5;
    font-size: 22px;
    font-weight: 500;
    margin-top: 38px;
    line-height: 100%;

    @include media-breakpoint-down(xs) {
      margin-top: 26px;
    }
  }

  &__description {
    color: #67707A;
    font-size: 14px;
    line-height: 150%;
    margin-top: 16px;

    @include media-breakpoint-down(xs) {
      margin-top: 20px;
    }
  }

  &__feature {
    font-size: 16px;
    line-height: 173%;
  }

  &--free {
    background: radial-gradient(250% 250% at -122% -132%, rgba(20, 114, 255, 0.35) 0%, rgba(20, 114, 255, 0) 95.84%), #181B1F;

    & .card__title {
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      -webkit-background-clip: text;
    }

    & .button {
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%), #095FE0;
    }
  }
  &--pro {
    background: radial-gradient(250% 252% at -122% -132%, rgba(245, 200, 31, 0.25) 0%, rgba(245, 200, 31, 0) 95.84%), #181B1F;

    & .card__title {
      background: linear-gradient(180deg, #FFD321 0%, #9C6C0D 100%);
      -webkit-background-clip: text;
    }

    & .button {
      background: linear-gradient(180deg, #FFD321 0%, #9C6C0D 100%);
    }
  }
  &--org {
    background: radial-gradient(250% 252% at -122% -132%, rgba(66, 232, 128, 0.3) 0%, rgba(66, 232, 128, 0) 95.84%), #181B1F;

    & .card__title {
      background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
      -webkit-background-clip: text;
    }

    & .button {
      background: var(--green, linear-gradient(180deg, #46F48C 0%, #2B9D37 100%));
    }
  }
}

.button {
  margin-top: auto;
  padding: 14px 38px;

  @include media-breakpoint-down(xs) {
    width: 289px;
    //margin-top: 42px;
  }
}
</style>

<style lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.swiper-slide {
  width: 371px;

  @include media-breakpoint-down(xs) {
    width: 329px;
  }
}
</style>
