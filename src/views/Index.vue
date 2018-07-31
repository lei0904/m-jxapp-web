<template>
  <div class="order" >
    <Header :text="'在线预约'" :handle="false"   :transparent="isTransparent"></Header>
    <div>
      <div class="order-time">
        <div class="item"
             :class="index == idx ? 'selected' :''"
             @click="changeTime(index,item)"
             v-for="(item,index) in orderTime">{{item}}</div>
      </div>
      <div class="list-wrap" :style="{ height: listHeight + 'px' }">
        <div class="list-item" v-for="info in listCar">
          <div class="list-title">
            <div class="left">
              <div class="address-name">
                {{info.name}}
              </div>
              <div class="address">{{info.address}}</div>
              <div class="label-content">
                <div class="label-fill"  v-for="it in info.labels">{{it}}</div>
              </div>
            </div>
            <div class="right">
              <div class="tearch-name"><label>负责教练:</label><span>{{info.teacher}}</span></div>
              <div class="tel">{{info.tel}}</div>
            </div>
          </div>
            <div class='car-wrap'>
              <div class='car-num'
                   v-for="car in info.carNo"
                   @click="toOrderDetail(car)">
                <div class="car-no">{{car.no}}</div>
                <div class="car-type">
                  <div>{{car.carColor}}</div>
                  <div>{{car.carType}}</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

  @import '../styles/style';
  .order{
    position: relative;
    box-sizing: border-box;
  }
  .order .order-time{
    display: flex;
    flex:1;
    padding:0 20px;
    height: 80px;
    line-height:80px;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #ccc; /*no*/
    overflow: scroll;
  }
  .order .order-time .item{
    text-align: center;
    padding: 10px 0;
    min-width: 144px;
    height: 80px;
    line-height:80px;
    box-sizing: border-box;
  }
  .order .order-time .selected{
    color: $redColor;
    border-bottom:  1px solid $redColor; /*no*/
  }
  .order .list-wrap{
    overflow: scroll;
  }
  .order .list-item{
    background: #fff;
    padding:15px 20px;
    margin: 20px 0;
  }
  .order .list-item .list-title{
    display: flex;
    flex:1;
    margin: 20px;
    height: 140px;
    justify-content: space-between;
  }

  .order .list-title .address-name{
    font-size: $fontSize16;/*no*/
    height: 40px;
  }

  .order .address{
    height: 40px;
    line-height: 40px;
    margin: 10px 0;
    color: #c7c7c7;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
  }
  .order .label-content{
    height: 50px;
    display: flex;
    flex: 1;
    position: relative;
  }
  .order .label-fill{
    background: $redColor;
    text-align: center;
    color: #fff;
    height: 30px;
    line-height: 30px;
    width: 120px;
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
  }
  .order .right{
    width: 750px;
    text-align: right;
  }
  .order .tearch-name{
    font-size: $fontSize16;/*no*/
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .order .tel{
    color: $grayColor;
    font-size: $fontSize13;
  }
  .order .car-wrap{
    display: flex;
    align-items: center;
    flex: 1;
    flex-wrap:wrap;
  }
  .order .car-num:active{
    background: rgba(0,0,0,.5);
    opacity: 0.3;
  }
  .order .car-num{
    margin: 10px 2.5px;
    width: 170px;
    height: 140px;
    background: $greenColor;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }
  .order .car-num .car-no{
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
  }
  .order .car-num .car-type div{
    height: 30px;
    line-height: 30px;
  }
</style>
<script>

   export  default ({
     data(){
       return {
         isTransparent:false,
         idx:'0',
         listHeight:0,
         orderTime:['07-20 周一','07-20 周一','07-20 周一','07-20 周一','07-20 周一','07-20 周一','07-20 周一','07-20 周一','07-20 周一'],
         listCar:[
           {
             name:"北二环场地(科目二)",
             address:"北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角",
             labels:["场地开阔","教练负责"],
             teacher:"张毅",
             tel:"13987678909",
             carNo:[
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"}]
           },
           {
             name:"北二环场地(科目二)",
             address:"北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角",
             labels:["场地开阔","教练负责"],
             teacher:"张毅",
             tel:"13987678909",
             carNo:[
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"}]
           },
           {
             name:"北二环场地(科目二)",
             address:"北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角",
             labels:["场地开阔","教练负责"],
             teacher:"张毅",
             tel:"13987678909",
             carNo:[
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"}]
           },
           {
             name:"北二环场地(科目二)",
             address:"北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角北二环与郎溪路交口西南角",
             labels:["场地开阔","教练负责"],
             teacher:"张毅",
             tel:"13987678909",
             carNo:[
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"},
               {no:"皖A99R67",carColor:"白色",carType:"烧油"}]
           }
         ]

       }
     },
     methods:{
       changeTime:function (index,item) {
         this.idx = index;
         console.log(item);
       },
       toOrderDetail(item){
        console.log('toOrderDetail---',item);
         this.$router.push({path:'/orderDetail',query:item})
       }
     },
     mounted() {
          this.listHeight = document.body.clientHeight - 90 * window.dpr;
     }
   })
</script>
