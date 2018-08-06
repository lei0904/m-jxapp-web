<template>
    <div class="deposit-detail">
        <Header :text="'提现详情'" :handle="false"    @back="backPage"></Header>

        <div class="detail-content">
            <div class="item income-money">
                <label class="income-lable">实收金额</label>
                <div class="red">1000.00</div>
            </div>
            <div class="item">
                <div>提现金额</div>
                <div>¥1,000.00</div>
            </div>
            <div class="item">
                <div>手续费</div>
                <div>¥10.00</div>
            </div>
            <div class="item">
                <div>费率</div>
                <div>10%</div>
            </div>
            <div class="item">
                <div>流水号</div>
                <div>E2231111288383838</div>
            </div>
            <div class="item">
                <div>申请时间</div>
                <div>2018-08-01 16:50</div>
            </div>
            <div class="item">
                <div>申请人</div>
                <div>18956055466</div>
            </div>
            <div class="item">
                <div>手机号</div>
                <div>18956055466</div>
            </div>
            <div class="item">
                <div>收款账户</div>
                <div>xin001</div>
            </div>
            <div class="item">
                <div>提现状态</div>
                <div>提现成功</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";

    .deposit-detail .detail-content{
        background: #fff;
        padding: 30px;
        font-size: $fontSize16;/*no*/
    }
    .deposit-detail .item{
        display: flex;
        flex: 1;
        height: 60px;
        line-height: 60px;
        color: #2a3542;
        padding-bottom: 10px;
        justify-content: space-between;
    }
    .deposit-detail .income-money{
        font-size: 20px;/*no*/
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid $grayColor;/*no*/
        margin-bottom: 40px;
    }
    .deposit-detail .red{
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
                this.$router.push({'path':'/depositList'})
            }
        }
    })
</script>