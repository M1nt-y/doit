<template>
<div class="top__table">
  <table>
    <thead>
      <tr>
        <td v-for="head in thead"> <span> {{  head.title }}</span></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tbody">
        <td>{{ item.rank }}</td>
        <td> <img :src="item.country" alt=""> {{ item.nick }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.year }}</td>
        <td>{{ item.overal }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>

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
  }
})

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

    }
  }
}


</style>