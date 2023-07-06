<template>
  <table class="players-table">
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
      <tr v-for="(item, idx) in players" :key="idx">
        <td>
          <p>{{ item.nick }}</p>
        </td>
        <td>
          <p>{{ item.password }}</p>
        </td>
        <td>
          <p>{{ item.country }}</p>
        </td>
        <td>
          <p>{{ item.team }}</p>
        </td>
        <td>
          <p>{{ item.name }}</p>
        </td>
        <td>
          <p>{{ item.created }}</p>
        </td>
        <td>
          <p>{{ item.age }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import IconTopSort from '@/assets/icons/table/TopSort.vue'

const thead = [
  {
    title: 'Nickname',
  },
  {
    title: 'Password',
  },
  {
    title: 'Country',
  },
  {
    title: 'Team',
  },
  {
    title: 'Name',
  },
  {
    title: 'Created',
  },
  {
    title: 'Age',
  },
]

defineProps({
  players: {
    type: Array,
    default: [],
    required: true,
  }
})

const emits = defineEmits(['sorted'])

function sortBy(field) {
  emits('sorted', field)
}
</script>

<style lang="scss">
.players-table{
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
  thead{
   
   
    tr{
      td{
        border-top: 2px solid #20252B;
        border-bottom: 2px solid #20252B;
        padding-top: 22px;
        padding-bottom: 22px;
        .flex{
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          h5{
            color: #E6E6E6;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .sort{
            transform: translateX(10px);
            svg:nth-child(2){
              transform: rotate(180deg);
            }
          }
        }
      }
      td:nth-child(1){
        border-left: 2px solid #20252B;
        width: 200px;
      }
      td:nth-child(2){
        width: 170px;
      }
      td:nth-child(3){
        width: 195px;
      }
      td:nth-child(4){
        width: 120px;
      }
      td:nth-child(5){
        width: 165px;
      }
      td:nth-child(6){
        width: 155px;
      }
      td:nth-child(7){
        border-right: 2px solid #20252B;
        .flex{
          transform: translateX(-8px);
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
        }
      }
      td:nth-child(1){
        padding-left: 42px;
        border-left: 2px solid #20252B;
        
      }
      td:nth-child(2){
        padding-left: 42px;
        
      }
      td:nth-child(3){
        padding-left: 42px;
        
      }
      td:nth-child(4){
        padding-left: 22px;
        
      }
      td:nth-child(5){
        padding-left: 45px;
        
      }
      td:nth-child(6){
        padding-left: 22px;
        
      }
      td:nth-child(7){
        padding-left: 54px;
        border-right: 2px solid #20252B;
        
      }
    }
    tr:nth-child(1){
      td{
        padding-top: 28px;
      }
    }
    tr:nth-child(2){
      td{
        padding-top: 22px;
      }
    }
    tr:nth-child(3){
      td{
        padding-top: 22px;
      }
    }
    tr:nth-child(4){
      td{
        padding-top: 23px;
      }
    }
    tr:nth-child(5){
      td{
        padding-top: 23px;
      }
    }
    tr:nth-child(6){
      td{
        padding-top: 23px;
      }
    }
    tr:nth-child(7){
      td{
        padding-top: 23px;
      }
    }
    tr:nth-child(8){
      td{
        padding-top: 21px;
       
      }
    }
    tr:nth-child(9){
      td{
        padding-top: 22px;
      }
    }
    tr:nth-child(10){
      td{
        padding-top: 24px;
        padding-bottom: 25px;
        border-bottom: 2px solid #20252B;
      }
    }
  }
}
</style>