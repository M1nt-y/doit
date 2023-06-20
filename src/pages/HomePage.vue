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
        <h2>Tournaments</h2>

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
        <h2 class="title">News</h2>

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
  return windowWidth.value <= 577;
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
  margin-top: 132px;

  @include media-breakpoint-down(xs) {
    margin-top: 126px;
  }

  &__cards {
    margin-top: 44px;
    padding-bottom: 41px;

    @include media-breakpoint-down(xs) {
      margin-top: 30px;
      padding-bottom: 38px;
    }
  }
}

.news {
  margin-top: 148px;

  @include media-breakpoint-down(xs) {
    margin-top: 50px;

    & .title {
      margin-left: 6px;
    }
  }

  &__cards {
    margin-top: 43px;
    padding-bottom: 53px;

    @include media-breakpoint-down(xs) {
      margin-top: 31px;
      padding-bottom: 38px;
    }
  }
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
//.news__cards .swiper-pagination-bullets {
//  left: 5px;
//}

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
</style>
