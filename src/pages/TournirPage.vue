<template>
  <main class="main tournir">
    <div class="container">
      <div class="tournir__header">
        <h2>{{ games[index].game }}:  <span>Leagues</span></h2>
        <div class="tournir__header-img">
          <img src="@/assets/images/tournires.png" alt="">
        </div>
      </div>
      <div class="tournir__leage">
        <div class="tournir__leage-title">
          <h6>feature leagues</h6>
        </div>
        <div class="tournaments" >
        <swiper
            class="tournaments__cards"
            :slides-per-view="perView"
            :slides-per-group="perGroup"
            :centered-slides="centeredSlides"
            :space-between="spaceBetween"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
        >
          <swiper-slide v-for="tournament in gamesArray" :key="tournament.id">
            <TheCard :card="tournament" />
          </swiper-slide>
        </swiper>
        <h6 class="more">More</h6>
      </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import Tournament1 from '@/assets/images/tournament-1.png?w=370&h=200&format=webp'
import Tournament2 from '@/assets/images/tournament-2.png?w=370&h=200&format=webp'
import Tournament3 from '@/assets/images/tournament-3.png?w=370&h=200&format=webp'
import TheCard from '@/components/Leagues/CardLeagues.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper core and required modules
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'

import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();
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
    game: 'StarCraft ll',
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

let index = ref(null);
watchEffect(() => {
  index.value = games.findIndex(item => item.gamesPage === route.params.id);
});

const tournaments = [
  {
    id: 0,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-3.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'StarCraft II',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'StarCraft II',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'StarCraft II',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'StarCraft II',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]

const dota = [
  {
    id: 0,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'Dota ll',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'Dota ll',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'Dota ll',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'Dota ll',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]
const cs = [
  {
    id: 0,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'CS:GO',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'CS:GO',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'CS:GO',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'CS:GO',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]
const warcraft = [
  {
    id: 0,
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'WarCraft lll',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'WarCraft lll',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'WarCraft lll',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'WarCraft lll',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]
const fifa = [
  {
    id: 0,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-3.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'Fifa 2020',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'Fifa 2020',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'Fifa 2020',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'Fifa 2020',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]

const valorant = [
  {
    id: 0,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'Valorant',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'Valorant',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'Valorant',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'Valorant',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]

const brawlstars = [
  {
    id: 0,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'BrawlStars',
    leaguage: 'Europe League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 1,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    games: 'BrawlStars',
    leaguage: 'Grandmaster League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 2,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    games: 'BrawlStars',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
  {
    id: 3,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    games: 'BrawlStars',
    leaguage: 'Team League',
    values: [
      {
        key: 'Start',
        value: '07/06'
      },
      {
        key: 'End',
        value: '07/06'
      },
      {
        key: 'Mode',
        value: '5v5'
      },
      {
        key: 'Slots',
        value: '16/30',
        right: true
      },
      {
        key: 'Pool',
        value: '$1500',
        right: true
      }
    ]
  },
]

const gamesArray = computed(() => {
  const games = {
    starcraft: tournaments,
    dota: dota,
    'cs-go': cs,
    warcraft: warcraft,
    fifa: fifa,
    valorant: valorant,
    brawlstars: brawlstars
  };

  const gameId = route.params.id;
  return games[gameId] || [];
});

const mainStore = useMainStore()
const { windowWidth } = storeToRefs(mainStore)




const perView = computed(() => {
  if (windowWidth.value >= 1440) {
    return 3
  } else {
    return 'auto'
  }
})

const perGroup = computed(() => {
  if (windowWidth.value >= 1440) {
    return 3
  } else {
    return 1
  }
})

const spaceBetween = computed(() => {
  if (windowWidth.value <= 577) {
    return 50
  } else {
    return 25
  }
})

const centeredSlides = computed(() => {
  return windowWidth.value <= 577;
})


</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.tournir{
  .container{
    max-width: 1380px ;
    padding-left: 95px;
    padding-right: 55px;
    @include media-breakpoint-down(lg) {
      width: 100%;
      margin: 0 auto;
      padding: 0 23px;
      max-width: 1216px;
      position: relative;
    }
  }
  &__header{
    margin-top: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
      color: #F5F5F5;
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
      transform: translateX(0px);
      display: flex;
      @include media-breakpoint-down(lg) {
        transform: none;
      }
      @include media-breakpoint-down(md) {
        font-size: 20px;
      }
      span{
        display: block;
        transform: translateX(18px);
        @include media-breakpoint-down(md) {
          transform: translateX(10px);
        }
      }
    }
    &-img{
      transform: translateX(-12px);
      @include media-breakpoint-down(lg) {
        transform: none;
      }
      @include media-breakpoint-down(md) {
        width: 100px;
        // height: 100px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  &__leage{
    &-title{
      margin-top: 6px;
      margin-bottom: -35px;
      h6{
        color: #FFF;
        font-size: 23px;
        font-weight: 700;
        line-height: 56px;
      }
    }
    .tournaments {
     position: relative;
      .more{
        position: absolute;
        right: 30px;
        bottom: -10px;
        color: #FFF;
        font-size: 23px;
        font-weight: 700;
        line-height: 56px;
        text-transform: uppercase;
      }

      & .title {
        margin-bottom: 2px;

        @include media-breakpoint-down(xs) {
          margin-left: -8px;
        }
      }

      &__cards {
        margin-top: 34px;
        padding-bottom: 45px;

        @include media-breakpoint-down(xs) {
          margin-top: 30px;
          padding-bottom: 36px;
        }
      }
    }
  }
}
.swiper-slide:nth-child(2){
  .card{
    .card__content-column:nth-child(4){
      p:nth-child(1){
        transform: translateX(-8px);
      }
    }
    .card__content-column:nth-child(5){
      p:nth-child(1){
        transform: translateX(13px);
      }
      p:nth-child(2){
        transform: translateX(-5px);
      }
    }
  }
}
</style>