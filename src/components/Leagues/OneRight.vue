<template>
  <div class="right">
    <div class="top">
      <h5>Requirements</h5>
    </div>
    <div class="middle">
      <div class="text">
        <h3>Minimum age</h3>
        <p>At least 18 years old</p>
      </div>
      <div class="info">
        <h3>Residence</h3>
        <p>More info</p>
      </div>
      <div class="info">
        <h3>PSN account</h3>
        <p>Register your name ID</p>
        <div class="block">
          <h3>Play</h3>
          <p>Please log in to take part</p>
          <p>in this tournament.</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <h4>Register clsoe in 10 MAY 2020</h4>
      <button>Register</button>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media-breakpoints.scss';
.right{
  
  .top{
    padding-left: 13px;
    padding-top: 12px;
    padding-bottom: 8px;
    outline: 1px solid #565656;
    h5{
      color: #F5F5F5;
      font-size: 18px;
      font-weight: 500;
      line-height: 32px;
    }
  }
  .middle{
    padding-left: 13px;
    padding-top: 17px;
    outline: 1px solid #565656;
    .text{
      h3{
        color: #F5F5F5;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
      p{
        color: #67707A;
        font-size: 16px;
        margin-top: 5px;
      }
    }
    .info{
      margin-top: 12px;
      padding-left: 24px;
      h3{
        color: #F5F5F5;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
      p{
        color: #67707A;
        font-size: 16px;
        transform: translateY(-1px);
      }
    }
    .info:nth-child(2){
      margin-top: 11px;
      p{
        
        color: #0A68F5;
      }
    }
    .block{
      margin-top: 8px;
      padding-bottom: 2px;
      h3{
        color: #F5F5F5;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
      p{
        color: #67707A;
        font-size: 16px;
        transform: translateY(-1px);
      }
    }
  }
  .bottom{
    padding-top: 19px;
    padding-left: 38px;
    padding-right: 36px;
    outline: 1px solid #565656;
    padding-bottom: 24px;
    
    h4{
      color: #B83333;
      font-size: 16px;
      font-weight: 300;
    }
    button{
      margin-top: 5px;
      padding-top: 10px;
       padding-bottom: 5px;
      border-radius: 2px;
      background: var(--primary-gradient, linear-gradient(180deg, #2788F6 0%, #0960E0 100%));
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      display: block;
      width: 100%;
      color: #FFF;
      font-size: 17px;
      font-weight: 700;
    }
  }
}
</style>