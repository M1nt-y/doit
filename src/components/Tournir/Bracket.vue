<template>
  <div class="bracket">
    <div class="bracket__header">
      <div class="block">
        <Arrow/>
        <h5>Round 8</h5>
      </div>
      <div class="block">
        <h5>SEMI-FINAL</h5>
      </div>
      <div class="block">
        <h5>FINAL</h5>
        <Arrow/>
      </div>
    </div>
    <div class="bracket__content">
      <div class="group-b">
        <div class="info">
          <Arrow/>
          <h5>Round 8</h5>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'6'" 
          :number="true" 
          :numberText="'4'" 
          :passive="false"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'8'" 
          :number="true" 
          :numberText="'21'" 
          :passive="true"/>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'9'" 
          :number="true" 
          :numberText="'13'" 
          :passive="true"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'4'" 
          :number="true" 
          :numberText="'8'" 
          :passive="false"/>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'6'" 
          :number="true" 
          :numberText="'13'" 
          :passive="false"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'8'" 
          :number="true" 
          :numberText="'12'" 
          :passive="true"/>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'9'" 
          :number="true" 
          :numberText="'1'" 
          :passive="true"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'4'" 
          :number="true" 
          :numberText="'5'" 
          :passive="false"/>
        </div>
      </div>
      <div class="semi">
        <div class="info">
          <h5>SEMI-FINAL</h5>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'6'" 
          :passive="false"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'8'" 
          :passive="true"/>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'9'" 
          :passive="false"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'4'" 
          :passive="false"/>
        </div>
      </div>
      <div class="final">
        <div class="info">
          <Arrow/>
          <h5>FINAL</h5>
        </div>
        <div class="block">
          <People 
          :left="true" 
          :active="false" 
          :title="'Walkower'"
          :rightNumber="'6'" 
          :passive="false"/>
          <People 
          :left="true" 
          :active="false" 
          :title="'BF’s Squad'"
          :rightNumber="'8'" 
          :passive="true"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Arrow from '@/assets/icons/tournirs/main/Arrow.vue'
import People from '@/components/Tournir/People.vue'
</script>
<style lang="scss">
.bracket{
  border: 2px solid #20252B;
  transform: translateX(6px);
  padding-bottom: 125px;
  @media(max-width: 1024px){
    border: 0;
  }
  &__header{
    display: flex;
    align-items: center;
    padding-top: 95px;
    padding-left: 35px;
    .block{
      display: flex;
      align-items: center;
      h5{
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
    .block:nth-child(1){
      svg{
        margin-right: 45px;
      }
    }
    .block:nth-child(2){
      margin-left: 172px;
      @media(max-width: 1346px){
        margin-left: 120px;
      }
    }
    .block:nth-child(3){
      margin-left: 185px;
      svg{
        transform: rotate(180deg);
        margin-left: 29px;
      }
      @media(max-width: 1346px){
        margin-left: 120px;
      }
    }
    @media(max-width: 1260px){
      display: none;
    }
  }
  &__content{
    margin-top: 27px;
    padding-left: 32px;
    padding-right: 10px;
    display: flex;
    @media(max-width: 1260px){
      flex-direction: column;
    }
    .group-b{
      position: relative;
      padding-right: 70px;
      @media(max-width: 1346px){
        padding-right: 35px;
      }
      .info{
        display: none;
        @media(max-width: 1260px){
          display: flex;
          gap: 20px;
          align-items: center;
        }
      }
      .block{
        .people:nth-child(2){
          transform: translateX(-6px);
        }
      }
      .block:nth-child(3){
        margin-top: 15px;
        .people:nth-child(1){
          transform: translateX(-5px);
        }
        .people:nth-child(2){
          transform: translateX(0px);
        }
      }
      .block:nth-child(4){
        margin-top: 20px;
        .people:nth-child(1){
          transform: translateX(-5px);
        }
      }
      .block:nth-child(5){
        margin-top: 15px;
        .people:nth-child(1){
          transform: translateX(5px);
        }
        .people:nth-child(2){
          transform: translateX(2px);
        }
      }
      &::after{
        content: '';
        position: absolute;
        right: 2px;
        top: 38px;
        width: 58px;
        height: 92px;
        background-image: url('../../assets/icons/tournirs/ics/napm.svg');
        @media(max-width: 1346px){
          width: 20px;
          background-size: cover;
          background-position: center;
        }
        @media(max-width: 1260px){
          content: none;
        }
      }
      &::before{
        content: '';
        position: absolute;
        right: 2px;
        bottom: 38px;
        width: 58px;
        height: 92px;
        background-image: url('../../assets/icons/tournirs/ics/napm.svg');
        @media(max-width: 1346px){
          width: 20px;
          background-size: cover;
          background-position: center;
          right: 10px;
        }
        @media(max-width: 1260px){
          content: none;
        }
      }
    }
    .semi{
      position: relative;
      padding-right: 80px;
      @media(max-width: 1346px){
        padding-right: 40px;
      }
      .info{
        display: none;
        @media(max-width: 1260px){
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 40px;
        }
      }
      .block:nth-child(2){
        margin-top: 45px;
      }
      .block:nth-child(3){
        margin-top: 110px;
        @media(max-width: 1260px){
          margin-top: 20px;
        }
      }
      &::before{
        content: '';
        position: absolute;
        right: 4px;
        top: 80px;
        width: 58px;
        height: 190px;
        background-image: url('../../assets/icons/tournirs/ics/big.svg');
        @media(max-width: 1346px){
          background-size: cover;
          background-position: center;
          width: 20px;
        }
        @media(max-width: 1260px){
          content: none;
        }
      }
    }
    .final{
      margin-top: 140px;
      @media(max-width: 1260px){
        margin-top: 40px;
      }
      .info{
        display: none;
        @media(max-width: 1260px){
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>