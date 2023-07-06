<template>
<main class="main tournir-page">
  <div class="container">
    <div class="tournir-page__header">
      <div class="tournir-page__header-title">
        <h2>DOTA II: TOURNAMNETS</h2>
      </div>
      <div class="tournir-page__header-img">
        <picture>
          <source type="image/webp" :srcset="DotaLogoWebp">
          <source type="image/png" :srcset="DotaLogo">
          <img class="card__img" :src="DotaLogoWebp" alt="">
        </picture>
      </div>
    </div>
    <div class="tournir-page__content">
      <div class="tournir-page__content-array">
        <div class="desctop" v-if="!isMobile">
          <div class="item" v-for="item in filteredTournir">
            <router-link :to="{ path: `/tournir/${item.id}` }">
            <div class="img">
              <picture>
              <source type="image/webp" :srcset="item.photo">
              <source type="image/png" :srcset="item.photos">
              <img class="card__img" :src="item.photo" alt="">
              </picture>
              <p>{{ item.label }}</p>
            </div>
            <div class="text">
              <div class="top">
                <h4>{{ item.title }}</h4>
              </div>
              <div class="bottom">
                <div class="block">
                  <p>Prize</p>
                  <h4>{{ item.prize }}</h4>
                </div>
                <div class="block">
                  <p>Entry fee</p>
                  <h4>{{ item.fee }}</h4>
                </div>
                <div class="block">
                  <p>platform</p>
                  <h4>{{ item.platform }}</h4>
                </div>
                <div class="block">
                  <p>Slots</p>
                  <h4>{{ item.slot }}</h4>
                </div>
                <div class="block">
                  <p>Mode</p>
                  <h4>{{ item.mode }}</h4>
                </div>
                <div class="block">
                  <p>Server</p>
                  <h4>{{ item.server }}</h4>
                </div>
              </div>
            </div>
            </router-link>
          </div>
            
        </div>
        <ElemetTournir
        :array="tournir"
        @opened="opened"
        v-else/>
      </div>
      <div class="tournir-page__content-right">
        <div class="info" v-if="!isMobile">
          <div class="title">
            <h4>Filters <span @click="resetFilters" v-if="anyFilterSelected">clear</span></h4>
          </div>
          <div class="mode">
            <h3>Game mode</h3>
            <div class="con">
              <div class="item" 
              v-for="(item, index) in mode"
              :class="{ active: item.state }"
              @click="toggleState(index)">
                <TwoState v-if="item.state"/>
                <OneState v-else/>
                
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="status">
            <h4>Status</h4>
            <div class="con">
              <div class="item" 
              v-for="(item, index) in status"
              :class="{ active: item.state }"
              @click="toggleStateStatus(index)">
                <TwoState v-if="item.state"/>
                <OneState v-else/>
                
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="platform">
            <h4>Platform</h4>
            <div class="con">
              <div class="item" 
              v-for="(item, index) in platform"
              :class="{ active: item.state }"
              @click="toggleStatePlatform(index)">
                <TwoState v-if="item.state"/>
                <OneState v-else/>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="region">
            <h4>Server region</h4>
            <div class="con">
              <div class="item" 
              v-for="(item, index) in region"
              :class="{ active: item.state }"
              @click="toggleStateRegion(index)">
                <TwoState v-if="item.state"/>
                <OneState v-else/>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <FiltredTournir v-else
        :mode="mode"
        :region="region"
        :status="status"
        :clone="clone"
        :anyFilterSelected="anyFilterSelected"
        @toggleStateStatus="toggleStateStatus"
        @toggleStateRegion="toggleStateRegion"
        @toggleState="toggleState"
        @deleteElem="deleteElem"
        @resetFilters="resetFilters"/>
      </div>
    </div>
  </div>
</main>
</template>

<script setup>
import DotaLogoWebp from '@/assets/images/dota_logo.png?w=366&h=198&format=webp'
import DotaLogo from '@/assets/images/dota_logo.png'
import DotaDesktop from '@/assets/images/tournir-one.png?w=366&h=198&format=webp'
import DotaMiblieebp from '@/assets/images/dota-mobile.png?w=366&h=198&format=webp'
import DotaOpenedMiblieebp from '@/assets/images/dota-opened.png?w=366&h=198&format=webp'
import FiltredTournir from '@/components/Tournir/Filters.vue'
import ElemetTournir from '@/components/Tournir/Element.vue'
import {ref, computed} from 'vue'

import OneState from '@/assets/icons/tournirs/OneState.vue'
import TwoState from '@/assets/icons/tournirs/TwoState.vue'
const tournir = ref([
  {
    id: 0,
    photos: new URL('../assets/images/tournir-one.png', import.meta.url),
    dotaMobileFalseWebp: DotaMiblieebp,
    dotaMobileFalsePng: new URL('../assets/images/dota-mobile.png', import.meta.url),
    dotaMobileTrueWebp: DotaOpenedMiblieebp,
    dotaMobileTruePng: new URL('../assets/images/dota-opened.png', import.meta.url),
    photo: DotaDesktop,
    label: 'Ongoing',
    title: 'Dota 2 5v5 #2 - Sunday',
    prize: '$10',
    fee: 'Free to enter',
    platform: 'PS4',
    slot: '2 / 8',
    mode: 'Capitains mode',
    server: 'US East',
    gameMode: 1,
    status: 1,
    platformMode: 3,
    region: 1,
    opened: true,
  },
  {
    id: 1,
    photos: new URL('../assets/images/tournir-one.png', import.meta.url),
    dotaMobileFalseWebp: DotaMiblieebp,
    dotaMobileFalsePng: new URL('../assets/images/dota-mobile.png', import.meta.url),
    dotaMobileTrueWebp: DotaOpenedMiblieebp,
    dotaMobileTruePng: new URL('../assets/images/dota-opened.png', import.meta.url),
    photo: DotaDesktop,
    label: 'Ongoing',
    title: 'Dota 2 5v5 #2 - Sunday',
    prize: '$10',
    fee: 'Free to enter',
    platform: 'PC',
    slot: '2 / 8',
    mode: 'Capitains mode',
    server: 'US East',
    gameMode: 1,
    status: 1,
    platformMode: 1,
    region: 2,
    opened: false,
  },
  {
    id: 2,
    photos: new URL('../assets/images/tournir-one.png', import.meta.url),
    dotaMobileFalseWebp: DotaMiblieebp,
    dotaMobileFalsePng: new URL('../assets/images/dota-mobile.png', import.meta.url),
    dotaMobileTrueWebp: DotaOpenedMiblieebp,
    dotaMobileTruePng: new URL('../assets/images/dota-opened.png', import.meta.url),
    photo: DotaDesktop,
    label: 'Ongoing',
    title: 'Dota 2 5v5 #2 - Sunday',
    prize: '$10',
    fee: 'Free to enter',
    platform: 'XBOX',
    slot: '2 / 8',
    mode: 'Capitains mode',
    server: 'US East',
    gameMode: 3,
    status: 1,
    platformMode: 2,
    region: 2,
    opened: false,
  },
  {
    id: 3,
    photos: new URL('../assets/images/tournir-one.png', import.meta.url),
    dotaMobileFalseWebp: DotaMiblieebp,
    dotaMobileFalsePng: new URL('../assets/images/dota-mobile.png', import.meta.url),
    dotaMobileTrueWebp: DotaOpenedMiblieebp,
    dotaMobileTruePng: new URL('../assets/images/dota-opened.png', import.meta.url),
    photo: DotaDesktop,
    label: 'Ongoing',
    title: 'Dota 2 5v5 #2 - Sunday',
    prize: '$10',
    fee: 'Free to enter',
    platform: 'PS4',
    slot: '2 / 8',
    mode: 'Capitains mode',
    server: 'US East',
    gameMode: 2,
    status: 1,
    platformMode: 3,
    region: 3,
    opened: false,
  },
  {
    id: 4,
    photos: new URL('../assets/images/tournir-one.png', import.meta.url),
    dotaMobileFalseWebp: DotaMiblieebp,
    dotaMobileFalsePng: new URL('../assets/images/dota-mobile.png', import.meta.url),
    dotaMobileTrueWebp: DotaOpenedMiblieebp,
    dotaMobileTruePng: new URL('../assets/images/dota-opened.png', import.meta.url),
    photo: DotaDesktop,
    label: 'Ongoing',
    title: 'Dota 2 5v5 #2 - Sunday',
    prize: '$10',
    fee: 'Free to enter',
    platform: 'PS4',
    slot: '2 / 8',
    mode: 'Capitains mode',
    server: 'US East',
    gameMode: 2,
    status: 2,
    platformMode: 3,
    region: 4,
    opened: false,
  },
])

const mode = ref([
  {
    title: '1V1',
    content: 1,
    state: false,
  },
  {
    title: '2V2',
    content: 2,
    state: false,
  },
  {
    title: '5V5',
    content: 3,
    state: false,
  },
])

function toggleState(index) {
  const selectedItem = mode.value[index];
  selectedItem.state = !selectedItem.state;
  
  if (selectedItem.state) {
    clone.value.push(selectedItem);
  } else {
    const itemIndex = clone.value.findIndex(item => item.content === selectedItem.content);
    if (itemIndex !== -1) {
      clone.value.splice(itemIndex, 1);
    }
  }

}

const status = ref([
  {
    title: 'UPCOMING',
    status: 1,
    state: false,
  },
  {
    title: 'PAST',
    status: 2,
    state: false,
  },
])
function toggleStateStatus(index){
  const selectedItem = status.value[index];
  selectedItem.state = !selectedItem.state;
  
  if (selectedItem.state) {
    clone.value.push(selectedItem);
  } else {
    const itemIndex = clone.value.findIndex(item => item.content === selectedItem.content);
    if (itemIndex !== -1) {
      clone.value.splice(itemIndex, 1);
    }
  }
}

const platform = ref([
  {
    title: 'PC',
    platform: 1,
    state: false,
  },
  {
    title: 'XBOX ONE',
    platform: 2,
    state: false,
  },
  {
    title: 'PS4',
    platform: 3,
    state: false,
  },
  {
    title: 'NINTENDO SWITCH',
    platform: 4,
    state: false,
  },
  {
    title: 'PS5',
    platform: 5,
    state: false,
  },
  {
    title: 'XBOX SERIES X',
    platform: 6,
    state: false,
  },
])
const region = ref([
  {
    title: 'EUROPE',
    region: 1,
    state: false,
  },
  {
    title: 'SINGAPORE',
    region: 2,
    state: false,
  },
  {
    title: 'AUSTRALIA',
    region: 3,
    state: false,
  },
  {
    title: 'BRAZIL',
    region: 4,
    state: false,
  },
  {
    title: 'PERU',
    region: 5,
    state: false,
  },
  {
    title: 'US EAST',
    region: 6,
    state: false,
  },
])

function toggleStateRegion(index){
  const selectedItem = region.value[index];
  selectedItem.state = !selectedItem.state;
  
  if (selectedItem.state) {
    clone.value.push(selectedItem);
  } else {
    const itemIndex = clone.value.findIndex(item => item.content === selectedItem.content);
    if (itemIndex !== -1) {
      clone.value.splice(itemIndex, 1);
    }
  }
}

function toggleStatePlatform(index){
  platform.value[index].state = !platform.value[index].state;
}

const filteredTournir = computed(() => {
  const filters = [
    { values: mode.value.filter((item) => item.state).map((item) => item.content), prop: 'gameMode' },
    { values: status.value.filter((item) => item.state).map((item) => item.status), prop: 'status' },
    { values: platform.value.filter((item) => item.state).map((item) => item.platform), prop: 'platformMode' },
    { values: region.value.filter((item) => item.state).map((item) => item.region), prop: 'region' },
  ];

  if (filters.every((filter) => filter.values.length === 0)) {
    return tournir.value;
  }

  return tournir.value.filter((item) => filters.every((filter) => filter.values.length === 0 || filter.values.includes(item[filter.prop])));
});

const anyFilterSelected = computed(() => {
  const arrays = [mode, status, platform, region];
  return arrays.some((array) => array.value.some((item) => item.state));
});

const resetFilters = () => {
  const arrays = [mode, status, platform, region];
  arrays.forEach((array) => {
    array.value.forEach((item) => {
      item.state = false;
    });
  });
  clone.value = []
};

const isMobile = ref(window.innerWidth < 576);
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 576;
  console.log(isMobile.value)
});
const clone = ref([])
function deleteElem(index, arrayName) {
  const deletedItem = clone.value[index];
  clone.value.splice(index, 1);

  if (arrayName === 'mode') {
    const modeItem = mode.value.find((item) => item.title === deletedItem.title);
    if (modeItem) {
      modeItem.state = false;
    }
  } else if (arrayName === 'status') {
    const statusItem = status.value.find((item) => item.title === deletedItem.title);
    if (statusItem) {
      statusItem.state = false;
    }
  } else if (arrayName === 'region') {
    const regionItem = region.value.find((item) => item.title === deletedItem.title);
    if (regionItem) {
      regionItem.state = false;
    }
  }
}

function opened(index){
  tournir.value[index].opened = !tournir.value[index].opened
}
</script>

<style lang="scss" >
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.tournir-page{
  &__header{
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    align-items: center;
    @include media-breakpoint-down(sm){
      flex-direction: column-reverse;
      align-items: flex-start;
      margin-top: 6px;
    }
    &-title{
      h2{
        color: #F5F5F5;
        font-size: 34px;
        font-weight: 700;
        @include media-breakpoint-down(sm){
          color: #F5F5F5;
          font-size: 28px;
          font-weight: 700;
          margin-top: 24px;
        }
      }
    }
    &-img{
      @include media-breakpoint-down(sm){
        width: 186px;
        height: 33px;
       img{
        width: 100%;
        height: 100%;
       }
      }
    }
  }
  &__content{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    gap: 5px;
    @include media-breakpoint-down(md){
      flex-direction: column-reverse;
    }
    &-array{
      max-width: 859px;
      width: 100%;
      @include media-breakpoint-down(md){
        max-width: 100%;
      }
      .desctop{
        margin-top: 19px;
        height: 800px;
        .item{
          a{
            display: flex;
            border: 2px solid #20252B;
            gap: 30px;
            width: 100%;
            margin-bottom: 16px;
          }
          .img{
            position: relative;
            p{
              position: absolute;
              left: 5px;
              top: 5px;
              color: #F5F5F5;
              font-size: 16px;
              padding-top: 5px;
              padding-bottom: 5px;
              padding-left: 14px;
              padding-right: 14px;
              background: #0A68F5;
            }
          }
          .text{
            padding-top: 14px;
            width: 80%;
            .top{
              h4{
                color: #F5F5F5;
                font-size: 24px;
                font-weight: 500;
              }
            }
            .bottom{
              display: flex;
              justify-content: space-between;
              margin-top: 10px;
              .block{
                p{
                  color: #67707A;
                  font-size: 16px;
                  line-height: 24px;
                  text-transform: uppercase;
                  @include media-breakpoint-down(lg){
                    font-size: 10px;
                  }
                }
                h4{
                  color: #F5F5F5;
                  font-size: 16px;
                  font-weight: 500;
                  @include media-breakpoint-down(lg){
                    font-size: 10px;
                  }
                }
              }
              .block:nth-child(2){
                transform: translateX(-15px);
              }
              .block:nth-child(3){
                transform: translateX(-10px);
              }
              .block:nth-child(4){
                transform: translateX(-6px);
              }
              .block:nth-child(5){
                transform: translateX(-2px);
              }
              .block:nth-child(6){
                transform: translateX(-6px);
              }
            }
          }
        }
      }
    }
    &-right{
      max-width: 281px;
      width: 100%;
     

      .info{
        margin-top: 19px;
        border: 2px solid #20252B;
        padding-top: 16px;
        padding-left: 28px;
        padding-right: 30px;
        .title{
          h4{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #F5F5F5;
            font-size: 32px;
            font-weight: 500;
            span{
              margin-top: 9px;
              display: block;
              color: #B83333;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
            }
          }
        }
        .mode{
          margin-top: 48px;
          
          h3{
            color: #F5F5F5;
            font-size: 24px;
            font-weight: 500;
            padding-left: 2px;
          }
          .con{
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            padding-left: 2px;
            .item{
              display: flex;
              align-items: center;
              gap: 8px;
              cursor: pointer;
              p{
                color: #67707A;
                font-size: 16px;
              }
            }
            .item.active{
              p{
                color: #0A68F5;
              }
            }
          }
        }
        .status{
          margin-top: 25px;
          h4{
            color: #F5F5F5;
            font-size: 24px;
            font-weight: 500;
          }
          .con{
            margin-top: 10px;
            display: flex;
            gap: 30px;
            .item{
              display: flex;
              align-items: center;
              gap: 8px;
              cursor: pointer;
              p{
                color: #67707A;
                font-size: 16px;
              }
            }
            .item.active{
              p{
                color: #0A68F5;
              }
            }
          }
        }
        .platform{
          margin-top: 25px;
          transform: translateX(-2px);
          h4{
            color: #F5F5F5;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .con{
            margin-top: 13px;
            .item{
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 9px;
              cursor: pointer;
              p{
                color: #67707A;
                font-size: 16px;
              }
            }
            .item:nth-child(6){
              margin-top: 8px;
              transform: translateX(-1px);
            }
            .item.active{
              p{
                color: #0A68F5;
              }
            }
          }
        }
        .region{
          margin-top: 27px;
          transform: translateX(-2px);
          margin-bottom: 20px;
          h4{
            color: #F5F5F5;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .con{
            margin-top: 13px;
            .item{
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 9px;
              cursor: pointer;
              p{
                color: #67707A;
                font-size: 16px;
              }
            }
            .item:nth-child(6){
              margin-top: 8px;
              transform: translateX(-1px);
            }
            .item.active{
              p{
                color: #0A68F5;
              }
            }
          }
        }
      }
    }
  }
}
</style>