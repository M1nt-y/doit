<template>
  <div class="card" :class="{ 'card--white' : isWhite }">

    <picture>
      <source type="image/webp" :srcset="card.image">
      <source type="image/png" :srcset="card.fallback">
      <img class="card__img" :src="card.image" alt="">
    </picture>

    <div class="card__content">
      <h3 class="card__content-title">{{ card.title }}</h3>
      <div class="card__content-row" v-if="card.values">
        <div class="card__content-column" v-for="(column, i) in card.values" :key="i">
          <p class="card__content-text" :class="{ 'card__content-text--right' : column.right }" >{{ column.key }}</p>
          <p class="card__content-value">{{ column.value }}</p>
        </div>
      </div>
      <p class="card__content-text" v-else>{{ card.text }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  isWhite: {
    type: Boolean,
    default: false
  },
  card: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.card {
  width: 370px;
  cursor: pointer;
  background: #151A1F;
  filter: drop-shadow(0px 16px 44px rgba(0, 0, 0, 0.12));

  @include media-breakpoint-down(xxs) {
    width: 329px;
  }

  @media screen and (max-width: 340px) {
    width: 300px
  }

  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 2px 2px 0 0;
  }

  &__content {
    height: 188px;
    display: flex;
    padding: 30px 22px;
    flex-direction: column;
    justify-content: flex-end;

    @include media-breakpoint-down(xs) {
      height: 152px;
      padding: 22px 16px 30px 16px;
    }

    &-title {
      color: #E6E8EB;
      font-size: 22px;
      font-weight: 500;
      line-height: 130%;

      @include media-breakpoint-down(xs) {
        font-size: 16px;
      }
    }

    &-row {
      display: flex;
      margin-top: auto;
      justify-content: space-between;
    }

    &-column {
      display: flex;
      flex-direction: column;
    }

    &-text {
      color: #8996A3;
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      margin-bottom: 8px;

      @include media-breakpoint-down(xs) {
        font-size: 14px;
      }

      &--right {
        text-align: right;
      }
    }

    &-value {
      color: #E6E8EB;
      font-size: 16px;
      font-weight: 500;
      line-height: 100%;

      @include media-breakpoint-down(xs) {
        font-size: 14px;
      }
    }
  }

  &--white {
    background: #E1E6EB;
    padding: 2px 2px 0 2px;

    & .card__img {
      height: 198px;
    }

    & .card__content {
      height: 224px;

      @include media-breakpoint-down(xs) {
        height: 169px;
      }
    }

    & .card__content-title {
      color: #0F1215;
    }

    & .card__content-text {
      color: #5E656B;
      margin-top: auto;
      line-height: 150%;
      margin-bottom: 12px;

      @include media-breakpoint-down(xs) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
