<template>
    <el-scrollbar class="menu-view scroll-page">
        <div class="menu-group">
        <div class="menu-title">在线音乐</div>
        <div class="menu-item active"><div class="left"><i class="iconfont icon-yinle"></i>音乐馆</div></div>
        <div class="menu-item"><div class="left"><i class="iconfont icon-mv"></i>MV</div></div>
        <div class="menu-item"><div class="left"><i class="iconfont icon-diantai"></i>个性电台</div></div>
        <div class="menu-item"><div class="left"><i class="iconfont icon-shoucang2"></i>明日之子第二季</div></div>
    </div>

        <div class="menu-group">
            <div class="menu-title">我的音乐</div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-shoucang hot"></i>我喜欢</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-screen"></i>本地和下载</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-lishi"></i>播放历史</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-shiting"></i>试听列表</div></div>
        </div>

        <div class="menu-group">
            <div class="menu-title"><div class="left">我创建的歌单</div><div class="right"><i class="iconfont icon-jia-copy"></i><i class="iconfont icon-xiangxia"></i></div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-yinyue"></i>wake me up</div></div>
        </div>

        <div class="menu-group">
            <div class="menu-title"><div class="left">我收藏的歌单</div><div class="right"><i class="iconfont icon-xiangxia"></i></div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-yinyue"></i>Convoy</div></div>
        </div>




    </el-scrollbar>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .scroll-page {
        overflow: hidden;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }

.menu-view{
    flex: 1;
    overflow: hidden;

    .menu-group{
        margin-bottom: 25px;
        padding:0 20px;
        .menu-title{
            margin-bottom: 10px;
            font-size: 12px;
            padding-left: 10px;
            display: flex;
            align-items: center;
            color: #666;
            .left{
                flex:1;
            }
            .right{
                width: 80px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .iconfont{
                    font-size: 14px;
                    color: #888;
                    margin-left: 10px;
                }

            }
        }
        .menu-item{
            padding: 5px 10px;
            font-size: 13px;
            border-radius: 2px;
            margin-bottom: 5px;
            cursor: pointer;
            .left{
                .iconfont{
                    margin-right: 10px;
                }
                .iconfont.hot{
                    color: #ff4400;
                }
            }
        }
        .menu-item:hover{
            background:#E6E7E7 ;
        }

        .menu-item.active{
            background:#31C27C ;
            color: #fff;
        }
    }

}
</style>
