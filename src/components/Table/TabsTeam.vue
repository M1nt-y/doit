<template>
  <div class="teams">
    <Top/>
    <Table/>
  </div>
</template>

<script setup>
import Top from './Teams/Top.vue'
import Table from './Teams/Table.vue'
</script>

<style lang="scss">
@import '@/assets/scss/media-breakpoints.scss';
.teams{
  margin-bottom: 50px;
  @include media-breakpoint-down(sm) {
    overflow: scroll;
  }
}
</style>