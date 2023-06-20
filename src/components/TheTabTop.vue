<template>
<div class="top__btn">
  <div class="btn" 
    v-for="btn in button"
    :class="{ active: btn.search === selectedBtn }"
    @click="selectBtn(btn)">
    {{ truncatedTitle(btn.title) }}
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  button: {
    type: Array,
    default: [],
    required: true,
  }
})


const selectedBtn = ref(props.button[1].search);

function selectBtn(btn) {
  selectedBtn.value = btn.search
}


// обрезка слов на изменение ширины экрана
const truncatedTitle = (title) => {
  if (isMobile.value) {
    const words = title.split(' ');
    if (words.length > 1) {
      return words[1];
    }
  }
  return title;
};

const isMobile = ref(window.innerWidth < 768);

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});



</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.top__btn{
    display: flex;
    margin-top: 50px;
    @include media-breakpoint-down(xs) {
      margin-top: 39px;
    }
    .btn{
      max-width: 294px;
      width: 100%;
      text-align: center;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      background: #0F1215;
      border: 2px solid #242B33;
      padding: 20px 0px;
      cursor: pointer;
      transition: .15s;
      &:hover{
        background: white;
        color: black;
      }
      @include media-breakpoint-down(xs) {
        font-weight: 500;
        font-size: 12px;
        line-height: 100%;
        padding: 12px 0px;
        padding-bottom: 11px;
      }
    }
    .btn:nth-child(1),
    .btn:nth-child(2),
    .btn:nth-child(3){
      border-right: 0;
    }
    .btn.active{
      background: white;
      color: black;
    };
    .btn:nth-child(4){
      @include media-breakpoint-down(xs) {
        transform: translateX(2px);
      }
    }
  }

</style>