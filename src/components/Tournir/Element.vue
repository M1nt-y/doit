<template>
  <div class="elements">
    <div class="elements__content" v-for="(item, index) in array">
      <div class="elements__content-block" v-if="item.opened">
        <div class="img">
          <picture>
            <source type="image/webp" :srcset="item.dotaMobileTrueWebp">
            <source type="image/png" :srcset="item.dotaMobileTruePng">
            <img  :src="item.dotaMobileTrueWebp" alt="">
        </picture>
        </div>
        <div class="text">
          <div class="title">
            <h4>{{ item.title }}</h4>
            <IconArrow/>
          </div>
          <div class="top">
            <div class="one">
              <p>Prize</p>
              <h5>{{ item.prize }}</h5>
            </div>
            <div class="one">
              <p>Mode</p>
              <h5>{{ item.mode }}</h5>
            </div>
          </div>
          <div class="middle">
            <div class="one">
              <p>Entry fee</p>
              <h5>{{ item.fee }}</h5>
            </div>
            <div class="one">
              <p>Server</p>
              <h5>{{ item.server }}</h5>
            </div>
          </div>
          <div class="bottom">
            <div class="one">
              <p>Rank restriction</p>
              <h5>No rank restrictions</h5>
            </div>
            <div class="one">
              <p>Slots</p>
              <h5>{{ item.slot }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="elements__content-none" @click="opened(index)" v-else>
        <picture>
            <source type="image/webp" :srcset="item.dotaMobileFalseWebp">
            <source type="image/png" :srcset="item.dotaMobileFalsePng">
            <img  :src="item.dotaMobileFalseWebp" alt="">
        </picture>
        <div class="block">
          <p>{{ item.title }}</p>
          <IconArrow/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrow from '@/assets/icons/tournirs/Arrow.vue'

const props = defineProps({
  array: {
    type: Array,
    default: [],
    required: true,
  }
})
const emits = defineEmits(['opened', 'click']);

function opened(index) {
  emits('opened', index);
}
</script>

<style lang="scss">
.elements{
  margin-top: 24px;
  &__content{
    &-none{
      position: relative;
      img{
        width: 100%;
      }
      .block{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 22px 0px;
        padding-left: 15px;
        p{
          color: var(--white-96, #F5F5F5);
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          opacity: 0.8799999952316284;
        }
        svg{
          width: 24px;
          height: 24px;
          transform: translateX(-15px);
        }
      }
    }
    &-block{
      img{
          width: 100%;
        }
      .text{
        background: #151A1F;
        padding: 0px 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          h4{
            color: var(--white-96, #F5F5F5);
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
          }
          svg{
            transform: rotate(180deg);
            width: 24px;
            height: 24px;
          }
        }
        .top{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .one{
            margin-top: 12px;
            padding-right: 28px;
            p{
              color: #67707A;
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
              text-transform: uppercase;
            }
            h5{
              color: #F5F5F5;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
          }
          .one:nth-child(2){
            transform: translateY(2px);
          }
        }
        .middle{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .one{
            margin-top: 8px;
            p{
              color: #67707A;
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
              text-transform: uppercase;
            }
            h5{
              color: #F5F5F5;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
          }
          .one:nth-child(2){
            transform: translateY(2px) translateX(-80px);
          }
        }
        .bottom{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .one{
            margin-top: 8px;
            p{
              color: #67707A;
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
              text-transform: uppercase;
            }
            h5{
              color: #F5F5F5;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
          }
          .one:nth-child(2){
            transform: translateY(0px) translateX(-102px);
          }
        }
      }
    }
  }
  &__content:nth-child(2){
    margin-top: 20px;
  }
  &__content:nth-child(3){
    margin-top: 16px;
  }
  &__content:nth-child(4){
    margin-top: 16px;
  }
  &__content:nth-child(5){
    margin-top: 16px;
  }
}
</style>