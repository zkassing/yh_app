<template>
    <ul class="works" v-if="works"> 
        <v-item v-for="(item,index) in works" :content="item" key="item" :class="changeCol(index,works.length)"></v-item>
    </ul>
</template>
<script>
    import item from "../item/item"
    export default{
        data(){
            return{
                works:[],
                col:1
            }
        },
        created(){
            this.$http.get('/getType',{params:{type:"works"}}).then((response)=>{
                this.works = response.body.result;
            })
        },
        methods:{
            changeCol:function(i,l){
                // return i%3?"42":"false"
                if(i%3){
                    if(i == l-1){
                        return "col-1"
                    }
                    return i%3?"col-2":"col-1"
                }
            }
        },
        components:{
            "v-item":item
        }
    }
    
</script>
<style lang="">
    .works{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        padding: 12px 12px 0;
        justify-content: space-between;
    }
    .works li{
        margin-bottom: 8px;
    }
</style>