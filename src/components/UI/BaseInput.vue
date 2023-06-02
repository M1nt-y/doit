<template>
  <div class="input-wrapper">
    <p class="input-wrapper__label" v-if="label">{{ label }}</p>
    <input
        class="input"
        type="text"
        :value="modelValue"
        @input="emitInput($event)"
        v-bind="$attrs"
    />
    <!--  Errors  -->
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
  &__error-message {
    color: #B83333;
    margin-top: 4px;
  }
}

.input {
  width: 100%;
  outline: none;
  background: none;
  padding: 12px 16px;
  border-radius: 2px;
  border: 1px solid #16263D;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #627CA3;
  transition: all .4s;
  &:hover {
    background: #121F33;
    border: 1px solid #627CA3;
  }
  &:focus {
    color: #E6E6E6;
    background: #16263D;
    border: 1px solid #185EC7;
  }
  &:disabled {
    color: #98A4B5;
    background: #121F33;
    border: 1px solid #121F33;
  }
  &--error {
    border: 1px solid #B83333;
  }
  &--success {
    border: 1px solid #4CB725;
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
