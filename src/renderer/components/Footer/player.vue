<template>
    <div class="player">
        <div class="control">
            <el-button type="text" @click="playBefore" :disabled="!before_song">
                <i class="iconfont icon-kuaitui"></i>
            </el-button>
            <el-button class="play-btn" type="text" @click="playClick">
                <i class="iconfont icon-zanting" v-if="!is_play"></i>
                <i class="iconfont icon-bofang" v-else></i>
            </el-button>
            <el-button type="text" @click="playAfter" :disabled="!after_song">
                <i class="iconfont icon-kuaijin"></i>
            </el-button>
        </div>
        <div class="cover">
            <img class="cover-image" :src="cover"/>
            <audio v-show="false" ref="audio" v-if="play_url" :src="play_url.url" preload/>
        </div>
        <div class="tone">
            <el-dropdown trigger="click" placement="top">
                <span class="tone-dropdown">标准<i class="el-icon-arrow-up el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown" style="width: 220px">
                    <el-dropdown-item>
                        <div class="flex-c-l">
                            <div class="check" style="width: 30px">
                                <i class="el-icon-check" style="color: #31c27c;"></i>
                            </div>
                            <span>标准品质</span>
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div class="flex-c-l">
                            <div class="check" style="width: 30px"></div>
                            <span>HQ高品质</span>
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div class="flex-c-l">
                            <div class="check" style="width: 30px"></div>
                            <span>SQ无损品质</span>
                            <img src="../../assets/images/svip.png" style="margin-left: 5px; width: 22px"/>
                            <img src="../../assets/images/sui.png" style="margin-left: 5px; width: 22px"/>
                        </div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="mt-10" trigger="click" placement="top" size="medium">
                <span class="tone-dropdown">音效<i class="el-icon-arrow-up el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown" style="width: 200px">
                    <el-dropdown-item>关闭</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="info">
            <div class="top">
                <div class="names">
                    <div>
                        <span class="name">{{name}}</span>
                        <span class="ar_name" v-if="ar_name"> - {{ar_name}}</span>
                    </div>
                </div>
                <div class="time">{{play_time*1000|formatDuring}} / {{song.dt|formatDuring}}</div>
            </div>
            <div class="progress">
                <el-slider :show-tooltipss="true" v-model="play_time" input-size="mini" :min="0" :max="song.dt/1000"
                           @change="playTimeChange"></el-slider>
            </div>
        </div>
        <div class="actions">
            <el-button type="text">
                <i class="iconfont icon-xiai"></i>
            </el-button>
            <el-button type="text">
                <i class="iconfont icon-liebiaoxunhuan"></i>
            </el-button>
            <el-button type="text">
                <i class="iconfont icon-shengyin"></i>
            </el-button>
            <el-popover
                    placement="top-start"
                    width="300"
                    popper-class="ls"
                    trigger="click">
                <playlist/>
                <el-button type="text" @click.native="showPlaylist" slot="reference">
                    <i class="iconfont icon-liebiao"></i>
                </el-button>
            </el-popover>
        </div>
    </div>
</template>

<script>
    import playlist from '../Playlist'

    export default {
        components: {
            playlist
        },
        data() {
            return {
                audio: null,
                play_time: 0,
                max_time: 0,
                interval: null,
                play_type: 1,//播放次序 0单曲循环 1列表循环 2随机播放
            }
        },
        mounted() {

        },
        watch: {
            is_play(val) {
                try {
                    this.$nextTick(() => {
                        this.audio = this.$refs['audio'];
                        if (val) {
                            this.audio.play();
                            this.max_time = this.audio.duration;
                            this.getPlayTime();
                            this.audio.addEventListener('ended', () => {
                                this.playEnded();
                            })
                        } else {
                            this.audio.pause();
                            clearInterval(this.interval)
                        }
                    })
                }catch (e) {
                    console.log('play error')
                }

            },
            currentTime(val) {
                this.play_time = val
            }
        },
        computed: {
            play_list() {
                return this.$store.state.player.list
            },
            song() {
                return this.$store.state.player.song
            },
            music_urls() {
                return this.$store.state.player.music_urls
            },
            cover() {
                try {
                    return this.song.al.picUrl;
                } catch (e) {
                    return 'http://p1.music.126.net/dPn_6T9d5VUuCDvhJdZ_8A==/109951163399691488.jpg'
                }

            },
            name() {
                try {
                    return this.song.name || '土狗音乐，畅听无限'
                } catch (e) {
                    return '土狗音乐，畅听无限'
                }
            },
            ar_name() {
                try {
                    return this.song.ar[0].name
                } catch (e) {
                    return false
                }
            },
            play_url() {
                return this.music_urls[0] || false
            },
            is_play() {
                return this.$store.state.player.is_play
            },
            currentTime() {
                return this.$store.state.player.currentTime
            },
            before_song() {
                let s_index = -1;
                this.play_list.map((item, index) => {
                    if (this.song.id === item.id && index > 0) {
                        s_index = index - 1;
                    }
                });
                return s_index >= 0 ? this.play_list[s_index] : false;
            },
            after_song() {
                let s_index = -1;
                this.play_list.map((item, index) => {
                    if (this.song.id === item.id && index < this.play_list.length - 1) {
                        s_index = index + 1
                    }
                });
                return s_index >= 0 ? this.play_list[s_index] : false;
            }
        },
        methods: {
            //播放/暂停按钮点击
            playClick() {
                this.$store.commit('SET_PLAYER_DATA', {is_play: !this.is_play});
            },
            //获取当前已播放时间
            getPlayTime() {
                this.interval = setInterval(() => {
                    this.$store.commit('SET_PLAYER_DATA', {currentTime: this.audio.currentTime});
                }, 1000)
            },
            //改变播放时间
            playTimeChange(val) {
                this.audio.currentTime = val;
                this.$store.commit('SET_PLAYER_DATA', {currentTime: val});
            },
            //播放结束事件
            playEnded() {
                switch (this.play_type) {
                    case 0:
                        this.rePlay();
                        break;
                    case 1:
                        this.playAfter();
                        break;
                }
            },
            //重新播放
            rePlay() {
                this.$store.commit('SET_PLAYER_DATA', {is_play: false, currentTime: 0});
                setTimeout(() => {
                    this.$store.commit('SET_PLAYER_DATA', {is_play: true});
                }, 1000);
            },
            playBefore() {
                if (this.before_song) {
                    this.$store.dispatch('playMusic', this.before_song.id)
                }
            },
            playAfter() {
                console.log(this.after_song)
                if (this.after_song) {
                    this.$store.dispatch('playMusic', this.after_song.id)
                }
            },
            // 弹出播放列表
            showPlaylist() {
                this.$bus.$emit('showPlaylist')
            },
        }
    }
</script>

<style lang="scss" scoped>
    $height: 70px;
    .player {
        display: flex;
        align-items: center;
        /deep/ .control {
            width: 230px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            button {
                margin: 0 15px;
                color: #31c27c;
                i {
                    font-size: 32px;
                }
            }
            button:hover {
                color: #2fab67;
            }
            .play-btn {
                i {
                    font-size: 38px;
                }
            }
        }

        .cover {
            width: $height;
            height: $height;
            display: flex;
            align-items: center;
            justify-content: center;
            .cover-image {
                width: $height - 20px;
                height: $height - 20px;
                border-radius: 2px;
            }
        }
        /deep/ .tone {
            width: 75px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            .el-dropdown {
                width: 35px;
                border: 1px solid #999;
                font-size: 10px;
                color: #333;
                padding: 1px 5px;
                border-radius: 2px;
                cursor: pointer;
                i {
                    font-size: 10px;
                }
            }
            .el-dropdown:hover {
                color: #31c27c;
                border: 1px solid #31c27c;
            }
        }
        .info {
            flex: 1;
            height: $height;
            display: flex;
            flex-direction: column;
            padding: 0px;
            justify-content: center;
            .top {
                font-size: 13px;
                color: #666;
                display: flex;
                justify-content: space-between;
                .names {
                    font-size: 13px;
                    color: #444;
                }
                .time {
                    font-size: 12px;
                    color: #999;
                }
            }
            .progress {
                margin-top: 10px;
                /deep/ .el-progress {
                    .el-progress-bar__outer {
                        border-radius: 0;
                    }
                    .el-progress-bar__inner {
                        border-radius: 0;
                    }
                }
                /deep/ .el-slider {
                    .el-slider__runway {
                        height: 2px;
                        margin: 2px 0;
                    }
                    .el-slider__bar {
                        height: 2px;
                    }
                    .el-slider__button-wrapper {
                        width: 6px;
                        height: 6px;
                        top: -10px;
                    }
                    .el-slider__button {
                        width: 2px;
                        height: 2px;
                    }
                }
            }
        }
        .actions {
            width: 200px;
            padding: 0 20px;
            display: flex;
            flex-shrink: 0;
            justify-content: space-between;
            button {
                color: #333;
                flex: 1;
                flex-shrink: 0;
            }
            button:hover {
                color: #31c27c;
            }
        }
    }
</style>
