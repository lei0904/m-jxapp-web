<template>
  <div class="orderResult">
    <Header :text="'预约结果'" :handle="true"  @back="backPage"></Header>
    <div class="content">
      <div class="img-content">
        <img src="../assets/img/result-bg.png" alt="">
      </div>
      <div class="resut-text">
        您已预约 明天 07-19 皖A99R67 7:00-8:00
        请等待教练审核
      </div>
      <div class="btn-content">
        <mt-button  type="primary"
                    size="large" @click.native="backPage">返回</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  @import '../styles/style';
  .orderResult .content{
    margin: 20px;
    padding: 20px;
  }
  .orderResult .content .img-content{
    width: 100%;
    height: 420px;
  }
  .orderResult .content .img-content img{
    width: 100%;
    height:100%;
  }
  .orderResult .content .resut-text{
    text-align: center;
    margin: 100px 0;
    font-size: $fontSize15;/*no*/
  }
  .orderResult .btn-content{
    margin:80px  20px 40px;
  }
</style>
<script>
  export  default ({
    data:function () {
      return {
        isTransparent:false
      }
    },
    methods:{
      backPage(){
        this.$router.push({path:'/orderDetail'});
      }

    },
    activated(){
      console.log("--------orderResult-----")
    }
  })
</script>
