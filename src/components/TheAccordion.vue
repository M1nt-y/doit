<template>
  <div class="accordion" :class="{ 'accordion--active': isActive }" @click="$emit('open')">
    <div class="accordion__title">
      <p>{{ title }}</p>
    </div>

    <div class="accordion__content" v-if="isActive" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">

.accordion {
  width: 100%;
  padding: 30px;
  cursor: pointer;
  max-width: 600px;
  margin-bottom: 16px;
  background: #0F1215;
  border: 1px solid #20252B;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #CCCDCD;
      font-size: 22px;
      font-weight: 500;
      line-height: 100%;
    }
  }

  &__content {
    display: grid;
    cursor: default;
    overflow: hidden;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s;
  }

  &--active {
    .accordion__content {
      grid-template-rows: 1fr;
    }
  }
}
</style>
