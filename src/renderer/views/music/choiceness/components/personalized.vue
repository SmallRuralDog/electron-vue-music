<template>
    <div class="personalized">
        <div class="title">为你推荐歌单</div>
        <div class="class-list mt-5">
            <div class="class-item hover-bg" v-for="item in class_list" :key="item">{{item}}</div>
        </div>
        <el-row :gutter="15" class="mt-10">
            <el-col :span="20" v-for="(item,index) in personalized" :key="index">
                <personalized-item :item="item"  />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { personalized } from "../../../../api";
    import PersonalizedItem from './personalized-item'

    export default {
        components: {
            PersonalizedItem
        },
        data() {
            return {
                personalized: [],
                class_list: [
                    '情歌',
                    '网络歌曲',
                    '经典',
                    'KTV热歌',
                    '背景音乐',
                    '伤感',
                    '英语',
                    '国语',
                    '全部分类',
                ]
            }
        },
        mounted() {
            this.getPersonalized()
        },
        methods: {
            getPersonalized() {
                personalized().then(res => {
                    this.personalized = res.result
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .personalized {
        padding: 0 40px;
        .title {
            font-size: 18px;
            letter-spacing: 5px;
        }
        .class-list {
            display: flex;
            padding: 15px 0;
            .class-item:first-child {
                margin-left: 0;
            }
            .class-item {
                flex: 1;
                flex-shrink: 0;
                background-color: white;
                margin-left: 5px;
                text-align: center;
                font-size: 12px;
                color: #555;
                line-height: 30px;
                cursor: pointer;
            }
            .class-item:hover {
                background-color: #eeeeee;

            }
        }
        .personalized-list{
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
