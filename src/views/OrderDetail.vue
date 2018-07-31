<template>
  <div class="orderDetail">
    <Header :text="'班次选择'" :handle="true"   @back="backPage"></Header>
    <div class="orderInfo">
      <div class="school-name">和平驾校</div>
      <div class="address">北二环与郎溪路交口西南角.</div>
      <div class="infos">
        <div class="left">
          <div class="item">明天 09-20</div>
          <div class="item">张毅</div>
        </div>
        <div class="right">
          <div class="carNo">皖99R56</div>
          <div class="tel">18956055466</div>
        </div>
      </div>
    </div>
    <div class="list-content"  :style="{ height: orderListHeight + 'px' }">
      <div class="list-item">
        <div class="order-content" v-for="item in orderCarTime">
          <div>
            <div class="order-time">{{item.time}}</div>
            <div class="order-time order-tip">{{item.duration}}</div>
          </div>
          <div class="btn-content">
            <mt-button type="danger"
                       size="small"
                       class="order-btn"
                       @click.native="order">预约</mt-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="scss">

  @import '../styles/style';
  .orderDetail .orderInfo{
    background-color: #fff;
    padding: 20px;
    height: 160px;
    border-bottom: 1px solid $grayColor;/*no*/
  }
  .orderDetail .school-name{
    font-size: $fontSize16;/*no*/
  }
  .orderDetail .address{
    color: $grayColor;
    margin: 10px 0;
  }
  .orderDetail .infos{
    display: flex;
    flex: 1;
  }


  .orderDetail .infos .item{
    padding: 5px 10px 5px 0;
    margin: 5px 10px 5px 0;
    color: $grayColor;
    border-right: 1px solid $grayColor;/*no*/
  }
  .orderDetail .infos .carNo,
  .orderDetail .infos .tel{
    color: $grayColor;
    padding: 5px 0 5px 10px;
    margin: 5px 0 5px 10px ;
  }
  .orderDetail .list-content{
    overflow: scroll;
  }
  .orderDetail .order-content{
    display: flex;
    flex:1;
    justify-content: space-between;
    background: #fff;
    height: 100px;
    padding: 20px;
    border-bottom: 1px solid $grayColor;
  }
  .orderDetail .order-time{
    height: 60px;
    line-height: 60px;
    font-size: $fontSize16;/*no*/
  }
  .orderDetail .order-content .order-tip{
    height: 40px;
    line-height: 40px;
    color: $grayColor;
    font-size: $fontSize13;/*no*/
  }
  .orderDetail .btn-content{
    margin-top:20px;
  }
  .orderDetail .order-btn{
    width: 180px;
  }
</style>
<script>
  export default ({
    data:function () {
      return {
        isTransparent:false,
        orderListHeight:0,
        orderCarTime:[
          {time:"7:00-8:00",duration:"1小时"},
          {time:"9:00-10:00",duration:"1小时"},
          {time:"11:00-12:00",duration:"1小时"},
          {time:"13:00-14:00",duration:"1小时"},
          {time:"15:00-16:00",duration:"1小时"},
          {time:"11:00-12:00",duration:"1小时"},
          {time:"13:00-14:00",duration:"1小时"},
          {time:"15:00-16:00",duration:"1小时"},
          {time:"11:00-12:00",duration:"1小时"},
          {time:"13:00-14:00",duration:"1小时"},
          {time:"15:00-16:00",duration:"1小时"},
          {time:"11:00-12:00",duration:"1小时"},
          {time:"13:00-14:00",duration:"1小时"},
          {time:"15:00-16:00",duration:"1小时"},
          {time:"11:00-12:00",duration:"1小时"},
          {time:"13:00-14:00",duration:"1小时"},
          {time:"15:00-16:00",duration:"1小时"},
          {time:"11:00-12:00",duration:"1小时"},
          {time:"13:00-14:00",duration:"1小时"},
          {time:"15:00-16:00",duration:"1小时"}]
      }
    },
    methods:{
      order:function () {
        console.log("-----预约-----")
        this.$mint.MessageBox.confirm("确定预约此班次?").then(()=>{
          this.$router.push({path:'/orderResult'})
        })

      },
      backPage(){
        this.$router.push({path:'/'});
      }

    },
    activated(){
      this.orderListHeight = document.body.clientHeight - 145 * window.dpr;
    },
    created(){
      console.log('orderDetail------')
    }
  })
</script>
