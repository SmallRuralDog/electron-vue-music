<template>
    <div>
        <div class="class-list">
            <div class="class-item hover-bg" :class="{'active':index==activeIndex}" v-for="(item,index) in tags" :key="index" @click="catClick(item.id,index)">{{item.name}}</div>
        </div>
        <div class="singer-list" >
            <singer-item v-for="(item,index) in singers" :key="index" :item="item"/>
        </div>
    </div>

</template>
<script>
import SingerItem from './singer-item.vue'
import { singerlist } from "../../../../api";
export default {
    components:{
        SingerItem,
    },
    props:{
        // cat:Number,
        // page:Number,
    },
    data(){
        return{
            tags:[
                {name:"全部歌手",id:"0"},
                {name:"入驻歌手",id:"5001"},
                {name:"华语男歌手",id:" 1001"},
                {name:"华语女歌手",id:" 1002"},
                {name:"华语组合/乐队",id:" 1003"},
                {name:"欧美男歌手",id:" 2001"},
                {name:"欧美女歌手",id:" 2002"},
                {name:"欧美组合/乐队",id:" 2003"},
                {name:"日本男歌手",id:" 6001"},
                {name:"日本女歌手",id:" 6002"},
                {name:"日本组合/乐队",id:" 6003"},
                {name:"韩国男歌手",id:" 7001"},
                {name:"韩国女歌手",id:" 7002"},
                {name:"韩国组合/乐队",id:" 7003"},
                {name:"其他男歌手",id:" 4001"},
                {name:"其他女歌手",id:" 4002"},
                {name:"其他组合/乐队",id:" 4003"},
            ],
            singers:[],
            page:0,
            cat:0,
            activeIndex:0,
        }
    },
    mounted(){
        this.getSingerlist();
    },
    methods:{
        getSingerlist(){
            singerlist(this.cat,this.page).then(res=>{
                console.log('---singerlist ',this.page,res);
                this.singers=res.artists;
                this.page++;
            })
        },
        catClick(id,activeCat){
            console.log('--cat ',id)
            this.cat=id
            this.activeIndex=activeCat
            // this.$emit('newCat')
            this.getSingerlist()
        },
    },
    watch:{
        cat(nv,ov){
            if(nv!=ov){
                this.page=0
            }

        }
    },
}
</script>
<style lang="scss" scoped>
    .singer-list{
        padding:0 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }

    .class-list {
        display: flex;
        padding: 15px 20px;
        flex-wrap: wrap;
        /*justify-content: space-between;*/
        /*.class-item:first-child {*/
        /*margin-left: 0;*/
        /*}*/
        .class-item {
            width:88px;
            /*flex: 1;*/
            /*flex-shrink: 0;*/
            background-color: white;
            margin-left: 5px;
            text-align: center;
            font-size: 12px;
            color: #555;
            line-height: 30px;
            cursor: pointer;
            margin-bottom: 15px;
            margin-right: 10px;
        }
        .class-item:hover {
            background-color: #eeeeee;

        }
        .class-item.active{
            color:#31C27C

        }
    }

</style>