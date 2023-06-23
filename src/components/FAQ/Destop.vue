<template>
  <div class="faq__content-left">
    <p
      v-for="(item, index) in leftArr"
      :key="index"
      :class="{ active: activeIndex === index }"
      @click="handleClick(index)"
    >
      {{ item }}
    </p>
  </div>
  <div class="fda__content-right">
    очко
  </div>
</template>

<script setup>
const props = defineProps({
  leftArr: {
    type: Array,
    default: [],
    required: true,
  },
  activeIndex: {
    type: Number,
    default: 0,
    required: true,
  },
});
const emits = defineEmits(['update:activeIndex', 'click']);
function handleClick(index) {
  emits('update:activeIndex', index);
}
</script>