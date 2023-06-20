<template>
  <main class="main">
    <div class="container">
      <div class="first-screen" v-if="!currentUser">
        <Triangles class="first-screen__triangles" />
        <div class="first-screen__content">
          <h1 class="first-screen__title">DOIT<span v-if="!display"> BETA</span></h1>
          <p class="first-screen__text">
            Prepare for your esports career and get ready for awesome tournaments with big prize pools and many fun!
            <br>Register Now!
          </p>
          <div class="first-screen__buttons" v-if="!display">
            <button class="button button-default" @click="showLogin">Login</button>
            <button class="button button-gradient" @click="showSignup">Sign up</button>
          </div>
        </div>
      </div>

      <div class="tournaments">
        <div class="row">
          <h2 class="title">Tournaments</h2>

          <GameTabs v-if="!isMobile" />
        </div>

        <swiper
            class="tournaments__cards"
            :slides-per-view="perView"
            :slides-per-group="perGroup"
            :centered-slides="centeredSlides"
            :space-between="spaceBetween"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
        >
          <swiper-slide v-for="tournament in tournaments" :key="tournament.id">
            <TheCard :card="tournament" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="news">
        <div class="row">
          <h2 class="title">News</h2>

          <GameTabs v-if="!isMobile" />
        </div>

        <swiper
            class="news__cards"
            :slides-per-view="perView"
            :slides-per-group="perGroup"
            :centered-slides="centeredSlides"
            :space-between="spaceBetween"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
        >
          <swiper-slide v-for="item in news" :key="item.id">
            <TheCard :card="item" is-white />
          </swiper-slide>
        </swiper>
      </div>

      <div class="streams">
        <div class="row">
          <h2 class="title">Streams</h2>

          <div class="streams__live" />

          <GameTabs v-if="!isMobile" />
        </div>

        <swiper
            v-if="!isMobile"
            class="streams__swiper"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
        >
          <swiper-slide class="streams__wrapper">
            <img class="streams__img" src="@/assets/images/streams-2.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-1.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-3.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-4.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-5.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-6.png" alt="">
          </swiper-slide>

          <swiper-slide class="streams__wrapper">
            <img class="streams__img" src="@/assets/images/streams-1.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-2.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-3.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-4.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-5.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-6.png" alt="">
          </swiper-slide>

          <swiper-slide class="streams__wrapper">
            <img class="streams__img" src="@/assets/images/streams-1.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-2.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-4.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-6.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-3.png" alt="">

            <img class="streams__img" src="@/assets/images/streams-5.png" alt="">
          </swiper-slide>
        </swiper>

        <swiper
            v-else
            class="streams__swiper"
            :slides-per-view="'auto'"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
        >
          <swiper-slide v-for="stream in streams" :key="stream.id">
            <div class="stream">
              <div class="stream-wrapper">
                <img class="stream__img" :src="stream.image" alt="">

                <div class="stream__viewers">{{ stream.viewers }} зрителей</div>
              </div>

              <div class="stream__content">
                <img :src="stream.logo" alt="">

                <div class="stream__content-main">
                  <h3 class="stream__content-title">{{ stream.title }}</h3>
                  <p class="stream__content-channel">{{ stream.channel }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useMainStore } from '@/stores/main'
import Triangles from '@/assets/icons/Triangles.vue'
import TheCard from '@/components/TheCard.vue'
import GameTabs from '@/components/GameTabs.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper core and required modules
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'


const mainStore = useMainStore()
const authStore = useAuthStore()

const { showLogin, showSignup } = mainStore
const { windowWidth } = storeToRefs(mainStore)
const { currentUser } = storeToRefs(authStore)


const display = computed(() => {
  return windowWidth.value <= 577
})

const spaceBetween = computed(() => {
  if (windowWidth.value <= 577) {
    return 16
  } else {
    return 30
  }
})

const centeredSlides = computed(() => {
  return windowWidth.value <= 577;
})

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

const isMobile = computed(() => {
  return windowWidth.value <= 769
})

const tournaments = [
  {
    id: 0,
    image: new URL('../assets/images/tournament-3.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    values: [
      {
        key: 'Start',
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
    image: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    values: [
      {
        key: 'Start',
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
    image: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    values: [
      {
        key: 'Start',
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
    image: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    values: [
      {
        key: 'Start',
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
    id: 4,
    image: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    values: [
      {
        key: 'Start',
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
    id: 5,
    image: new URL('../assets/images/tournament-3.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    values: [
      {
        key: 'Start',
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
    id: 6,
    image: new URL('../assets/images/tournament-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    values: [
      {
        key: 'Start',
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
    id: 7,
    image: new URL('../assets/images/tournament-3.png', import.meta.url),
    title: 'CS:GO Mirageby tournament',
    values: [
      {
        key: 'Start',
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
    id: 8,
    image: new URL('../assets/images/tournament-1.png', import.meta.url),
    title: 'Tournament’s name will be here, maybe, in two lines',
    values: [
      {
        key: 'Start',
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
  }
]

const news = [
  {
    id: 0,
    image: new URL('../assets/images/news-3.png', import.meta.url),
    title: 'Empire of Sin has been delayed until autumn 2020',
    text: 'Drink up, folks, there\'s been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...'
  },
  {
    id: 1,
    image: new URL('../assets/images/news-2.png', import.meta.url),
    title: 'Your Witcher 3 saves from Steam and GOG will now work on the Nintendo Switch',
    text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
  },
  {
    id: 2,
    image: new URL('../assets/images/news-1.png', import.meta.url),
    title: 'Fortnite map makers recreate Counter-Strike\'s Dust 2',
    text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
  },
  {
    id: 3,
    image: new URL('../assets/images/news-1.png', import.meta.url),
    title: 'Fortnite map makers recreate Counter-Strike\'s Dust 2',
    text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
  },
  {
    id: 4,
    image: new URL('../assets/images/news-2.png', import.meta.url),
    title: 'Your Witcher 3 saves from Steam and GOG will now work on the Nintendo Switch',
    text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
  },
  {
    id: 5,
    image: new URL('../assets/images/news-3.png', import.meta.url),
    title: 'Empire of Sin has been delayed until autumn 2020',
    text: 'Drink up, folks, there\'s been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...'
  },
  {
    id: 6,
    image: new URL('../assets/images/news-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
  },
  {
    id: 7,
    image: new URL('../assets/images/news-3.png', import.meta.url),
    title: 'Empire of Sin has been delayed until autumn 2020',
    text: 'Drink up, folks, there\'s been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...'
  },
  {
    id: 8,
    image: new URL('../assets/images/news-1.png', import.meta.url),
    title: 'Fortnite map makers recreate Counter-Strike\'s Dust 2',
    text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
  }
]

const streams = [
  {
    id: 0,
    image: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Project Mega Kappa! Day 4',
    channel: 'streamer-1',
    viewers: 1500
  },
  {
    id: 1,
    image: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Cool stream title',
    channel: 'cool_streamer',
    viewers: 264
  },
  {
    id: 2,
    image: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Project Ozone 3 Kappa Mode! Day1',
    channel: 'cjabka',
    viewers: 740
  },
  {
    id: 3,
    image: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Dummy stream! Playing something Day 3',
    channel: 'dummy-channel',
    viewers: 333
  },
  {
    id: 4,
    image: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Another dummy stream',
    channel: 'not_cjabka',
    viewers: 24
  }
]

</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.first-screen {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  @include media-breakpoint-down(xs) {
    padding: 0 5px;
    margin-top: -6px;
    height: calc(100vh - 134px);
  }

  &__triangles {
    height: 100%;
  }

  &__content {
    width: 100%;
    padding-top: 13.1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @include media-breakpoint-down(lg) {
      top: 50%;
      padding-top: 0;
      transform: translateX(-50%) translateY(-50%);
      padding-bottom: 14%;
    }

    @include media-breakpoint-down(sm) {
      padding-bottom: 10%;
    }

    @include media-breakpoint-down(xs) {
      padding-bottom: 5%;
    }
  }

  &__title {
    font-size: 125px;
    line-height: 100%;
    text-align: center;
    color: #F5F5F5;

    @include media-breakpoint-down(sm) {
      font-size: 84px;
    }
  }

  &__text {
    margin-top: 16px;
    max-width: 463px;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #CCCCCC;
    -webkit-text-fill-color: #CCCCCC;
    -webkit-text-stroke: 0.5px #000000;

    @include media-breakpoint-down(sm) {
      font-size: 14px;
      margin-top: 5px;
    }

    @include media-breakpoint-down(xs) {
      margin-top: 8px;
    }
  }

  &__buttons {
    margin-top: 14px;
    margin-left: 5px;

    & .button-gradient {
      margin-left: 8px;
    }
  }
}

.tournaments {
  margin-top: 126px;

  @include media-breakpoint-down(xs) {
    margin-top: 126px;
  }

  & .title {
    margin-bottom: 2px;

    @include media-breakpoint-down(xs) {
      margin-left: -8px;
    }
  }

  &__cards {
    margin-top: 34px;
    padding-bottom: 41px;

    @include media-breakpoint-down(xs) {
      margin-top: 30px;
      padding-bottom: 36px;
    }
  }
}

.news {
  margin-top: 146px;

  @include media-breakpoint-down(xs) {
    margin-top: 50px;
  }

  &__cards {
    margin-top: 29px;
    padding-bottom: 53px;

    @include media-breakpoint-down(xs) {
      margin-top: 18px;
      padding-bottom: 38px;
    }
  }

  & .title {
    margin-bottom: 12px;
  }
}

.streams {
  margin-top: 138px;

  @include media-breakpoint-down(xs) {
    margin-top: 50px;
  }

  & .title {
    margin-top: -25px;

    @include media-breakpoint-down(xs) {
      margin-top: 0;
    }
  }

  &__live,
  &__live:before,
  &__live:after {
    background: #EA4545;
    border-radius: 100px;
  }

  &__live {
    width: 8px;
    height: 8px;
    position: relative;
    margin: 0 28px 22px;

    @include media-breakpoint-down(xs) {
      margin: 0 28px 0;
    }

    &:before,
    &:after {
      content: '';
      opacity: 0.12;
      position: absolute;
    }

    &:before {
      top: -6px;
      left: -6px;
      width: 20px;
      height: 20px;
    }

    &:after {
      top: -12px;
      left: -12px;
      width: 32px;
      height: 32px;
    }
  }

  &__swiper {
    margin-top: 22px;
    padding-bottom: 64px;

    @include media-breakpoint-down(xs) {
      margin-top: 32px;
      padding-bottom: 26px;
    }
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  &__img {
    margin-right: 4px;
    width: calc(25% - 3px);

    &:nth-child(2),
    &:nth-child(6) {
      margin-right: 0;
    }

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 4px;
      width: calc(50% - 2px);
    }
  }
}

.stream {
  width: 329px;

  &-wrapper {
    position: relative;
  }

  &__viewers {
    left: 19px;
    bottom: 15px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    padding: 2px 4px;
    line-height: 100%;
    position: absolute;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.75);
  }

  &__content {
    display: flex;
    padding: 16px 12px;
    align-items: center;
    background: #151A1F;

    &-main {
      margin-left: 12px;
    }

    &-title {
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      line-height: 100%;
      margin-bottom: 4px;
    }

    &-channel {
      color: #C4C7CC;
      font-size: 14px;
      font-weight: 400;
      line-height: 100%;
    }
  }
}

.row {
  display: flex;
  align-items: center;
}

</style>

<style lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.swiper-slide {
  width: 370px;

  @include media-breakpoint-down(xxs) {
    width: 329px;
  }
}

// for pixel perfect
.news__cards .swiper-pagination-bullets {
  left: 5px;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 17px;
  opacity: 1;
  border-radius: 0;
  background: #20272E;

  @include media-breakpoint-down(xs) {
    width: 6px;
    height: 8px;
  }

  &-active {
    background: #4F5F70;
  }
}

.streams {

  & .tabs {
    margin-top: 4px;
  }

  & .swiper-slide {
    width: 329px;
    margin-right: 10px;
  }

  & .swiper-pagination-bullet {

    @include media-breakpoint-down(xs) {
      width: 8px;
      height: 6px;
    }
  }

  & .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {

    @include media-breakpoint-down(xs) {
      margin: 0 2px;
    }
  }

  // for pixel perfect
  &__swiper .swiper-pagination-bullets {
    left: 11px;

    @include media-breakpoint-down(xs) {
      left: 6px;
    }
  }
}

</style>
