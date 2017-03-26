<template>
    <ul class="list">
        <v-item v-for="item in subject" :content="item" key="item"></v-item>
    </ul>
</template>
<script>
import item from "../item/item"
export default {
    data(){
        return{
            subject:[]
        }
    },
    created(){
        this.$http.get('/getSubject',{params:{subject:"UI"}})
        .then((response)=>{
            this.subject = response.body.result;
        })
    },
    components:{
        "v-item":item
    }
}

    
</script>
<style lang="">
    .list{
        list-style: none;
        padding: 12px;
        margin: 0;
    }
</style>