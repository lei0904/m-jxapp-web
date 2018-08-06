<template>
    <div class="register">
        <Header :text="'注册'" :handle="false"  @back="backPage"></Header>
        <div>
            <mt-field label="姓名" placeholder="请输入姓名" v-model="formData.username"></mt-field>
            <mt-cell title="性别" class="mint-field">
                <label for="man" class="mint-radiolist-label check-sex">
                    <input name="sex" id="man" type="radio" class="mint-radio-input" checked="checked"/>
                    <span class="mint-radio-core"></span>
                    <span class="mint-radio-label">男</span>
                </label>
                <label for="women" class="mint-radiolist-label">
                    <input name="sex" id="women" type="radio" class="mint-radio-input"/>
                    <span class="mint-radio-core"></span>
                    <span class="mint-radio-label">女</span>
                </label>
            </mt-cell>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="formData.phone"></mt-field>
            <mt-cell title="所在城市" class="mint-field" >
                <input class="city" placeholder="请选择城市" v-model="formData.city" @click="changeCity" readonly />
            </mt-cell>
            <mt-field label="验证码" v-model="formData.captcha"  placeholder="请输入验证码">
                <mt-button type="primary" size="small">验证码</mt-button>
        </mt-field>

        </div>
        <div class="btn-wrap">
            <mt-button type="primary" size="large">提交</mt-button>
        </div>

        <cui-address-child
                ref="addressPicker"
                @getLinkAddress='handleChange'
                v-show="showAddress"></cui-address-child>
    </div>
</template>
<style lang="scss">
@import "../styles/style";
    .register .mint-cell-value .check-sex{
        margin-right: 40px;
    }
    .register .btn-wrap{
        margin: 40px;
    }
    .register .mint-radiolist-label{
        padding: 0;
    }
    .register .city{
        font-size:$fontSize16 ;/*no*/
      /*  width: 100%;*/
    }
</style>
<script>
    export  default ({
        data:function () {
            return {
                showAddress:false,
                formData:{
                    username:'',
                    sex:'男',
                    phone:'',
                    captcha:'',
                    city:''
                }
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/'})
            },
            changeCity:function () {
                this.showAddress = true;
            },

            handleChange: function (picker) {
                //this.$refs.picker1.open();
                console.log('picker------',picker)

                if(picker.area.name && picker.area.name !== "市辖区"){
                    this.formData.city= picker.province.name +"-"+picker.city.name+"-"+picker.area.name
                }else if(picker.city.name && picker.city.name !== "市辖区" && picker.city.name !== "县"){
                    this.formData.city= picker.province.name +"-"+picker.city.name
                }else{
                    this.formData.city= picker.province.name
                }

                this.showAddress = false;
                //this.code=picker.code;
            }
        }
    })
</script>