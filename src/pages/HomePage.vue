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

      <div class="tournaments" :class="{ 'tournaments--first': currentUser }">
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
            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[1].image">
              <source type="image/png" :srcset="pcStreams[1].fallback">
              <img :src="pcStreams[1].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[0].image">
              <source type="image/png" :srcset="pcStreams[0].fallback">
              <img :src="pcStreams[0].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[2].image">
              <source type="image/png" :srcset="pcStreams[2].fallback">
              <img :src="pcStreams[2].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[3].image">
              <source type="image/png" :srcset="pcStreams[3].fallback">
              <img :src="pcStreams[3].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[4].image">
              <source type="image/png" :srcset="pcStreams[4].fallback">
              <img :src="pcStreams[4].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[5].image">
              <source type="image/png" :srcset="pcStreams[5].fallback">
              <img :src="pcStreams[5].image" alt="">
            </picture>
          </swiper-slide>

          <swiper-slide class="streams__wrapper">
            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[0].image">
              <source type="image/png" :srcset="pcStreams[0].fallback">
              <img :src="pcStreams[0].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[1].image">
              <source type="image/png" :srcset="pcStreams[1].fallback">
              <img :src="pcStreams[1].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[2].image">
              <source type="image/png" :srcset="pcStreams[2].fallback">
              <img :src="pcStreams[2].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[3].image">
              <source type="image/png" :srcset="pcStreams[3].fallback">
              <img :src="pcStreams[3].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[4].image">
              <source type="image/png" :srcset="pcStreams[4].fallback">
              <img :src="pcStreams[4].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[5].image">
              <source type="image/png" :srcset="pcStreams[5].fallback">
              <img :src="pcStreams[5].image" alt="">
            </picture>
          </swiper-slide>

          <swiper-slide class="streams__wrapper">
            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[0].image">
              <source type="image/png" :srcset="pcStreams[0].fallback">
              <img :src="pcStreams[0].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[1].image">
              <source type="image/png" :srcset="pcStreams[1].fallback">
              <img :src="pcStreams[1].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[3].image">
              <source type="image/png" :srcset="pcStreams[3].fallback">
              <img :src="pcStreams[3].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[5].image">
              <source type="image/png" :srcset="pcStreams[5].fallback">
              <img :src="pcStreams[5].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[2].image">
              <source type="image/png" :srcset="pcStreams[2].fallback">
              <img :src="pcStreams[2].image" alt="">
            </picture>

            <picture class="streams__img">
              <source type="image/webp" :srcset="pcStreams[4].image">
              <source type="image/png" :srcset="pcStreams[4].fallback">
              <img :src="pcStreams[4].image" alt="">
            </picture>
          </swiper-slide>
        </swiper>

        <swiper
            v-else
            class="streams__swiper"
            :space-between="10"
            :slides-per-view="'auto'"
            :pagination="{ clickable: true }"
            :modules="[Pagination]"
        >
          <swiper-slide v-for="stream in streams" :key="stream.id">
            <div class="stream">
              <div class="stream-wrapper">
                <picture>
                  <source type="image/webp" :srcset="stream.image">
                  <source type="image/png" :srcset="stream.fallback">
                  <img class="stream__img" :src="stream.image" alt="">
                </picture>

                <div class="stream__viewers">{{ stream.viewers }} зрителей</div>
              </div>

              <div class="stream__content">

                <picture>
                  <source type="image/webp" :srcset="stream.logo">
                  <source type="image/png" :srcset="stream.logoFallback">
                  <img :src="stream.logo" alt="">
                </picture>

                <div class="stream__content-main">
                  <h3 class="stream__content-title">{{ stream.title }}</h3>
                  <p class="stream__content-channel">{{ stream.channel }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="partners">
        <h2 class="title">Partners</h2>

        <div v-if="windowWidth <= 769">
          <div class="row">
            <picture class="partners__img google">
              <source type="image/webp" :srcset="partners[0].image">
              <source type="image/png" :srcset="partners[0].fallback">
              <img :src="partners[0].image" alt="">
            </picture>

            <picture class="partners__img nasa">
              <source type="image/webp" :srcset="partners[1].image">
              <source type="image/png" :srcset="partners[1].fallback">
              <img :src="partners[1].image" alt="">
            </picture>

            <picture class="partners__img navi">
              <source type="image/webp" :srcset="partners[2].image">
              <source type="image/png" :srcset="partners[2].fallback">
              <img :src="partners[2].image" alt="">
            </picture>
          </div>

          <div class="row">
            <picture class="partners__img airbnb">
              <source type="image/webp" :srcset="partners[3].image">
              <source type="image/png" :srcset="partners[3].fallback">
              <img :src="partners[3].image" alt="">
            </picture>

            <picture class="partners__img telegram">
              <source type="image/webp" :srcset="partners[4].image">
              <source type="image/png" :srcset="partners[4].fallback">
              <img :src="partners[4].image" alt="">
            </picture>

            <picture class="partners__img youtube">
              <source type="image/webp" :srcset="partners[5].image">
              <source type="image/png" :srcset="partners[5].fallback">
              <img :src="partners[5].image" alt="">
            </picture>
          </div>
        </div>

        <div class="row partners__content" v-else>
          <picture class="partners__img google">
            <source type="image/webp" :srcset="partners[0].image">
            <source type="image/png" :srcset="partners[0].fallback">
            <img :src="partners[0].image" alt="">
          </picture>

          <picture class="partners__img nasa">
            <source type="image/webp" :srcset="partners[1].image">
            <source type="image/png" :srcset="partners[1].fallback">
            <img :src="partners[1].image" alt="">
          </picture>

          <picture class="partners__img navi">
            <source type="image/webp" :srcset="partners[2].image">
            <source type="image/png" :srcset="partners[2].fallback">
            <img :src="partners[2].image" alt="">
          </picture>

          <picture class="partners__img airbnb">
            <source type="image/webp" :srcset="partners[3].image">
            <source type="image/png" :srcset="partners[3].fallback">
            <img :src="partners[3].image" alt="">
          </picture>

          <picture class="partners__img telegram">
            <source type="image/webp" :srcset="partners[4].image">
            <source type="image/png" :srcset="partners[4].fallback">
            <img :src="partners[4].image" alt="">
          </picture>

          <picture class="partners__img youtube">
            <source type="image/webp" :srcset="partners[5].image">
            <source type="image/png" :srcset="partners[5].fallback">
            <img :src="partners[5].image" alt="">
          </picture>

          <picture class="partners__img be" v-if="!display">
            <source type="image/webp" :srcset="partners[6].image">
            <source type="image/png" :srcset="partners[6].fallback">
            <img :src="partners[6].image" alt="">
          </picture>
        </div>
      </div>

      <div class="games">
        <h2 class="title">Games</h2>

        <swiper
            class="games__swiper"
            auto-height
            :direction="getDirection"
            :slides-per-view="gamesPerView"
            :slides-per-group="perGroup"
            :space-between="betweenGames"
            :pagination="{ clickable: true }"
            :modules="getModules"
        >
          <swiper-slide v-for="game in games" :key="game.id">
            <div class="games__card">
              <picture>
                <source type="image/webp" :srcset="game.image">
                <source type="image/png" :srcset="game.fallback">
                <img class="games__card-img" :src="game.image" alt="">
              </picture>

              <h3 class="games__card-title">{{ game.title }}</h3>
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
import Tournament1 from '@/assets/images/tournament-1.png?w=370&h=200&format=webp'
import Tournament2 from '@/assets/images/tournament-2.png?w=370&h=200&format=webp'
import Tournament3 from '@/assets/images/tournament-3.png?w=370&h=200&format=webp'
import News1 from '@/assets/images/news-1.png?w=366&h=198&format=webp'
import News2 from '@/assets/images/news-2.png?w=366&h=198&format=webp'
import News3 from '@/assets/images/news-3.png?w=366&h=198&format=webp'
import Stream0 from '@/assets/images/streams-0.png?w=329&h=184&format=webp'
import Stream1 from '@/assets/images/streams-1.png?w=583&h=320&format=webp'
import Stream2 from '@/assets/images/streams-2.png?w=583&h=320&format=webp'
import Stream3 from '@/assets/images/streams-3.png?w=289&h=152&format=webp'
import Stream4 from '@/assets/images/streams-4.png?w=290&h=152&format=webp'
import Stream5 from '@/assets/images/streams-5.png?w=287&h=152&format=webp'
import Stream6 from '@/assets/images/streams-6.png?w=292&h=152&format=webp'
import StreamLogo from '@/assets/images/stream-logo.png?w=40&h=40&format=webp'
import Partner1 from '@/assets/images/partner-1.png?w=130&h=48&format=webp'
import Partner2 from '@/assets/images/partner-2.png?w=70&h=70&format=webp'
import Partner3 from '@/assets/images/partner-3.png?w=64&h=64&format=webp'
import Partner4 from '@/assets/images/partner-4.png?w=154&h=50&format=webp'
import Partner5 from '@/assets/images/partner-5.png?w=56&h=56&format=webp'
import Partner6 from '@/assets/images/partner-6.png?w=80&h=56&format=webp'
import Partner7 from '@/assets/images/partner-7.png?w=52&h=52&format=webp'
import Dota from '@/assets/images/dota.png?w=889&h=500&format=webp'
import Csgo from '@/assets/images/csgo.png?w=889&h=500&format=webp'
import Fifa from '@/assets/images/fifa.png?w=889&h=500&format=webp'
import Valorant from '@/assets/images/valorant.png?w=889&h=500&format=webp'
import Starcraft from '@/assets/images/starcraft.png?w=889&h=500&format=webp'
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

const gamesPerView = computed(() => {
  if (windowWidth.value >= 1440 || windowWidth.value <= 376) {
    return 3
  } else {
    return 'auto'
  }
})

const betweenGames = computed(() => {
  if (windowWidth.value <= 577) {
    return 2
  } else {
    return 4
  }
})

const getDirection = computed(() => {
  if (windowWidth.value > 577) {
    return 'horizontal'
  } else {
    return 'vertical'
  }
})

const getModules = computed(() => {
  if (windowWidth.value > 577) {
    return [Pagination]
  } else {
    return []
  }
})

const isMobile = computed(() => {
  return windowWidth.value <= 769
})

const tournaments = [
  {
    id: 0,
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-3.png', import.meta.url),
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
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
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
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
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
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
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
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
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
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-3.png', import.meta.url),
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
    image: Tournament2,
    fallback: new URL('../assets/images/tournament-2.png', import.meta.url),
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
    image: Tournament3,
    fallback: new URL('../assets/images/tournament-3.png', import.meta.url),
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
    image: Tournament1,
    fallback: new URL('../assets/images/tournament-1.png', import.meta.url),
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
    image: News3,
    fallback: new URL('../assets/images/news-3.png', import.meta.url),
    title: 'Empire of Sin has been delayed until autumn 2020',
    text: 'Drink up, folks, there\'s been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...'
  },
  {
    id: 1,
    image: News2,
    fallback: new URL('../assets/images/news-2.png', import.meta.url),
    title: 'Your Witcher 3 saves from Steam and GOG will now work on the Nintendo Switch',
    text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
  },
  {
    id: 2,
    image: News1,
    fallback: new URL('../assets/images/news-1.png', import.meta.url),
    title: 'Fortnite map makers recreate Counter-Strike\'s Dust 2',
    text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
  },
  {
    id: 3,
    image: News1,
    fallback: new URL('../assets/images/news-1.png', import.meta.url),
    title: 'Fortnite map makers recreate Counter-Strike\'s Dust 2',
    text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
  },
  {
    id: 4,
    image: News2,
    fallback: new URL('../assets/images/news-2.png', import.meta.url),
    title: 'Your Witcher 3 saves from Steam and GOG will now work on the Nintendo Switch',
    text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
  },
  {
    id: 5,
    image: News3,
    fallback: new URL('../assets/images/news-3.png', import.meta.url),
    title: 'Empire of Sin has been delayed until autumn 2020',
    text: 'Drink up, folks, there\'s been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...'
  },
  {
    id: 6,
    image: News2,
    fallback: new URL('../assets/images/news-2.png', import.meta.url),
    title: 'Fortnitity evolution X',
    text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
  },
  {
    id: 7,
    image: News3,
    fallback: new URL('../assets/images/news-3.png', import.meta.url),
    title: 'Empire of Sin has been delayed until autumn 2020',
    text: 'Drink up, folks, there\'s been a change of plans. Prohibition-era gangster tactics game Empire of Sin will no longer be...'
  },
  {
    id: 8,
    image: News1,
    fallback: new URL('../assets/images/news-1.png', import.meta.url),
    title: 'Fortnite map makers recreate Counter-Strike\'s Dust 2',
    text: 'Team Evolve, a collective of players who create and share impressive maps using Fortnite\'s in-game Creative mode...'
  }
]

const pcStreams = [
  {
    id: 0,
    image: Stream1,
    fallback: new URL('../assets/images/streams-1.png', import.meta.url)
  },
  {
    id: 1,
    image: Stream2,
    fallback: new URL('../assets/images/streams-2.png', import.meta.url)
  },
  {
    id: 2,
    image: Stream3,
    fallback: new URL('../assets/images/streams-3.png', import.meta.url)
  },
  {
    id: 3,
    image: Stream4,
    fallback: new URL('../assets/images/streams-4.png', import.meta.url)
  },
  {
    id: 4,
    image: Stream5,
    fallback: new URL('../assets/images/streams-5.png', import.meta.url)
  },
  {
    id: 5,
    image: Stream6,
    fallback: new URL('../assets/images/streams-6.png', import.meta.url)
  }
]

const streams = [
  {
    id: 0,
    image: Stream0,
    fallback: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: StreamLogo,
    logoFallback: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Project Mega Kappa! Day 4',
    channel: 'streamer-1',
    viewers: 1500
  },
  {
    id: 1,
    image: Stream0,
    fallback: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: StreamLogo,
    logoFallback: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Cool stream title',
    channel: 'cool_streamer',
    viewers: 264
  },
  {
    id: 2,
    image: Stream0,
    fallback: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: StreamLogo,
    logoFallback: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Project Ozone 3 Kappa Mode! Day1',
    channel: 'cjabka',
    viewers: 740
  },
  {
    id: 3,
    image: Stream0,
    fallback: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: StreamLogo,
    logoFallback: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Dummy stream! Playing something Day 3',
    channel: 'dummy-channel',
    viewers: 333
  },
  {
    id: 4,
    image: Stream0,
    fallback: new URL('../assets/images/streams-0.png', import.meta.url),
    logo: StreamLogo,
    logoFallback: new URL('../assets/images/stream-logo.png', import.meta.url),
    title: 'Another dummy stream',
    channel: 'not_cjabka',
    viewers: 24
  }
]

const partners = [
  {
    id: 0,
    image: Partner1,
    fallback: new URL('../assets/images/partner-1.png', import.meta.url)
  },
  {
    id: 1,
    image: Partner2,
    fallback: new URL('../assets/images/partner-2.png', import.meta.url)
  },
  {
    id: 2,
    image: Partner3,
    fallback: new URL('../assets/images/partner-3.png', import.meta.url)
  },
  {
    id: 3,
    image: Partner4,
    fallback: new URL('../assets/images/partner-4.png', import.meta.url)
  },
  {
    id: 4,
    image: Partner5,
    fallback: new URL('../assets/images/partner-5.png', import.meta.url)
  },
  {
    id: 5,
    image: Partner6,
    fallback: new URL('../assets/images/partner-6.png', import.meta.url)
  },
  {
    id: 6,
    image: Partner7,
    fallback: new URL('../assets/images/partner-7.png', import.meta.url)
  }
]

const games = [
  {
    id: 0,
    title: 'WarCraft lll',
    image: Dota,
    fallback: new URL('../assets/images/dota.png', import.meta.url)
  },
  {
    id: 1,
    title: 'FIFA 2020',
    image: Fifa,
    fallback: new URL('../assets/images/fifa.png', import.meta.url)
  },
  {
    id: 2,
    title: 'Valorant',
    image: Valorant,
    fallback: new URL('../assets/images/valorant.png', import.meta.url)
  },
  {
    id: 3,
    title: 'Dota ll',
    image: Dota,
    fallback: new URL('../assets/images/dota.png', import.meta.url)
  },
  {
    id: 4,
    title: 'CS:GO',
    image: Csgo,
    fallback: new URL('../assets/images/csgo.png', import.meta.url)
  },
  {
    id: 5,
    title: 'StarCraft ll',
    image: Starcraft,
    fallback: new URL('../assets/images/starcraft.png', import.meta.url)
  },
  {
    id: 6,
    title: 'BrawlStars',
    image: Dota,
    fallback: new URL('../assets/images/dota.png', import.meta.url)
  },
  {
    id: 7,
    title: 'StarCraft ll',
    image: Csgo,
    fallback: new URL('../assets/images/csgo.png', import.meta.url)
  },
  {
    id: 8,
    title: 'StarCraft ll',
    image: Starcraft,
    fallback: new URL('../assets/images/starcraft.png', import.meta.url)
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

.row {
  display: flex;
  align-items: center;
}

.tournaments {
  margin-top: 126px;

  @include media-breakpoint-down(xs) {
    margin-top: 126px;

    &--first {
      margin-top: 20px;
    }
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
    cursor: pointer;
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
  cursor: pointer;

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

.partners {
  margin-top: 124px;

  @include media-breakpoint-down(xs) {
    margin-top: 50px;
  }

  &__content {
    flex-wrap: wrap;
    margin-top: 44px;
    justify-content: space-between;
  }

  & .row {

    @include media-breakpoint-down(sm) {
      width: 100%;
      justify-content: space-between;

      &:nth-child(1) {
        margin-top: 44px;
        margin-bottom: 30px;
      }
    }
  }

  .google {
    width: 130px;
    height: 48px;

    @include media-breakpoint-down(xs) {
      width: 96px;
      height: 36px;
    }
  }

  .nasa {
    width: 70px;
    height: 70px;

    @include media-breakpoint-down(xs) {
      width: 52px;
      height: 52px;
    }
  }

  .navi {
    width: 64px;
    height: 64px;

    @include media-breakpoint-down(xs) {
      width: 50px;
      height: 50px;
    }
  }

  .airbnb {
    width: 154px;
    height: 48px;

    @include media-breakpoint-down(xs) {
      width: 110px;
      height: 34px;
    }
  }

  .telegram {
    width: 56px;
    height: 56px;

    @include media-breakpoint-down(sm) {
      margin-left: -14px;
    }

    @include media-breakpoint-down(xs) {
      width: 40px;
      height: 40px;
    }
  }

  .youtube {
    width: 100%;
    height: 100%;
    max-width: 80px;
    max-height: 56px;

    @include media-breakpoint-down(xs) {
      width: 50px;
      height: 34px;
    }
  }
}

.games {
  margin-top: 105px;

  @include media-breakpoint-down(xs) {
    margin-top: 66px;
  }

  &__swiper {
    margin-top: 43px;
    padding-bottom: 60px;

    @include media-breakpoint-down(xs) {
      margin-top: 30px;
      padding-bottom: 0;
    }
  }

  &__card {
    height: 500px;
    cursor: pointer;
    max-width: 387px;
    position: relative;

    @include media-breakpoint-down(xs) {
      height: auto;
      max-width: 100%;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @include media-breakpoint-down(xxs) {
        height: 204px;
      }
    }

    &-title {
      left: 50%;
      bottom: 30px;
      font-size: 30px;
      line-height: 100%;
      position: absolute;
      transform: translateX(-50%);

      @include media-breakpoint-down(xs) {
        bottom: 22px;
        font-size: 22px;
      }
    }
  }
}

</style>

<style lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.tournaments,
.news {

  & .swiper-slide {
    width: 370px;

    @include media-breakpoint-down(xxs) {
      width: 329px!important;
    }
  }
}

// for pixel perfect
.news__cards .swiper-pagination-bullets {
  left: 5px;

  @include media-breakpoint-down(xs) {
    left: 0;
  }
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

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {

  @include media-breakpoint-down(xs) {
    margin: 0 2px;
  }
}

.streams {

  & .tabs {
    margin-top: 4px;
  }

  & .swiper-slide {
    width: 329px;
  }

  & .swiper-pagination-bullet {

    @include media-breakpoint-down(xs) {
      width: 8px;
      height: 6px;
    }
  }

  // for pixel perfect
  &__swiper .swiper-pagination-bullets {
    left: 11px;

    @include media-breakpoint-down(xs) {
      left: 0;
    }
  }
}

.games {

  & .swiper-wrapper {

    @include media-breakpoint-down(xs) {
      height: 616px!important;
    }
  }

  & .swiper-slide {
    width: 387px;

    @include media-breakpoint-down(xs) {
      width: 100%;
    }

    @include media-breakpoint-down(xxs) {
      height: 204px!important;
    }

    &:nth-child(1),
    &:nth-child(4),
    &:nth-child(7) {

      img {
        object-position: -242px top;

        @include media-breakpoint-down(xs) {
          object-position: center top;
        }
      }
    }

    &:nth-child(2) {

      img {
        object-position: -410px top;

        @include media-breakpoint-down(xs) {
          object-position: center top;
        }
      }
    }

    &:nth-child(5),
    &:nth-child(8) {

      img {
        object-position: -123px top;

        @include media-breakpoint-down(xs) {
          object-position: center top;
        }
      }
    }

    &:nth-child(6),
    &:nth-child(9) {

      img {
        object-position: -281px top;

        @include media-breakpoint-down(xs) {
          object-position: center top;
        }
      }
    }
  }
}

</style>
