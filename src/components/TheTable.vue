<template>
  <div class="top__table">
    <table>
      <thead>
        <tr>
          <td v-for="head in thead">
            <span>{{ slicePlayerHead( head.title) }}</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedItems" :key="index">
          <td>
            <p class="rank">{{ item.rank }}</p>
          </td>
          <td>
            <div class="flex">
              <img :src="item.country" alt="" />
              <div class="content">
                <p>{{ item.nick }}</p>
                <p>{{ item.name }}</p>
                
              </div>
            </div>
          </td>
          <td>{{ item.name }}</td>
          <td>
            <p class="year">{{ formatYear( item.year) }}</p>
          </td>
          <td>
            <p class="overal">{{formatYear( item.overal) }}</p>
          </td>
        </tr>
        <tr v-if="currentPage === 1">
          <td><p class="rank">{{ lastItem.rank }}</p></td>
          <td>
            <div class="flex">
              <img :src="lastItem.country" alt="" />
              <div class="content">
                
                <p> {{ lastItem.nick }} </p>
                <p>{{ lastItem.name }}</p>
              </div>
            </div>
          </td>
          <td>{{ lastItem.name }}</td>
          <td>
            <p class="year">{{ formatYear( lastItem.year) }}</p>
          </td>
          <td>
            <p class="overal">{{ formatYear(lastItem.overal) }}</p>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <div class="content">
      <button @click="currentPage = 1; pageActive = 1"> <IconLeftStart/> </button>
      <button class="prev" @click="currentPage = 1; pageActive = 1 " > <IconLeft/> </button>
      <div class="flex">
        <button
          class="number"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="goToPage(pageNumber); pageActive = pageNumber"
          :class="{ active: pageNumber == pageActive }"
        >
          {{ pageNumber }}
      </button>
      </div>
      <button class="right" @click="currentPage = 2; pageActive = 2" > <IconLeft/>  </button>
      <button class="next" @click="currentPage = 2; pageActive = 2"> <IconLeftStart/></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// иконки пагинации
import IconLeft from '@/assets/icons/pagination/Left.vue'
import IconLeftStart from '@/assets/icons/pagination/LeftStart.vue'
const props = defineProps({
  thead: {
    type: Array,
    default: [],
    required: true,
  },
  tbody: {
    type: Array,
    default: [],
    required: true,
  },
});

const itemsPerPage = 9;
const currentPage = ref(1);

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return props.tbody.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(props.tbody.length / itemsPerPage));

let pageActive = currentPage.value;

function goToPage(page) {
    currentPage.value = page;
}
const lastItem = computed(() => {
  return props.tbody[props.tbody.length - 1];
});

const isMobile = ref(window.innerWidth < 768);

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});
// шапка текст
function slicePlayerHead(title){
  if(isMobile.value && title == 'Country & Nickname'){
    return 'PLAYER'
  }else if(isMobile.value && title == 'Total (year)'){
    return 'YEAR'
  }else if(isMobile.value && title == 'Total (OVERAl)'){
    return 'OVERAl'
  }
  return title
}


function formatYear(year) {
  const parsedYear = parseFloat(year.replace(/[$,]/g, ''));
  if (parsedYear >= 1000 && isMobile.value) {
    const formattedYear = Math.floor(parsedYear / 1000);
    return `$${formattedYear}к`;
  }else{
    return year
  }
}



</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.top__table{
  margin-bottom: 20px;
  table{
    width: 100%;
    border: 2px solid #242B33;
    border-top: 0;
    @include media-breakpoint-down(sm){
      border: none;
    }
    thead{
      tr{
        td{
          border-bottom: 2px solid #242B33;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 100%;
          text-transform: uppercase;
          color: #E6E6E6;
          opacity: 0.88;
          padding: 27px 0px;
          @include media-breakpoint-down(sm){
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 100%;
            text-transform: uppercase;
            color: #E6E8EB;
            opacity: 0.88;
          }
          @include media-breakpoint-down(sm){
            padding-top: 25px;
            padding-bottom: 10px;
            border: none;
          }
        }
        td:nth-child(1){
          width: 9.9%;
          text-align: center;
          @include media-breakpoint-down(sm){
            span{
              padding-left: 5px;
            }
          }
        }
        td:nth-child(2){
          width: 33%;
          span{
            padding-left: 21px;
          }
          @include media-breakpoint-down(sm){
            span{
              padding-left: 15px;
            }
          }
          @include media-breakpoint-down(xs){
            width: 47%;
          }
        }
        td:nth-child(3){
          width: 28.4%;
          @include media-breakpoint-down(lg){
            width: 23%;
          }
          @media(max-width: 818px){
            width: 20%;
          }
          @include media-breakpoint-down(sm){
            display: none;
          }
        }
        td:nth-child(4){
          width: 14.5%;
          @include media-breakpoint-down(lg){
            width: 16.2%;
          }
          @include media-breakpoint-down(sm){
            width: 30%;
            span{
              display: block;
              width: 60%;
              text-align: end;
            }
          }
        }
        td:nth-child(5){
          @include media-breakpoint-down(sm){
            span{
              display: block;
              width: 80%;
              text-align: end;
            }
          }
          @include media-breakpoint-down(xs){
            span{
              transform: translateX(-1px);
            }
          }
        }
        
      }
    }
    tbody{
      height: 477px;
      tr{
        td{
          padding-top: 15px;
          padding-bottom: 15px;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 100%;
          color: #67707A;
          .rank{
            text-align: center;
            @include media-breakpoint-down(xs){
              transform: translateX(4px);
            }
          }
          .year{
            width: 66%;
            text-align: end;
            @include media-breakpoint-down(xs){
              transform: translateX(-5px);
            }
          }
          .overal{
            width: 78.4%;
            text-align: end;
            @include media-breakpoint-down(xs){
              transform: translateX(2px);
            }
          }
          @include media-breakpoint-down(sm){
            font-weight: 400;
            font-size: 12px;
            line-height: 100%;
          }
          @include media-breakpoint-down(xs){
            padding-top: 5px;
          }
        }
        .flex{
          display: flex;
          align-items: center;
          padding-left: 21px;
          gap: 12px;
          color: #CCCCCC;
          @include media-breakpoint-down(sm){
            gap: 5px;
          }
          p:nth-child(1){
            @include media-breakpoint-down(xs){
              transform: translateY(6px);
            }
          
          }
          p:nth-child(2){
            display: none;
            @include media-breakpoint-down(sm){
              display: block;
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 100%;
              color: #67707A;

            }
            @include media-breakpoint-down(xs){
              transform: translateY(10px);
            }
          }
          img{
            @include media-breakpoint-down(sm){
              width: 16px;
              height: 12px;
              transform: translateX(-4px);
            }
          }
        }
        td:nth-child(3){
          @include media-breakpoint-down(sm){
            display: none;
          }
        }
      }
      tr:nth-child(3){
        td{
          padding-top: 13px;
          @include media-breakpoint-down(xs){
            padding-top: 4px;
          }
        }
        
      }
      tr:nth-child(4){
        td{
          padding-top: 12px;
          @include media-breakpoint-down(xs){
            padding-top: 7px;
          }
        }
      }
      tr:nth-child(6){
        td{
          padding-top: 13px;
          @include media-breakpoint-down(xs){
            padding-top: 7px;
          }
        }
      }
      tr:nth-child(8){
        td{
          padding-top: 10px;
          @include media-breakpoint-down(xs){
            padding-top: 7px;
          }
        }
      }
      tr:nth-child(9){
        td{
          padding-top: 14px;
          @include media-breakpoint-down(xs){
            padding-top: 7px;
          }
        }
      }
      tr:nth-child(10){
        td{
          padding-bottom: 29px;
        }
      }
    }
  }
  .pagination{
    border: 2px solid #242B33;
    height: 55px;
    display: flex;
    align-items: center;
    @include media-breakpoint-down(xs){
      border: none;
      border-top: 2px solid #242B33;
      border-bottom: 2px solid #242B33;
    }
    .content{
      max-width: 300px;
      margin: 0 auto;
      display: flex;
      width: 100%;
      .flex{
      display: flex;
      gap: 35px;
      margin-left: 70px;
      margin-right: 102px;
      .number{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;

      }
      .number.active{
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 100%;
        color: #2787F6;
      }
      button:nth-child(1){
        transform: translateY(-0.001px);
      }
      button:nth-child(2){
        transform: translateY(-0.001px);
      }
      }
      .right,
      .next{
        transform: rotate(180deg);
      }
      .prev{
        margin-left: 33px;
        transform: translateY(2px);
      }
      button:nth-child(1){
        margin-left: -13px;
        transform: translateY(2px);
      }
      .right{
        transform: rotate(180deg) translateY(2px);
      }
      .next{
        margin-left: 30px;
        transform: rotate(180deg) translateY(2px);
      }
    }
    
    
  }
}


</style>