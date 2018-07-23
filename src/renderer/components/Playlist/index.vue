<template>
    <div class="playlist" :class="{'active':showPlaylist==true}">
        <div class="playlist-view">
            <div class="top">
                <div class="title">播放队列</div>
                <div class="act-grid">
                    <div class="act-item">30首歌曲</div>
                    <div class="act-item">批量操作</div>
                    <div class="act-item">清空</div>
                </div>
            </div>
            <el-scrollbar class="song-view scroll-page">
                <div class="song-item"  v-for="(item,index) in list" :key="index">
                    <div class="name">{{item.name}}
                        <img class="tag" src="../../assets/images/sq.png"/>
                        <img v-if="item.mv>0" class="tag" src="../../assets/images/mv.png"/>
                    </div>
                    <div class="info" @click="play(item)"><div class="singer">{{item.ar[0].name}}</div><div class="time">{{item.dt|formatDuring}}</div></div>
                </div>





            </el-scrollbar>


        </div>
    </div>
</template>
<script>
import {mapState} from 'Vuex'
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

            })
        },
        mounted(){
            console.log('list=',this.list)
            this.$bus.$on('showPlaylist',res=>{
                if(this.list){
                    if(this.showPlaylist){
                        this.showPlaylist=false
                    }else {
                        this.showPlaylist=true
                    }
                }

            })

        },
        methods:{
            play(item) {
                console.log('item.id=',item.id)
                this.$store.dispatch('playMusic',item.id);

            },
        },
    }
</script>
<style lang="scss" scoped>
    .playlist{

        position: absolute;
        right: -350px;
        top:0;
        bottom: 0;
        width: 350px;
        background-color: transparent;
        z-index: 10;
        display: flex;
        justify-content: flex-end;
        .playlist-view{
            background-color: #fff;
            width: 300px;
            display: flex;
            flex-direction: column;
            box-shadow: -5px -5px 15px rgba(0,0,0,0.2);
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
            .singer{
                color: #666;
            }
            .time{
                color: #aaa;
            }
        }
    }
    .song-item:hover{
        background-color: #fafafa;
    }
</style>