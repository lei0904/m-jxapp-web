<template>
    <div class="new-address">
        <Header :text="'新建地址'" :handle="true"   @back="backPage"></Header>
        <div class="content">
            <mt-cell title="所在城市" class="mint-field" >
                <input class="city" placeholder="请选择所在城市" v-model="address" @click="changeCity" readonly />
            </mt-cell>
            <mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="4" v-model="detail"></mt-field>
        </div>
        <div class="btn-content">
            <mt-button size="large" type="primary" @click.native="saveAddress">保存</mt-button>
        </div>

        <cui-address-child
                ref="addressPicker"
                @getLinkAddress='handleChange'
                v-show="showAddress"></cui-address-child>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
    .new-address input{
        width: 100%;
    }
    .new-address .btn-content{
        margin: 20px 40px;
    }
    .new-address .city{
        font-size:$fontSize16 ;/*no*/
    }
</style>
<script>
    export default ({
        data:function(){
            return {
                showAddress:false,
                address:'',
                detail:''
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/myAddress'})
            },
            changeCity:function () {
                this.showAddress = true;
            },
            handleChange: function (picker) {
                //this.$refs.picker1.open();
                console.log('picker------',picker)
/*
                if(picker.area.name && picker.area.name !== "市辖区"){
                    this.formData.city= picker.province.name +"-"+picker.city.name+"-"+picker.area.name
                }else if(picker.city.name && picker.city.name !== "市辖区" && picker.city.name !== "县"){
                    this.formData.city= picker.province.name +"-"+picker.city.name
                }else{
                    this.formData.city= picker.province.name
                }*/

                this.showAddress = false;
                this.address = picker.province.name +"-"+picker.city.name+"-"+picker.area.name
                //this.code=picker.code;
            },
            saveAddress:function () {
                console.log("保存地址")
            }
        }
    })
</script>