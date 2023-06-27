<template>
  <div class="tab-one">
    <div class="tab-top">
      <div class="block">
        <h5><IconTime/> <span> Start time</span></h5>
        <p>Today, 05 oct 2019 at 19:45 CEST</p>
      </div>
      <div class="block">
        <h5><IconGame/> <span> Game</span></h5>
        <p>Mortal Kombat 11 (PS4)</p>
      </div>
      <div class="block">
        <h5><IconDollars/> <span> Prize pool</span></h5>
        <p>100 USD</p>
      </div>
    </div>
    <div class="tab-top">
      <div class="block">
        <h5><IconNote/> <span>Additional requirements</span></h5>
        <p>At least 18 years old</p>
        <p>Linked PSN Account</p>
      </div>
      <div class="block">
        <h5><IconBalls/> <span> Mode</span></h5>
        <p>1 on 1 - single elimination</p>
        <p>B01 | Final B03</p>
      </div>
      <div class="block">
        <h5><IconWarn/> <span> VETO</span></h5>
        <p>ABABA</p>
        <p>Start player with higher seed</p>
      </div>
    </div>
    <div class="tab-top">
      <div class="block">
        <h5><IconLast/> <span>Lobby</span></h5>
        <p>Game chat: OCR3</p>
      </div>
      <div class="block">
        <p>MORE RULES</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import IconTime from '@/assets/icons/leage/Time.vue'
import IconGame from '@/assets/icons/leage/Game.vue'
import IconDollars from '@/assets/icons/leage/Dollars.vue'
import IconNote from '@/assets/icons/leage/Note.vue'
import IconBalls from '@/assets/icons/leage/Balls.vue'
import IconWarn from '@/assets/icons/leage/Warn.vue'
import IconLast from '@/assets/icons/leage/Last.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.tab-one{
  outline: 1px solid #565656;
  padding: 40px;
  width: 100%;
  .tab-top{
    display: flex;
    justify-content: space-between;
    .block{
      h5{
        color: #FFF;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      p{
        color: #67707A;
        font-size: 16px;
      }
    }
    .block:nth-child(1){
      transform: translateX(-1px);
      @media(max-width: 1492px){
        transform: none;
      }
      p{
        margin-top: 5px;
      }
    }
    .block:nth-child(2){
      transform: translateX(-50px);
      @media(max-width: 1492px){
        transform: none;
      }
      p{
        margin-top: 5px;
      }
    }
    .block:nth-child(3){
      transform: translateX(-87px);
      @media(max-width: 1492px){
        transform: none;
      }
      p{
        margin-top: 5px;
      }
    }
  }
  .tab-top:nth-child(2){
    margin-top: 29px;
    
    .block:nth-child(2){
      transform: translateX(1px);
      @media(max-width: 1492px){
        transform: none;
      }
    }
    .block:nth-child(3){
      transform: translateX(5px);
      @media(max-width: 1492px){
        transform: none;
      }
    }
  }
  .tab-top:nth-child(3){
    margin-top: 32px;
    margin-bottom: 19px;
    align-items: center;
    .block:nth-child(2){
      padding-bottom: 0px;
      border-radius: 2px;
      background: #1A222D;
      transform: translateX(-40px) translateY(8px);
      p{
        color: #FFF;
        font-size: 12px;
        font-weight: 700;
        margin-top: 0;
        padding: 10px 0px;
        padding-left: 22px;
        padding-right: 22px;
      }
    }
  }
}
</style>