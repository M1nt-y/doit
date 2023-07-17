<template>
<div class="btn-form">
  <div class="btn" v-for="(item, index) in btn" 
  @click="activeBtn = index" 
  :class="{'active': index == activeBtn}">{{ item }}</div>
</div>
</template>


<script setup>
import {ref} from 'vue'
const btn  = ['Free', 'Paid', 'PREMIUM', 'PRIVATE'];
const activeBtn = ref(0)
</script>


<style lang="scss">
.btn-form{
  display: flex;
  align-items: center;
  gap: 12px;
  .btn{
    color: #0A61E1;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    background: #1A222D;
    padding: 12px 22px;
    transition: .25s;
    cursor: pointer;
    &:hover{
      color: var(--white-96, #F5F5F5);
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    }
  }
  .btn.active{
    color: var(--white-96, #F5F5F5);
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
  }
}
</style>