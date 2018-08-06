<template>
    <div class="deposit">
        <Header :text="'提现'" :handle="true"   @back="backPage"></Header>
        <div class="content">
            <div>提现金额</div>
            <div class="money"><label for="money">¥</label><input name="money" v-model="depositMoney" type="text"></div>
            <div class="all-money">
                <div>可提现金额 <span >{{money}}</span> 元</div>
                <div class="blue" @click="allMoney">全部提现</div>
            </div>
        </div>
        <div class="btn-content">
            <mt-button type="primary" size="large" @click.native="deposit">提现</mt-button>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .deposit{

    }
    .deposit .content{
        background: #fff;
        font-size: $fontSize16;/*no*/
        padding: 40px;
        margin-bottom: 40px;
    }
    .deposit .content .money{
        height: 100px;
        line-height: 100px;
        padding: 40px 0 0;
        border-bottom: 1px solid $grayColor;/*no*/
    }
    .deposit .content .money input{
        width: 88%;
    }
    .deposit .content .money input,
    .deposit .content .money label{
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        font-size: $fontSize20;/*no*/
    }
    .deposit .content .all-money{
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
    }
    .deposit .content .blue{
        color: $blueColor;
    }


</style>
<script>
    export default ({
        data:function () {
            return {
                depositMoney:0,
                money:'1000,00'
            }
        },
        methods:{
            backPage:function(){
                this.$router.push({'path':'/myCommission'})
            },
            allMoney:function () {
                this.depositMoney = this.money
            },
            deposit:function () {

            }
        },
        activated:function () {
            this.depositMoney=0;
        }
    })
</script>