<template>
    <div class="player">
        <div class="control">
            <el-button type="text">
                <i class="iconfont icon-kuaitui"></i>
            </el-button>
            <el-button class="play-btn" type="text">
                <i class="iconfont icon-zanting"></i>
            </el-button>
            <el-button type="text">
                <i class="iconfont icon-kuaijin"></i>
            </el-button>
        </div>
        <div class="cover">
            <img class="cover-image" src="http://p1.music.126.net/dPn_6T9d5VUuCDvhJdZ_8A==/109951163399691488.jpg" />
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
                            <img src="../../assets/images/svip.png" style="margin-left: 5px; width: 22px" />
                            <img src="../../assets/images/sui.png" style="margin-left: 5px; width: 22px" />
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
                    <div>海阔天空 - Beyond</div>
                </div>
                <div class="time">00:00 / 04:15</div>
            </div>
            <div class="progress">
                <el-slider v-model="percentage" input-size="mini"></el-slider>
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
            <el-button type="text">
                <i class="iconfont icon-liebiao"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                percentage: 50
            }
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
            .cover-image {
                width: $height;
                height: $height;
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
                        top: -9px;
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
