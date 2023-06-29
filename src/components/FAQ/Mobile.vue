<template>
 <div class="faq__content-mobile">
  <div class="accordeon" v-for="(item, index) in accordeon">
    <div class="accordeon-title" @click="oneOpen(index)">
      <h3
      :class="{ active: activeIndex === index }" 
      >{{ item.title }}</h3>
    </div>
    <div class="accordeon-content"
    :class="{ active: activeIndex === index }" 
    >
      <div class="item"
      v-for="(info, id) in item.content"
      >
      <div class="flex" @click="toggleAccordion(id)">
        <div class="title">
          <h5>{{ info.title }}</h5>
          
        </div>
        <IconMinus v-if="activeAccrodeon == id" />
        <IconPlus v-else />
       
        
      </div>
      <div class="content"
      :class="{active: activeAccrodeon == id}">
            <p>{{ info.textOne }}</p>
           <p>{{ info.textTwo }}</p>
           <p>{{ info.textLast }}</p>
        </div>
    </div>
    </div>
  </div>
 </div>
</template>

<script setup>
import {ref} from 'vue'
import IconPlus from '@/assets/icons/faq/Plus.vue'
import IconMinus from '@/assets/icons/faq/Minus.vue'


const emits = defineEmits(['activetab:activeIndex', 'click', 'open-accordeon']);

const props = defineProps({
  accordeon: {
    type: Array,
    default: [],
    required: true,
  },
  activeIndex: {
    type: Number,
    default: 0,
    required: true,
  },
  activeAccrodeon:{
    type: Number,
    default: 0,
    required: true,
  }
})


function oneOpen(index) {
  emits('activetab:activeIndex', index);
};


function toggleAccordion(id) {
  emits('open-accordeon', id);
};

</script>

<style lang="scss">
.faq__content-mobile{
  margin-top: 8px;
  .accordeon{
    .accordeon-title{
      h3{
        color: var(--white-80, #CCC);
        font-size: 20px;
        font-weight: 500;
        line-height: 130%;
      }
      h3.active{
        color: #2787F6;
      }
    }
    .accordeon-content{
      max-height: 0;
      opacity: 0;
      overflow: hidden;

      .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        padding-right: 18px;
        padding-top: 22px;
        padding-bottom: 20px;
        background: #151A1F;
        margin-top: 8px;
        .title{
          max-width: 225px;
          h5{
            font-size: 16px;
            font-weight: 100;
          }
        }
      }
      .content{
        max-height: 0px;
        opacity: 0;
        overflow: hidden;
        transition: .15s;
      }
      .content.active{
        max-height: 500px;
        opacity: 1;
        overflow: auto;
        transition: .15s;
        padding-top: 10px;
        padding-left: 16px;
        p{
          color: var(--white-80, #CCC);
          font-size: 14px;
          font-weight: 300;
          line-height: 160%;
        }
        p:nth-child(2){
          margin-top: 20px;
        }
        p:nth-child(3){
          margin-top: 20px;
        }
      }
    }
    .accordeon-content.active{
      max-height: unset;
      opacity: 1;
      overflow: auto;
      padding-top: 15px;
    }
  }
  .accordeon:nth-child(1){
    .accordeon-title{
      h3{
        font-size: 18px;
      }
    }
  }
  .accordeon:nth-child(2),
  .accordeon:nth-child(3),
  .accordeon:nth-child(4),
  .accordeon:nth-child(5),
  .accordeon:nth-child(6),
  .accordeon:nth-child(7),
  .accordeon:nth-child(8){
    margin-top: 20px;
  }
}
</style>