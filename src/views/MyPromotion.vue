<template>
  <div class="myPromotion">

    <Header :text="'我的推广'" :handle="true"   @back="backPage"></Header>
    <div class="select-project" @click="openActionsheet" >{{result}}</div>
    <div class="list-wrap">
        <div class="list-item" :style="{ height: listHeight + 'px' }">
          <div class="item">
            <div class="img-content">  <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
            </div>
            <div class="is-project">
              <div class="name">木鱼</div>
              <div class="project">已预定课程</div>
            </div>
            <div class="left-time">
              <div class="time">客户关系还剩10天</div>
              <div><label > 预计奖励金:</label> <span class="red">200</span></div>
            </div>
          </div>
          <div class="item">
            <div class="img-content">  <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
            </div>
            <div class="is-project">
              <div class="name">木鱼</div>
              <div class="project">已预定课程</div>
            </div>
            <div class="left-time">
              <div class="time">客户关系还剩10天</div>
              <div><label > 预计奖励金:</label> <span class="red">200</span></div>
            </div>
          </div>
          <div class="item">
            <div class="img-content">  <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
            </div>
            <div class="is-project">
              <div class="name">木鱼</div>
              <div class="project">已预定课程</div>
            </div>
            <div class="left-time">
              <div class="time">客户关系还剩10天</div>
              <div><label > 预计奖励金:</label> <span class="red">200</span></div>
            </div>
          </div>
          <div class="item">
            <div class="img-content">  <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
            </div>
            <div class="is-project">
              <div class="name">木鱼</div>
              <div class="project">已预定课程</div>
            </div>
            <div class="left-time">
              <div class="time">客户关系还剩10天</div>
              <div><label > 预计奖励金:</label> <span class="red">200</span></div>
            </div>
          </div>
          <div class="item">
            <div class="img-content">  <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
            </div>
            <div class="is-project">
              <div class="name">木鱼</div>
              <div class="project">已预定课程</div>
            </div>
            <div class="left-time">
              <div class="time">客户关系还剩10天</div>
              <div><label > 预计奖励金:</label> <span class="red">200</span></div>
            </div>
          </div>
          <div class="item">
            <div class="img-content">  <img src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
            </div>
            <div class="is-project">
              <div class="name">木鱼</div>
              <div class="project">已预定课程</div>
            </div>
            <div class="left-time">
              <div class="time">客户关系还剩10天</div>
              <div><label > 预计奖励金:</label> <span class="red">200</span></div>
            </div>
          </div>
        </div>
    </div>

    <cui-attr-picker ref="attrPicker"
                     @confirm="attrChange"
                     :listArr="listArr"> </cui-attr-picker>
   <!-- <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible" class="align-text">
    </mt-actionsheet>-->
  </div>
</template>
<style lang="scss">
  @import "../styles/style";
  .myPromotion{

  }
  .myPromotion .select-project{
    background: #fff;
    padding: 10px 20px;
    position: relative;
    height: 60px;
    line-height: 60px;
    font-size: $fontSize16;/*no*/
    border-bottom: 1px solid $grayColor;/*no*/
  }
  .myPromotion .select-project:after{
    content:"▼";
    width: 20px;
    height: 20px;
    left: 160px;
    top:5px;
    position: absolute;
    color: $grayColor ;
  }
  .myPromotion .list-item{
    box-sizing: border-box;
    overflow: scroll;
  }
  .myPromotion .list-item .item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-size: $fontSize13;/*no*/
    margin-bottom:20px;
    background: #fff;
    padding: 20px ;
  }

  .myPromotion .list-item .item .img-content{
      width: 180px;
      height: 200px;
      margin-right: 20px;
    }
  .myPromotion .list-item  .item .img-content img{
      width: 200px;
      height: 200px;
    }
  .myPromotion .list-item .item .is-project{
    margin: 40px 0;
    height: 140px;
    flex: 1px;
    text-align: left;
    padding-left:15px;
  }

  .myPromotion .list-item .item .left-time{
    margin: 50px 0;
    height: 140px;
    width: 305px;
    text-align: right;
  }
  .myPromotion .list-item .item .is-project div,
  .myPromotion .list-item .item .left-time div{
    padding-bottom: 20px;
  }
  .myPromotion .red{
    color: $redColor;
  }
  .myPromotion .time{
    color: #FFCC33;
  }
  .myPromotion .project{
    font-size: $fontSize13;/*no*/
  }
  .myPromotion .name{
    font-size: $fontSize16;/*no*/
  }
  .myPromotion .mint-actionsheet-listitem{
    text-align: center;
  }
</style>
<script>
export  default ({
  data:function () {
    return {
      listHeight:0,
      sheetVisible:false,
      result:'全部',
      listArr:[
        {'name':'全部','code':'0'},
        {'name':' 部分','code':'1'}
      ]
    }
  },
  methods:{
    backPage(){
      this.$router.push({"path":'/'})
    },
    openActionsheet() {
      this.$refs.attrPicker.open();
      this.sheetVisible=true;
    },
    attrChange(attr, attrCode) {//状态
      console.log(attr,attrCode);
      this.result = attr;

    },
    selectedOptions:function () {
      console.log("-----")
    }
  },
  activated(){
    this.listHeight =  document.body.clientHeight - 90 * window.dpr;
  }
})
</script>
