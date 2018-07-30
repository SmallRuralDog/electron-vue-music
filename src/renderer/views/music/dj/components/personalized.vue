<template>
    <div class="personalized">

        <div class="class-list mt-5">
            <div class="class-item hover-bg" :class="{'active':actindex==0}" @click="catClick(0,'热门')">热门</div>
            <div class="class-item hover-bg" v-for="(item,index) in cat" :key="index" @click="catClick(item.id,item.name)">{{item.name}}</div>
        </div>
        <div class="title">{{catname}}</div>
        <el-row :gutter="15" class="mt-10">
            <el-col :span="20" v-for="(item,index) in personalized" :key="index">
                <personalized-item :item="item"  />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { djlist,djcat } from "../../../../api";
    import PersonalizedItem from './personalized-item'

    export default {
        components: {
            PersonalizedItem
        },
        data() {
            return {
                personalized: [],
                // class_list: [
                //     '情歌',
                //     '网络歌曲',
                //     '经典',
                //     'KTV热歌',
                //     '背景音乐',
                //     '伤感',
                //     '英语',
                //     '国语',
                //     '全部分类',
                // ],
                cat:[],
                actindex:0,
                catid:0,
                catname:'热门',
            }
        },
        mounted() {
            this.getDjlist(this.catid);
            this.getDjcat();
        },
        methods: {
            getDjlist(catid) {
                djlist(catid).then(res => {
                    this.personalized = res.djRadios
                })
            },
            getDjcat(){
                djcat().then(res=>{
                    this.cat=res.categories
                })
            },
            catClick(id,catname){
                this.catid=id
                this.catname=catname

            },
        },
        watch:{
            catid(nv,ov){
                console.log(nv,ov)
                if(nv!=ov){
                    this.getDjlist(nv)
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    $ww:910px;
    .personalized {
        padding: 0 30px;
        .title {
            font-size: 18px;
            letter-spacing: 5px;
        }
        .class-list {
            display: flex;
            padding: 15px 0;
            flex-wrap: wrap;
            /*justify-content: space-around;*/

            .class-item:first-child {
                /*margin-left: 0;*/
            }
            .class-item {
                /*flex: 1;*/
                /*flex-shrink: 0;*/
                background-color: white;
                text-align: center;
                font-size: 12px;
                color: #555;
                /*margin-left: 8px;*/
                line-height: 30px;
                box-sizing: border-box;
                cursor: pointer;
                width: $ww/13;
                margin: 0 5px;
                margin-bottom: 8px;

            }
            .class-item:first-child{
                /*margin-left: 0;*/
            }
            .class-item:nth-child(12){
                //margin-left: 0;
            }
            .class-item:hover {
                background-color: #eeeeee;

            }
            .class-item.active {
                color: #31c27c;

            }
        }
        .personalized-list{
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
