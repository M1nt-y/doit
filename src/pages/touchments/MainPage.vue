<template>
  <main class="main tournir-id">
    <div class="container">
      <div class="tournir-id__header">
        <div class="tournir-id__header-back">
          <IconBack/>
          <p>Back</p>
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
          <div class="tabs" v-if="!isMobile">
            <div class="item" v-for="(item, idx) in tabs" :class="{'active': activeTab == item.query}" @click="selectTab(item.query)">
              <p>{{ item.title }}</p>
            </div>
          </div>
          <div class="tab-mobile" v-else>
            <TabsElement 
            class="tab-element"
            :tabs="tabs"
            :activeTab="activeTab"
            @changeTab="selectTab"
            />
          </div>
          <div class="content" v-if="activeTab == 'info'">
            <div class="block">
              <div class="element">
                <div class="top">
                  <IconTimer/>
                  <h5>Start time</h5>
                </div>
                <p>Today, 05 oct 2019 at 19:45 CEST</p>
              </div>
              <div class="element">
                <div class="top">
                  <IconYes/>
                  <h5>Check in time</h5>
                </div>
                <p>Today, 05 oct 2019 at 17:30 CEST</p>
              </div>
              <div class="element">
                <div class="top">
                  <IconNotes/>
                  <h5>Additional requirements</h5>
                </div>
                <p>At least 18 years old Linked PSN Account PS4</p>
              </div>
            </div>
            <div class="block">
              <div class="element">
                <div class="top">
                  <IconGames/>
                  <h5>Game</h5>
                </div>
                <p>Mortal Kombat 11 (PS4)</p>
              </div>
              <div class="element">
                <div class="top">
                  <IconMode/>
                  <h5>Mode</h5>
                </div>
                <p>1 on 1 - single elimination BO1 | Final BO3</p>
              </div>
              <div class="element">
                <div class="top">
                  <IconLobby/>
                  <h5>Lobby</h5>
                </div>
                <p>Game chat: OCR3</p>
              </div>
            </div>
            <div class="block">
              <div class="element">
                <div class="top">
                  <IconDollar/>
                  <h5>Prize pool</h5>
                </div>
                <p>100 USD </p>
              </div>
              <div class="element">
                <div class="top">
                  <IconWarning/>
                  <h5>VETO</h5>
                </div>
                <p>ABABA <span style="display: block;"></span> Start player with higher seed</p>
              </div>
              <div class="element">
                <button>More rules</button>
              </div>
            </div>
          </div>
          <div class="brackets" v-if="activeTab == 'bracket'">
            <BracketComponents/>
          </div>
        </div>
        <div class="tournir-id__content-right">
          <div class="content">
            <div class="header">
              <h4>Requirements</h4>
            </div>
            <div class="info">
              <div class="text">
                <h5>Minimum age</h5>
                <p>At least 18 years old</p>
              </div>
              <div class="text">
                <h5>Residence</h5>
                <p>More info</p>
              </div>
              <div class="text">
                <h5>PSN account</h5>
                <p>Register your name ID</p>
              </div>
              <div class="text">
                <h5>Play</h5>
                <p>Please log in to take part <span style="display: block;"></span>in this tournament.</p>
              </div>
            </div>
            <div class="btn">
              <h5>Sign up closes in 43 minutes</h5>
              <button>Log in / Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import IconBack from '@/assets/icons/tournirs/Back.vue'
  import IcomFlowers from '@/assets/icons/tournirs/Flowers.vue'
  import IconTimer from '@/assets/icons/tournirs/ics/Time.vue'
  import IconYes from '@/assets/icons/tournirs/ics/Yes.vue'
  import IconNotes from '@/assets/icons/tournirs/ics/Notes.vue'
  import IconGames from '@/assets/icons/tournirs/ics/Games.vue'
  import IconMode from '@/assets/icons/tournirs/ics/Mode.vue'
  import IconLobby from '@/assets/icons/tournirs/ics/Lobby.vue'
  import IconDollar from '@/assets/icons/tournirs/ics/Dollar.vue'
  import IconWarning from '@/assets/icons/tournirs/ics/Warning.vue'
  import DotaLogoWebp from '@/assets/images/dota_logo.png?w=366&h=198&format=webp'
  import DotaLogo from '@/assets/images/dota_logo.png'
  import TabsElement from '@/components/Tournir/TabsMain.vue'

  // компоненты
  import BracketComponents from '@/components/Tournir/Bracket.vue'
  import {ref} from 'vue'
  
  const tabs = ref([
    {
      title: 'Info',
      query: 'info',
    },
    {
      title: 'Bracket',
      query: 'bracket',
    },
    {
      title: 'Players',
      query: 'players',
    },
    {
      title: 'Rules',
      query: 'rules',
    },
    {
      title: 'Support',
      query: 'support',
    },
  ])
  const router = useRouter();
  const activeTab = ref('info');
  activeTab.value = router.currentRoute.value.query.param || 'info';  
  
  function selectTab(query) {
  if (query === 'info') {
    activeTab.value = query;

    const currentQuery = {}; // Очищаем все query параметры
    router.push({ query: currentQuery });
  } else {
    activeTab.value = query;

    const currentQuery = { ...router.currentRoute.value.query };
    currentQuery.param = query;
    router.push({ query: currentQuery });
  }
}
  
  const isMobile = ref(window.innerWidth < 768);
  
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 400;
  });
  
  
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';
  @import '@/assets/scss/media-breakpoints.scss';
  .tournir-id{
    margin-bottom: 50px;
    .container{
      padding-right: 0;
    }
    &__header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 23px;
      margin-top: 58px;
      @include media-breakpoint-down(md){
        margin-top: -12px;
        margin-left: -5px;
      }
      &-back{
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
      &-logo{
        @include media-breakpoint-down(md){
          display: none;
        }
      }
    }
    &__content{
      display: flex;
      margin-top: 10px;
      gap: 30px;
      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
      &-left{
        max-width: 812px;
        width: 100%;
        @include media-breakpoint-down(md) {
          max-width: 100%;
        }
        .header{
          display: flex;
          padding-top: 40px;
          padding-left: 42px;
          padding-bottom: 42px;
          width: 100%;
          border: 2px solid #20252B;
          padding-right: 23px;
          gap: 15px;
          .text{
            h4{
              color: #F5F5F5;
              font-size: 32px;
              font-style: normal;
              font-weight: 500;
              @include media-breakpoint-down(md){
                font-size: 18px;
                transform: translateY(-3px) translateX(-3px);
              }
            }
            p{
              color: #67707A;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              transform: translateY(-2px);
              @include media-breakpoint-down(md){
                font-size: 12px;
                transform: translateY(-2px) translateX(-3px);
              }
            }
          }
          @include media-breakpoint-down(md){
            border: none;
            padding: 0;
            margin-top: 8px;
          }
          .img{
            svg{
              @include media-breakpoint-down(md){
              width: 40px;
              height: 40px;
            }
            }
            
          }
        }
        .tabs{
          display: flex;
          padding-right: 23px;
          margin-top: 30px;
          @include media-breakpoint-down(md){
            margin-top: 24px;
          }
          .item{
            padding-top: 13px;
            padding-bottom: 14px;
            p{
              color: #67707A;
              text-align: center;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              @include media-breakpoint-down(md){
                font-size: 12px;
              }
            }
            @include media-breakpoint-down(md){
              padding-top: 5px;
              padding-bottom: 5px;
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
            @include media-breakpoint-down(md){
              border: 2px solid #20252B;
            }
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
                z-index: 5;
                background-color: #0F1215;
                @include media-breakpoint-down(md){
                  height: 0;
                  width: 0;
                }
              }
            }
          }
        }
        .content{
          border: 2px solid #20252B;
          padding-top: 42px;
          padding-left: 39px;
          // padding-right: 23px;
          display: flex;
          gap: 40px;
          padding-bottom: 14px;
          @include media-breakpoint-down(md) {
            flex-direction: column;
            border: none;
            padding-left: 0;
            gap: 0px;
            padding-top: 13px;
          }
          .block{
            .element{
              .top{
                display: flex;
                align-items: center;
                gap: 8px;
                h5{
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  text-transform: uppercase;
                  @include media-breakpoint-down(md) {
                    font-size: 14px;
                  }
                }
              }
              p{
                color: #67707A;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-top: 8px;
                @include media-breakpoint-down(md) {
                    font-size: 14px;
                    margin-top: 6px;
                }
              }
            }
            .element:nth-child(2){
              margin-top: 20px;
            }
            .element:nth-child(3){
              margin-top: 50px;
              @include media-breakpoint-down(md) {
                margin-top: 22px;
              }
              p{
                max-width: 152px;
              }
            }
  
          }
          .block:nth-child(2){
            transform: translateY(-2px);
            @include media-breakpoint-down(md) {
              margin-top: 8px;
            }
            .element{
              p{
                margin-top: 5px;
              }
            }
            .element:nth-child(2){
              margin-top: 25px;
              @include media-breakpoint-down(md) {
                margin-top: 20px;
              }
              p{
                max-width: 210px;
                margin-top: 8px;
              }
            }
            .element:nth-child(3){
              margin-top: 28px;
              @include media-breakpoint-down(md) {
                margin-top: 24px;
              }
            }
          }
          .block:nth-child(3){
            transform: translateX(-20px);
            @include media-breakpoint-down(md) {
              transform: none;
              margin-top: 25px;
            }
            .element:nth-child(1){
              transform: translateY(-5px);
            }
            .element:nth-child(2){
              transform: translateY(-5px);
              @include media-breakpoint-down(md) {
                margin-top: 22px;
              }
            }
            .element:nth-child(3){
              margin-top: 45px;
              @include media-breakpoint-down(md) {
                margin-top: 28px;
              }
              button{
                border-radius: 2px;
                background: #1A222D;
                padding: 12px 21px;
                color: #FFF;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                text-transform: uppercase;
                @include media-breakpoint-down(md) {
                  width: 100%;
                  padding-top: 15px;
                }
              }
            }
          }
        }
      }
      &-right{
        padding-right: 23px;
        max-width: 328px;
        @include media-breakpoint-down(md) {
          max-width: 100%;
        }
        width: 100%;
        .content{
          border: 2px solid #20252B;
          @include media-breakpoint-down(md) {
            border: none;
          }
          .header{
            padding-left: 28px;
            padding-top: 20px;
            padding-bottom: 25px;
            border-bottom: 2px solid #20252B;
            h4{
              color: #F5F5F5;
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              @include media-breakpoint-down(md) {
                font-size: 22px;
              }
            }
            @include media-breakpoint-down(md) {
                padding: 0;
                border: none;
              }
          }
          .info{
            padding-top: 24px;
            padding-left: 28px;
            padding-bottom: 29px;
            border-bottom: 2px solid #20252B;
            @include media-breakpoint-down(md) {
              padding-top: 20px;
              padding-left: 0px;
              border-bottom: none;
            }
            h5{
              color: #F5F5F5;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              text-transform: uppercase;
              @include media-breakpoint-down(md) {
                font-size: 14px;
              }
            }
            p{
              margin-top: 6px;
              color: #67707A;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              @include media-breakpoint-down(md) {
                font-size: 14px;
              }
            }
            .text:nth-child(2){
              margin-top: 18px;
              @include media-breakpoint-down(md) {
                margin-top: 20px;
              }
              p{
                color: #0A68F5;
              }
            }
            .text:nth-child(3){
              margin-top: 18px;
              @include media-breakpoint-down(md) {
                margin-top: 20px;
              }
            }
            .text:nth-child(4){
              margin-top: 16px;
              transform: translateX(2px);
              @include media-breakpoint-down(md) {
                margin-top: 20px;
                transform: none;
              }
              p{
                margin-top: 10px;
                  @include media-breakpoint-down(md) {
                    margin-top: 8px;
                  }
              }
            }
          }
          .btn{
            padding-top: 30px;
            padding-left: 30px;
            padding-bottom: 30px;
            @include media-breakpoint-down(md) {
              padding: 0;
            }
            h5{
              color: #B83333;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
            }
            button{
              margin-top: 17px;
              padding: 14px 0px;
              max-width: 264px;
              width: 100%;
              color: #FFF;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              border-radius: 2px;
              background: var(--primary-gradient, linear-gradient(180deg, #2788F6 0%, #0960E0 100%));
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              @include media-breakpoint-down(md) {
                margin-top: 25px;
                max-width: 100%;
              }
            }
          }
        }
      }
    }
  }
  </style>
  