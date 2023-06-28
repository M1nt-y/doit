<template>
  <div class="select-wrapper">
    <p class="select-wrapper__label">{{ label }}</p>

    <input
        v-if="hasSearch"
        class="input"
        type="text"
        v-model="select.search"
        @click="toggleSelect"
        :class="{'input--error': hasError}"
        v-bind="$attrs"
    />

    <div v-else class="input" :class="{'input--error': hasError}" @click="toggleSelect">
      {{ select.selected }}
      <img class="input__arrow" src="@/assets/images/arrow.svg" alt="">
    </div>

    <transition name="dropdown">
      <div class="options-wrapper" v-if="active">
        <ul class="options">
          <li class="option option--disabled" v-if="optionsFound.length === 0">There are no matches</li>

          <li class="option" v-for="(option, index) in optionsFound" :key="index" @click="selectOption(option.name)">{{ option.name }}</li>
        </ul>
      </div>
    </transition>

    <!--  Errors?  -->
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  active: {
    type: Boolean,
    default: false
  },
  hasSearch: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  }
})

const optionsFound = computed(() => {
  if (props.hasSearch) {
    if (select.value.search) {
      return props.options.filter(option => option.name.toLowerCase().includes(select.value.search.toLowerCase()))
    } else {
      return props.options
    }
  } else {
    return props.options
  }

})

const emits = defineEmits(['update:modelValue', 'click'])

const select = ref({
  search: '',
  selected: props.modelValue
})

function toggleSelect(e) {
  e.stopPropagation()
  emits('update:modelValue', select.value.selected)
  emits('click')
}

function selectOption(option) {
  emits('update:modelValue', option)
  select.value.selected = option
  select.value.search = option
}
</script>

<style scoped lang="scss">
.input {
  position: relative;

  &__arrow {
    position: absolute;
    top: 14px;
    right: 16px;
    content: '';
    width: 14px;
    height: 7px;
    background: url("/src/assets/images/arrow.svg") center;
  }
}

.select-wrapper {
  position: relative;
  margin-bottom: 16px;

  &__label {
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 6px;
  }

  &__error-message {
    color: #B83333;
    margin-top: 4px;
  }
}

.options-wrapper {
  z-index: 1;
  width: 100%;
  margin-top: 4px;
  overflow: hidden;
  max-height: 240px;
  position: absolute;
  border-radius: 2px;
  background: #0B1729;
  border: 1px solid #1472FF;
}

.options {
  max-height: 240px;
  margin-right: 6px;
  overflow-y: scroll;
  position: relative;
  scrollbar-color: #121F33 #627CA3; /* track thumb */
  scrollbar-width: 4px; /* none, thin, or auto */

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #627CA3;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #121F33;
    border-radius: 2px;
  }
}

.option {
  color: #627CA3;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  padding: 10px 15px;
  margin-right: 15px;
  transition: all .3s;

  &--disabled {
    cursor: default;
  }

  &:hover {
    color: #E6E6E6;
    background: #1472FF;
  }

  &--disabled:hover {
    color: #627CA3;
    background: none;
  }
}

.dropdown-enter-from { max-height: 0 }

.dropdown-enter-to { max-height: 240px }

.dropdown-enter-active { transition: max-height .4s }

.dropdown-leave-from { max-height: 240px }

.dropdown-leave-to { max-height: 0 }

.dropdown-leave-active { transition: max-height .4s }
</style>
