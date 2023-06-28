<template>
  <main class="main profile" @click="closeSelect">
    <div class="profile__info">
      <div class="profile__info-wrapper">
        <img class="profile__info-pfp" :src="currentUser.pfp" alt="">

        <div class="profile__info-content">
          <p class="profile__info-name">{{ currentUser.fullName }}</p>

          <h2 class="profile__info-nickname">{{ currentUser.username }}</h2>

          <p class="profile__info-team">{{ currentUser.mainTeam }}</p>

          <p class="profile__info-balance">Balance: {{ currentUser.balance }} EUR</p>

          <div class="profile__info-icons"></div>
        </div>
      </div>

      <ul class="profile__info-nav" v-if="windowWidth > 769">
        <li v-for="page in profilePages" :key="page.id" class="profile__info-link" :class="{ 'profile__info-link--active': isActive(page.name) }">
          <label>
            {{ page.name }}
            <input type="radio" :value="page.name" v-model="currentPage" />
          </label>
        </li>
      </ul>

      <BaseSelect
          v-else
          :options="profilePages"
          v-model="currentPage"
          :active="selectPage"
          @click="selectPage = !selectPage"
      />
    </div>

    <div class="profile__main">
      <h1 class="profile__main-title" v-if="windowWidth > 769">{{ currentPage }}</h1>


      <div class="profile__main-controls" v-if="currentPage === 'User panel'">
        <div class="profile__main-button" v-for="(button, index) in userPanelButtons" :key="index" @click="profileNavigation(button)">{{ button }}</div>
      </div>

      <div class="" v-else-if="currentPage === 'My profile'">
        <!--   Profile info (grid/table)     -->
      </div>

      <div class="profile__main-controls" v-else-if="currentPage === 'My team'">
        <div class="profile__main-button" @click="profileNavigation('Create team')">Create team</div>
      </div>

      <!--   Teams related pages   -->

      <div class="profile__main-payments" v-else-if="currentPage === 'Deposit/Withdraw'">
        <div class="info">
          <div class="info__profile">
            <img class="info__profile-pfp" :src="currentUser.pfp" alt="">

            <div class="info__profile-wrapper">
              <div class="info__profile-nickname">{{ currentUser.username }}</div>

              <div class="info__profile-balance">Balance: <span>${{ currentUser.balance }}</span></div>

              <div class="info__profile-balance">Doit Points: {{ currentUser.coins }}</div>
            </div>
          </div>

          <div class="info__tabs">
            <h2
                class="info__tabs-link"
                v-for="(tab, index) in paymentTabs" :key="index"
                :class="{ 'info__tabs-link--active': paymentPage === tab }"
                @click="profileNavigation(tab)"
            >
              {{ tab }}
            </h2>
          </div>
        </div>

        <div class="payment" v-if="paymentPage !== 'History'">
          <div class="payment__methods" v-if="windowWidth > 425">
            <div
                class="payment__methods-switch"
                v-for="method in paymentMethods" :key="method.id"
                :class="{ 'payment__methods-switch--active': paymentMethod === method.name }"
                @click="paymentMethod = method.name"
            >
              {{ method.name }}
            </div>
          </div>

          <div class="payment__inputs">
            <BaseSelect
                label="Payment method"
                placeholder="Select payment method"
                :options="paymentMethods"
                v-model="paymentMethod"
                :active="selectPayment"
                @click="selectPayment = !selectPayment"
            />

            <BaseInput
                label="Payment address"
                placeholder="Payment address"
                v-model="formData.address"
            />

            <BaseInput
                type="Number"
                label="Amount"
                placeholder="Amount"
                v-model="formData.amount"
            />
          </div>

          <div class="payment__buttons">
            <button
                class="payment__button"
                :disabled="!paymentDone"
                @click="submitForm"
            >
              {{ paymentPage }}
            </button>
          </div>
        </div>

        <div class="history" v-else>
          <table class="history__table">
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            <tr v-for="payment in currentUser.payments" :key="payment.id">
              <td>{{ payment.id }}</td>
              <td>{{ payment.type }}</td>
              <td>{{ payment.method }}</td>
              <td>{{ payment.amount }}</td>
              <td>Completed</td>
            </tr>
          </table>
        </div>
      </div>


      <div class="profile__main-controls" v-else-if="currentPage === 'Settings'">
        <div class="profile__main-button" v-for="(button, index) in settingsButtons" :key="index" @click="profileNavigation(button)">{{ button }}</div>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Edit account details'">
        <div class="profile__main-form">
          <!--    Edit profile form inputs      -->

          <!--     Main team select     -->

          <!--     Gender select     -->

          <!--     Make it as component     -->
          <div class="birthdate">
            <p class="birthdate__label">Date of birth</p>
            <div class="birthdate__inputs">
              <!--    Birthdate inputs      -->
            </div>
            <div class="birthdate__errors">
<!--              <p class="birthdate__error-message" v-if="birthdateError">{{ birthdateError }}</p>-->
            </div>
          </div>

          <!--    Game Profile form inputs      -->
        </div>
        <button class="profile__main-save">Change details</button>
      </div>





      <div class="profile__main-content" v-else-if="currentPage === 'Game profile'">
        <div class="profile__main-form">
          <!--    Form inputs      -->
        </div>

        <button class="profile__main-save">Save profile</button>
      </div>

    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { between, helpers, maxValue, required } from '@vuelidate/validators'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useMainStore } from '@/stores/main'
import { useRoute, useRouter } from 'vue-router'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'


const mainStore = useMainStore()
const authStore = useAuthStore()
const { logout } = authStore
const { currentUser } = storeToRefs(authStore)
const { windowWidth } = storeToRefs(mainStore)


const profilePages = ref([
  {
    id: 0,
    name: 'User panel'
  },
  {
    id: 1,
    name: 'My profile'
  },
  {
    id: 2,
    name: 'My team'
  },
  {
    id: 3,
    name: 'Deposit/Withdraw'
  },
  {
    id: 4,
    name: 'Premium'
  },
  {
    id: 5,
    name: 'Statistics'
  },
  {
    id: 6,
    name: 'Support'
  },
  {
    id: 7,
    name: 'Settings'
  },
  {
    id: 8,
    name: 'Game profile'
  }
])
const selectPage = ref(false)
const currentPage = ref('User panel')
const paymentPage = ref('Deposit')
const paymentMethod = ref('Paypal')
const paymentTabs = ref(['Withdraw', 'Deposit', 'History'])
const paymentMethods = ref([
    {
      id: 0,
      name: 'Paypal'
    },
    {
      id: 1,
      name: 'BTC'
    },
    {
      id: 2,
      name: 'QIWI'
    },
    {
      id: 3,
      name: 'Card'
    }
])
const selectPayment = ref(false)
const paymentDone = ref(true)
const paymentsHistory = ref([])
const userPanelButtons = ref(['My profile', 'My team', 'Deposit', 'Withdraw', 'Premium', 'Statistics', 'Support', 'Settings', 'Game profile', 'Logout'])
const settingsButtons = ref(['Edit account details', 'Change email address', 'Change password', 'Manage preferences', 'Close account'])

function closeSelect() {
  selectPayment.value = false
  selectPage.value = false
}

function isActive (page) {
  return page === currentPage.value
}


const route = useRoute()
const router = useRouter()

onBeforeMount(() => {
  getUrlQueryParams()
})

async function getUrlQueryParams() {
  await router.isReady()
  if (route.query.q) {
    if (route.query.q === 'Deposit' || route.query.q === 'Withdraw' || route.query.q === 'History') {
      currentPage.value = 'Deposit/Withdraw'
      paymentPage.value = route.query.q.toString()
    } else {
      currentPage.value = route.query.q.toString()
    }
  } else {
    await router.push({ query: { 'q': currentPage.value } })
  }
}

watch(() => currentPage.value, () => {
  if (currentPage.value === 'Deposit/Withdraw') {
    router.push({ query: { 'q': paymentPage.value } })
  } else {
    router.push({ query: { 'q': currentPage.value } })
  }
})

watch(() => paymentPage.value, () => {
  formData.value.address = ''
  formData.value.amount = null
  router.push({ query: { 'q': paymentPage.value } })
})

watch(() => route.query.q, () => {
  if (route.query.q) {
    v$.value.$reset()
    if (currentPage.value !== route.query.q) {
      if (route.query.q === 'Deposit' || route.query.q === 'Withdraw' || route.query.q === 'History') {
        currentPage.value = 'Deposit/Withdraw'
        paymentPage.value = route.query.q.toString()
      } else {
        currentPage.value = route.query.q.toString()
      }
    }
  }
})

function profileNavigation(goTo) {
  if (goTo !== 'Logout') {
    if (goTo === 'Deposit' || goTo === 'Withdraw' || goTo === 'History') {
      currentPage.value = 'Deposit/Withdraw'
      paymentMethod.value = 'Paypal'
      paymentPage.value = goTo
    } else {
      currentPage.value = goTo
    }
  } else {
    logout()
  }
}

const username = helpers.regex(/^([a-z0-9]|[-._](?![-._])){4,20}$/)

const formData = ref({
  address: '',
  amount: null,
  email: '',
  username: '',
  currentPassword: '',
  password: '',
  fullName: '',
  country: '',
  mainTeam: '',
  gender: '',
  day: '',
  month: '',
  year: ''
})

const rules = computed(() => {
  if (currentPage.value === 'Edit account details') {
    return {
      username: { required, username },
      fullName: { required },
      country: { required },
      // mainTeam: {  },
      // gender: { required },
      day: { required, maxValue: maxValue(31) },
      month: { required, maxValue: maxValue(12) },
      year: { required, betweenValue: between(1900, 2010) }
    }
  } else if (currentPage.value === 'Deposit/Withdraw') {
    if (paymentPage.value !== 'History') {
      return {
        address: { required },
        amount: { required }
      }
    } else return ''
  }
  else return ''
})

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const results = await v$.value.$validate()
  if (results) {
    if (currentPage.value === 'Deposit/Withdraw') {
      await handlePayment()
    } else {
      await changeDetails()
    }
  }
}

async function handlePayment() {
  if (currentUser.value) {
    paymentDone.value = false
    if (paymentPage.value === 'Withdraw' && Number(formData.value.amount) <= Number(currentUser.value.balance)) {
      currentUser.value.balance = Number(currentUser.value.balance) - Number(formData.value.amount)
      currentUser.value.payments.push({
        id: currentUser.value.payments.length,
        type: paymentPage.value,
        method: paymentMethod.value,
        amount: formData.value.amount,
        status: 'Completed'
      })
      formData.value.address = ''
      formData.value.amount = null
    } else if (paymentPage.value === 'Deposit') {
      currentUser.value.balance = Number(currentUser.value.balance) + Number(formData.value.amount)
      currentUser.value.payments.push({
        id: currentUser.value.payments.length,
        type: paymentPage.value,
        method: paymentMethod.value,
        amount: formData.value.amount,
        status: 'Completed'
      })
      formData.value.address = ''
      formData.value.amount = null
    }
    v$.value.$reset()
    paymentDone.value = true
  }
}


</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.profile {
  margin-top: 48px;
  margin-left: 6.313%;

  @include media-breakpoint-down(md) {
    margin-left: 23px;
    margin-right: 23px;
    margin-bottom: 48px;
  }

  @include media-breakpoint-down(sm) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 23px;
  }

  &__info {
    display: flex;
    margin-top: 65px;
    margin-right: 60px;
    padding-right: 70px;
    flex-direction: column;
    border-right: 1px solid #1A1F24;

    @include media-breakpoint-down(md) {
      margin-top: 0;
      margin-right: 23px;
      padding-right: 23px;
    }

    @include media-breakpoint-down(sm) {
      margin-top: 0;
      margin-right: 0;
      padding-right: 0;
      //justify-content: flex-end;
      //flex-direction: row-reverse;
      border-right: none;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(sm) {
        flex-direction: row;
      }
    }

    &-pfp {
      width: 104px;
      height: 104px;

      @include media-breakpoint-down(sm) {
        width: 123px;
        height: 120px;
        margin-right: 42px;
      }
    }

    &-name {
      color: #909AA3;
      font-size: 16px;
      line-height: 130%;
      margin-bottom: 5px;
      margin-top: 23px;

      @include media-breakpoint-down(sm) {
        margin-top: 0;
      }
    }

    &-nickname {
      color: #F5F5F5;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 7px;
    }

    &-team {
      color: #37B7FA;
      font-size: 16px;
      line-height: 130%;
      //margin-bottom: 11px;
      text-transform: uppercase;
    }

    &-balance {
      color: #37B7FA;
      font-size: 16px;
      line-height: 130%;
      margin-bottom: 11px;
      text-transform: uppercase;
    }

    &-icons {
      height: 24px;
      display: flex;
    }

    &-nav {
      margin-top: 17px;

      @include media-breakpoint-down(sm) {
        margin-top: 0;
        margin-right: 48px;
      }
    }

    &-link {
      cursor: pointer;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      position: relative;
      padding-left: 20px;
      margin-bottom: 24px;
      transition: all 0.4s ease;

      & label {
        cursor: pointer;
      }
    }

    &-link:nth-last-child(1) {
      margin-bottom: 0;
    }

    &-link::before, &-link::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s ease;
    }

    &-link::before {
      width: 11px;
      height: 11px;
      background: #FFFFFF;
      left: 0;
    }

    &-link::after {
      width: 9px;
      height: 9px;
      background: #151A1F;
      left: 1px;
      top: 1px;
    }

    &-link--active,
    &-link:hover {
      color: #37B7FA;
    }

    &-link--active::before, &-link--active::after,
    &-link:hover::before, &-link:hover::after {
      background: #37B7FA;
    }

    &-link input {
      display: none;
    }
  }

  &__main {
    width: 100%;
    max-width: 989px;
    margin-right: auto;

    @include media-breakpoint-down(md) {
      margin-right: 0;
    }

    &-title {
      color: #F5F5F5;
      font-size: 48px;
      text-align: center;
      line-height: 137.5%;
      margin-bottom: 42px;

      @include media-breakpoint-down(sm) {
        margin-bottom: 20px;
      }
    }

    &-controls {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &-button {
      // max-width: 236px;
      width: calc(100% / 3 - 7.109%);
      color: #F5F5F5;
      cursor: pointer;
      font-size: 22px;
      font-weight: 700;
      line-height: 100%;
      text-align: center;
      padding: 30px 15px;
      margin-right: 7.109%;
      margin-bottom: 50px;
      border: 2px solid #20252B;

      @include media-breakpoint-down(lg) {
        width: calc(100% / 2 - 7.109%);
      }
    }

    &-button:nth-child(3n),
    &-button:nth-last-child(1){
      margin-right: 0;

      @include media-breakpoint-down(lg) {
        margin-right: 7.109%;
      }
    }

    &-button:nth-child(2n) {

      @include media-breakpoint-down(lg) {
        margin-right: 0;
      }
    }

    &-table {
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #FFFFFF;
      & td {
        padding-bottom: 18px;
      }
    }

    &-name {
      color: #67707A;
      padding-right: 60px;
    }

    &-content {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &-form {
      width: 100%;
      max-width: 600px;
      padding: 44px 58px;
      margin-bottom: 33px;
      border: 1px solid #20252B;
    }

    &-save {
      border: none;
      outline: none;
      cursor: pointer;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #F5F5F5;
      padding: 16px 32px;
      background: #1A222D;
    }

    &-payments {
      width: 100%;
      max-width: 928px;
      margin-left: 6px;

      @include media-breakpoint-down(sm) {
        max-width: unset;
        margin-left: 0;
      }

      & .info {
        background: #0D1D2C;
        margin-bottom: 37px;

        @include media-breakpoint-down(xs) {
          margin-bottom: 24px;
        }

        &__profile {
          display: flex;
          padding: 22px 31px 37px 31px;

          @include media-breakpoint-down(xs) {
            padding: 22px;
          }

          &-pfp {
            width: 86px;
            height: 83px;
            border-radius: 4px;
          }

          &-wrapper {
            margin-left: 20px;
          }

          &-nickname {
            color: #F5F5F5;
            font-size: 24px;
            font-weight: 700;
            line-height: 130%;
            margin-bottom: 6px;
          }

          &-balance {
            color: #37B7FA;
            font-size: 16px;
            line-height: 130%;
            text-transform: uppercase;

            & span {
              margin-left: 4px;
            }
          }
        }

        &__tabs {
          display: flex;
          justify-content: space-around;

          &-link {
            color: #ABABAB;
            cursor: pointer;
            font-size: 24px;
            line-height: 130%;
            padding: 0 36px 6px;
            transition: all 0.3s ease;
            border-bottom: 3px solid transparent;

            @include media-breakpoint-down(md) {
              padding: 0 24px 6px;
            }

            @include media-breakpoint-down(xs) {
              font-size: 16px;
              padding: 0 12px 6px;
            }
          }

          &-link--active,
          &-link:hover {
            color: #FFFFFF;
            border-bottom: 3px solid #FFFFFF;
          }
        }
      }

      & .payment {
        display: flex;
        padding: 17px 39px;
        background: #0D1D2C;
        flex-direction: column;
        align-items: flex-start;

        @include media-breakpoint-down(xs) {
          padding: 22px;
        }

        &__methods {
          padding: 1px;
          display: flex;
          border-radius: 2px;
          margin-bottom: 34px;
          border: 1px solid #20252B;

          &-switch {
            width: 78px;
            color: #7A8899;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            line-height: 100%;
            padding: 7px 17px;
            text-align: center;
            background: #0F1215;

            &:hover,
            &--active {
              color: #F5F5F5;
              margin: 1px 0 1px 1px;
              border-radius: 1px 0 0 1px;
              background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
            }
          }
        }

        &__inputs {
          width: 100%;
          max-width: 512px;
          margin-bottom: 86px;

          @include media-breakpoint-down(xs) {
            margin-bottom: 0;
          }
        }

        &__buttons {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        &__button {
          width: 100%;
          border: none;
          padding: 8px 0;
          color: #F5F5F5;
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
          line-height: 100%;
          max-width: 160px;
          text-align: center;
          border-radius: 1px 0 0 1px;
          font-family: 'Rubik', sans-serif;
          background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);

          &:disabled,
          &[disabled] {
            cursor: default;
          }
        }
      }

      & .history {
        background: #0D1D2C;
        padding: 19px 41px;

        @include media-breakpoint-down(xs) {
          padding: 22px;
        }

        &__table {
          width: 100%;
          color: #ABABAB;

          & td {
            text-align: center;
          }
        }
      }
    }
  }
}

.birthdate {
  //margin-bottom: 16px;

  &__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
  }

  &__inputs {
    display: flex;

    & .input-wrapper:nth-child(2) {
      margin-left: 12px;
      margin-right: 12px;
    }
  }
}
</style>

<style lang="scss">
.input {
  background: #0F1215;
  border: 2px solid #20252B;

  &:hover {
    border: 2px solid #627CA3;
  }

  &:focus {
    border: 2px solid #185EC7;
  }

  &:disabled {
    border: 2px solid #121F33;
  }

  &--error {
    border: 2px solid #B83333;
  }

  &--success {
    border: 2px solid #4CB725;
  }
}
</style>
