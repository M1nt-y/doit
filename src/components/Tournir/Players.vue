<template>
<div class="players-tor">
   <div class="players-tor__card" v-for="item in players">
    <div class="players-tor__card-img">
      <picture>
        <source type="image/webp" :srcset="item.imgWEBP">
        <source type="image/png" :srcset="item.imgPNG">
        <img class="card__content-img" :src="item.imgWEBP" alt="">
      </picture>
    </div>
    <div class="players-tor__card-text">
      <h4><JapanIcons/> {{ item.name }}</h4>
      <p>{{ item.subtitle }}</p>
    </div>

   </div>
</div>
</template>

<script setup>
import PlayerWEBP from '@/assets/images/players.png?w=889&h=500&format=webp'
import JapanIcons from '@/assets/icons/country/Japan.vue'

const players = [
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'registred',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'Cheked in',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'registred',
  },
  {
    imgPNG: new URL('@/assets/images/players.png', import.meta.url),
    imgWEBP: PlayerWEBP,
    name: 'Fresh young gun',
    subtitle: 'registred',
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
.players-tor{
  padding-top: 52px;
  padding-left: 25px;
  padding-right: 10px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  border: 2px solid #20252B;
  margin-bottom: 50px;
  @media(max-width: 1440px){
    padding: 10px;
    gap: 10px;
  }
  @media(max-width: 500px){
    justify-content: center;
    border: none;
  }
  &__card{
    max-width: 170px;
    width: 100%;
    img{
      max-width: 170px;
      width: 100%;
      height: 170px;
    }

    &-text{
      background: #151A1F;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 15px;
      h4{
        color: var(--dce-1-e-6, #E6E8EB);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 7px
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