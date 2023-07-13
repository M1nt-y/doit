<template>
  <div class="people" :class="{passive: passive}">
    <p class="number-text" v-if="number">{{ numberText }}</p>
    <div class="people__content" :class="{left: left, active: active,}">
      <div class="people__content-flag">
        <img v-if="passive" src="../../assets/icons/country/Spain.svg" alt="">
        <img v-else src="../../assets/icons/country/Georgia.svg" alt="">
      </div>
      <div class="people__content-name">
        <h5>{{ title }}</h5>
      </div>
      <div class="people__content-position">
        <p>{{ rightNumber }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  left:{
    type: Boolean,
    default: false,
  },
  active:{
    type: Boolean,
    default: false,
  },
  passive:{
    type: Boolean,
    default: false,
  },
  number: {
    type: Boolean,
    default: false,
  },
  numberText: {
    type: String,
    default: '',
    required: true,
  },
  title: {
    type: String,
    default: '',
    required: true,
  },
  rightNumber: {
    type: String,
    default: '',
    required: true,
  },
  
  

});
</script>

<style lang="scss">
.people{
  display: flex;
  .number-text{
    transform: translateY(6px);
   
  }
  &__content{
    display: flex;
    align-items: center;
    border-radius: 0px 0px 2px 2px;
    border: 1px solid #20272E;
    padding-left: 17px;
    padding-top: 9px;
    padding-bottom: 8px;
    position: relative;
    &-flag{
      img{
        width: 14px;
        height: 14px;
      }
    }
    &-name{
      margin-left: 6px;
      width: 75px;
      h5{
        color: var(--white-96, #F5F5F5);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
      margin-right: 25px;
    }
    &-position{
      padding-right: 15px;
      p{
        color: var(--white-96, #F5F5F5);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }
    &::after{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 38px;
    height: 100%;
    background: #20272E;
    z-index: -1;
   } 
  }
  &__content.left{
    margin-left: 12px;
  }
}

.people.passive{
  .people__content{
    border: 1px solid #2C95FF;
    &::after{
      background: #2C95FF;
    }
    p{
      color: black
    }
  }
}

</style>