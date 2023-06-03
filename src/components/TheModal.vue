<template>
  <div class="modal" @click="selectOptions = false">
    <div class="modal__controls">
      <svg class="modal__controls-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3334 16H6.66675" stroke="#1C2F4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0001 25.3334L6.66675 16L16.0001 6.66669" stroke="#1C2F4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg class="modal__controls-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" @click="handleClose" >
        <path d="M24 8L8 24" stroke="#627CA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 8L24 24" stroke="#627CA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="modal__wrapper" v-if="showTitle">
      <img class="modal__logo" src="@/assets/logo.png" alt="">

      <h3 class="modal__title" v-if="showTitle">{{ modalTitle }}</h3>

      <div class="modal__content">
        <div class="modal__inputs" v-if="showTitle">
          <BaseInput
              v-if="modalType === 'Login'"
              :label="'Username or email'"
              placeholder="Username or email"
              v-model="formData.login"
          />

          <BaseInput
              v-else-if="modalType === 'Signup'"
              :label="'Email'"
              placeholder="Email"
              v-model="formData.email"
          />

          <BaseInput
              v-else-if="modalType === 'Forgot password'"
              :label="'Username or email'"
              placeholder="Username or email"
              v-model="formData.forgot"
          />

          <BaseInput
              v-else
              :label="'Username'"
              placeholder="Username"
              v-model="formData.username"
          />

          <BaseInput
              v-if="showPass"
              :label="'Password'"
              placeholder="Password"
              v-model="formData.password"
          />

          <BaseSelect
              v-if="modalType === 'Signup Next'"
              :label="'Country'"
              v-model="formData.country"
              :options="countries"
              placeholder="Select country"
              :active="selectOptions"
              @click="selectOptions = !selectOptions"
          />

          <div class="birthdate" v-if="modalType === 'Signup Next'">
            <p class="birthdate__label">Date of birth</p>

            <div class="birthdate__inputs">
              <BaseInput
                  placeholder="dd" type="number"
                  v-model="formData.day"
              />

              <BaseInput
                  placeholder="mm" type="number"
                  v-model="formData.month"
              />

              <BaseInput
                  placeholder="yyyy" type="number"
                  v-model="formData.year"
              />
            </div>

            <!--     Validation errors       -->
          </div>


        </div>

        <!--   v-else Signup done   -->

        <button class="button button-gradient button-block" @click="submitForm">{{ btnContent }}</button>

        <div class="modal__options" v-if="showOptions">
          <p class="modal__options-text">
            or

            <span v-if="modalType === 'Login'"> login </span>

            <span v-else> signup </span>

            with
          </p>

          <div class="modal__options-icons">
            <div class="modal__option">
              <img src="@/assets/icons/facebook.png" alt="">
            </div>

            <div class="modal__option">
              <img src="@/assets/icons/battle.png" alt="">
            </div>

            <div class="modal__option">
              <img src="@/assets/icons/google.png" alt="">
            </div>

            <div class="modal__option">
              <img src="@/assets/icons/steam.png" alt="">
            </div>
          </div>
        </div>

        <div class="modal__alt">
          <p v-if="modalType === 'Login'" class="modal__alt-forgot modal__alt-link" @click="showForgot">
            Forgot password?
          </p>

          <p v-if="modalType === 'Login'">
            Don't have an account?
            <span class="modal__alt-link" @click="showSignup">Sign up!</span>
          </p>

          <p v-else-if="modalType === 'Forgot password'" class="modal__alt-forgot modal__alt-link" @click="showLogin">
            Back to login
          </p>

          <p v-else-if="modalType === 'Signup'" class="modal__alt-link" @click="showLogin">
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { useAuthStore } from '@/stores/auth'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'

const mainStore = useMainStore()
const { modalType } = storeToRefs(mainStore)
const { showLogin, showSignup, showNext, showDone, showForgot, closeModal } = mainStore

const authStore = useAuthStore()
const { formData } = storeToRefs(authStore)
const { clearForm } = authStore


const modalTitle = computed(() => {
  if (modalType.value === 'Login') {
    return 'Login'
  } else if (modalType.value === 'Signup') {
    return 'Sign up 1/2'
  } else if (modalType.value === 'Signup Next') {
    return 'Sign up 2/2'
  } else if (modalType.value === 'Forgot password') {
    return 'Forgot password'
  } else {
    return ''
  }
})

const showTitle = computed(() => {
  return !(modalType.value === 'Signup Done' || modalType.value === 'Report scores')
})

const showPass = computed(() => {
  return !(modalType.value === 'Signup Next' || modalType.value === 'Forgot password')
})

const btnContent = computed(() => {
  if (modalType.value === 'Login') {
    return 'Login'
  } else if (modalType.value === 'Signup') {
    return 'Next step'
  } else if (modalType.value === 'Signup Next') {
    return 'Create an account'
  } else if (modalType.value === 'Signup Done') {
    return 'Verify email'
  } else if (modalType.value === 'Forgot password') {
    return 'Reset password'
  } else {
    return 'Submit scores'
  }
})

const showOptions = computed(() => {
  return modalType.value === 'Login' || modalType.value === 'Signup'
})

const selectOptions = ref(false)

const submitForm = async () => {
  // validation later
  if (modalType.value === 'Login') {
    // login
    handleClose()
  }
  else if (modalType.value === 'Signup') {
    // signup
    showNext()
  }
  else if (modalType.value === 'Signup Next') {
    // finish signup
    showDone()
  }
}

function handleClose () {
  closeModal()
  clearForm()
}

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
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';


.modal {
  display: flex;
  color: #E6E6E6;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  padding: 16px;
  width: 100%;
  max-width: 698px;
  aspect-ratio: 1 / 1;
  background: $bg-dark;
  transform: translate(-50%, -50%);

  &__controls {
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;

    &-icon {
      cursor: pointer;
    }
  }

  &__wrapper {
    min-width: 240px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__content {
    width: 100%;
    display: flex;
    max-width: 240px;
    align-items: center;
    flex-direction: column;
  }

  &__logo {
    width: 88px;
    height: 80px;
    margin-bottom: 44px;

    @include media-breakpoint-down(sm) {
      margin-bottom: 30px;
    }
  }

  &__title {
    margin-bottom: 30px;

    @include media-breakpoint-down(sm) {
      margin-bottom: 22px;
    }
  }

  &__inputs {
    width: 100%;
    margin-bottom: 6px;
  }

  &__options {
    margin-top: 30px;

    @include media-breakpoint-down(sm) {
      margin-top: 22px;
    }

    &-text {
      color: #627CA3;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      margin-bottom: 16px;
    }

    &-icons {
      display: flex;
    }
  }

  &__option {
    width: 48px;
    height: 48px;
    padding: 8px;
    cursor: pointer;
    margin-right: 8px;
    border-radius: 2px;
    border: 1px solid #16263D;

    &:nth-last-child(1) {
      margin-right: 0;
    }
  }

  &__alt {
    display: flex;
    margin-top: 30px;
    align-items: center;
    flex-direction: column;

    @include media-breakpoint-down(sm) {
      margin-top: 22px;
    }

    &-forgot {
      margin-bottom: 12px;
    }

    &-link {
      color: #0A68F5;
      cursor: pointer;
      transition: color 0.4s;
    }

    &-link:hover {
      color: #0960E0;
    }
  }
}

.birthdate {
  //margin-bottom: 16px;

  &__label {
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
