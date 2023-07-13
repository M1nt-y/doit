<template>
<main class="main comand">
  <div class="container">
    <div class="comand__content">
      <div class="comand__content-card" v-for="item in players">
        <div class="comand__content-img">
          <picture>
            <source type="image/webp" :srcset="item.imgWEBP">
            <source type="image/png" :srcset="item.imgPNG">
            <img class="card__content-img" :src="item.imgWEBP" alt="">
          </picture>
        </div>
        <div class="comand__content-text">
          <h5><JapanIcons/> {{ item.name }}</h5>
          <p>{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script setup>
import PlayerWEBP from '@/assets/images/players.png?w=889&h=500&format=webp'
import JapanIcons from '@/assets/icons/country/Japan.vue'

const players = [
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'unknown',
  }
]
</script>



<style lang="scss">
.comand{
  margin-bottom: 50px;
  &__content{
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    @media(max-width: 1243px){
      gap: 15px
    }
    @media(max-width: 440px){
      margin-top: 35px;
    }
    &-card{
      @media(max-width: 1863px){
        width: 120px;
      }
      @media(max-width: 440px){
        width: 157px;
      }
      img{
        width: 170x;
        height: 170px;
        @media(max-width: 1863px){
          width: 100%;
          height: 120px;
        }
        @media(max-width: 440px){
          height: 149px;
        }
      }
    }
    &-text{
      background: #151A1F;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 12px;
      @media(max-width: 440px){
        padding-left: 11px;
      }
      h5{
        display: flex;
        align-items: center;
        color: var(--dce-1-e-6, #E6E8EB);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        gap: 8px;
        @media(max-width: 1863px){
          font-size: 10px;
        }
        @media(max-width: 440px){
          flex-direction: column;
          align-items: flex-start;
          font-size: 14px;
        }
      }
      p{
        margin-top: 2px;
        color: #525C66;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
}
</style>