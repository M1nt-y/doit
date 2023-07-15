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

      <div class="profile__main-wrapper" v-else-if="currentPage === 'My profile'">
        <table class="profile__main-table">
          <tr>
            <td class="profile__main-name">ID</td>
            <td>{{ currentUser.id }}</td>
          </tr>

          <tr>
            <td class="profile__main-name">Name</td>
            <td>{{ currentUser.fullName }}</td>
          </tr>

          <tr>
            <td class="profile__main-name">Username</td>
            <td>{{ currentUser.username }}</td>
          </tr>

<!--          <tr>-->
<!--            <td class="profile__main-name">With us from</td>-->
<!--            <td>{{ registrationDate() }}</td>-->
<!--          </tr>-->

          <tr>
            <td class="profile__main-name">Gender / Age</td>
            <td>{{ currentUser.gender }} / Age</td>
          </tr>

<!--          <tr>-->
<!--            <td class="profile__main-name">Nationality</td>-->
<!--            <td>Person 2</td>-->
<!--          </tr>-->

          <tr>
            <td class="profile__main-name">Country</td>
            <td>{{ currentUser.country }}</td>
          </tr>

<!--          <tr>-->
<!--            <td class="profile__main-name">Web-site</td>-->
<!--            <td>Person 2</td>-->
<!--          </tr>-->
        </table>

        <div class="profile__main-achievements">
          <div class="profile__main-column">
            <div class="profile__main-lvl profile__main-lvl--blue">
              <div class="profile__main-row">
                <p>Starcraft II</p>

                <p>15</p>
              </div>

              <div class="profile__main-progress" />
            </div>

            <div class="profile__main-lvl profile__main-lvl--green">
              <div class="profile__main-row">
                <p>League of legends</p>

                <p>3</p>
              </div>

              <div class="profile__main-progress" />
            </div>

            <div class="profile__main-lvl profile__main-lvl--purple">
              <div class="profile__main-row">
                <p>Hearthstone</p>

                <p>2</p>
              </div>

              <div class="profile__main-progress" />
            </div>

            <div class="profile__main-lvl profile__main-lvl--orange">
              <div class="profile__main-row">
                <p>World of Tanks</p>

                <p>1</p>
              </div>

              <div class="profile__main-progress" />
            </div>

            <div class="profile__main-lvl profile__main-lvl--red">
              <div class="profile__main-row">
                <p>S.K.I.L.L. – Special Force II</p>

                <p>15</p>
              </div>

              <div class="profile__main-progress" />
            </div>
          </div>

          <div class="profile__main-rewards">
            <div class="profile__main-award profile__main-award--blue" />

            <div class="profile__main-award profile__main-award--purple" />

            <div class="profile__main-award profile__main-award--red" />
          </div>
        </div>
      </div>

      <div class="profile__main-controls" v-else-if="currentPage === 'My team'">
        <div class="profile__main-button" @click="profileNavigation('Create team')">Create team</div>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Create team'">
        <div class="profile__main-form">
          <div class="profile__main-form-title">Basic info</div>

          <BaseInput
              :label="'Team name'"
              :has-error="v$.teamName && v$.teamName.$errors.length > 0"
              placeholder="Team name"
              v-model="formData.teamName"
          />

          <p v-if="v$.teamName && v$.teamName.$errors.length > 0" class="profile__main-error">
            {{ v$.teamName.$errors[0].$message }}
          </p>

          <BaseSelect
              label="Main game"
              :has-error="v$.mainGame && v$.mainGame.$errors.length > 0"
              v-model="formData.mainGame"
              :options="games"
              placeholder="Select game"
              :active="selectGames"
              @click="selectGames = !selectGames"
          />

          <p v-if="v$.mainGame && v$.mainGame.$errors.length > 0" class="profile__main-error">
            {{ v$.mainGame.$errors[0].$message }}
          </p>

          <BaseInput
              label="Team leader"
              :has-error="v$.teamLeader && v$.teamLeader.$errors.length > 0"
              placeholder="Team leader"
              v-model="formData.teamLeader"
          />

          <p v-if="v$.teamLeader && v$.teamLeader.$errors.length > 0" class="profile__main-error">
            {{ v$.teamLeader.$errors[0].$message }}
          </p>

          <BaseInput
              label="Join password"
              :has-error="v$.joinPassword && v$.joinPassword.$errors.length > 0"
              placeholder="Join password"
              v-model="formData.joinPassword"
          />

          <p v-if="v$.joinPassword && v$.joinPassword.$errors.length > 0" class="profile__main-error">
            {{ v$.joinPassword.$errors[0].$message }}
          </p>

          <BaseSelect
              :label="'Country'"
              :has-error="v$.country && v$.country.$errors.length > 0"
              v-model="formData.country"
              :options="countries"
              placeholder="Select country"
              :active="selectCountry"
              has-search
              @click="selectCountry = !selectCountry"
          />

          <p v-if="v$.country && v$.country.$errors.length > 0" class="profile__main-error">
            {{ v$.country.$errors[0].$message }}
          </p>

          <BaseInput
              label="Web-site"
              :has-error="v$.teamWebsite && v$.teamWebsite.$errors.length > 0"
              placeholder="Website"
              v-model="formData.teamWebsite"
          />

          <p v-if="v$.teamWebsite && v$.teamWebsite.$errors.length > 0" class="profile__main-error">
            {{ v$.teamWebsite.$errors[0].$message }}
          </p>

          <p class="profile__main-form-label">URL</p>

          <div class="profile__main-form-wrapper">
            <div class="profile__main-form-link">doit.gg/team</div>

            <input class="profile__main-form-input" v-model="formData.teamUrl" />
          </div>
        </div>

<!--        <div class="profile__main-form">-->
<!--          <div class="profile__main-form-title">Advanced</div>-->

<!--        </div>-->

        <div class="profile__main-buttons">
          <button class="profile__main-save">Delete team</button>

          <button class="profile__main-save">Save team</button>
        </div>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Edit team'">
        <div class="profile__main-form">

        </div>

        <div class="profile__main-form">

        </div>

        <div class="profile__main-buttons">
          <button class="profile__main-save" @click="deleteTeam">Delete team</button>

          <button class="profile__main-save" @click="submitForm">Save team</button>
        </div>
      </div>

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
                v-if="windowWidth <= 425"
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

      <div class="profile__main-premium" v-else-if="currentPage === 'Premium'">
        <PremiumCards class="profile__main-swiper" :space="25" />
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Support'">
        <div class="profile__main-form">
          <BaseInput
              :has-error="v$.name && v$.name.$errors.length > 0"
              placeholder="Name"
              v-model="formData.name"
          />

          <p v-if="v$.name && v$.name.$errors.length > 0" class="profile__main-error">
            {{ v$.name.$errors[0].$message }}
          </p>

          <BaseInput
              :has-error="v$.topic && v$.topic.$errors.length > 0"
              placeholder="Topic"
              v-model="formData.topic"
          />

          <p v-if="v$.topic && v$.topic.$errors.length > 0" class="profile__main-error">
            {{ v$.topic.$errors[0].$message }}
          </p>

          <BaseSelect
              :has-error="v$.subject && v$.subject.$errors.length > 0"
              v-model="formData.subject"
              :options="subjects"
              placeholder="Select subject"
              :active="selectSubject"
              @click="selectSubject = !selectSubject"
          />

          <p v-if="v$.subject && v$.subject.$errors.length > 0" class="profile__main-error">
            {{ v$.subject.$errors[0].$message }}
          </p>

          <textarea
              placeholder="Your problem..."
              class="profile__main-textarea"
              :class="{ 'profile__main-textarea--error': v$.message && v$.message.$errors.length > 0 }"
              v-model="formData.message"
          />

          <p v-if="v$.message && v$.message.$errors.length > 0" class="profile__main-error">
            {{ v$.message.$errors[0].$message }}
          </p>
        </div>

        <button class="profile__main-save" @click="submitForm">Submit</button>
      </div>

      <div class="profile__main-controls" v-else-if="currentPage === 'Settings'">
        <div class="profile__main-button" v-for="(button, index) in settingsButtons" :key="index" @click="profileNavigation(button)">{{ button }}</div>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Edit account details'">
        <div class="profile__main-form">
          <BaseInput
              :label="'Username'"
              :has-error="v$.username && v$.username.$errors.length > 0"
              placeholder="Username"
              v-model="formData.username"
          />

          <p v-if="v$.username && v$.username.$errors.length > 0" class="profile__main-error">
            {{ v$.username.$errors[0].$message }}
          </p>

          <BaseInput
              :label="'Full name'"
              placeholder="Full name"
              v-model="formData.fullName"
              :has-error="v$.fullName && v$.fullName.$errors.length > 0"
          />

          <p v-if="v$.fullName && v$.fullName.$errors.length > 0" class="profile__main-error">
            {{ v$.fullName.$errors[0].$message }}
          </p>

          <BaseSelect
              :label="'Country'"
              :has-error="v$.country && v$.country.$errors.length > 0"
              v-model="formData.country"
              :options="countries"
              placeholder="Select country"
              :active="selectCountry"
              has-search
              @click="selectCountry = !selectCountry"
          />

          <p v-if="v$.country && v$.country.$errors.length > 0" class="profile__main-error">
            {{ v$.country.$errors[0].$message }}
          </p>

          <BaseSelect
              :label="'Main team'"
              :has-error="v$.mainTeam && v$.mainTeam.$errors.length > 0"
              v-model="formData.mainTeam"
              :options="currentUser.teams"
              placeholder="Select team"
              :active="selectTeam"
              @click="selectTeam = !selectTeam"
          />

          <p v-if="v$.mainTeam && v$.mainTeam.$errors.length > 0" class="profile__main-error">
            {{ v$.mainTeam.$errors[0].$message }}
          </p>

          <BaseSelect
              :label="'Gender'"
              :has-error="v$.gender && v$.gender.$errors.length > 0"
              v-model="formData.gender"
              :options="genders"
              placeholder="Select gender"
              :active="selectGender"
              @click="selectGender = !selectGender"
          />

          <p v-if="v$.gender && v$.gender.$errors.length > 0" class="profile__main-error">
            {{ v$.gender.$errors[0].$message }}
          </p>

          <div class="birthdate">
            <p class="birthdate__label">Date of birth</p>
            <div class="birthdate__inputs">
              <BaseInput
                  placeholder="dd" type="number"
                  :has-error="v$.day && v$.day.$errors.length > 0"
                  v-model="formData.day"
              />

              <BaseInput
                  placeholder="mm" type="number"
                  :has-error="v$.month && v$.month.$errors.length > 0"
                  v-model="formData.month"
              />

              <BaseInput
                  placeholder="yyyy" type="number"
                  :has-error="v$.year && v$.year.$errors.length > 0"
                  v-model="formData.year"
              />
            </div>
            <div class="birthdate__errors">
              <p class="birthdate__error-message" v-if="birthdateError">{{ birthdateError }}</p>
            </div>
          </div>
        </div>

        <button class="profile__main-save" @click="submitForm">Change details</button>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Change email address'">
        <div class="profile__main-form">
          <BaseInput
              :label="'Current password'"
              :has-error="v$.currentPassword && v$.currentPassword.$errors.length > 0"
              placeholder="Password"
              v-model="formData.currentPassword"
          />

          <p v-if="v$.currentPassword && v$.currentPassword.$errors.length > 0" class="profile__main-error">
            {{ v$.currentPassword.$errors[0].$message }}
          </p>

          <BaseInput
              :label="'New email'"
              :has-error="v$.email && v$.email.$errors.length > 0"
              placeholder="Email"
              v-model="formData.email"
          />

          <p v-if="v$.email && v$.email.$errors.length > 0" class="profile__main-error">
            {{ v$.email.$errors[0].$message }}
          </p>
        </div>

        <button class="profile__main-save">Change email</button>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Change password'">
        <div class="profile__main-form">
          <BaseInput
              :label="'Current password'"
              :has-error="v$.currentPassword && v$.currentPassword.$errors.length > 0"
              placeholder="Current password"
              v-model="formData.currentPassword"
          />

          <p v-if="v$.currentPassword && v$.currentPassword.$errors.length > 0" class="profile__main-error">
            {{ v$.currentPassword.$errors[0].$message }}
          </p>

          <BaseInput
              :label="'New password'"
              :has-error="v$.password && v$.password.$errors.length > 0"
              placeholder="New password"
              v-model="formData.password"
          />

          <p v-if="v$.password && v$.password.$errors.length > 0" class="profile__main-error">
            {{ v$.password.$errors[0].$message }}
          </p>
        </div>

        <button class="profile__main-save">Change password</button>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Manage preferences'">
        <div class="profile__main-form">
          <BaseInput
              :label="'Time zone'"
              :has-error="v$.timezone && v$.timezone.$errors.length > 0"
              placeholder="Time zone"
              v-model="formData.timezone"
          />

          <p v-if="v$.timezone && v$.timezone.$errors.length > 0" class="profile__main-error">
            {{ v$.timezone.$errors[0].$message }}
          </p>

          <BaseInput
              :label="'Language'"
              :has-error="v$.language && v$.language.$errors.length > 0"
              placeholder="Language"
              v-model="formData.language"
          />

          <p v-if="v$.language && v$.language.$errors.length > 0" class="profile__main-error">
            {{ v$.language.$errors[0].$message }}
          </p>
        </div>

        <button class="profile__main-save">Change preferences</button>
      </div>

      <div class="profile__main-content" v-else-if="currentPage === 'Game profile'">
        <div class="profile__main-form">
          <BaseInput
              v-if="gameProfile"
              :label="'Riot Games account'"
              placeholder="Riot Games account"
              v-model="gameProfile.riot"
          />
          <BaseInput
              v-if="gameProfile"
              :label="'Battlenet account'"
              placeholder="Battlenet account"
              v-model="gameProfile.battlenet"
          />
          <BaseInput
              v-if="gameProfile"
              :label="'Steam account'"
              placeholder="Steam account"
              v-model="gameProfile.steam"
          />
        </div>

        <button class="profile__main-save" @click="submitForm">Save profile</button>
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
import PremiumCards from '@/components/PremiumCards.vue'


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
const userPanelButtons = ref(['My profile', 'My team', 'Deposit', 'Withdraw', 'Premium', 'Statistics', 'Support', 'Settings', 'Game profile', 'Logout'])
const settingsButtons = ref(['Edit account details', 'Change email address', 'Change password', 'Manage preferences', 'Close account'])
const selectCountry = ref(false)
const selectTeam = ref(false)
const selectGender = ref(false)
const selectSubject = ref(false)
const selectGames = ref(false)
const gameProfile = ref({
  riot: '',
  steam: '',
  battlenet: ''
})

const countries = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'AndorrA', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'},
  {name: 'Bulgaria', code: 'BG'},
  {name: 'Burkina Faso', code: 'BF'},
  {name: 'Burundi', code: 'BI'},
  {name: 'Cambodia', code: 'KH'},
  {name: 'Cameroon', code: 'CM'},
  {name: 'Canada', code: 'CA'},
  {name: 'Cape Verde', code: 'CV'},
  {name: 'Cayman Islands', code: 'KY'},
  {name: 'Central African Republic', code: 'CF'},
  {name: 'Chad', code: 'TD'},
  {name: 'Chile', code: 'CL'},
  {name: 'China', code: 'CN'},
  {name: 'Christmas Island', code: 'CX'},
  {name: 'Cocos (Keeling) Islands', code: 'CC'},
  {name: 'Colombia', code: 'CO'},
  {name: 'Comoros', code: 'KM'},
  {name: 'Congo', code: 'CG'},
  {name: 'Congo, The Democratic Republic of the', code: 'CD'},
  {name: 'Cook Islands', code: 'CK'},
  {name: 'Costa Rica', code: 'CR'},
  {name: 'Cote D\'Ivoire', code: 'CI'},
  {name: 'Croatia', code: 'HR'},
  {name: 'Cuba', code: 'CU'},
  {name: 'Cyprus', code: 'CY'},
  {name: 'Czech Republic', code: 'CZ'},
  {name: 'Denmark', code: 'DK'},
  {name: 'Djibouti', code: 'DJ'},
  {name: 'Dominica', code: 'DM'},
  {name: 'Dominican Republic', code: 'DO'},
  {name: 'Ecuador', code: 'EC'},
  {name: 'Egypt', code: 'EG'},
  {name: 'El Salvador', code: 'SV'},
  {name: 'Equatorial Guinea', code: 'GQ'},
  {name: 'Eritrea', code: 'ER'},
  {name: 'Estonia', code: 'EE'},
  {name: 'Ethiopia', code: 'ET'},
  {name: 'Falkland Islands (Malvinas)', code: 'FK'},
  {name: 'Faroe Islands', code: 'FO'},
  {name: 'Fiji', code: 'FJ'},
  {name: 'Finland', code: 'FI'},
  {name: 'France', code: 'FR'},
  {name: 'French Guiana', code: 'GF'},
  {name: 'French Polynesia', code: 'PF'},
  {name: 'French Southern Territories', code: 'TF'},
  {name: 'Gabon', code: 'GA'},
  {name: 'Gambia', code: 'GM'},
  {name: 'Georgia', code: 'GE'},
  {name: 'Germany', code: 'DE'},
  {name: 'Ghana', code: 'GH'},
  {name: 'Gibraltar', code: 'GI'},
  {name: 'Greece', code: 'GR'},
  {name: 'Greenland', code: 'GL'},
  {name: 'Grenada', code: 'GD'},
  {name: 'Guadeloupe', code: 'GP'},
  {name: 'Guam', code: 'GU'},
  {name: 'Guatemala', code: 'GT'},
  {name: 'Guernsey', code: 'GG'},
  {name: 'Guinea', code: 'GN'},
  {name: 'Guinea-Bissau', code: 'GW'},
  {name: 'Guyana', code: 'GY'},
  {name: 'Haiti', code: 'HT'},
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
  {name: 'Holy See (Vatican City State)', code: 'VA'},
  {name: 'Honduras', code: 'HN'},
  {name: 'Hong Kong', code: 'HK'},
  {name: 'Hungary', code: 'HU'},
  {name: 'Iceland', code: 'IS'},
  {name: 'India', code: 'IN'},
  {name: 'Indonesia', code: 'ID'},
  {name: 'Iran, Islamic Republic Of', code: 'IR'},
  {name: 'Iraq', code: 'IQ'},
  {name: 'Ireland', code: 'IE'},
  {name: 'Isle of Man', code: 'IM'},
  {name: 'Israel', code: 'IL'},
  {name: 'Italy', code: 'IT'},
  {name: 'Jamaica', code: 'JM'},
  {name: 'Japan', code: 'JP'},
  {name: 'Jersey', code: 'JE'},
  {name: 'Jordan', code: 'JO'},
  {name: 'Kazakhstan', code: 'KZ'},
  {name: 'Kenya', code: 'KE'},
  {name: 'Kiribati', code: 'KI'},
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
  {name: 'Korea, Republic of', code: 'KR'},
  {name: 'Kuwait', code: 'KW'},
  {name: 'Kyrgyzstan', code: 'KG'},
  {name: 'Lao People\'S Democratic Republic', code: 'LA'},
  {name: 'Latvia', code: 'LV'},
  {name: 'Lebanon', code: 'LB'},
  {name: 'Lesotho', code: 'LS'},
  {name: 'Liberia', code: 'LR'},
  {name: 'Libyan Arab Jamahiriya', code: 'LY'},
  {name: 'Liechtenstein', code: 'LI'},
  {name: 'Lithuania', code: 'LT'},
  {name: 'Luxembourg', code: 'LU'},
  {name: 'Macao', code: 'MO'},
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
  {name: 'Madagascar', code: 'MG'},
  {name: 'Malawi', code: 'MW'},
  {name: 'Malaysia', code: 'MY'},
  {name: 'Maldives', code: 'MV'},
  {name: 'Mali', code: 'ML'},
  {name: 'Malta', code: 'MT'},
  {name: 'Marshall Islands', code: 'MH'},
  {name: 'Martinique', code: 'MQ'},
  {name: 'Mauritania', code: 'MR'},
  {name: 'Mauritius', code: 'MU'},
  {name: 'Mayotte', code: 'YT'},
  {name: 'Mexico', code: 'MX'},
  {name: 'Micronesia, Federated States of', code: 'FM'},
  {name: 'Moldova, Republic of', code: 'MD'},
  {name: 'Monaco', code: 'MC'},
  {name: 'Mongolia', code: 'MN'},
  {name: 'Montserrat', code: 'MS'},
  {name: 'Morocco', code: 'MA'},
  {name: 'Mozambique', code: 'MZ'},
  {name: 'Myanmar', code: 'MM'},
  {name: 'Namibia', code: 'NA'},
  {name: 'Nauru', code: 'NR'},
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'RWANDA', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, Province of China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States', code: 'US'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Viet Nam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'}
]
const genders = [
  {
    id: 0,
    name: 'Male'
  },
  {
    id: 1,
    name: 'Female'
  },
  {
    id: 2,
    name: 'Other'
  },
]
const subjects = [
  {
    id: 0,
    name: 'Subject 0'
  },
  {
    id: 1,
    name: 'Subject 1'
  },
  {
    id: 2,
    name: 'Subject 2'
  },
  {
    id: 3,
    name: 'Subject 3'
  }
]
const games = [
  {
    id: 0,
    name: 'Dota ll'
  },
  {
    id: 1,
    name: 'CS:GO'
  },
  {
    id: 2,
    name: 'StarCraft ll'
  },
  {
    id: 3,
    name: 'WarCraft lll'
  },
  {
    id: 4,
    name: 'FIFA 2020'
  },
  {
    id: 5,
    name: 'Valorant'
  },
  {
    id: 6,
    name: 'BrawlStars'
  }
]


function closeSelect() {
  selectPayment.value = false
  selectPage.value = false
  selectCountry.value = false
  selectTeam.value = false
  selectGender.value = false
  selectSubject.value = false
  selectGames.value = false
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
    } else if (goTo === 'Edit team') {
      // load team data into forms
      currentPage.value = goTo
    } else {
      currentPage.value = goTo
    }
  } else {
    router.push('/')
    logout()
  }
}

const username = helpers.regex(/^([a-z0-9]|[-._](?![-._])){4,20}$/)

const formData = ref({
  address: '',
  amount: null,
  email: '',
  username: currentUser.value.username,
  currentPassword: '',
  password: '',
  fullName: currentUser.value.fullName,
  country: currentUser.value.country,
  mainTeam: '',
  gender: currentUser.value.gender,
  day: '',
  month: '',
  year: '',
  timezone: '',
  language: '',
  name: '',
  topic: '',
  subject: '',
  message: '',
  teamName: '',
  mainGame: '',
  teamLeader: '',
  joinPassword: '',
  teamCountry: '',
  teamWebsite: '',
  teamUrl: '',
  teamLogo: ''
})


const birthdateError = computed(() => {
  if (v$.value.day?.$errors[0]?.$message === 'Value is required'|| v$.value.month?.$errors[0]?.$message === 'Value is required' || v$.value.year?.$errors[0]?.$message === 'Value is required') {
    return 'Value is required'
  } else if (v$.value.day?.$errors[0]?.$message === 'The maximum value allowed is 31' || v$.value.month?.$errors[0]?.$message === 'The maximum value allowed is 12' || v$.value.year?.$errors[0]?.$message === 'The value must be between 1900 and 2010') {
    return 'Invalid date'
  } else {
    return ''
  }
})


const rules = computed(() => {
  if (currentPage.value === 'Edit account details') {
    return {
      username: { required, username },
      fullName: { required },
      country: { required },
      // mainTeam: {  },
      gender: { required },
      day: { required, maxValue: maxValue(31) },
      month: { required, maxValue: maxValue(12) },
      year: { required, betweenValue: between(1900, 2010) }
    }
  } else if (currentPage.value === 'Support') {
    return {
      name: { required },
      topic: { required },
      subject: { required },
      message: { required }
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
    } else if (currentPage.value === 'Support') {
      await submitTicket()
    } else {
      await changeDetails()
    }
    v$.value.$reset()
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
    paymentDone.value = true
  }
}

async function submitTicket() {
  formData.value.name = ''
  formData.value.topic = ''
  formData.value.subject = ''
  formData.value.message = ''
}

async function changeDetails() {
  if (currentUser.value) {
    if (currentPage.value === 'Edit account details') {
      currentUser.value.username = formData.value.username
      currentUser.value.fullName = formData.value.fullName
      currentUser.value.country = formData.value.country
      currentUser.value.gender = formData.value.gender
      // mainTeam: {  },
      // day: { required, maxValue: maxValue(31) },
      // month: { required, maxValue: maxValue(12) },
      // year: { required, betweenValue: between(1900, 2010) }
    } else if (currentPage.value === 'Game profile') {
      currentUser.value.gameProfile = gameProfile.value
    }

  }
}

</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.profile {
  margin-top: 48px;
  overflow-x: hidden;
  margin-left: 6.313%;
  justify-content: flex-start;

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
    min-width: 235px;
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

      @media screen and (max-width: 374px) {
        width: 80px;
        height: 80px;
        margin-right: 24px;
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
    width: calc(100% - 235px);
    max-width: 989px;
    margin-right: auto;

    @include media-breakpoint-down(md) {
      margin-right: 0;
    }

    @include media-breakpoint-down(sm) {
      width: 100%;
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
        margin-bottom: 25px;
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

    &-wrapper {
      display: flex;
      align-items: flex-start;

      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }
    }

    &-column {
      display: flex;
      flex-direction: column;
      margin-left: 20%;

      &:nth-child(1) {

        @include media-breakpoint-down(lg) {
          margin-left: 0;
        }
      }
    }

    &-table {
      margin-right: 3.722%;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #FFFFFF;

      @include media-breakpoint-down(sm) {
        width: 100%;
        margin-right: 0;
      }

      & td {
        padding-bottom: 18px;
      }
    }

    &-achievements {
      display: flex;

      @include media-breakpoint-down(sm) {
        width: 100%;
        flex-direction: column;
      }
    }

    &-rewards {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(sm) {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    &-lvl {
      width: 270px;
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      margin-bottom: 26px;

      @include media-breakpoint-down(sm) {
        width: 100%;
      }

      &--blue {
        color: #5AF;
      }

      &--green {
        color: #55FF8F;
      }

      &--purple {
        color: #B455FF;
      }

      &--orange {
        color: #FF9255;
      }

      &--red {
        color: #F55;
      }
    }

    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 9px;
    }

    &-progress {
      width: 100%;
      height: 2px;
      position: relative;
      border-radius: 2px;
      background: #2B353F;
    }

    &-award {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-bottom: 19px;

      &--blue {
        border: 1px solid #5AF;
      }

      &--purple {
        border: 1px solid #B455FF;
      }

      &--red {
        border: 1px solid #F55;
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

      @include media-breakpoint-down(sm) {
        max-width: unset;
        padding: 22px 29px;
      }
    }

    &-form-title {
      color: #CCCDCD;
      font-size: 22px;
      font-weight: 500;
      line-height: 100%;
      margin-bottom: 35px;
    }

    &-form-label {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      margin-bottom: 6px;
    }

    &-form-wrapper {
      display: flex;
      height: 40px;
      border-radius: 4px;
      border: 2px solid #20252B;
      background: #0F1215;
    }

    &-form-link {
      background: #20252B;
      padding: 12px 10px 12px 12px;
      color: #78828F;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 80%;
    }

    &-form-input {
      background: none;
      outline: none;
      border: none;
      color: #CCCDCD;
      font-family: Rubik, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      padding-left: 9px;
    }

    &-error {
      color: #B83333;
      margin-top: -12px;
      margin-bottom: 16px;
    }

    &-textarea {
      width: 100%;
      resize: none;
      border-radius: 4px;
      border: 2px solid #20252B;
      background: #0F1215;
      aspect-ratio: 1 / 0.635;
      padding: 26px 16px;
      color: rgba(204, 205, 205, 0.40);
      font-size: 16px;
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      transition: all .4s;
      margin-bottom: 8px;

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

      &--error {
        border: 2px solid #B83333;
      }

      &--success {
        border: 2px solid #4CB725;
      }
    }

    &-buttons {
      display: flex;
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

      &:nth-child(2) {
        margin-left: 34px;
      }
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

    &-premium {
      width: 100%;
      max-width: 989px;
    }

    &-swiper {

      @include media-breakpoint-down(xs) {
        padding-bottom: 39px
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

.profile__main-premium {
  //.card {
  //  height: 492px;
  //}

  .swiper-slide {
    width: 313px;
  }
}
</style>
