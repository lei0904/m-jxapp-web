<template>
    <div class="income">
        <Header :text="'收支列表'" :handle="false"    @back="backPage"></Header>
        <div class="list-content" :style="{ height: listHeight + 'px' }">
                <div class="list-item" @click="toDetail">
                    <div class="title">
                        <div class="income-type">推广收入</div>
                        <div class="tips">18-07-13 22:59</div>
                    </div>
                    <div class="info">
                        <div class="money-type green-color">+100</div>
                        <div class="transfer-type">平台转账</div>
                    </div>
                </div>
            <div class="list-item">
                <div class="title">
                    <div class="income-type">推广收入</div>
                    <div class="tips">18-07-13 22:59</div>
                </div>
                <div class="info">
                    <div class="money-type green-color">+100</div>
                    <div class="transfer-type">平台转账</div>
                </div>
            </div>
            <div class="list-item">
                <div class="title">
                    <div class="income-type">提现</div>
                    <div class="tips">18-07-13 22:59</div>
                </div>
                <div class="info">
                    <div class="money-type red-color">-100</div>
                    <div class="transfer-type">微信红包</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";

    .income .list-item{
        display: inline-flex;
        justify-content: space-between;
        flex: 1;
        background: #fff;
        padding: 30px 0;
        margin: 10px 0;
        width: 100%;
    }
    .income .list-item:active{
        background: rgba(255,255,255,.7);
    }
    .income .list-item .title{
        padding-left: 40px;
    }
    .income .list-item .title .income-type{
        font-size: $fontSize16;/*no*/
        height: 50px;
    }
    .income .list-item .title .tips{
        color: $grayColor;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        font-size: $fontSize13;/*no*/
    }
    .income .list-item .info{
        padding-right: 40px;
    }
    .income .list-item .info .money-type{
        height: 50px;
        font-size: 22px;/*no*/
    }
    .income .list-item .info .green-color{
        color: $greenColor;
    }
    .income .list-item .info .red-color{
        color: $redColor;
    }
    .income .list-item .info .transfer-type{
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        color: $grayColor;
        font-size: 13px;/*no*/
    }
</style>
<script>
    export default ({
        data:function () {
            return {
                listHeight:0,
                listArry:[]
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/myCommission'})
            },
            toDetail:function () {
                this.$router.push({path:'/incomeDetail'})
            }
        },
        activated:function () {
            this.listHeight = document.body.clientHeight - 90 * window.dpr;
        }
    })
</script>