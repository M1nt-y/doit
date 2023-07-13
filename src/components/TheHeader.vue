<template>
  <header class="header" :class="{'header--active': showMenu}">
    <div class="container">
      <div class="header__menu">
        <RouterLink class="header__menu-logo" to="/">
          <img src="../assets/logo.png" alt="">
        </RouterLink>

        <div v-if="!isBurger" class="header__nav">
          <div class="header__nav-item">Play</div>

          <RouterLink class="header__nav-item" to="/news">News</RouterLink>

          <RouterLink class="header__nav-item" to="/games">Games</RouterLink>

          <div class="header__nav-item">Shop</div>

          <RouterLink class="header__nav-item" to="/sponsorship">Sponsorship</RouterLink>
        </div>

        <div v-else class="header__burger" @click="toggleMenu">
          <span/><span/><span/>
        </div>
      </div>

      <div class="header__wrapper" v-if="displayProfile">
        <div v-if="currentUser" class="header__profile">
          <div class="header__profile-info">
            <img class="header__profile-pfp" :src="currentUser.pfp" alt="">
            <div class="header__profile-text">
              <p class="header__profile-name">{{ currentUser.username }}</p>

              <p class="header__profile-balance">{{ currentUser.balance }} EUR <span>/</span> {{ currentUser.coins }} DTC</p>
            </div>
            <div class="header__profile-toggle" :class="{'header__profile-toggle--active': profileExpanded}" @click="toggleProfile">
              <span /><span />
            </div>
          </div>

          <transition name="dropdown">
            <div v-if="profileExpanded" class="header__profile-dropdown">
              <div class="header__profile-row">
                <div class="header__profile-level">
                  <p>LVL {{ currentUser.level }}</p>

                  <div class="header__profile-progress"></div>
                </div>

                <div class="header__profile-icon">
                  <ProfileMail />
                </div>

                <div class="header__profile-icon">
                  <ProfileBell />
                </div>
              </div>

              <ul class="header__profile-links">
                <li class="header__profile-link" v-for="(link, index) in mainLinks" :key="index">
                  <RouterLink :to="{ name: 'profile', query: { 'q': link } }">{{ link }}</RouterLink>
                </li>
              </ul>

              <div class="header__profile-bot">
                <RouterLink class="header__profile-link" :to="{ name: 'profile', query: { 'q': 'Support' } }">Support</RouterLink>
                <RouterLink class="header__profile-link" :to="{ name: 'profile', query: { 'q': 'Settings' } }">Settings</RouterLink>
                <p class="header__profile-link" @click="handleLogout">Logout</p>
              </div>
            </div>
          </transition>
        </div>

        <div v-else class="header__buttons">
          <button class="button button-default" @click="showLogin">Login</button>

          <button class="button button-gradient" @click="showSignup">Sign up</button>
        </div>
      </div>
    </div>

    <transition name="dropdown">
      <div class="header__content" v-if="showMenu">
        <ul class="header__content-links">
          <li class="header__content-link">Play</li>

          <RouterLink class="header__content-link" to="/news">News</RouterLink>

          <RouterLink class="header__content-link" to="/games">Games</RouterLink>

          <li class="header__content-link">Shop</li>

          <RouterLink class="header__content-link" to="/sponsorship">Sponsorship</RouterLink>

          <RouterLink class="header__content-link" v-if="currentUser && !displayProfile" to="/profile">Profile</RouterLink>
        </ul>

        <div class="header__content-buttons" v-if="!currentUser && !displayProfile">
          <button class="button button-default" @click="showLogin">Login</button>

          <button class="button button-gradient" @click="showSignup">Sign up</button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { useAuthStore } from '@/stores/auth'
import { useRoute, useRouter } from 'vue-router'
import ProfileMail from '@/assets/icons/ProfileMail.vue'
import ProfileBell from '@/assets/icons/ProfileBell.vue'


const route = useRoute()
const router = useRouter()

const mainStore = useMainStore()
const authStore = useAuthStore()

const { toggleMenu, showLogin, showSignup, toggleProfile } = mainStore
const { windowWidth, headerIndex, showMenu, showBackdrop, showModal, profileExpanded } = storeToRefs(mainStore)
const { currentUser } = storeToRefs(authStore)
const { logout } = authStore


onMounted(async () => {
  await router.isReady();
})

watch(() => route.name, () => {
  headerIndex.value = 2
  profileExpanded.value = showMenu.value = showBackdrop.value = showModal.value = false
})

function handleLogout () {
  toggleProfile()
  logout()
}

const isBurger = computed(() => {
  return windowWidth.value <= 1200
})

const displayProfile = computed(() => {
  return windowWidth.value > 577 && route.name !== 'profile' && route.name !== 'Not Found'
})

const zIndex = computed(() => headerIndex.value)

const mainLinks = ['My profile', 'My team', 'Withdraw', 'Deposit', 'Premium', 'Statistics']

const background = computed(() => {
  if (profileExpanded.value)
    return '#161A1F'
  else
    return 'none'
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.header {
  position: fixed;
  z-index: v-bind(zIndex);
  top: 0;
  left: 0;
  right: 0;
  color: $white;
  background: $bg-main;
  padding: 32px 120px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  @include media-breakpoint-down(lg) {
    padding: 24px 120px;
  }

  @include media-breakpoint-down(md) {
    padding: 24px 23px;
  }

  @include media-breakpoint-down(sm) {
    padding: 15px 23px;
  }

  &--active {

    @media screen and (max-height: 420px) {
      overflow-y: scroll;
    }

    @include media-breakpoint-down(md) {
      height: calc(100% - 82px);
    }

    @include media-breakpoint-down(sm) {
      height: calc(100% - 56px);
    }
  }

  &__menu {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 695px;
    margin-right: 32px;

    @include media-breakpoint-down(md) {
      width: auto;
    }

    @include media-breakpoint-down(xs) {
      width: 100%;
      margin-right: 0;
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    &-logo {
      width: 100%;
      max-width: 72px;
      margin-right: 8.058%;

      @include media-breakpoint-down(md) {
        margin-right: 56px;
      }

      @include media-breakpoint-down(xs) {
        width: 56px;
        height: 48px;
        margin-right: 0;
      }
    }
  }

  &__nav {
    width: 100%;
    display: flex;

    &-item {
      cursor: pointer;
      margin-right: 9.878%;

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }

  &__wrapper {
    width: 100%;
    max-width: 234px;
  }

  &__profile {
    width: 100%;
    max-width: 225px;
    position: relative;
    background: v-bind(background);
    transition: all 0.3s ease;
    margin-left: 20px;
    margin-top: 10px;

    &-info {
      width: 100%;
      padding: 8px;
      display: flex;
      align-items: center;
    }

    &-pfp {
      width: 40px;
      height: 40px;
    }

    &-text {
      margin: 0 8px;
      font-weight: 500;
      line-height: 100%;
    }

    &-name {
      font-size: 14px;
    }

    &-balance {
      font-size: 12px;
      color: #55AAFF;

      & span {
        margin: 0 4px;
      }
    }

    &-toggle {
      width: 24px;
      height: 24px;
      cursor: pointer;
      margin-left: auto;
      position: relative;

      &:hover {

        & span {
          background-color: #969BA3;
        }
      }

      &--active {
        & span {
          rotate: 90deg;
        }
      }

      & span{
        background-color: #2B353F;
        position: absolute;
        border-radius: 2px;
        width:100%;
        height: 2px;
        transition: all 0.3s ease;

        &:nth-child(1){
          transform: rotate(45deg) scaleX(0.35);
          top: 12px;
          left: -1px;
        }

        &:nth-child(2){
          transform: rotate(-45deg) scaleX(0.35);
          top: 12px;
          left: 4px;
        }
      }
    }

    &-dropdown {
      width: 100%;
      overflow: hidden;
      background: #161A1F;
      position: absolute;
      z-index: 2;
      font-weight: 400;
    }

    &-row {
      display: flex;
      padding: 0 8px;
    }

    &-level {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: $main-white;
      font-size: 11px;
      line-height: 100%;
      margin-right: auto;
    }

    &-progress {
      width: 108px;
      height: 2px;
      margin-left: 7px;
      position: relative;
      margin-right: 14px;
      border-radius: 2px;
      background: #2B353F;
    }

    &-icon {
      cursor: pointer;
      margin-left: 4px;
    }

    &-links {
      border: 2px solid #0F1215;
      color: $main-white;
      border-left: 0;
      border-right: 0;
      font-size: 12px;
      margin-top: 14px;
      line-height: 100%;
      padding: 14px 12px;
      text-transform: uppercase;
    }

    &-link {
      cursor: pointer;
      margin-bottom: 16px;
    }

    &-link a {
      color: inherit;
      text-decoration: none;
    }

    &-link:nth-last-child(1) {
      margin-bottom: 0;
    }

    &-bot {
      display: flex;
      color: #969BA3;
      font-size: 12px;
      padding: 14px 12px;
      line-height: 100%;
      justify-content: space-between;

      & .header__profile-link {
        color: inherit;
        margin-bottom: 0;
        text-decoration: none;
      }
    }
  }

  &__burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 32px;
    padding: 4px;

    @include media-breakpoint-down(xs) {
      padding: 0;
      margin-bottom: 10px;
    }

    & span {
      height: 2.67px;
      width: 24px;
      background: #F5F5F5;
      margin-bottom: 4px;
    }

    & span:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  &__content {
    width: 100%;
    max-width: 330px;
    margin: 17px auto 0;
    overflow-y: hidden;

    &-links {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    &-link {
      line-height: 100%;
      margin-bottom: 30px;
    }

    &-link:nth-last-child(1) {
      margin-bottom: 0;
    }

    &-buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 84px;
    }
  }
}

.container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-enter-from { max-height: 0 }

.dropdown-enter-to { max-height: 400px }

.dropdown-enter-active { transition: max-height .4s }

.dropdown-leave-from { max-height: 400px }

.dropdown-leave-to { max-height: 0 }

.dropdown-leave-active { transition: max-height .4s }

.button-default {
  margin-right: 8px;

  @include media-breakpoint-down(xs) {
    margin-right: 0;
    margin-bottom: 12px;
  }
}
</style>
