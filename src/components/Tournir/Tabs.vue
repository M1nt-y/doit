<template>
  <div class="tab-tournir">
    <div class="tab-tournir__btn">
      <div class="btn" v-for='(btn, idx) in tabs'
      :class="{'active': activeTab == idx}"
      @click="addActive(idx)">
      {{ btn }}
    </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const tabs = ['Info', 'Bracket', 'Players', 'Rules', 'Support']
const activeTab = ref(0);
function addActive(idx){
  activeTab.value = idx;
}
</script>

<style lang="scss">
.tab-tournir{
  margin-top: 24px;
  overflow: scroll;
  &__btn{
    display: flex;
    align-items: center;
    min-width: 400px;
    .btn{
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      line-height: 100%;
      background: #1A222D;
      padding-top: 15px;
      padding-bottom: 15px;
      text-align: center;
    }
    .btn:nth-child(1){
      width: 60px;
    }
    .btn:nth-child(2){
      margin-left: 5px;
      width: 75px;
    }
    .btn:nth-child(3){
      margin-left: 5px;
      width: 80px;
    }
    .btn:nth-child(4){
      margin-left: 5px;
      width: 60px;
    }
    .btn:nth-child(5){
      margin-left: 5px;
      width: 85px;
    }
    .btn.active{
      border-radius: 2px;
      background: var(--primary-gradient, linear-gradient(180deg, #2788F6 0%, #0960E0 100%));
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
}
.tab-tournir::-webkit-scrollbar { 
  width: 0; 
}
</style>