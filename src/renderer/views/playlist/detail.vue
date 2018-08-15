<template>
    <el-scrollbar class="playlist-detail scroll-page" v-loading="loading">
        <template v-if="playlist && show">
            <div class="top">
                <div class="cover">
                    <img :src="playlist.coverImgUrl"/>
                </div>
                <div class="info">
                    <div class="title">{{playlist.name}}</div>
                    <div class="author">
                        <img :src="playlist.creator.avatarUrl"/>
                        <span>{{playlist.creator.nickname}}</span>
                    </div>
                    <div class="desc line-1">{{playlist.description}}</div>
                    <div class="actions">
                        <el-button @click="playAll" size="mini" type="primary" icon="iconfont icon-bofangsanjiaoxing">播放全部</el-button>
                        <el-button size="mini" icon="iconfont icon-shoucang">收藏</el-button>
                        <el-button size="mini" icon="iconfont icon-xiazai2">下载</el-button>
                        <el-button size="mini" icon="iconfont icon-piliangcaozuo">批量操作</el-button>
                        <el-button size="mini" icon="iconfont icon-20">分享</el-button>
                    </div>
                </div>
            </div>
            <div class="tracks">
                <div class=""></div>
                <div class="list">
                    <el-table size="small" :data="playlist.tracks">
                        <el-table-column label="歌曲">
                            <template slot-scope="scope">
                                <div class="name-row">
                                    <div class="left">
                                        <i @click="likeMusic(scope.row)" class="shoucang iconfont icon-shoucang"></i>
                                        <span>{{scope.row.name}}</span>
                                        <img class="tag" src="../../assets/images/sq.png"/>
                                        <img v-if="scope.row.mv>0" class="tag" src="../../assets/images/mv.png"/>
                                    </div>
                                    <div class="btns">
                                        <i class="iconfont icon-zanting play" @click="play(scope.row)"></i>
                                        <i class="iconfont icon-gengduo more"></i>
                                    </div>
                                </div>

                            </template>
                        </el-table-column>
                        <el-table-column width="200" label="歌手" prop="ar[0].name">
                            <template slot-scope="scope">
                                <span style="width: 140px;" class="line-1 hover">{{scope.row.ar[0].name}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column width="200" label="专辑" prop="al.name">
                            <template slot-scope="scope">
                                <span style="width: 190px;" class="line-1 hover">{{scope.row.al.name}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column width="60" label="时长" prop="dt">
                            <template slot-scope="scope">
                                <span>{{scope.row.dt|formatDuring}}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </template>

    </el-scrollbar>
</template>

<script>
    import {getPlaylistDetail, like} from "../../api";

    export default {
        data() {
            return {
                id: '',
                loading: true,
                show: false,
                playlist: false
            }
        },
        mounted() {
            this.$bus.$on('page-refresh', name => {
                if (name === 'playlist-detail') {
                    this.getData()
                }
            });
        },
        activated() {
            let id = this.$route.query.id;
            if (id !== this.id) {
                this.id = id;
                this.getData()
            } else {
                this.show = true
            }
        },
        deactivated() {
            this.show = false
        },
        methods: {
            getData() {
                this.loading = true
                getPlaylistDetail(this.id).then(res => {
                    this.playlist = res.playlist;
                    this.show = true
                    this.loading = false
                })
            },
            likeMusic(item) {
                like(item.id).then(res => {

                })
            },
            play(item) {
                //console.log(item.id)
                this.$store.dispatch('playMusic',item.id);
                this.$store.commit('SET_PLAYER_LIST', this.playlist.tracks);
            },
            playAll(){
                this.$store.dispatch('playPlaylist',this.playlist.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .playlist-detail {
        background: #f0f0f0;
        flex: 1;
        .top {
            padding: 25px 30px;
            display: flex;
            .cover {
                width: 147px;
                height: 147px;
                position: relative;
                flex-shrink: 0;
                img {
                    width: 147px;
                    height: 147px;
                }
            }
            .info {
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title {
                    font-size: 22px;
                    color: #000;
                    font-weight: bold;
                }
                .author {
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    color: #555;
                    img {
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
                .desc {
                    font-size: 13px;
                    color: #555;
                    line-height: 20px;
                }
                /deep/ .actions {
                    button {
                        min-width: 90px;
                        i {
                            font-size: 13px;
                            margin-right: 3px;
                        }
                    }
                }
            }
        }
        /deep/ .tracks {
            background: #fafafa;
            padding: 0 30px;
            .list {
                .el-table {
                    background: none;
                    th {
                        background: none;
                    }
                    tr {
                        background: none;
                    }
                    tr:hover {
                        .btns {
                            .iconfont {
                                display: block;
                            }
                            .iconfont:hover {
                                color: #31c27c;
                            }
                        }
                    }
                }
                .name-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .left {
                        .shoucang {
                            font-size: 15px;
                            margin-right: 5px;
                            cursor: pointer;
                        }
                        .shoucang:hover {
                            color: #31c27c;
                        }
                        .tag {
                            height: 20px;
                            margin-left: 5px;
                            margin-top: -2px;
                            cursor: pointer;
                        }
                    }
                    .btns {
                        display: flex;
                        align-items: center;
                        .iconfont {
                            font-size: 20px;
                            cursor: pointer;
                            margin-left: 10px;
                            color: #999;
                            display: none;
                        }
                    }

                }
            }
        }
    }

    .scroll-page {
        overflow: hidden;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
</style>
