<template>
  <div class="timer-form">
    <h5>{{title}}</h5>
    <div class="timer-form__select" style="display: flex; align-items: center; gap: 16px">
      <BaseSelect
        :options="date"
        placeholder="Select game"
        :active="selectDate"
        @click="selectDate = !selectDate"
        style="width: 160px;"
      />
      <BaseSelect
        :options="time"
        placeholder="Select game"
        :active="selecTime"
        @click="selecTime = !selecTime"
        style="width: 160px;"
      />
    </div>
  </div>
</template>

<script setup>
import BaseSelect from '@/components/UI/BaseSelect.vue'

import {ref} from 'vue'
const date = [
  {
    id: 0,
    name: '21.03.2020',
  },
  {
    id: 1,
    name: '22.03.2020',
  },
  {
    id: 2,
    name: '23.03.2020',
  },
]
const selectDate = ref(false);
const time = [
  {
    id: 0,
    name: '9:00 AM',
  },
  {
    id: 1,
    name: '12:00 AM',
  },
  {
    id: 2,
    name: '14:00 AM',
  },
]
const selecTime = ref(false);

defineProps({
  title: {
    type: String
  }
})

</script>