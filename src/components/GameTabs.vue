<template>
  <div class="tabs">
    <div
        v-for="(tab, i) in gameTabs" :key="i"
        class="tab"
        :class="{ 'tab--active' : tab === active }"
        @click="active = tab"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'


const gameTabs = ['All', 'StarCraft II', 'Dota II', 'CS:GO', 'LOL', 'Fortnite']
const active = ref('Dota II')
</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.tabs {
  display: flex;
  margin-top: 2px;
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: flex-end;
}

.tab {
  padding: 16px;
  color: #A0A5AD;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  margin-left: 2px;
  line-height: 24px;
  margin-bottom: 2px;
  background: #14191F;
  transition: all 0.3s ease;

  @include media-breakpoint-down(xs) {
    margin-left: 0;
    font-size: 14px;
    line-height: 100%;
    margin-right: 7px;
    margin-bottom: 7px;
  }

  &--active,
  &:hover {
    color: #0F1215;
    background: #D8DFEB;
  }
}
</style>
