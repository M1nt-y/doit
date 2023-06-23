<template>
<main class="main faq">
  <div class="container">
   <div class="faq__info">
    <div class="faq__info-select">
      <div class="select" :class="{'_active': stateGames}" @click="stateGames = !stateGames">
        <p>{{ select }}</p>
        <IconArrow/>
      </div>
      <div class="selected" v-if="stateGames">
        <p v-for="item in games" @click="select = item; stateGames = false">{{ item }}</p>
      </div>
    </div>
    <div class="faq__info-input">
      <input type="text" placeholder="How can we help you?">
      <IconSearch/>
    </div>
   </div>
   <div class="faq__content">
    <Desktop 
    :leftArr="desktopState" 
    :activeIndex="activeIndexLeft"
    @update:activeIndex="setActive"/>
   </div>
  </div>
</main>
</template>

<script setup>
import {ref} from 'vue'

import IconArrow from '@/assets/icons/faq/Arrow.vue'
import IconSearch from '@/assets/icons/faq/Search.vue'
import Desktop from '@/components/FAQ/Destop.vue'


const select = ref('Counter Strike GO')

const games = ['Counter Strike GO', "GTA V", 'Borderlands', 'Squad', 'BrawlStars']
const stateGames = ref(false);

const desktopState = [
  'Events, apps, promos, & merch', 
  'Account recovery, safety', 
  'Ranked gameplay, honor', 
  'Lag, low FPS, hardware, & bugs',
  'Login, patching, crashing',
  'League store, gifting',
  'Reporting, suspensions, & bans',
  'Reporting, suspensions, & bans'
]

const activeIndexLeft = ref(0);

function setActive(index) {
  activeIndexLeft.value = index;
}



</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.faq{
  &__info{
    margin-top: 64px;
    display: flex;
    gap: 34px;
    &-select{
      max-width: 400px;
      width: 100%;
      cursor: pointer;
      position: relative;
      .select{
        border: 2px solid #20252B;
        padding: 17px 30px;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: #E6E8EB;
        justify-content: space-between;
        svg{
          transform: translateX(-1px) translateY(-1px);
          transition: .15s;
        }
      }
      .select._active{
        svg{
          transform: rotate(180deg);
        }
      }
      .selected{
        position: absolute;
        border: 2px solid #20252B;
        background: #0F1215;
        left: 0;
        top: 65px;
        width: 100%;
        padding-left: 30px;
        z-index: 10;
        p{
          margin-top: 5px;
          margin-bottom: 5px;
        }
      }
    }
    &-input{
      width: 100%;
      position: relative;
      input{
        width: 100%;
        padding: 21px 15px;
        padding-top: 20px;
        padding-left: 11px;
        padding-bottom: 19px;
        border-radius: 3px;
        border: 2px solid #20252B;
        background: rgba(255, 255, 255, 0);
        color: white;
      }
      svg{
        position: absolute;
        right: 30px;
        bottom: 20px;
      }
      input::placeholder{
        color: #29313B;
        font-size: 16px;
        line-height: 120%;
      }
    }
  }
  &__content{
    display: flex;
    gap: 31px;
    margin-top: 15px;
    &-left{
      max-width: 400px;
      width: 100%;
      border: 2px solid #20252B;
      padding: 0px 20px;
      padding-right: 12px;
      padding-top: 28px;
      padding-bottom: 22px;
      padding-left: 18px;
      p{
        padding-left: 19px;
        color:  #E6E8EB;
        font-size: 18px;
        font-weight: 500;
        padding-top: 13px;
        padding-bottom: 13px;
        cursor: pointer;
        &:hover{
          background: var(--primary-gradient, linear-gradient(180deg, #2788F6 0%, #0960E0 100%));
        }
      }
      p:nth-child(2){
        margin-top: 6px;
        transform: translateX(1px);
      }
      p:nth-child(3),
      p:nth-child(4),
      p:nth-child(5){
        margin-top: 4px;
        transform: translateX(1px);
      }
      p:nth-child(6),
      p:nth-child(7),
      p:nth-child(8){
        margin-top: 5px;
        transform: translateX(1px);
      }
      p.active{
        background: var(--primary-gradient, linear-gradient(180deg, #2788F6 0%, #0960E0 100%));
      }
    }
  }
}


</style>