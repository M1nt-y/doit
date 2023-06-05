<template>
<main class="main contact">
  <div class="container">
    <h3 class="contact-title">Contact us</h3>
    <div class="contact__adress">
      <div class="contact__adress-point">
        <IconPoint/>
      </div>
      <div class="contact__adress-text">
        <p>2440, Daisy Dr undefined Pembroke Pines, Arizona</p>
      </div>
    </div>
    <div class="contact__phone">
      <div class="contact__phone-point">
        <IconPhone/>
      </div>
      <div class="contact__phone-text">
        <p>Headquater  <a href="#">(+48) 517 429 774</a></p>
      </div>
    </div>
    <div class="contact__mail">
      <div class="contact__mail-point">
        <IconMail/>
      </div>
      <div class="contact__mail-text">
        <p><a href="#"> <span>Support</span>@doit.gg</a></p>
        <p><a href="#"><span>Organizer</span>@doit.gg</a></p>
        <p><a href="#"><span>Sponsorship</span>@doit.gg</a></p>
      </div>
    </div>
  </div>
</main>
</template>

<script setup>
import IconPoint from '@/assets/icons/Point.vue'
import IconPhone from '@/assets/icons/Phone.vue'
import IconMail from '@/assets/icons/Mail.vue'
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';

.contact{
  margin-top: 193px;
  margin-bottom: 100px;
  &-title{
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }
  &__adress{
    display: flex;
    align-items: center;
    gap: 13px;
    margin-top: 52px;
    padding-bottom: 40px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 15px;
      top: 45px;
      width: 2px;
      height: 41px;
      background: #151A1F;
    }
    &-point{
      border: 2px solid #151A1F;
      border-radius: 4px;
      padding: 5px 8px 1px 8px;
      margin-left: -10px;
      svg{
        width: 32px;
        height: 32px;
      }
    }
    &-text{
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: #707880;
      }
    }
  }
  &__phone{
    display: flex;
    align-items: center;
    gap: 13px;
    padding-bottom: 40px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 15px;
      top: 45px;
      width: 2px;
      height: 41px;
      background: #151A1F;
    }
    &-point{
      border: 2px solid #151A1F;
      border-radius: 4px;
      padding: 5px 8px 1px 8px;
      margin-left: -10px;
      svg{
        width: 32px;
        height: 32px;
      }
    }
    &-text{
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: #707880;
        a{
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 100%;
          color: #CCCCCC;
          margin-left: 6px;
        }
      }
    }
  }
  &__mail{
    display: flex;
    gap: 16px;
    padding-bottom: 40px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 15px;
      top: 48px;
      width: 2px;
      height: 69px;
      background: #151A1F;
    }
    &-point{
      border: 2px solid #151A1F;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin-left: -10px;
      svg{
        width: 32px;
        height: 32px;
      }
    }
    &-text{
      margin-top: 11px;
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: #707880;
        a{
          span{
            color: #CCCCCC;
          }
        }
      }
      p:nth-child(2){
        margin-top: 22px;
      }
      p:nth-child(3){
        margin-top: 22px;
      }
      
    }
  }
}

</style>