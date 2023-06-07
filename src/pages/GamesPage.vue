<template>
<main class="main games">
  <div class="container">

    <div class="games__header">
      <h2>Games</h2>
      <div class="games__header-input">
        <input type="text" placeholder="Search the game">
      </div>
    </div>

    <div class="games__content">
      <div class="card" v-for="card in resultGame" :key="card.id">
        <div class="card__content">
          <img :src="card.imageSrc" alt=""/>
          <p>{{ card.title }}</p>
        </div>
      </div>
    </div>
    
  </div>
</main>
</template>

<script setup>
import { ref, computed } from "vue";

const gamesArray = ref([
  {
    id: 0,
    title: 'Dota ll',
    image: 'dota'
  },
  {
    id: 1,
    title: 'CS:GO',
    image: 'csgo'
  },
  {
    id: 2,
    title: 'StarCraft ll',
    image: 'starcraft'
  },
  {
    id: 3,
    title: 'WarCraft lll',
    image: 'dota'
  },
  {
    id: 4,
    title: 'FIFA 2020',
    image: 'fifa'
  },
  {
    id: 5,
    title: 'Valorant',
    image: 'valorant'
  },
  {
    id: 6,
    title: 'BrawlStars',
    image: 'dota'
  },
  {
    id: 7,
    title: 'StarCraft ll',
    image: 'csgo'
  },
  {
    id: 8,
    title: 'StarCraft ll',
    image: 'starcraft'
  }
])

const resultGame = computed(() => {
  return gamesArray.value.map(card => ({
    ...card,
    imageSrc: `/src/assets/games/${card.image}.png`
  }));
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.games{
  margin-top: 55px;
  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-input{
      max-width: 510px;
      width: 100%;
      @include media-breakpoint-down(lg){
        max-width: 300px;
      }
      input{
        margin-top: 22px;
        padding: 10px 16px;
        border: 2px solid #20252B;
        width: 100%;
        margin-left: 40px;
        background: #0F1215;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #CCCDCD;
        border-radius: 10px;
        @include media-breakpoint-down(lg){
          margin-left: 0px;
        }
      }
    }
  }
  &__content{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    width: 1210px;
    @include media-breakpoint-down(lg){
      width: 100%;
      justify-content: space-between;
    }
    @include media-breakpoint-down(sm){
      flex-wrap: nowrap;
      flex-direction: column;
    }
    .card{
      max-width: 387px;
      max-height: 500px;
      @include media-breakpoint-down(lg){
        max-width: 300px;
      }
      @include media-breakpoint-down(sm){
        width: 100%;
        max-width: 100%;
        
      }
      img{
        display: block;
        width: 100%;
        @include media-breakpoint-down(sm){
          width: 100%;
          aspect-ratio: 1/.56;
        }
      }
      &__content{
        position: relative;

        @include media-breakpoint-down(sm){
          max-height: 128px;
        }
        p{
          position: absolute;
          left: 0;
          bottom: 35px;
          width: 100%;
          text-align: center;
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 100%;
        }
      }
    }
  }
}
</style>