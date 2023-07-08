<template>
  <table class="tourchments-table">
    <thead>
      <tr>
        <td v-for="item in thead" @click="sortBy(item.title)">
          <div class="flex">
            <h5>{{ item.title }}</h5>
            <div class="sort">
              <IconTopSort />
              <IconTopSort />
            </div>
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in touchments" :key="idx">
        <td>
          <p>{{ item.name }}</p>
        </td>
        <td>
          <p>{{ item.entyprice }}</p>
        </td>
        <td>
          <p>{{ item.poolprice }}</p>
        </td>
        <td>
          <p>{{ item.signed }}</p>
        </td>
        <td>
          <p>{{ item.start }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import IconTopSort from '@/assets/icons/table/TopSort.vue'

const thead = [
  {
    title: 'Tournament`s name',
  },
  {
    title: 'Entry price',
  },
  {
    title: 'Pool price',
  },
  {
    title: 'Signed',
  },
  {
    title: 'Start in',
  }
]

defineProps({
  touchments: {
    type: Array,
    default: [],

  }
})

const emits = defineEmits(['sorted'])

function sortBy(field) {
  emits('sorted', field)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/media-breakpoints.scss';
.tourchments-table{
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
  @include media-breakpoint-down(sm) {
    min-width: 700px;
  }
  thead{
   
   
    tr{
      td{
        border-top: 2px solid #20252B;
        border-bottom: 2px solid #20252B;
        padding-top: 22px;
        padding-bottom: 17px;
        .flex{
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          h5{
            color: #E6E6E6;
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            @include media-breakpoint-down(lg) {
              font-size: 16px;
            }
            @include media-breakpoint-down(md) {
              font-size: 14px;
            }
          }
          .sort{
            transform: translateX(10px);
            svg:nth-child(2){
              transform: rotate(180deg);
            }
            svg{
              @include media-breakpoint-down(md) {
                width: 10px;
                height: 10px;
              }
            }
          }
        }
      }
      td:nth-child(1){
        border-left: 2px solid #20252B;
        width: 300px;
        h5{
          margin-left: 26px;
        }
        @include media-breakpoint-down(lg) {
          width: auto;
          h5{
            text-align: center;
            margin-left: 0;
          }
        }
      }
      td:nth-child(2){
        width: 240px;
        h5{
          margin-left: 45px;
        }
        @include media-breakpoint-down(lg) {
          width: auto;
          h5{
            text-align: center;
            margin-left: 0;
          }
        }
      }
      td:nth-child(3){
        width: 210px;
        h5{
          margin-left: 40px;
        }
        @include media-breakpoint-down(lg) {
          width: auto;
          h5{
            text-align: center;
            margin-left: 0;
          }
        }
      }
      td:nth-child(4){
        width: 210px;
        h5{
          margin-left: 20px;
        }
        @include media-breakpoint-down(lg) {
          width: auto;
          h5{
            text-align: center;
            margin-left: 0;
          }
        }
      }
      td:nth-child(5){
        border-right: 2px solid #20252B;
        .flex{
          transform: translateX(-5px);
        }
        @include media-breakpoint-down(lg) {
          width: auto;
          h5{
            text-align: center;
            margin-left: 0;
          }
        }
      }
      
    }
  }
  tbody{
    tr{
      td{
        p{
          color: #67707A;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          @include media-breakpoint-down(lg) {
            font-size: 14px;
          }
          @include media-breakpoint-down(md) {
            font-size: 12px;
          }
        }
      }
      td:nth-child(1){
        padding-left: 42px;
        border-left: 2px solid #20252B;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
        
      }
      td:nth-child(2){
        padding-left: 133px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
        
      }
      td:nth-child(3){
        padding-left: 98px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
        
      }
      td:nth-child(4){
        padding-left: 113px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
        
      }
      td:nth-child(5){
        padding-left: 42px;
        border-right: 2px solid #20252B;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
        
      }
    }
    tr:nth-child(1){
      td{
        padding-top: 25px;
      }
    }
    tr:nth-child(2){
      td{
        padding-top: 22px;
      }
      td:nth-child(2){
        padding-left: 141px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 102px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 94px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 39px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(3){
      td{
        padding-top: 22px;
      }
      td:nth-child(2){
        padding-left: 141px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 110px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 104px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 65px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(4){
      td{
        padding-top: 22px;
      }
    }
    tr:nth-child(5){
      td{
        padding-top: 25px;
      }
      td:nth-child(2){
        padding-left: 135px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 108px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 102px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 94px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 60px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(6){
      td{
        padding-top: 22px;
      }
      td:nth-child(2){
        padding-left: 141px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 102px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 94px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 39px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(7){
      td{
        padding-top: 22px;
      }
      td:nth-child(2){
        padding-left: 150px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 120px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 105px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 80px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(8){
      td{
        padding-top: 22px;
      }
      td:nth-child(2){
        padding-left: 141px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 110px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 104px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 65px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(9){
      td{
        padding-top: 25px;
      }
      td:nth-child(2){
        padding-left: 135px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 108px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 102px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 94px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 60px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    tr:nth-child(10){
      td{
        padding-top: 22px;
        border-bottom: 2px solid #20252B;
        padding-bottom: 22px;
      }
      td:nth-child(2){
        padding-left: 150px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(3){
        padding-left: 120px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(4){
        padding-left: 105px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
      td:nth-child(5){
        padding-left: 80px;
        @include media-breakpoint-down(lg) {
          padding-left: 0;
          text-align: center;
        }
      }
    }
    
  }
}
</style>