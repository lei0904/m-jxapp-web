<template>
  <div class="market" >
    <Header :text="'驾考市场'" :handle="true"   :transparent="isTransparent"></Header>
    <div class="content">

      <div class="area-content">
        <div class="city" @click="openAddress">{{result}}</div>
        <div class="area">区域</div>
        <div class="near">离我最近</div>
        <div class="search"></div>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/banners/test1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../assets/banners/test2.jpg">
          </div>
        </div>
      </div>

      <div class="list-content"  :style="{ height: listHeight + 'px' }">
        <div class="list-item">
          <div class="img-content">
            <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
          </div>
          <div class="info-content">
            <div class="info-title">超级极速班</div>
            <div class="item"><span>张毅</span><span>18909899090</span></div>
            <div class="item">推广成功奖励<span class="red">400</span>元</div>
            <div class="label-content">
              <div class="label-fill" >场地开阔</div>
              <div class="label-fill" >教练负责</div>
            </div>
          </div>
          <div class="distance-content">
            <div class="price">¥5400</div>
            <div class="distance">10.1km</div>
          </div>
        </div>
        <div class="list-item">
          <div class="img-content">
            <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
          </div>
          <div class="info-content">
            <div class="info-title">超级极速班</div>
            <div class="item"><span>张毅</span><span>18909899090</span></div>
            <div class="item">推广成功奖励<span class="red">400</span>元</div>
            <div class="label-content">
              <div class="label-fill" >场地开阔</div>
              <div class="label-fill" >教练负责</div>
            </div>
          </div>
          <div class="distance-content">
            <div class="price">¥5400</div>
            <div class="distance">10.1km</div>
          </div>
        </div>
        <div class="list-item">
          <div class="img-content">
            <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
          </div>
          <div class="info-content">
            <div class="info-title">超级极速班</div>
            <div class="item"><span>张毅</span><span>18909899090</span></div>
            <div class="item">推广成功奖励<span class="red">400</span>元</div>
            <div class="label-content">
              <div class="label-fill" >场地开阔</div>
              <div class="label-fill" >教练负责</div>
            </div>
          </div>
          <div class="distance-content">
            <div class="price">¥5400</div>
            <div class="distance">10.1km</div>
          </div>
        </div>
        <div class="list-item">
          <div class="img-content">
            <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
          </div>
          <div class="info-content">
            <div class="info-title">超级极速班</div>
            <div class="item"><span>张毅</span><span>18909899090</span></div>
            <div class="item">推广成功奖励<span class="red">400</span>元</div>
            <div class="label-content">
              <div class="label-fill" >场地开阔</div>
              <div class="label-fill" >教练负责</div>
            </div>
          </div>
          <div class="distance-content">
            <div class="price">¥5400</div>
            <div class="distance">10.1km</div>
          </div>
        </div>
        <div class="list-item">
          <div class="img-content">
            <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
          </div>
          <div class="info-content">
            <div class="info-title">超级极速班</div>
            <div class="item"><span>张毅</span><span>18909899090</span></div>
            <div class="item">推广成功奖励<span class="red">400</span>元</div>
            <div class="label-content">
              <div class="label-fill" >场地开阔</div>
              <div class="label-fill" >教练负责</div>
            </div>
          </div>
          <div class="distance-content">
            <div class="price">¥5300</div>
            <div class="distance">10.2km</div>
          </div>
        </div>
      </div>
    </div>

    <cui-address-child
      ref="addressPicker"
      @getLinkAddress='handleChange'
      v-show="showAddress"></cui-address-child>
  </div>
</template>
<style lang="scss">
  @import '../styles/style';
  .market .swiper-container {
    width: 100%;
    height: 300px;
    color: #fff;
    font-size: 60px; /*px*/
    text-align: center;
  }
  .market .swiper-container .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .market .swiper-container .swiper-pagination {
    bottom: 0;
  }
  .market .area-content{
    display: flex;
    flex: 1;
    height: 40px;
    line-height: 40px;
    margin: 10px 0;
    padding: 10px 20px;
    background: #fff;
  }
  .market .area-content .city,
  .market .area-content .area,
  .market .area-content .near{
    font-size: $fontSize13;/*no*/
    min-width: 120px;
    padding:0 30px;
    height: 40px;
    line-height: 40px;
    border-right: 1px solid $grayColor;/*no*/
    position: relative;
  }

  .market .area-content .city:after,
  .market .area-content .area:after,
  .market .area-content .near:after{
    content:"▼";
    width: 20px;
    height: 20px;
    right: 15px;
    top:5px;
    position: absolute;
    color: $grayColor ;
  }
  .market .list-item{
    display: flex;
    flex:1;
    flex-wrap: nowrap;
    justify-content: space-between;
    background: #fff;
    padding: 20px;
    margin: 20px 0;
    height: 200px;
  }

  .market .list-item .img-content{
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }
  .market .list-item img{
    width: 200px;
    height: 200px;
  }

  .market .list-content{
    overflow: scroll;
  }
  .market .list-item .distance-content{
    width: 160px;
    text-align: right;
  }
  .market .list-item .distance-content .price{
    color:$redColor;
    font-size: $fontSize20;/*no*/
  }
  .market .list-item .distance-content .distance{
    color: $grayColor;
    margin: 10px 0;
    font-size: $fontSize13;
  }
  .market .list-item .info-content .red{
    color: $redColor;
    padding: 0 10px;
  }
  .market .list-item .info-title{
    font-size: $fontSize16;/*no*/
    color: #000000;
    height: 40px;
  }
  .market .list-item .info-content{
    color: $grayColor;
    height: 120px;
  }
  .market .list-item .info-content .item{
    height: 50px;
    line-height: 50px;
    padding: 10px 60px 0 0;
    box-sizing: border-box;
  }
  .market .list-item .info-content .label-content{
    height: 40px;
    display: flex;
    flex: 1;
    position: relative;
    margin: 20px 0  0;
  }
  .market .list-item .info-content .label-fill{
    border:1px solid  $redColor;/*no*/
    text-align: center;
    color: $redColor;
    height: 40px;
    line-height: 40px;
    width: 140px;
    padding:0 10px;
    margin-right: 10px;
    border-radius: 10px;
    box-sizing: border-box;
  }
</style>
<script>

  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
   export  default ({
     data(){
       return {
         isTransparent:false,
         result:'城市',
         showAddress:false,
         listHeight:0
       }
     },
     methods:{
       openAddress(){
         this.showAddress = true;
       },
       handleChange: function (picker) {
         //this.$refs.picker1.open();
          console.log('picker------',picker)

         if(picker.area.name && picker.area.name !== "市辖区"){
           this.result = picker.area.name;
         }else if(picker.city.name && picker.city.name !== "市辖区" && picker.city.name !== "县"){
           this.result = picker.city.name;
         }else{
           this.result = picker.province.name;
         }

         this.showAddress = false;
         //this.code=picker.code;
       }
     },
     mounted() {
       var mySwiper = new Swiper('.swiper-container', {
         //可选选项，自动滑动
         autoplay: true,
         loop: true
       })
       this.listHeight = document.body.clientHeight - 240 * window.dpr;
     }
   })
</script>
