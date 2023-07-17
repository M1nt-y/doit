<template>
  <div class="inp-comp">
    <h5>{{ title }}</h5>
    <div class="inp-comp__block" style="margin-top: 12px; display: flex; align-items: center; justify-content: space-between;">
      <BaseInput
      placeholder="banner url"
      style="width: 339px; margin: 0;"
      />
      <button style="display: block; height: 39px; font-weight: 700; width: 157px; color: var(--white-96, #F5F5F5); font-size: 10px; background: #1A222D;">UPLOAD</button>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
defineProps({
  title: {
    type: String,
  }
})

</script>