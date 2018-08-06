<template>
    <div class="my-order">
        <Header :text="'我的预约'" :handle="true"   @back="backPage"></Header>
        <div class="content">
                <div class="list-wrap" :style="{height:listHeight+'px'}">
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="red">待审核</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="red">待审核</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="green">审核通过</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="red">待审核</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="green">审核通过</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="red">待审核</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="green">审核通过</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="red">待审核</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="green">审核通过</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="red">待审核</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="order-title">
                            <div>和平驾校</div>
                            <div class="red">明天 07-19 7:00-8:00</div>
                        </div>
                        <div class="tips">北二环与郎溪路交口西南角</div>
                        <div class="order-infos">
                            <div class="coach-infos">
                                <div>皖A99R67</div>
                                <div>张一</div>
                                <div>18956055466</div>
                            </div>
                            <div class="green">审核通过</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .my-order .list-wrap{
        overflow: scroll;
    }
    .my-order .item{
        background: #fff;
        margin-bottom: 40px;
        padding: 40px;
        font-size: $fontSize15;/*no*/
    }
    .my-order .item .order-title{
        display: flex;
        justify-content: space-between;
        font-size: $fontSize20;/*no*/
        padding: 10px 0;
    }
    .my-order .red{
        color: $redColor;
    }
    .my-order .green{
        color: $greenColor;
    }
    .my-order .item .tips{
        color: $grayColor;
        padding: 10px 0;
        font-size: $fontSize13;/*no*/
    }
    .my-order .item .order-infos{
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    }
    .my-order .item .order-infos .coach-infos{
        display: flex;
        justify-content: space-around;
        font-size: $fontSize13;/*no*/
        color: $grayColor;
    }

    .my-order .item .order-infos .coach-infos div{
        padding:0 20px;
        border-right: 1px solid $grayColor;/*no*/
    }
    .my-order .item .order-infos .coach-infos div:last-child{
        border-right: 0;
    }
    .my-order .item .order-infos .coach-infos div:first-child{
        padding-left:0;
    }
</style>
<script>
    export default ({
        data:function(){
            return {
                listHeight:0
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'personalCenter'})
            }
        },
        activated:function () {
            this.listHeight = document.body.clientHeight - 40 * window.dpr;
        }
    })
</script>