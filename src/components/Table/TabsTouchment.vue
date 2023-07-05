<template>
  <div class="tournaments">
    <TopElement/>
    <TableElement :touchments="touchments"/>
  </div>
</template>

<script setup>
import TopElement from './Tournaments/Top.vue'
import TableElement from './Tournaments/Table.vue'

import {ref} from 'vue'


const touchments = ref([
  {
    name: 'The best of the best tournament ',
    entyprice: '$ 1500',
    poolprice: '$ 20000',
    signed: '1/4',
    start: '10 minutes',
  },
  {
    name: 'The best tournament',
    entyprice: '$ 480',
    poolprice: '$ 10000',
    signed: '31/32',
    start: '43 minutes',
  },
  {
    name: 'The best of the best tournament',
    entyprice: '$ 930',
    poolprice: '$ 5000',
    signed: '8/12',
    start: '2 hours',
  },
  {
    name: 'The best of the best tournament ',
    entyprice: '$ 1500',
    poolprice: '$ 20000',
    signed: '1/4',
    start: '10 minutes',
  },
  {
    name: 'The best tournament',
    entyprice: '$ 2410',
    poolprice: '$ 2000',
    signed: '13/32',
    start: '2 month',
  },
  {
    name: 'The best tournament',
    entyprice: '$ 480',
    poolprice: '$ 10000',
    signed: '31/32',
    start: '43 minutes',
  },
  {
    name: 'The tournament',
    entyprice: '$ 30',
    poolprice: '$ 200',
    signed: '1/16',
    start: '1 year',
  },
  {
    name: 'The best of the best tournament',
    entyprice: '$ 930',
    poolprice: '$ 5000',
    signed: '8/12',
    start: '2 hours',
  },
  {
    name: 'The best tournament',
    entyprice: '$ 2410',
    poolprice: '$ 2000',
    signed: '13/32',
    start: '2 month',
  },
  {
    name: 'The tournament',
    entyprice: '$ 30',
    poolprice: '$ 200',
    signed: '1/16',
    start: '1 year',
  },
])

</script>

<style lang="scss">
.tournaments{
  margin-bottom: 50px;
}
</style>