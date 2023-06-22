<template>
  <div class="checkbox" :class="{'_disable': disable}" @click="setState">
    <div class="checkbox__default" v-if="!state">
      <IconsNormal/>
    </div>
    <div class="checkbox__select" v-else>
      <IconsSelect/>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import IconsNormal from '@/assets/icons/checkbox/Normal.vue';
import IconsSelect from '@/assets/icons/checkbox/Select.vue';

const props = defineProps({
  disable: {
    type: Boolean,
    default: false,
  },
  state: {
    type: Boolean,
    default: false,
  },
});

const state = ref(props.state);

function setState() {
  state.value = !state.value;
  emits('update:state', state.value);
  emits('click', state.value);
}

const emits = defineEmits(['update:state', 'click']);
</script>

<style lang="scss">
.checkbox {
  &__default{
    svg{
      &:hover{
        path{
          transition: .15s;
          stroke: #294470;
          fill: #0F1929;
        }
      }
    }
  }
  &__select{
    svg{
      &:hover{
        path{
          transition: .15s;
          stroke: #1472FF;
          
      }
    }
  }
  }
  &._disable {
    pointer-events: none;
    > .checkbox__default {
      svg {
        path {
          fill: #121519;
          stroke: #1D2129;
        }
      }
    }
    > .checkbox__select{
      svg{
        path{
          stroke: #1D2129;
        }
        
      }
    }
  }
}


</style>