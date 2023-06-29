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
  <div class="faq__content-right">
    <div class="accordeon">
      <div v-for="(item, index) in rightArr" :key="index" class="accordion-item">
        <div class="flex" @click="toggleAccordion(index)">
          <div class="accordion-title">{{ item.title }}</div>
            <div class="flex-icon">
              <IconMinus v-if="activeAccrodeon === index"/>
             <IconPlus v-else/>
             
            </div>
        </div>
        <div :class="{ 'accordion-content': true, 'active': activeAccrodeon === index }">
           <p>{{ item.textOne }}</p>
           <p>{{ item.textTwo }}</p>
           <p>{{ item.textLast }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPlus from '@/assets/icons/faq/Plus.vue'
import IconMinus from '@/assets/icons/faq/Minus.vue'
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
  rightArr: {
    type: Array,
    default: [],
    required: true,
  },
  activeAccrodeon:{
    type: Number,
    default: 0,
    required: true,
  }
});
const emits = defineEmits(['activetab:activeIndex', 'click', 'open-accordeon']);
function handleClick(index) {
  emits('activetab:activeIndex', index);
}
function toggleAccordion(index) {
  emits('open-accordeon', index);
};

</script>