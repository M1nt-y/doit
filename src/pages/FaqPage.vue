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
      <input type="text" placeholder="How can we help you?" v-model="searchQuerry">
      <IconSearch/>
    </div>
   </div>
   <div class="faq__content">
    <Desktop 
    :leftArr="desktopState" 
    :activeIndex="activeIndexLeft"
    :rightArr="filteredItems"
    :activeAccrodeon="activeAccrodeon"
    @activetab:activeIndex="setActive"
    @open-accordeon="onOpenAccordeon"/>
   </div>
  </div>
</main>
</template>

<script setup>
import {ref, computed} from 'vue'

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

const textAccrodeon = [
  {
    title: 'Where is the region selector?',
    textOne: 'Over the past few months, we’ve been transitioning all players from League of Legends accounts to Riot Accounts. Now that most players have made the transition, we’re going to be taking the next step towards enabling.',
    textTwo: 'Riot’s long-term capabilities towards supporting multiple games: removing the region selector from the login screen. While you can chat with players on other servers, and in other Riot games, you can still only play League of Legends with players in the same region as you.',
    textLast: 'If you wish to Transfer your account, say due to work or moving to a new region, you can do so! Click here to learn more.',
  },
  {
    title: 'So wait ... How do i know what region i am in?',
    textOne: 'Over the past few months, we’ve been transitioning all players from League of Legends accounts to Riot Accounts. Now that most players have made the transition, we’re going to be taking the next step towards enabling.',
    textTwo: 'Riot’s long-term capabilities towards supporting multiple games: removing the region selector from the login screen. While you can chat with players on other servers, and in other Riot games, you can still only play League of Legends with players in the same region as you.',
    textLast: 'If you wish to Transfer your account, say due to work or moving to a new region, you can do so! Click here to learn more.',
  },
  {
    title: 'Will i still be able to play cs go in other regions?',
    textOne: 'Over the past few months, we’ve been transitioning all players from League of Legends accounts to Riot Accounts. Now that most players have made the transition, we’re going to be taking the next step towards enabling.',
    textTwo: 'Riot’s long-term capabilities towards supporting multiple games: removing the region selector from the login screen. While you can chat with players on other servers, and in other Riot games, you can still only play League of Legends with players in the same region as you.',
    textLast: 'If you wish to Transfer your account, say due to work or moving to a new region, you can do so! Click here to learn more.',
  },
  {
    title: 'So wait ... How do i know what region i am in?',
    textOne: 'Over the past few months, we’ve been transitioning all players from League of Legends accounts to Riot Accounts. Now that most players have made the transition, we’re going to be taking the next step towards enabling.',
    textTwo: 'Riot’s long-term capabilities towards supporting multiple games: removing the region selector from the login screen. While you can chat with players on other servers, and in other Riot games, you can still only play League of Legends with players in the same region as you.',
    textLast: 'If you wish to Transfer your account, say due to work or moving to a new region, you can do so! Click here to learn more.',
  },
  {
    title: 'Will i still be able to play cs go in other regions?',
    textOne: 'Over the past few months, we’ve been transitioning all players from League of Legends accounts to Riot Accounts. Now that most players have made the transition, we’re going to be taking the next step towards enabling.',
    textTwo: 'Riot’s long-term capabilities towards supporting multiple games: removing the region selector from the login screen. While you can chat with players on other servers, and in other Riot games, you can still only play League of Legends with players in the same region as you.',
    textLast: 'If you wish to Transfer your account, say due to work or moving to a new region, you can do so! Click here to learn more.',
  }
]
const activeAccrodeon = ref(0)
function onOpenAccordeon(index){
  activeAccrodeon.value = index;
}

const searchQuerry = ref('');
const filteredItems = computed(() => {
  if (searchQuerry.value.trim() === '') {
    return textAccrodeon;
  } else {
    const query = searchQuerry.value.trim().toLowerCase();
    return textAccrodeon.filter(item => item.title.toLowerCase().includes(query));
  }
});



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
    align-items: flex-start;
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
    &-right{
      .accordeon{
        border: 2px solid #20252B;
        width: 100%;
        .accordion-item {
          .flex{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #151A1F;
            border: 2px solid #20252B;
            padding-top: 24px;
            padding-left: 26px;
            padding-right: 26px;
            padding-bottom: 24px;
            cursor: pointer;
            .accordion-title{
              color:  #E6E8EB;
              font-size: 18px;
            }
          }

          .accordion-content{
            max-height: 0;
            overflow: hidden;
            transition: all 0.4s;
            opacity: 0;
            
            p{
              color:  #CCC;
              font-size: 16px;
              font-weight: 100;
              line-height: 160%;

            }
            p:nth-child(2){
              margin-top: 29px;
            }
            p:nth-child(3){
              margin-top: 25px;
              margin-bottom: 5px;
            }
          }
          .accordion-content.active {
            max-height: 500px;
            transition: all 0.4s;
            opacity: 1;
            padding: 30px;
            padding-right: 35px;
          }
        }
        .accordion-item:nth-child(4){
          .flex{
            padding-top: 28px;
            padding-bottom: 28px;
          }
        }
      }
    }
  }
}


</style>