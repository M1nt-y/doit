<template>
<main class="main not-found">
  <div class="container">
    <div class="not-found__content">
      <div class="not-found__content-text">
        <div class="not-found__content-border">
          <p>Are you lost?</p>
  
          <p>Please back to the <span></span> game!</p>
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
  @include media-breakpoint-down(xs) {
    .container{
      padding: 0;
    }
  }
  
  &__content{
    display: flex;
  
    @include media-breakpoint-down(lg) {
      flex-direction: column-reverse;
      height: 100%;
    }
    @include media-breakpoint-down(xs) {
      background: linear-gradient(180deg, rgba(20, 114, 255, 0) 16.67%, #1472FF 100%);
    }
  
    &-text{
      max-width: 567px;
      width: 100%;
      padding: 1px;
      background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);
  
      @include media-breakpoint-down(lg) {
        max-width: 100%;
        text-align: center;
      }
      @include media-breakpoint-down(xs) {
        background: 0;
      }
  
      .not-found__content-border{
        background: #0F1215;
        padding: 128px 0 128px 83px;
        @include media-breakpoint-down(lg){
          padding-left: 0;
        }
        @include media-breakpoint-down(xs) {
          background: 0;
          padding: 34px 0 228px 0px;
        }
      }
  
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 29px;
        line-height: 130%;
        color: #FFFFFF;
        span{
          @include media-breakpoint-down(xs) {
            display: block;
          }
        }
      }
      p:nth-child(1){
        @include media-breakpoint-down(xs) {
          font-weight: 500;
          font-size: 30px;
          letter-spacing: -1px;
          transform: translateX(-1px);
          color: #0F1215;
        }
      }
      p:nth-child(2){
        @include media-breakpoint-down(xs) {
          font-weight: 500;
          font-size: 30px;
          letter-spacing: -1px;
          color: #0F1215;
        }
      }
    }
  
    &-shadow{
      max-width: 567px;
      width: 100%;
      background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);
      padding: 109px 0 0 81px;
  
      @include media-breakpoint-down(lg) {
        max-width: 100%;
        text-align: center;
        padding-left: 0;
      }
      @include media-breakpoint-down(xs) {
        background: 0;
        padding: 120px 0 0 0;
      }
  
      p{
        font-style: normal;
        font-weight: 500;
        font-size: 115px;
        line-height: 100%;
        color: #0F1215;
        letter-spacing: -8px;
        @include media-breakpoint-down(xs){
          font-size: 100px;
          letter-spacing: -5px;
          color: #FFFFFF;
        }
      }
    }
  }
}
  
  </style>
