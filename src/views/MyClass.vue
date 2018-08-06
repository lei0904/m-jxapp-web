<template>
    <div class="my-class">
        <Header :text="'我的课时'" :handle="true"   @back="backPage"></Header>
        <div class="content">
            <div class="select-project"  >
                <div class="subject" @click="openActionsheet"><span>{{result}}</span></div>
            </div>
            <div class="totals">
                <mt-cell title="已用课时" value="10课时"></mt-cell>
            </div>
            <div class="list-wrap" :style="{height:listHeight+'px'}">
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="title">科目二</div>
                        <div class="time">18-07-11 7:00-8:00</div>
                    </div>
                    <div class="right">
                        <div class="subject-time green">1小时</div>
                        <div class="tips">课程学时</div>
                    </div>
                </div>
            </div>
        </div>

        <cui-attr-picker ref="attrPicker"
                         @confirm="attrChange"
                         :listArr="listArr"> </cui-attr-picker>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .my-class .select-project{
        height: 60px;
        line-height: 60px;
        padding: 20px 40px;
        background: #fff;
        font-size: $fontSize16;/*no*/
        position: relative;
    }
    .my-class .subject{
        width: 200px;
    }

    .my-class .select-project span:before{
        content:"▼";
        width: 20px;
        height: 20px;
        left: 160px;
        top:20px;
        position: absolute;
        color: $grayColor ;
    }

    .my-class .list-wrap{
        overflow: scroll;
    }
    .my-class .list-wrap .item{
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding: 20px 40px;
        border-bottom: 1px solid $grayColor;/*no*/
    }
    .my-class .list-wrap .item .title,
    .my-class .list-wrap .item .subject-time{
        font-size: $fontSize20;/*no*/
        height: 40px;

    }
    .my-class .red{
        color: $redColor;
    }
    .my-class .green{
        color: $greenColor;
    }

    .my-class .list-wrap .item .tips,
    .my-class .list-wrap .item .time{
        color: $grayColor;
        font-size: $fontSize13;/*no*/
        padding:20px  0 ;
        height: 20px;
    }
</style>
<script>
    export default ({
        data:function(){
            return {
                result:'全部',
                listHeight:0,
                listArr:[
                    {'name':'全部','code':'0'},
                    {'name':' 科目一','code':'1'},
                    {'name':' 科目二','code':'2'}
                ]
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'personalCenter'})
            },
            openActionsheet() {
                this.$refs.attrPicker.open();
                this.sheetVisible=true;
            },
            attrChange(attr, attrCode) {//状态
                console.log(attr,attrCode);
                this.result = attr;

            },
        },
        activated:function(){
            this.listHeight = document.body.clientHeight - 140 * window.dpr
        }
    })
</script>