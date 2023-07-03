<template>
  <div class="filtres-title" @click="state = !state">
      <div class="filtres-title-text" :class="{'active': state}">
        <h4>Filters </h4>
        <IconArrow/>
        <span @click="resetFilters" v-if="anyFilterSelected">clear</span>
      </div>
    </div>
    <div class="filtred-select">
      <div class="select" v-for="(item, index) in clone" @click="deleteElem(index, 'mode', 'region', 'status')">
        <p>{{ item.title }}</p>
        <IconClose/>
      </div>
    </div>
  <div class="filtred" :class="{'actove': state}">
    <div class="filtred__mode">
      <h4>Game mode</h4>
      <div class="filtred__mode-content">
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
    <div class="filtred__status">
      <h4>Status</h4>
      <div class="filtred__status-content">
        <div class="status" 
          v-for="(item, index) in status"
          :class="{ active: item.state }"
          @click="toggleStateStatus(index)">
            <TwoState v-if="item.state"/>
            <OneState v-else/>
            <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="filtred__region">
      <h4>Server region</h4>
      <div class="filtred__region-content">
        <div class="region" 
          v-for="(item, index) in region"
          :class="{ active: item.state }"
          @click="toggleStateRegion(index)">
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
import IconClose from '@/assets/icons/tournirs/Close.vue'
import {ref} from 'vue'

const state = ref(false)

const emits = defineEmits(['toggleStateStatus', 'click', 'toggleStateRegion', 'toggleState', 'deleteElem', 'resetFilters']);
const props = defineProps({
  mode: {
    type: Array,
    default: [],
    required: true,
  },
  region: {
    type: Array,
    default: [],
    required: true,
  },
  clone:{
    type: Array,
    default: [],
    required: true,
  },
  status:{
    type: Array,
    default: [],
    required: true,
  },
  anyFilterSelected: {
    type: Boolean,
    default: false,
    required: true,
  }
})

function toggleState(index) {
  // mode.value[index].state = !mode.value[index].state;
  emits('toggleState', index);
}


function toggleStateStatus(index, arrayName){
  // status.value[index].state = !status.value[index].state;
  emits('toggleStateStatus', index, arrayName);
}

function toggleStateRegion(index){
  // region.value[index].state = !region.value[index].state;
  emits('toggleStateRegion', index);
}

function deleteElem(index){
  emits('deleteElem', index, 'mode', 'region', 'status');
}
function resetFilters(){
  emits('resetFilters');
}
</script>


<style lang="scss">
.filtres-title{
  margin-top: 17px;
  .filtres-title-text{
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    h4{
      color: #F5F5F5;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
    }
    svg{
      transition: .15s;
    }
    span{
      position: absolute;
      right: 0;
      bottom: 5px;
      color: #B83333;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      text-transform: uppercase;
    }
  }
  .filtres-title-text.active{
    svg{
      transform: rotate(180deg);
      transition: .15s;
    }
  }
}

.filtred{
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: .15s;
  &-select{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
    .select{
      display: flex;
      align-items: center;
      padding: 16px 18px;
      gap: 12px;
      background: #141A24;
      padding-right: 19px;
      p{
        color: #0A68F5;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
  &__mode{
    margin-top: 14px;
    h4{
      color: #F5F5F5;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
    }
    &-content{
      .mode{
        display: flex;
        align-items: center;
        margin-top: 12px;
        gap: 8px;
        p{
          color: #67707A;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          text-transform: uppercase;
        }
      }
      .mode:nth-child(2){
        margin-top: 18px;
      }
      .mode:nth-child(3){
        margin-top: 18px;
      }
      .mode.active{
        p{
          color: #0A68F5;
        }
      }
    }
  }
  &__status{
    margin-top: 25px;
    h4{
      color: #F5F5F5;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
    }
    &-content{
      margin-top: 12px;
      .status{
        display: flex;
        align-items: center;
        gap: 8px;
        p{
          color: #67707A;
          font-size: 14px;
          font-family: Rubik;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          text-transform: uppercase;
        }
      }
      .status:nth-child(2){
        margin-top: 10px;
      }
      .status.active{
        p{
          color: #0A68F5;
        }
      }
    }
  }
  &__region{
    margin-top: 22px;
    h4{
      color: #F5F5F5;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
    }
    &-content{
      margin-top: 12px;
      .region{
        display: flex;
        align-items: center;
        gap: 8px;
        p{
          color: #67707A;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          text-transform: uppercase;
        }
      }
      .region.active{
        p{
          color: #0A68F5
        }
      }
      .region:nth-child(2){
        margin-top: 18px;
      }
      .region:nth-child(3){
        margin-top: 18px;
      }
      .region:nth-child(4){
        margin-top: 18px;
      }
      .region:nth-child(5){
        margin-top: 18px;
      }
      .region:nth-child(6){
        margin-top: 18px;
      }
    }
  }
}
.filtred.actove{
  max-height: unset;
  opacity: 1;
  overflow: auto;
  transition: .15s;
}
</style>