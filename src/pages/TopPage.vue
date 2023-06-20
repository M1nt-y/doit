<template>
  <main class="main top">
    <div class="container">
      <div class="top__title">
        <h2>Top of 
          <div class="top__title-select" @click="showYears">
            <h3>{{resultYear}}</h3>
            <IconArrow :class="{'active': displayYears}"/>
            <div class="years" v-if="displayYears">
              <p v-for="year in yearsArray" @click="resultYear = year">{{ year }}</p>
            </div>
          </div>
        </h2>
      </div>
      <div class="top__price">
        <div class="price">
          <h4>Total Tournaments: <span class="price-event">157,260,352</span></h4>
        </div>
        <div class="price">
          <h4>Total Prize money <span>$157,260,352.09</span></h4>
        </div>
        <div class="price">
          <h4>Total Players: <span>322</span></h4>
        </div>
      </div>
      <TheTabTop :button="sortedBtnTab" />
    </div>
  </main>
</template>

<script setup>
import IconArrow from '@/assets/icons/Arrow.vue'
import TheTabTop from '@/components/TheTabTop.vue'
import { ref, onMounted, computed } from 'vue';

const displayYears = ref(false);

function showYears() {
  displayYears.value = !displayYears.value;
}

const yearsArray = ref([2019, 2020, 2021, 2022])
const resultYear = yearsArray.value[0]

const btnTab = ref([
  {
    title: 'Top Countries',
    search: 'countries',
  },
  {
    title: 'Top Players',
    search: 'players',
  },
  {
    title: 'Top Teams',
    search: 'teams',
  },
  {
    title: 'Top Games',
    search: 'games',
  },
])

const sortedBtnTab = computed(() => {
  if(isMobile.value){
    const oneElement = btnTab.value[0];
    const twoElement = btnTab.value[1];
    return [btnTab.value[1], btnTab.value[0], btnTab.value[2], btnTab.value[3]]
  }else{
    return btnTab.value
  }
});
const isMobile = ref(window.innerWidth < 768);

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});

</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';
.top {
  .container{
    @include media-breakpoint-down(xs) {
      padding: 0 14px;
    }
  }
  &__title {
    margin-top: 63px;
    @include media-breakpoint-down(xs) {
      margin-top: 23px;
    }
    h2{
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 700;
      font-size: 44px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;
      gap: 10px;
      margin-left: -5px;
      @include media-breakpoint-down(xs) {
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
        margin-left: -10px;
        gap: 5px;
      }
    }
    &-select {
      display: flex;
      align-items: center;
      position: relative;
      h3{
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 100%;
        text-align: center;
        color: #2787F6;
        margin-right: 9px;
        margin-top: 2px;
        cursor: pointer;
        @include media-breakpoint-down(xs) {
          font-weight: 700;
          font-size: 28px;
          line-height: 100%;
          // margin-right: 5px;
          // margin-left: 0px;
        }
      }
      svg{
        transition: .15s;
        @include media-breakpoint-down(xs) {
          width: 12px;
          height: 12px;
        }
      }
      svg.active{
        transform: rotate(180deg);
      }
      .years{
        position: absolute;
        top: 50px;
        width: 80%;
        background: black;
        p{
          font-size: 30px;
          margin-top: 5px;
          cursor: pointer;
          &:hover{
            background-color: #2787F6;
          }
        }
      }
    }
  }
  &__price{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    @include media-breakpoint-down(xs) {
      margin-top: 31px;
    }
    h4{
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      color: #E6E8EB;
      display: flex;
      align-items: center;
      gap: 18px;
      span{
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        /* identical to box height, or 22px */

        text-align: right;

        color: #8995A3;
        @include media-breakpoint-down(xs) {
          font-weight: 500;
          font-size: 16px;
          line-height: 100%;
          transform: translateX(2px);
        }

      }
      .price-event{
        @include media-breakpoint-down(xs) {
          transform: translateX(2px);
          letter-spacing: 1px;
        }
      }
      @include media-breakpoint-down(lg) {
        display: flex;
        justify-content: space-between;
      }
      @include media-breakpoint-down(xs) {
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
      }
    }
    @include media-breakpoint-down(lg) {
      flex-direction: column-reverse;
      gap: 18px;
    }
  }
  
}
</style>