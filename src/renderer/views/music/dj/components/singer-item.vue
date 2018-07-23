<template>
    <div class="singer-item">
        <img :src="item.img1v1Url"/>
        <div class="name">{{item.name}}</div>
    </div>

</template>
<script>

    export default {
        props:{
            item:Object,
        },
        data(){
            return{

            }
        },
        methods:{

        },


    }
</script>
<style lang="scss" scoped>
    .singer-item{
        width: 170px;
        height: 160px;
        margin-bottom: 18px;
        background: #F0F0F0;
        box-sizing: border-box;
        padding: 5px;
        font-size: 14px;
        text-align: center;
        border-radius: 2px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        img{
            width: 110px;
            height: 110px;
            border-radius: 50%;


        }
        .name{
            margin-top:5px;
        }
    }
</style>