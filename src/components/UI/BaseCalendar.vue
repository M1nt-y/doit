<template>
  <div class="calendar">
    <div class="calendar__input" >
      <input type="text" v-model="selectedDay">
      <IconCalendar/>
    </div>
    <div class="date">
      <div class="date-btn">
        <button @click="decrease">&lt;</button>
        <button @click="increase">></button>
      </div>
    <table>
    <thead>
        <tr>
            <td colspan="10"> {{year}} <span>{{monthes[month]}}</span>   </td>
            <td>
                <!-- <button v-on:click="decrease">&lt;</button>
                <button v-on:click="increase">></button> -->
            </td>
        </tr>
        <tr>
            <td v-for="d in day">{{d}}</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="week in calendar()">             
          <td v-for="(day, index) in week" @click="setDay(new Date(year, month, day.index))">{{ day.index }}</td>
        </tr>            
    </tbody>
    </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconCalendar from '@/assets/icons/calendar/Calendar.vue'

const day = ref(["S", "M", "T", "W", "T", "F", "S"])
const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = ref(new Date().getMonth())
const year = ref(new Date().getFullYear())
function calendar(){
  let days = [];
  let week = 0;
  days[week] = [];
  let dlast = new Date(year.value, month.value + 1, 0).getDate();
  for (let i = 1; i <= dlast; i++) {
    if (new Date(year.value, month.value, i).getDay()) {
    let a = {index:i};
      days[week].push(a);
    } else {
      week++;
      days[week] = [];
      let a = {index:i};
      days[week].push(a);
    }
  }
  if (days[0].length > 0) {
    for (let i = days[0].length; i < 7; i++) {
     days[0].unshift('');
    }
  }
  return days ;
}
const props = defineProps({
  selectedDay: {
    type: String,
    default: 'dd-mm-yyyy',
  },
})


const selectedDay = ref(props.selectedDay);

function setDay(date) {
  if(date == 'Invalid Date') return;
  const formattedDate = formatDate(date);
  selectedDay.value = formattedDate;
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}



function decrease(){
  month.value--;
  if (month.value < 0) {
    month.value = 12;
    month.value--;
    year.value--;
   }
}

function increase(){
  month.value++;
  if (month.value > 11) {
    month.value = -1;
    month.value++;
    year.value++;
}
}

</script>

<style lang="scss" scoped>

.calendar{
  &__input{
    margin-bottom: 5px;
    max-width: 240px;
    width: 100%;
    position: relative;
    cursor: pointer;
    input{
      pointer-events: none;
      width: 100%;
      border-radius: 2px;
      border: 1px solid #16263D;
      background-color: rgba(256, 256, 256, 0);
      padding: 10px;
      color: #627CA3;
      pointer-events: none;
      padding-left: 16px;
    }
    svg{
      position: absolute;
      right: 16px;
      bottom: 9px;
    }
  }
  .date{
    border: 1px solid #16263D;
    max-width: 240px;
    width: 100%;
    padding: 16px;
    padding-right: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    table{
      width: 100%;
      color: #627CA3;
      font-size: 16px;
      thead{
        td{
          transform: translateX(-2px);
          padding-bottom: 4px;
          span{
            padding-left: 9px;
          }
        }
        tr:nth-child(2){
         td:nth-child(1){
          width: 30px;
         }
         td:nth-child(2){
          width: 33px;
         }
         td:nth-child(3){
          width: 30px;
         }
         td:nth-child(4){
          width: 34px;
         }
         td:nth-child(5){
          width: 30px;
         }
         td:nth-child(6){
          width: 30px;
         }
        }
      }
      tbody{
        border-spacing: 0px !important;
        tr{
          td{
            color: #627CA3;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
    }
    .date-btn{
      position: absolute;
      right: 10px;
      top: 5px;
      display: flex;
      gap: 10px;
      z-index: 10;
      color: #627CA3;
    }
  }
}

</style>