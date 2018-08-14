<template>
    <div class="playlist" :class="{'active':showPlaylist===true}" ref="playlist" id="playlist">
        <div class="playlist-view">
            <div class="top">
                <div class="title">播放队列</div>
                <div class="act-grid">
                    <div class="act-item">30首歌曲</div>
                    <div class="act-item"><i class="iconfont icon-piliangchuli"></i>批量操作</div>
                    <div class="act-item"><i class="iconfont icon-qingkong"></i>清空</div>
                </div>
            </div>
            <el-scrollbar class="song-view scroll-page">
                <div class="song-item"  v-for="(item,index) in list" :key="index" :class="{'active':item.id===song.id}">
                    <div class="name">
                        {{item.name}}
                        <img class="tag" src="../../assets/images/sq.png"/>
                        <img v-if="item.mv>0" class="tag" src="../../assets/images/mv.png"/>
                        <div class="spin" v-show="item.id===song.id"><i class="iconfont icon-yinleren"></i></div>
                    </div>
                    <div class="info" ><div class="singer">{{item.ar[0].name}}</div><div class="time">{{item.dt|formatDuring}}</div></div>

                    <div class="icon">
                        <i class="iconfont icon-bofangsanjiaoxing" :class="{'icon-zanting1':item.id===song.id}" @click="play(item)"></i>
                        <i class="iconfont icon-shoucang"></i>
                    </div>

                </div>

            </el-scrollbar>


        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default {
        components: {

        },
        data(){
            return{
                showPlaylist:false
            }

        },
        computed: {
            ...mapState({
                list: state => state.player.list,
                song:state => state.player.song,

            })
        },
        mounted(){
            console.log('---Play list=',this.list)
            console.log('---Play song=',this.song)
            this.$bus.$on('showPlaylist',res=>{
                if(this.list.length>0){
                    if(this.showPlaylist){
                        this.showPlaylist=false
                    }else {
                        this.showPlaylist=true
                    }
                }

            })

            this.globalClick(this.hidePlaylist);
            this.playlistClick(()=>{
                // console.log('-----click in playlist----')
            })

        },
        methods:{
            play(item) {
                console.log('item.id=',item.id)
                this.$store.dispatch('playMusic',item.id);

            },
            hidePlaylist(){
                // console.log('-----globalClick -> hidePlaylist-----',this.$refs.playlist)
            }
        },
    }
</script>
<style lang="scss" scoped>
    .playlist{
        height: 650px;
        /*position: absolute;
        right: -350px;
        top:0;
        bottom: 0;*/
        width: 300px;
        background-color: transparent;
        z-index: 10;
        display: flex;
        justify-content: flex-end;
        .playlist-view{
            background-color: #fff;
            width: 300px;
            display: flex;
            flex-direction: column;
            //box-shadow: -5px -5px 15px rgba(0,0,0,0.2);
        }

    }
    .playlist.active{
        right: 0;
        animation:0.3s showup;

    }
    @keyframes showup {
        0% { right: -300px; }
        100% { right: 0; }
    }
    /*@-webkit-keyframes spin {*/
        /*from {*/
            /*-webkit-transform: rotate(0deg);*/
        /*}*/
        /*to {*/
            /*-webkit-transform: rotate(360deg);*/
        /*}*/
    /*}*/

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    div.spin{
        animation: spin 4s linear infinite;
        /*border: 1px red solid;*/
        width: 20px;
        height: 20px;
        line-height:  20px;
        text-align: center;

        display: inline-block;

        transform-origin: 50% 50%;
        /*.iconfont{*/
            /*border: 1px blue solid;*/
            /*padding: 0;*/
            /*width: 20px;*/
            /*height: 20px;*/
        /*}*/

    }

    .top{
        height: 80px;
        background: #f8f8f8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding:0 20px;
        box-sizing: border-box;
        .act-grid{
            display: flex;
            font-size:12px;
            justify-content: space-between;
            color:#666;
            margin-top: 5px;
            .act-item{
                display: flex;
                align-items: center;
            }

        }
    }
    .scroll-page {
        overflow: hidden;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
    .song-view {
        flex: 1;
        overflow: hidden;
        /*border: 1px red solid;*/

    }
    .song-item{
        font-size: 14px;
        padding: 10px 20px;
        border-bottom: 1px #f4f4f4 solid;
        position: relative;

        background: #fff;
        /*overflow: hidden;*/
        .name{
            width: 220px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            .iconfont{
                /*margin-left: 5px;*/
                /*transform:rotate(0deg);*/
                /*animation:3s round;*/
                /*animation: spin 3s linear infinite;*/
            }
        }
        .tag {
            height: 20px;
            margin-left: 5px;
            margin-top: -2px;
            cursor: pointer;
        }
        .info{
            display: flex;
            margin-top: 5px;
            font-size: 13px;
            justify-content: space-between;
            z-index: 1;
            .singer{
                color: #666;
            }
            .time{
                color: #aaa;
            }
        }
        .icon{
            position: absolute;
            width: 80px;
            background: #fafafa;
            height: 63px;
            display: flex;
            justify-content: flex-end;
            right: 0;
            top:0;
            bottom: 0;
            border-bottom: 1px solid #f4f4f4;

            align-items: center;
            /*display: none;*/
            z-index: -1;
            padding-right: 20px;
            box-sizing: border-box;
            .iconfont{
                margin-left:5px;
                font-size: 17px;
            }
            .iconfont:hover{
                cursor: pointer;
                color: #31C27C;
            }

        }


    }
    .song-item.active{
        background-color: #f8f8f8;
        .name{
            color: #31C27C;
            .iconfont{
                /*animation:3s round;*/
            }

        }
        .info{
            .singer{
                color: #31C27C;
            }
        }
        .icon {
            z-index: 1;
        }
    }

    .song-item:hover{
        background-color: #f8f8f8;
        .name{
            width: 180px;
        }
        .icon{
            z-index: 1;
            /*display: block;*/


        }
    }
</style>
