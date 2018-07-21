<template>
    <div class="personalized-item" @click="itemClick">
        <div class="cover">
            <img :src="item.picUrl" />
            <div class="bg hover-bg">
                <i class="iconfont icon-iconset0481" @click="playClick" onClick="event.cancelBubble = true"></i>
            </div>
            <div class="play-count">
                <i class="el-icon-service"></i>
                <span>{{item.playCount|changeCount}}</span>
            </div>
        </div>
        <div class="info">
            <div class="title hover-color">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        methods: {
            itemClick() {
                this.$router.push({ name: 'playlist-detail', query: { id: this.item.id } })
            },
            playClick(){
                this.$store.dispatch('playPlaylist',this.item.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .personalized-item {
        .cover {
            //cursor: pointer;
            position: relative;
            img {
                width: 100%;
            }
            .bg {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0);
                .iconfont {
                    font-size: 30px;
                    color: white;
                    opacity: 0;
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    cursor: pointer;
                    transition: color 0.8s linear
                }

            }
            .bg:hover {
                background: rgba(0, 0, 0, 0.3);
                .iconfont {
                    transition: color 0.3s linear;
                    opacity: 1;
                    color: white;
                }
                .iconfont:hover {
                    color: #31c27c;
                }
            }
            .play-count {
                position: absolute;
                left: 8px;
                bottom: 5px;
                color: white;
                font-size: 13px;
            }
        }
        .info {
            height: 60px;
            padding: 10px 0;
            overflow: hidden;
            .title {
                font-size: 13px;
                color: #333;
                line-height: 20px;
                height: 40px;
                overflow: hidden;
                cursor: pointer;
            }
            .title:hover {
                color: #31c27c;
            }
        }
    }

    .personalized-item:first-child {
        margin-left: 0;
    }
</style>
