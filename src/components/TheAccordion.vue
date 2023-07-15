<template>
  <div class="accordion" @click="$emit('open')">
    <div class="accordion__title">
      <p>{{ title }}</p>
    </div>

    <transition name="accordion">
      <div class="accordion__content" v-if="isActive" @click.stop>
        <slot />
      </div>
    </transition>
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
  }
}

.accordion-enter-from { max-height: 0 }

.accordion-enter-to { max-height: 1200px }

.accordion-enter-active { transition: max-height .4s }

.accordion-leave-from { max-height: 1200px }

.accordion-leave-to { max-height: 0 }

.accordion-leave-active { transition: max-height .4s }
</style>
