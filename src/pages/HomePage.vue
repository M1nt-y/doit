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
        <div class="tournaments__cards">
          <TheCard v-for="tournament in tournaments" :key="tournament.id" :card="tournament" />
        </div>
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


const mainStore = useMainStore()
const authStore = useAuthStore()

const { showLogin, showSignup } = mainStore
const { windowWidth } = storeToRefs(mainStore)
const { currentUser } = storeToRefs(authStore)


const display = computed(() => {
  return windowWidth.value < 730;
})

const tournaments = [
  {
    id: 0,
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
]

const card = {
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

// const card2 = {
//   title: 'Your Witcher 3 saves from Steam and GOG will now work on the Nintendo Switch',
//   text: 'If you played The Witcher 3: Wild Hunt when it was new but not the Hearts of Stone...'
// }
</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.first-screen {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 128px);

  @include media-breakpoint-down(lg) {
    height: calc(100vh - 112px);
  }

  @include media-breakpoint-down(md) {
    height: calc(100vh - 194px);
  }

  @include media-breakpoint-down(md) {
    height: calc(100vh - 176px);
  }

  @include media-breakpoint-down(xs) {
    height: calc(100vh - 134px);
    padding: 0 5px;
    margin-top: -6px;
  }

  &__triangles {
    height: 100%;
  }

  &__content {
    width: 100%;
    padding-top: 18.8%;
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
  margin-top: 68px;

  &__cards {
    display: flex;
    margin-top: 44px;
    justify-content: space-between;
  }
}

@media screen and (min-height: 1050px) {
  .first-screen {
    margin-top: -50px;
  }
}
</style>
