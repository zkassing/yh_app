<template>
    <div class="type">
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <v-menu></v-menu>
    </div>
</template>
<script>
    import menu from "../menu/menu"
    export default{
        data(){
            return{

            }
        },
        components:{
            "v-menu":menu
        }
    }
</script>
<style lang="">
    .fade-enter-active{
        transition: all .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: scale(.8);
    }
</style>