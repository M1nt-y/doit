<template>
  <div class="filtred">
    <div class="filtred-title">
      <div class="filtred-title-text">
        <h4>Filters</h4>
        <IconArrow/>
      </div>
    </div>
    <div class="fltred__mode">
      <h4>Game mode</h4>
      <div class="fltred__mode-content">
        <div class="mode" 
          v-for="(item, index) in mode"
          :class="{ active: item.state }"
          @click="toggleState(index)">
            <TwoState v-if="item.state"/>
            <OneState v-else/>
            <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrow from '@/assets/icons/tournirs/Arrow.vue'
import OneState from '@/assets/icons/tournirs/OneState.vue'
import TwoState from '@/assets/icons/tournirs/TwoState.vue'
import {ref} from 'vue'

const mode = ref([
  {
    title: '1V1',
    content: 1,
    state: false,
  },
  {
    title: '2V2',
    content: 2,
    state: false,
  },
  {
    title: '5V5',
    content: 3,
    state: false,
  },
])
function toggleState(index) {
  mode.value[index].state = !mode.value[index].state;
}
</script>


<style lang="scss">
.filtred{
  margin-top: 16px;
  &-title{
    &-text{
      display: flex;
      align-items: center;
      gap: 4px;
      h4{
        color: #F5F5F5;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
      }
      svg{
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>