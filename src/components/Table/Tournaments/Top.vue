<template>
  <div class="top">
    <div class="top__input">
      <input type="text" placeholder="Search by name, prize, signed, etc.">
      <IconSearch/>
    </div>
    <div class="top__btn">
      <div class="top__btn-edit">
        <p>Edit mode</p>
      </div>
      <RouterLink to="/table/new-tournament" class="top__btn-last">
        <p> <span> + </span> Add tournament</p>
      </RouterLink>
    </div>
  </div>

  </template>

  <script setup>
  import IconSearch from '@/assets/icons/table/Search.vue'
  import IconStarCraft from '@/assets/icons/table/StarCraft.vue'



  const iconArray = [IconStarCraft, IconStarCraft, IconStarCraft, IconStarCraft, IconStarCraft, IconStarCraft]





  </script>

  <style lang="scss" scoped>
  @import '@/assets/scss/media-breakpoints.scss';
  .top{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include media-breakpoint-down(xs) {
         flex-direction: column;
         gap: 20px;
      }
    &__input{
      position: relative;
      input{
        width: 244px;
        margin-top: 5px;
        background: #0F1215;
        border-bottom: 2px solid #20252B;
        color: white;
      }
      input::placeholder{
        color: #434951;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
      }
      svg{
        position: absolute;
        right: -3px;
        bottom: 2px;
      }
    }
    &__icons{
      display: flex;
      margin-left: 30px;

      .block{
        padding: 2px;
        padding-top: 4px;
        padding-bottom: 0px;
        outline: 2px solid #20252B;
      }
      .block:nth-child(1){
        margin-left: -38px;
      }
      .block:nth-child(2){
        margin-left: 20px;
      }

    }
    &__btn{
      display: flex;
      gap: 15px;
      &-edit{
        padding: 14px 0px;
        width: 168px;
        max-width: 100%;
        background: #1A222D;
        @include media-breakpoint-down(md) {
          width: 100px;
        }
        p{

          color: var(--white-96, #F5F5F5);
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          @include media-breakpoint-down(md) {
            font-size: 12px;
          }
        }
      }
      &-last{
        padding: 14px 0px;
        width: 235px;
        max-width: 100%;
        background: #1A222D;
        @include media-breakpoint-down(md) {
          width: 140px;
        }
        p{
          span{
            margin-right: 5px;
          }
          text-align: center;
          color: var(--white-96, #F5F5F5);
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          @include media-breakpoint-down(md) {
            font-size: 12px;
          }
        }
      }
    }
  }
  </style>
