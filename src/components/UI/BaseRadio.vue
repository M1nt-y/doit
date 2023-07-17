<template>
  <div class="radio-input">
    <OneState v-if="state"/>
    <TwoState v-else/>
    <h5>{{ text }}</h5>
  </div>
</template>
<script setup>
import OneState from '@/assets/icons/radio/OneState.vue'
import TwoState from '@/assets/icons/radio/TwoState.vue'
import {ref, defineProps} from 'vue'


defineProps({
  text: {
    type: String,
  },
  state: {
    type: Boolean,
    default: false,
  }
})

</script>

<style lang="scss">
.radio-input{
  display: flex;
  align-items: center;
  gap: 8px;
  h5{
    color: #CCCDCD;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
