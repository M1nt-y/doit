<template>
<main class="main not-found">
  <div class="container">
    <div class="not-found__content">
      <div class="not-found__content-text">
        <div class="not-found__content-border">
          <p>Are you lost?</p>

          <p>Please back to the game!</p>
        </div>
      </div>

      <div class="not-found__content-shadow">
        <p>404</p>
      </div>
    </div>
  </div>
</main>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.not-found{
  margin-top: 204px;

  @include media-breakpoint-down(lg) {
    margin-top: 0;
    align-items: center;
    margin-bottom: 112px;
  }

  @include media-breakpoint-down(md) {
    margin-bottom: 0;
  }

  &__content{
    display: flex;

    @include media-breakpoint-down(md) {
      flex-direction: column-reverse;
      height: 100%;
    }

    &-text{
      max-width: 567px;
      width: 100%;
      padding: 1px;
      background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);

      @include media-breakpoint-down(md) {
        max-width: 100%
      }

      .not-found__content-border{
        background: #0F1215;
        padding: 128px 0 128px 83px;
      }

      p{
        font-style: normal;
        font-weight: 400;
        font-size: 29px;
        line-height: 130%;
        color: #FFFFFF;
      }
    }

    &-shadow{
      max-width: 567px;
      width: 100%;
      background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);
      padding: 109px 0 0 81px;

      @include media-breakpoint-down(md) {
        max-width: 100%
      }

      p{
        font-style: normal;
        font-weight: 500;
        font-size: 115px;
        line-height: 100%;
        color: #0F1215;
        //letter-spacing: -8px;
      }
    }
  }
}

</style>
