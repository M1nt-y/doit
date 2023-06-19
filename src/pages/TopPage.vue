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
    </div>
  </main>
</template>

<script setup>
import IconArrow from '@/assets/icons/Arrow.vue'
import { ref } from 'vue';

const displayYears = ref(false);

function showYears() {
  displayYears.value = !displayYears.value;
}

const yearsArray = ref([2019, 2020, 2021, 2022])
const resultYear = yearsArray.value[0]


</script>

<style lang="scss">

.top {
  &__title {
    margin-top: 63px;
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
      }
      svg{
        transition: .15s;
      }
      svg.active{
        transform: rotate(180deg);
      }
      .years{
        position: absolute;
        top: 50px;
        width: 80%;
        p{
          font-size: 30px;
          cursor: pointer;
          &:hover{
            background-color: #2787F6;
          }
        }
      }
    }
  }
}
</style>