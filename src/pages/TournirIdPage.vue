<template>
<main class="main tournir-id">
  <div class="container">
    <div class="tournir-id__header">
      <div class="tournir-id__header-back">
        <router-link :to="{ path: `/tournir` }">
        <IconBack/>
        <p>Back</p>
        </router-link>
      </div>
      <div class="tournir-id__header-logo">
        <picture>
          <source type="image/webp" :srcset="DotaLogoWebp">
          <source type="image/png" :srcset="DotaLogo">
          <img class="card__img" :src="DotaLogoWebp" alt="">
        </picture>
      </div>
    </div>
    <div class="tournir-id__content">
      <div class="tournir-id__content-left">
        <div class="header">
          <div class="img">
            <IcomFlowers/>
          </div>
          <div class="text">
            <h4>MK11 (PS4) Open Cup #3 Russia</h4>
            <p>52 players signed up</p>
          </div>
        </div>
        <div class="tabs">
          <div class="item" v-for="(item, idx) in tabs" :class="{'active': activeTab == idx}" @click="selectTab(idx)">
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="content" style="border-top: 2px solid white;">

        </div>
      </div>
      <div class="tournir-id__content-right">

      </div>
    </div>
  </div>
</main>
</template>

<script setup>
import IconBack from '@/assets/icons/tournirs/Back.vue'
import IcomFlowers from '@/assets/icons/tournirs/Flowers.vue'
import DotaLogoWebp from '@/assets/images/dota_logo.png?w=366&h=198&format=webp'
import DotaLogo from '@/assets/images/dota_logo.png'
import {ref} from 'vue'

const tabs = ['Info', 'Bracket', 'Players', 'Rules', 'Support']
const activeTab = ref(0);

function selectTab(idx){
  activeTab.value = idx;
}

</script>

<style lang="scss">
.tournir-id{
  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 58px;
    &-back{
      a{
        display: flex;
        align-items: center;
        margin-top: 7px;
        margin-left: 3px;
        gap: 10px;
        p{
          color: var(--light-blue, #9FB1CC);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }
  }
  &__content{
    display: flex;
    margin-top: 10px;
    &-left{
      max-width: 812px;
      width: 100%;
      .header{
        display: flex;
        padding-top: 40px;
        padding-left: 42px;
        padding-bottom: 42px;
        width: 100%;
        border: 2px solid #20252B;
        gap: 15px;
        .text{
          h4{
            color: #F5F5F5;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          p{
            color: #67707A;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            transform: translateY(-2px);
          }
        }
      }
      .tabs{
        display: flex;
        margin-top: 30px;
        .item{
          padding-top: 13px;
          padding-bottom: 14px;
          p{
            color: #67707A;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
        }
       
        .item:nth-child(1){
          max-width: 110px;
          width: 100%;
          p{
            transform: translateY(6px);
          }
        }
        .item:nth-child(2){
          max-width: 150px;
          width: 100%;
          p{
            transform: translateY(6px);
          }
        }
        .item:nth-child(3){
          max-width: 110px;
          width: 100%;
          p{
            transform: translateY(6px);
          }
        }
        .item:nth-child(4){
          max-width: 150px;
          width: 100%;
          p{
            transform: translateY(6px);
          }
        }
        .item:nth-child(5){
          max-width: 110px;
          width: 100%;
          p{
            transform: translateY(6px);
          }
        }
        .item.active{
          border: 2px solid #20252B;
          border-bottom: 0;
          p{
            font-weight: 500;
            color: #F5F5F5;
            transform: none;
            position: relative;
            &::after{
              position: absolute;
              content: '';
              bottom: -18px;
              left: 0;
              width: 100%;
              height: 5px;
              background-color: #0F1215;;
            }
          }
        }
      }
    }
  }
}
</style>
