<template>
  <main class="main rules">
    <div class="container">
      <h3 class='rules-title'>Terms of Use</h3>

      <div class="rules__info">
        <div class="rules__info-one">
          <h4>1. <span>The purpose</span> </h4>

          <div class="info">
            <h5>1.1</h5>

            <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.
                <span style="display: block"></span>
                Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.</p>
          </div>

          <div class="info info-two">
            <h5>1.2</h5>

            <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.</p>
          </div>
        </div>
        <div class="rules__info-one two-info">
          <h4>2. <span>The purpose</span> </h4>

          <div class="info">
            <h5>2.1</h5>

            <p>A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.
                <span style="display: block"></span>
                Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.
            </p>
          </div>
          
        </div>
      </div>

      <div class="component">

      </div>
    </div>
  </main>
</template>




<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.rules{
  margin-top: 63px;
  margin-bottom: 80px;
  @include media-breakpoint-down(xs){
    margin-top: 37px;
  }
  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    margin-left: -25px;
    @include media-breakpoint-down(lg){
      margin-left: 0;
    }
  }
  &__info{
    margin-top: 30px;
    margin-left: -25px;
    @include media-breakpoint-down(xs){
      margin-top: 51px;
    }
    &-one{
      h4{
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      span{
        margin-left: 28px;
        @include media-breakpoint-down(xs){
          margin-left: -1px;
        }
      }
      }
      .info{
        display: flex;
        gap: 34px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-left: 52px;
        margin-top: 23px;
        color: #67707A;
        @include media-breakpoint-down(xs){
          margin-left: 0px;
          margin-top: 29px;
          flex-direction: column;
          gap: 13px;
        }
        h5{
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
        p{
          max-width: 600px;
        }
        

      }
      .info-two{
        margin-top: 16px;
        gap: 31px;
        @include media-breakpoint-down(xs){
          margin-left: 0px;
          margin-top: 29px;
          flex-direction: column;
          gap: 13px;
        }
      }
    }
    @include media-breakpoint-down(lg){
      margin-left: 0;
    }
    
  }
  .two-info{
    margin-top: 29px;
    h4{
      span{
        margin-left: 25px;
      }
    }
    .info{
      gap: 30px;
    }
  }
}

</style>