<template>
  <main class="main games">
    <div class="container">
      <div class="games__header">
        <h2 class="games__header-title">Leagues</h2>
  
        <div class="games__header-input">
          <BaseInput
              placeholder="Search the game"
              v-model="gamesSearch"
          />
        </div>
      </div>
  
      <div class="games__content">
        <div class="card" v-for="game in resultGame" :key="game.id">
          <router-link :to="{ path: `/leage/${game.name}` }">
          <div class="card__content">
            <picture>
              <source type="image/webp" :srcset="game.image">
              <source type="image/png" :srcset="game.fallback">
              <img class="card__content-img" :src="game.image" alt="">
            </picture>
  
            <p>{{ game.title }}</p>
          </div>
          </router-link>
        </div>
      </div>
  
    </div>
  </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Dota from '@/assets/images/dota.png?w=889&h=500&format=webp'
  import Csgo from '@/assets/images/csgo.png?w=889&h=500&format=webp'
  import Fifa from '@/assets/images/fifa.png?w=889&h=500&format=webp'
  import Valorant from '@/assets/images/valorant.png?w=889&h=500&format=webp'
  import Starcraft from '@/assets/images/starcraft.png?w=889&h=500&format=webp'
  import BaseInput from '@/components/UI/BaseInput.vue'
  
  
  const gamesSearch = ref('')
  
  const gamesArray = ref([
    {
      id: 0,
      title: 'Dota ll',
      name: 'dota',
      image: Dota,
      fallback: new URL('../assets/images/dota.png', import.meta.url)
    },
    {
      id: 1,
      title: 'CS:GO',
      name: 'cs-go',
      image: Csgo,
      fallback: new URL('../assets/images/csgo.png', import.meta.url)
    },
    {
      id: 2,
      title: 'StarCraft ll',
      name: 'starcraft',
      image: Starcraft,
      fallback: new URL('../assets/images/starcraft.png', import.meta.url)
    },
    {
      id: 3,
      title: 'WarCraft lll',
      name: 'warcraft',
      image: Dota,
      fallback: new URL('../assets/images/dota.png', import.meta.url)
    },
    {
      id: 4,
      title: 'FIFA 2020',
      name: 'fifa',
      image: Fifa,
      fallback: new URL('../assets/images/fifa.png', import.meta.url)
    },
    {
      id: 5,
      title: 'Valorant',
      name: 'valorant',
      image: Valorant,
      fallback: new URL('../assets/images/valorant.png', import.meta.url)
    },
    {
      id: 6,
      title: 'BrawlStars',
      name: 'brawlstars',
      image: Dota,
      fallback: new URL('../assets/images/dota.png', import.meta.url)
    },
    {
      id: 7,
      title: 'StarCraft ll',
      name: 'starcraft',
      image: Csgo,
      fallback: new URL('../assets/images/csgo.png', import.meta.url)
    },
    {
      id: 8,
      title: 'StarCraft ll',
      name: 'starcraft',
      image: Starcraft,
      fallback: new URL('../assets/images/starcraft.png', import.meta.url)
    }
  ])
  
  const resultGame = computed(() => {
    if (!gamesSearch.value) {
      return gamesArray.value
    } else {
      return gamesArray.value.filter(game => game.title.toLowerCase().includes(gamesSearch.value.toLowerCase()))
    }
  })
  </script>
  
  <style lang="scss">
  @import '@/assets/scss/variables.scss';
  @import '@/assets/scss/media-breakpoints.scss';
  
  .games{
    margin-top: 55px;
  
    @include media-breakpoint-down(md) {
      margin-top: 15px;
    }
  
    & .container {
      padding: 0;
  
      @include media-breakpoint-down(lg) {
        padding: 0 23px;
      }
    }
  
    &__header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform: translateX(25px);
      @include media-breakpoint-down(lg) {
        transform: none;
      }
      @include media-breakpoint-down(xs) {
        flex-direction: column;
        align-items: flex-start;
      }
  
      &-title {
        font-size: 44px;
        transform: translateY(-10px);
        @include media-breakpoint-down(lg) {
          transform: none;
        }
      }
  
      &-input{
        width: 100%;
        max-width: 510px;
        margin-top: 22px;
        margin-left: 40px;
        transform: translateX(-10px) translateY(-1px);
  
        @include media-breakpoint-down(lg) {
          max-width: 300px;
          transform: none;
        }
  
        @include media-breakpoint-down(xs) {
          margin-left: 0;
          margin-top: 32px;
          margin-bottom: -16px;
          max-width: unset;
        }
  
        input{
          color: #CCCDCD;
          border: 2px solid #20252B;
          border-radius: 4px;
          &::placeholder{
            transform: translateX(-2px);
          }
  
          @include media-breakpoint-down(lg) {
            margin-left: 0;
          }
  
          @include media-breakpoint-down(xs) {
            padding: 13px 10px;
          }
  
          &:hover {
            background: #121F33;
            border: 2px solid #627CA3;
          }
  
          &:focus {
            color: #E6E6E6;
            background: #16263D;
            border: 2px solid #185EC7;
          }
  
          &:disabled {
            color: #98A4B5;
            background: #121F33;
            border: 2px solid #121F33;
          }
        }
      }
    }
  
    &__content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0px;
      max-width: 1210px;
      transform: translateX(25px);
      @include media-breakpoint-down(lg) {
        transform: translateX(0px);
      }
      @include media-breakpoint-down(sm) {
        flex-wrap: nowrap;
        flex-direction: column;
        margin-top: 20px;
      }
  
      .card {
        max-width: 387px;
        margin-right: 21px;
        margin-bottom: 21px;
        width: calc(100% / 3 - 7px);
        a{
          width: 100%;
        }
        &:nth-child(1),
        &:nth-child(4),
        &:nth-child(7) {
  
          img {
            object-position: unset;
          }
        }
  
        &:nth-child(2),
        &:nth-child(8) {
  
          img {
            object-position: -120px top;
  
            @include media-breakpoint-down(sm) {
              object-position: center top;
            }
          }
        }
  
        &:nth-child(5) {
  
          img {
            object-position: -410px top;
  
            @include media-breakpoint-down(lg) {
              object-position: -320px top;
            }
  
            @include media-breakpoint-down(sm) {
              object-position: center top;
            }
          }
        }
  
        &:nth-child(3n) {
          margin-right: 0;
        }
  
        @include media-breakpoint-down(lg) {
          max-width: none;
          margin-right: 20px;
          width: calc(100% / 2 - 10px);
  
          &:nth-child(3n) {
            margin-right: 20px;
          }
  
          &:nth-child(2n) {
            margin-right: 0;
          }
        }
  
        @include media-breakpoint-down(sm) {
          width: 100%;
          max-width: 100%;
          margin-bottom: 8px;
        }
  
        &__content {
          height: 500px;
          position: relative;
  
          @include media-breakpoint-down(sm) {
            height: 380px;
          }
  
          @include media-breakpoint-down(xs) {
            height: 280px;
          }
  
          @include media-breakpoint-down(xxs) {
            height: 128px;
          }
  
          &-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
  
            @include media-breakpoint-down(sm) {
              object-position: center top;
            }
          }
  
          p {
            position: absolute;
            left: 0;
            bottom: 35px;
            width: 100%;
            text-align: center;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 100%;
  
            @include media-breakpoint-down(xxs) {
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
  </style>
  