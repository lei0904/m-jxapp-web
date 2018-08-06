<template>
    <div class="incomeDetail">
        <Header :text="'收支明细'" :handle="false"  @back="backPage"></Header>
        <div class="detail-content">
            <div class="item income-money">
                <label class="income-lable">支出金额</label>
                <div class="red">1000.00</div>
            </div>
            <div class="item">
                <div>类型</div>
                <div>提现</div>
            </div>
            <div class="item">
                <div>时间</div>
                <div>18-07-08 13:18</div>
            </div>
            <div class="item">
                <div>流水号</div>
                <div>1111288383838</div>
            </div>
            <div class="item">
                <div>订单号</div>
                <div>E2231111288383838</div>
            </div>
            <div class="item">
                <div>支付渠道</div>
                <div>微信支付</div>
            </div>
            <div class="item">
                <div>余额</div>
                <div>0.00</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .incomeDetail .detail-content{
        background: #fff;
        padding: 30px;
        font-size: $fontSize16;/*no*/
    }
    .incomeDetail .item{
        display: flex;
        flex: 1;
        height: 60px;
        line-height: 60px;
        color: #2a3542;
        padding-bottom: 10px;
        justify-content: space-between;
    }
    .incomeDetail .income-money{
        font-size: 20px;/*no*/
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid $grayColor;/*no*/
        margin-bottom: 40px;
    }
    .incomeDetail .red{
        color: $redColor;
    }
</style>
<script>
    export default ({
        data:function () {
            return {}
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/income'})
            }
        }
    })

</script>