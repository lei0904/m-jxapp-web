<template>
    <div class="my-address">
        <Header :text="'我的地址'" :handle="true"   @back="backPage"></Header>
        <div class="content">
            <div class="list-wrap" :style="{ height: listHeight + 'px' }">
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
                <div class="items">
                    <div class="title">北二环</div>
                    <div class="tips">郎溪路与北二环交口</div>
                </div>
            </div>
            <div class="btn-content">
                <mt-button size="large" type="primary" @click.native="toNewAddress">新建地址</mt-button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .my-address .list-wrap{
        overflow: scroll;
    }
    .my-address .items{
        background: #fff;
        padding: 20px 40px;
        margin: 10px 0;
    }
    .my-address .title{
        font-size: $fontSize16;/*no*/
        height: 40px;
        line-height: 40px;
    }
    .my-address .tips{
        font-size: $fontSize13;/*no*/
        color: $grayColor;
        padding-top: 20px;
        height: 30px;
        line-height: 30px;
    }
    .my-address .btn-content{
        margin: 20px 40px;
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
                this.$router.push({'path':'/personalCenter'})
            },
            toNewAddress:function () {
                this.$router.push({'path':'/myNewAddress'})
            }
        },
        activated:function(){
            this.listHeight = document.body.clientHeight - 120 * window.dpr;
        }
    })
</script>