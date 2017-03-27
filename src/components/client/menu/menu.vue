<template>
    <nav>
        <router-link to="/skill" active-class="active">
            <i class="icon1"></i>
            <span>技巧</span>
        </router-link>
        <router-link to="/works" active-class="active">
            <i class="icon2"></i>
            <span>作品</span>
        </router-link>
        <router-link to="/case" active-class="active">
            <i class="icon3"></i>    
            <span>案例</span>            
        </router-link>        
    </nav>
</template>
<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        padding: 0 12px;
        justify-content: space-between;
        box-sizing: border-box;
        height: 48px;
        background: #fff;
    }
    nav a{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #a0a0a0;
        padding: 4px 0;
        text-decoration: none;
        flex: 1;
        align-items: center;
        font-size: 12px;
    }
    .icon1{
        display: block;
        width: 23px;
        height: 23px;
        background: url(/static/img/menu/icon1.png) no-repeat center / 23px 23px;
    }
    .icon2{
        display: block;
        width: 23px;
        height: 23px;
        background: url(/static/img/menu/icon2.png) no-repeat center / 23px 23px;
    }
    .icon3{
        display: block;
        width: 23px;
        height: 23px;
        background: url(/static/img/menu/icon3.png) no-repeat center / 23px 23px;
    }
    .active .icon1{
        background-image:url(/static/img/menu/icon1_active.png);
    }
    .active .icon2{
        background-image:url(/static/img/menu/icon2_active.png);
    }
    .active .icon3{
        background-image:url(/static/img/menu/icon3_active.png);
    }
    .active{
        color: #7bb0fe;
    }
</style>