<template>
    <div class="personal-center">
        <Header :text="'个人中心'" :handle="true"   @back="backPage"></Header>
        <div class="content">
            <mt-cell title="姓名" value="张的好"></mt-cell>
            <mt-cell title="性别" value="男"></mt-cell>
            <mt-cell title="手机号码" value="13908909878"></mt-cell>
            <mt-cell title="城市" value="安徽省合肥市包河区"></mt-cell>
            <mt-cell title="我的预约"  to="/myOrder" is-link></mt-cell>
            <mt-cell title="我的课时" to="/myClass" is-link></mt-cell>
            <mt-cell title="我的地址" to="/myAddress" is-link></mt-cell>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
</style>
<script>
    export default ({
        data:function(){
            return {
            }
        },
        methods:{
            backPage:function () {
                this.$router.push({'path':'/'})
            }
        }
    })
</script>