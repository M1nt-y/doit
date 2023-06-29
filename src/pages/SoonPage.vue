<template>
  <main class="main coming-soon">
    <div class="container">
      <Triangles class="coming-soon__triangles" />

      <div class="coming-soon__content">
        <h1 class="coming-soon__title">Coming soon</h1>

        <p class="coming-soon__text">We are working hard to provide you the best experience on our platform</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import Triangles from '@/assets/icons/Triangles.vue'

</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.coming-soon {
  margin-top: 15px;

  @include media-breakpoint-down(xs) {
    margin-top: 2px;
  }

  & .container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-down(xs) {
      padding: 0 28px;
      height: calc(100vh - 134px);
    }
  }

  &__triangles {
    height: 100%;
  }

  &__content {
    top: 0;
    left: 50%;
    width: 100%;
    padding-top: 20.14%;
    position: absolute;
    transform: translateX(-50%);

    @include media-breakpoint-down(lg) {
      top: 50%;
      padding-top: 0;
      padding-bottom: 13%;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  &__title {
    font-size: 66px;
    text-align: center;

    @include media-breakpoint-down(xs) {
      font-size: 42px;
    }
  }

  &__text {
    color: #6A6767;
    font-size: 13px;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    margin-top: 10px;
    margin-left: 18px;
    padding: 0 44px;

    @include media-breakpoint-down(xs) {
      color: #CCC;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      margin-top: 16px;
      margin-left: 0;
    }
  }
}
</style>
