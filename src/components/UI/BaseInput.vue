<template>
  <div class="input-wrapper">
    <p class="input-wrapper__label" v-if="label">{{ label }}</p>

    <input
        class="input"
        type="text"
        :value="modelValue"
        @input="emitInput($event)"
        :class="{'input--error': hasError}"
        v-bind="$attrs"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  hasError: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])

function emitInput(event) {
  emits('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.input-wrapper {
  margin-bottom: 16px;

  &__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
