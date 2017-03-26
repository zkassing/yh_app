<template>
    <div class="type">
        <router-view></router-view>
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
    
</style>