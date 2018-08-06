<template>
   <div class="my-commission">
       <Header :text="'我的佣金'" :handle="true"   @back="backPage"></Header>
           <div class="content">
               <div class="tx-content">
                   <div>
                       <img src="../assets/img/icon-tx.png" />
                   </div>
               </div>
               <div class="residue-money">
                   <div>可提现金</div>
                   <div class="money"><span>¥ </span><span>200.00</span></div>
               </div>
               <div class="tx-btn-content">
                   <mt-button type="primary" size="large" @click.native="toDeposit">提现</mt-button>
               </div>

           </div>
       <div class="list">
           <mt-cell title="收支记录" to="/income" is-link>
               <span style="color: green"></span>
           </mt-cell>
           <mt-cell title="提现记录" to="/depositList" is-link>
           <span style="color: green"></span>
       </mt-cell>
       </div>
   </div>
</template>
<style lang="scss">
    @import "../styles/style";

    .my-commission .content{
        background: #fff;
        padding:40px 20px 10px ;
        border-bottom: 1px solid #ccc;/*no*/
    }
    .my-commission .list{
        margin-top: 40px;
    }
    .my-commission .tx-content{
        display: flex;
        justify-content: center;
    }

    .my-commission .tx-content div{
        width: 100px;
        height: 101px;
    }

    .my-commission .tx-content img{
        width: 100% ;
        height: 100%;
    }
    .my-commission .residue-money{
        font-size: 18px;/*no*/
        text-align: center;
        display: block;
        padding: 20px;
    }
    .my-commission .residue-money .money{
        padding: 10px;
        color: #ff0000;
    }

    .my-commission .tx-btn-content{
        padding: 40px 20px ;
    }
</style>
<script>
    export default ({
        data:function () {
            return {}
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/'})
            },
            toDeposit:function () {
                this.$router.push({'path':'/deposit'})
            }
        }
    })
</script>