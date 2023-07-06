<template>
<main class="main table">
  <div class="container">
    <div class="table__tabs">
      <ElemenTabs :tabs="tabs" 
      :activeIdx="activeIdx"
      @newActive="newActive"/>
    </div>
    <div class="table__content">
      <PlayersTabs v-if="activeIdx == 'players'"/>
      <PlayersTourchment v-if="activeIdx == 'tournaments'"/>
    </div>
  </div>
</main>

</template>

<script setup>
import { useRouter } from 'vue-router';
import ElemenTabs from '@/components/Table/Tabs.vue'
import PlayersTabs from '@/components/Table/TabsPlayers.vue'
import PlayersTourchment from '@/components/Table/TabsTouchment.vue'
import { ref, watch } from 'vue';
const router = useRouter();
const activeIdx = ref('players');
const tabs = ref([
  {
    title: 'Tournaments',
    queryParam: 'tournaments',
  },
  {
    title: 'Teams',
    queryParam: 'teams'
  },
  {
    title: 'Players',
    queryParam: 'players'
  },
  {
    title: 'Payouts',
    queryParam: 'payouts'
  },
  {
    title: 'Calendar',
    queryParam: 'calendar'
  },
])

activeIdx.value = router.currentRoute.value.query.param || 'players';

watch(() => router.currentRoute.value.query.param, (newQueryParam) => {
  activeIdx.value = newQueryParam || 'players';
});
function newActive(queryParam) {
  if (queryParam === 'players') {
    activeIdx.value = queryParam;

    const currentQuery = {}; // Очищаем все query параметры
    router.push({ query: currentQuery });
  } else {
    activeIdx.value = queryParam;

    const currentQuery = { ...router.currentRoute.value.query };
    currentQuery.param = queryParam;
    router.push({ query: currentQuery });
  }
}
</script>