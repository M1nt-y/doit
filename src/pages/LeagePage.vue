<template>
<main class="main leage-id">
  <div class="container">
    <div class="leage-id__header">
      <div class="leage-id__header-title">
        <h3>{{ games[indexGames].game }}:  <span>{{ leage[indexLeage].title }} League</span></h3>
        <p>2020-03-12 20:00 CEST - Season 1</p>
      </div>
      <div class="leage-id__header-img">
        <img src="@/assets/images/craft.png" alt="">
      </div>
    </div>
    <div class="leage-id__content">
      <div class="leage-id__content-table">
        <div class="tabs">
          <div 
          class="info" v-for="(item, index) in tabs"
          :class="{'_active': selectedBtn == index}"
          >
            <p @click="addTab(index)">{{ item }}</p>
          </div>
        </div>
        <OneTab/>
      </div>
      <div class="leage-id__content-info">
        <OneRight/>
      </div>
    </div>
  </div>
</main>
</template>

<script setup>
import OneTab from '@/components/Leagues/OneTab.vue'
import OneRight from '@/components/Leagues/OneRight.vue'
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()

const games = [
  {
    game: 'Dota ll',
    gamesPage: 'dota',
  },
  {
    game: 'CS:GO',
    gamesPage: 'cs-go',
  },
  {
    game: 'StarCraft II',
    gamesPage: 'starcraft',
  },
  {
    game: 'WarCraft lll',
    gamesPage: 'warcraft',
  },
  {
    game: 'FIFA 2020',
    gamesPage: 'fifa',
  },
  {
    game: 'Valorant',
    gamesPage: 'valorant',
  },
  {
    game: 'BrawlStars',
    gamesPage: 'brawlstars',
  },
  {
    game: 'StarCraft ll',
    gamesPage: 'starcraft',
  },
  {
    game: 'StarCraft ll',
    gamesPage: 'starcraft',
  },
]
const leage = [
  {
    leage: 'europe',
    title: 'Europe',
  },
  {
    leage: 'grandmaster',
    title: 'Grandmaster',
  },
  {
    leage: 'team',
    title: 'Team',
  },
]

const indexGames = ref(null);
const indexLeage = ref(null);

watchEffect(() => {
  indexGames.value = games.findIndex(item => item.gamesPage === route.params.id);
  indexLeage.value = leage.findIndex(item => item.leage === route.params.leageid);
});

const tabs = ['Info', 'Play', 'Stadings', 'Rules', 'Support']

const selectedBtn = ref(0);

function addTab(index){
  selectedBtn.value = index
}




</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.leage-id{
  margin-top: 20px;
  .container{
      max-width: 1380px;
      padding-left: 95px;
      padding-right: 66px;
      @include media-breakpoint-down(lg) {
        width: 100%;
        margin: 0 auto;
        padding: 0 23px;
        max-width: 1216px;
        position: relative;
      }
    }
  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &-title{
      margin-top: 15px;
      h3{
        color: #F5F5F5;
        font-size: 48px;
        font-weight: 700;
        line-height: 56px;
        @include media-breakpoint-down(lg){
          font-size: 35px;
        }
        @include media-breakpoint-down(sm){
          font-size: 15px;
          line-height: 25px;
        }
        span{
          margin-left: 10px;
          @include media-breakpoint-down(sm){
            margin-left: 5px;
          }
        }
      }
      p{
        color: #A3A3A3;
        font-size: 23px;
        font-weight: 700;
        transform: translateY(4px);
        @include media-breakpoint-down(lg){
          transform: none;
          font-size: 18px;
        }
        @include media-breakpoint-down(sm){
          font-size: 10px;
        }
      }
    }
    &-img{
      transform: translateY(-5px);
      @include media-breakpoint-down(lg){
        transform: none;
        width: 200px;
      }
      @include media-breakpoint-down(sm){
        width: 100px;
      }
    }
    &::after{
      content: '';
      position: absolute;
      left: -10px;
      bottom: -8px;
      width: 99.6%;
      height: 1px;
      background: #ccc;
      @include media-breakpoint-down(lg) {
        left: 0;
        width: 100%;
      }
    }
    
  }
  &__content{
    margin-top: 58px;
    transform: translateX(-12px);
    display: flex;
    justify-content: space-between;
    width: 100%;
    &-table{
      max-width: 66.1%;
      width: 100%;
      .tabs{
        display: flex;
        width: 100%;
        p{
          color: #67707A;
          font-weight: 300;
          font-size: 16px;
          
        }
        .info{
          padding: 15px 0px;
          padding-top: 13px;
          text-align: center;
          cursor: pointer;
        }
        .info:nth-child(1){ 
          max-width: 109px;
          width: 100%;
        }
        .info:nth-child(2){
          max-width: 160px;
          width: 100%;
          p{
            transform: translateY(2px);
          }
        }
        .info:nth-child(3){
          max-width: 125px;
          width: 100%;
          p{
            transform: translateY(3px);
          }
        }
        .info:nth-child(4){
          max-width: 153px;
          width: 100%;
          p{
            transform: translateY(3px);
          }
        }
        .info:nth-child(5){
          max-width: 109px;
          width: 100%;
          p{
            transform: translateY(3px);
          }
        }
        .info._active{
          outline: 1px solid #565656;
          position: relative;
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
          p{
            font-weight: 500;
            color: #F5F5F5;
          }
        }
      }
    }
  }
}

</style>