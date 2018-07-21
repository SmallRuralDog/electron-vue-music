<template>
    <div class="header-view" :style="{height: height}">
        <div class="left flex-c-l">
            <el-button class="no-drag" size="mini" type="text" @click="back">
                <i class="btn el-icon-arrow-left"></i>
            </el-button>
            <el-button class="no-drag" size="mini" type="text" @click="advance">
                <i class="btn el-icon-arrow-right"></i>
            </el-button>
            <el-button class="no-drag hover-color" size="mini" type="text" @click="refresh">
                <i class="btn el-icon-refresh"></i>
            </el-button>

            <div class="search no-drag">
                <el-input size="mini" prefix-icon="el-icon-search" placeholder="搜索音乐、MV、歌单、用户"></el-input>
            </div>
        </div>
        <div class="right">
            <el-button @click="minimize" class="no-drag" size="mini" type="text">
                <i class="btn el-icon-minus"></i>
            </el-button>
            <el-button @click="close" class="no-drag hover-color" size="mini" type="text">
                <i class="btn el-icon-close"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
    const {BrowserWindow} = require('electron')
    export default {
        props: {
            height: {
                type: String,
                default: '40px'
            }
        },
        methods: {
            close() {
                this.$confirm('此操作将退出土狗云音乐, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$electron.ipcRenderer.send('close')
                }).catch(() => {

                })
            },
            minimize() {
                this.$electron.ipcRenderer.send('minimize')
            },
            back() {
                if (this.$route.name !== 'music') {
                    this.$router.go(-1)
                }
            },
            advance() {
                this.$router.go(1)
            },
            refresh() {
                this.$bus.$emit('page-refresh', this.$route.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-view {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /deep/ .left {
            .btn {
                font-size: 17px;
                color: #999;
            }
            .btn:hover {
                color: #31c27c;
            }
            .el-icon-refresh {
                color: #333;
            }
            .search {
                margin-left: 15px;
                width: 200px;
                .el-input__inner {
                    border: none;
                    border-radius: 30px;
                    background: #e9e9e9;
                    color: #8c8c8c;
                }
            }
        }
        .right {
            .btn {
                font-size: 17px;
                color: #333;
            }
            .btn:hover {
                color: #31c27c;
            }
        }
    }
</style>
