<template>
    <div class="deposit-list">
        <Header :text="'提现记录'" :handle="false"    @back="backPage"></Header>

            <div class="list-content" :style="{ height: listHeight + 'px' }">
                <div class="list-item" @click="toDetail">
                    <div class="title">
                        <div class="deposit-list-type">提现成功</div>
                        <div class="tips">18-07-13 22:59</div>
                    </div>
                    <div class="info">
                        <div class="money-type green-color">1,030,000.00</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="title">
                        <div class="deposit-list-type">提现成功</div>
                        <div class="tips">18-07-13 22:59</div>
                    </div>
                    <div class="info">
                        <div class="money-type green-color">2,000,000.00</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="title">
                        <div class="deposit-list-type">提现成功</div>
                        <div class="tips">18-07-13 22:59</div>
                    </div>
                    <div class="info">
                        <div class="money-type green-color">1000.00</div>
                    </div>
                </div>
            </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .deposit-list{

    }
    .deposit-list .list-item{
        display: inline-flex;
        justify-content: space-between;
        flex: 1;
        background: #fff;
        padding: 30px 0;
        margin: 10px 0;
        width: 100%;
    }
    .deposit-list .list-item:active{
        background: rgba(255,255,255,.7);
    }
    .deposit-list .list-item .title{
        padding-left: 40px;
    }
    .deposit-list .list-item .title .deposit-list-type{
        font-size: $fontSize16;/*no*/
        height: 50px;
    }
    .deposit-list .list-item .title .tips{
        color: $grayColor;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        font-size: $fontSize13;/*no*/
    }
    .deposit-list .list-item .info{
        padding-right: 40px;
    }
    .deposit-list .list-item .info .money-type{
        height: 80px;
        line-height: 80px;
        font-size: 22px;/*no*/
    }
    .deposit-list .list-item .info .green-color{
        color: $greenColor;
    }
    .deposit-list .list-item .info .red-color{
        color: $redColor;
    }
    .deposit-list .list-item .info .transfer-type{
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
                listHeight:0
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/myCommission'})
            },
            toDetail:function () {
                this.$router.push({'path':'/depositDetail'})
            }
        },
        activated:function () {
            this.listHeight = document.body.clientHeight - 90 * window.dpr;
        }
    })
</script>