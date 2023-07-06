<template>
  <div class="tabs">
    <div class="tabs__item" v-for="(item, idx) in tabs"
    :class="{'active': item.queryParam == activeIdx}"
    @click="newActive(item.queryParam )">
      <h5>{{ item.title }}</h5>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs:{
    type: Array,
    default: [],
  },
  activeIdx:{
    type: String,
    default: 'players'
  }
})

const emits = defineEmits(['newActive', 'click',]);
function newActive(idx){
  emits('newActive', idx);
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/media-breakpoints.scss';
.tabs{
  display: flex;
  align-items: center;
  margin-top: 32px;
  &__item{
    border: 2px solid #20252B;
    padding-top: 25px;
    padding-bottom: 24px;
    background: #0F1215;
    transition: .15s;
    @include media-breakpoint-down(md) {
      padding: 10px 0px;
    }
    cursor: pointer;
    h5{
      color: #F5F5F5;
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
      @include media-breakpoint-down(xs) {
        font-size: 8.4px;
      }
    }
    &:hover{
      background: white;
      h5{
        color: #0F1215;
      }
    }
  }
  &__item.active{
    background: white;
    h5{
      color: #0F1215;
    }
  }
  &__item:nth-child(1){
    max-width: 238px;
    width: 100%;
    border-right: 0;
  }
  &__item:nth-child(2){
    max-width: 230px;
    width: 100%;
    border-right: 0;
  }
  &__item:nth-child(3){
    max-width: 232px;
    width: 100%;
    border-right: 0;
    h5{
      transform: translateX(2px);
    }
  }
  &__item:nth-child(4){
    max-width: 240px;
    width: 100%;
    border-right: 0;
    h5{
      transform: translateX(2px);
    }
  }
  &__item:nth-child(5){
    max-width: 240px;
    width: 100%;
  }
}
</style>