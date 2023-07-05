<template>
  <div class="players">
    <TopElement/>
    <TableElement 
      :players="players"
      @sorted="sortBy"/>
  </div>
</template>

<script setup>
import TopElement from './Players/Top.vue'
import TableElement from './Players/Table.vue'

import { ref, computed } from 'vue'

const players = ref([
  {
    nick: 'Nikelodeon',
    password: 'Loh228',
    country: 'Sudan',
    team: 'Sudan',
    name: 'Calvin',
    created: '07/21/17',
    age: 32,
  },
  {
    nick: 'beautifulmouse112',
    password: 'Loh228',
    country: 'Italy',
    team: 'Italy',
    name: 'Wade',
    created: '07/16/17',
    age: 97,
  },
  {
    nick: 'lazymeercat616',
    password: 'Loh228',
    country: 'Denmark',
    team: 'Denmark',
    name: 'Floyd',
    created: '12/30/19',
    age: 60,
  },
  {
    nick: 'whiterabbit554',
    password: 'Loh228',
    country: 'Guernsey',
    team: 'Guernsey',
    name: 'Jorge',
    created: '02/08/13',
    age: 54,
  },
  {
    nick: 'ticklishostrich764',
    password: 'Loh228',
    country: 'Tokelau',
    team: 'Tokelau',
    name: 'Dustin',
    created: '08/10/12',
    age: 63,
  },
  {
    nick: 'tinypanda866',
    password: 'Loh228',
    country: 'Greenland',
    team: 'Greenland',
    name: 'Brandon',
    created: '05/16/18',
    age: 18,
  },
  {
    nick: 'smallsnake312',
    password: 'Loh228',
    country: 'Spain',
    team: 'Spain',
    name: 'Dwight',
    created: '01/26/13',
    age: 67,
  },
  {
    nick: 'silverduck204',
    password: 'Loh228',
    country: 'Niue',
    team: 'Niue',
    name: 'Ronald',
    created: '08/16/18',
    age: 15,
  },
  {
    nick: 'beautifullion765',
    password: 'Loh228',
    country: 'Guam',
    team: 'Guam',
    name: 'Randall',
    created: '06/29/16',
    age: 83,
  },
  {
    nick: 'bluebear234',
    password: 'Loh228',
    country: 'Costa Rica',
    team: 'Costa Rica',
    name: 'Bernard',
    created: '12/25/15',
    age: 88,
  },
])



const sortDirection = ref(1);
const sortBy = () => {
      sortDirection.value *= -1;

      players.value.sort((a, b) => {
        const nickA = a.nick.toLowerCase();
        const nickB = b.nick.toLowerCase();

        if (nickA < nickB) {
          return -1 * sortDirection.value;
        }
        if (nickA > nickB) {
          return 1 * sortDirection.value;
        }
        return 0;
      });
};

</script>

<style lang="scss">
.players{
  margin-bottom: 50px;
}
</style>