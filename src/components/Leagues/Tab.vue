<template>
  <div class="tabs-info">
    <div class="header">
      <div class="info" v-for="(item, index) in tabs" @click="addTab(index)" :class="{'_active': activeTab == index}"> <p>{{ item }}</p></div>
    </div>
    <div class="table"></div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const tabs = ['Description', 'NEWS', 'Standings', 'Rules', 'Support']
const activeTab = ref(0);
function addTab(index){
  activeTab.value = index
}

</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.tabs-info{
  margin-top: 65px;
  transform: translateX(-12px);
  .header{
    display: flex;
    width: 100%;
    .info{
      color: #67707A;
      text-align: center;
      font-size: 16px;
      padding: 15px 0px;
      padding-top: 13px;
      @include media-breakpoint-down(md){
        font-size: 12px
      }
      @include media-breakpoint-down(xs){
        font-size: 8px;
      }
      }   
      .info._active{
      color: #F5F5F5;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      outline: 1px solid #565656;
      position: relative;
      @include media-breakpoint-down(md){
        font-size: 12px
      }
      @include media-breakpoint-down(xs){
        font-size: 8px;
      }
      &::after{
            content: '';
            position: absolute;
            left: 0px;
            bottom: -5px;
            background: #0F1215;
            width: 100%;
            height: 10px;
            z-index: 1;

          }
    }
    .info:nth-child(1){
      max-width: 170px;
      width: 100%;
    }
    .info:nth-child(2){
      max-width: 225px;
      width: 100%;
    }
    .info:nth-child(3){
      max-width: 150px;
      width: 100%;
    }
    .info:nth-child(4){
      max-width: 200px;
      width: 100%;
    }
    .info:nth-child(5){
      max-width: 100px;
      width: 100%;
    }
  }
  .table{
    width: 100%;
    height: 330px;
    outline: 1px solid #565656;
  }
}


</style>