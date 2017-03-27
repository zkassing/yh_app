<template>
    <li>
        <div class="item-heading">
            <i class="menu">{{content.menu}}</i>
            <img :src="content.img" alt="">
        </div>
        <div class="item-body">
            <h4 class="item-title">{{content.title}}</h4>
            <div class="item-control">
                <i class="good" ></i>
                <i class="forward"></i>
            </div>
        </div>
    </li>
</template>
<script>
    export default {
        props:["content"],
        data (){
            return {

            }
        }
    }
</script>
<style lang="">
    .col-1{
        flex: 0 0 100%;
    }
    .col-2{
        flex: 0 0 49%;
    }
    .col-2 .item-title{
        max-width: 75px;
        overflow: hidden;
        text-overflow: ellipsis;
    } 
    .col-2 .item-control{
        width: 60px;
    }
    li{
        box-sizing: border-box;
        padding: 10px 10px 0;
        border-radius: 4px;
        background: #fff;
        position: relative;
        margin-bottom: 8px;
    }
    li .item-heading{
        position: relative;
    }
    li img{
        width: 100%;
        display: block;
        border-radius: 4px 4px 0 0;
    }
    li .item-title{
        font-size: 15px;
        margin: 0;
        font-weight: normal;
    }
    li .menu{
        color: #a332fe;
        display: flex;
        background: #fff;
        border-radius: 9px; 
        height: 19px;
        width: 56px;
        position: absolute;
        top: 9px;
        left: 9px;
        font-style: normal;
        align-items: center;
        justify-content: center;
    }
    li .item-body{
        display: flex;
        justify-content: space-between;
        height: 38px;
        align-items: center;
    }
    .item-control{
        display: flex;
        width: 70px;
        justify-content: space-between;
        align-items: center;
    }
    .item-control i{
        display: block;
        width: 20px;
        height: 20px;
    }
    .item-control .good{
        background: url(/static/img/list/good.png) no-repeat center center / 20px 20px;
    }
    .item-control .forward{
        background: url(/static/img/list/forward.png) no-repeat center center / 20px 20px;
    }
</style>