<template>
  <div class="top__table">
    <table>
      <thead>
        <tr>
          <td v-for="head in thead">
            <span>{{ head.title }}</span>
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
                <p>{{ item.name }}</p>
                {{ item.nick }}
              </div>
            </div>
          </td>
          <td>{{ item.name }}</td>
          <td>
            <p class="year">{{ item.year }}</p>
          </td>
          <td>
            <p class="overal">{{ item.overal }}</p>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="goToPage(page )" >Previous</button>
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="goToPage(pageNumber)"
        :class="{ active: pageNumber === page }"
      >
        {{ pageNumber }}
      </button>
      <button @click="goToPage(page + 1)" >Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

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

let page = currentPage.value;

function goToPage(page) {
    currentPage.value = page;
    updateActivePage(page);
}

function updateActivePage(page) {
  page = page; // Update the active page variable
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.top__table{
  table{
    width: 100%;
    border: 2px solid #242B33;
    border-top: 0;
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
        }
        td:nth-child(1){
          width: 9.9%;
          text-align: center;
        }
        td:nth-child(2){
          width: 33%;
          span{
            padding-left: 21px;
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
        }
        td:nth-child(4){
          width: 14.5%;
          @include media-breakpoint-down(lg){
            width: 16.2%;
          }
        }
        
      }
    }
    tbody{
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
          }
          .year{
            width: 66%;
            text-align: end;
          }
          .overal{
            width: 78.4%;
            text-align: end;
          }
        }
        .flex{
          display: flex;
          align-items: center;
          padding-left: 21px;
          gap: 12px;
          color: #CCCCCC;
          p{
            display: none;
          }
        }
      }
      tr:nth-child(3){
        td{
          padding-top: 13px;
        }
      }
      tr:nth-child(4){
        td{
          padding-top: 12px;
        }
      }
      tr:nth-child(8){
        td{
          padding-top: 10px;
        }
      }
      tr:nth-child(9){
        td{
          padding-top: 10px;
        }
      }
    }
  }
}


</style>