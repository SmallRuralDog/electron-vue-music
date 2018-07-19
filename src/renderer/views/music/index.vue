<template>
    <div class="music-index">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="精选" name="choiceness"></el-tab-pane>
            <el-tab-pane label="歌手" name="second"></el-tab-pane>
            <el-tab-pane label="排行" name="third"></el-tab-pane>
            <el-tab-pane label="电台" name="fourth"></el-tab-pane>
            <el-tab-pane label="分类歌单" name="flgd"></el-tab-pane>
            <el-tab-pane label="有声" name="ys"></el-tab-pane>
            <el-tab-pane label="数字专辑" name="szzj"></el-tab-pane>
        </el-tabs>
        <div class="music-body">
            <transition name="el-fade-in-linear">
            <choiceness v-if="activeName==='choiceness'" />
            </transition>
        </div>
    </div>
</template>
<script>
import choiceness from './choiceness'
export default {
    components: {
        choiceness
    },
    data() {
        return {
            activeName: 'choiceness'
        }
    },
    mounted () {
    },
    methods: {
        handleClick() {

        }
    }
}
</script>
<style lang="scss" scoped>
.music-index {
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
  /deep/ .el-tabs {
    height: 40px;
    background: #fafafa;
    .el-tabs__header {
      padding: 0;
      margin: 0;
    }
    .el-tabs__nav-scroll {
      display: flex;
      justify-content: center;
      padding: 0;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
    .el-tabs__item {
      font-size: 14px;
    }
  }
  .music-body {
    background: #f0f0f0;
    flex: 1;
    overflow: hidden;
    display: flex;
  }
}
</style>
