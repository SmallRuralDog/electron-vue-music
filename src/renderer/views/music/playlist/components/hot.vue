<template>
    <div class="playlist-hot">
        <div class="title">
            <span>热门分类</span>
        </div>
        <div class="class-list mt-5 mb-5">
            <div class="class-item hover-bg" v-for="(item,index) in tags" :key="index">{{item.name}}</div>
            <div class="class-item hover-bg">全部分类</div>
        </div>
        <div class="title">
            <span>精选歌单</span>
        </div>
        <el-row :gutter="15" class="mt-10">
            <el-col :span="20" v-for="(item,index) in playlists" :key="index">
                <hot-item :item="item" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { getPlaylistHot, getTopPlaylistHighquality } from "../../../../api";
    import HotItem from './hot-item'

    export default {
        components: {
            HotItem
        },
        data() {
            return {
                tags: [],
                playlists: []
            }
        },
        mounted() {
            this.getTags()
            this.getList()
        },
        methods: {
            getTags() {
                getPlaylistHot().then(res => {
                    this.tags = res.tags
                })
            },
            getList() {
                getTopPlaylistHighquality('全部',246).then(res => {
                    this.playlists = res.playlists
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .playlist-hot {
        padding: 20px 30px;
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
    }
</style>
