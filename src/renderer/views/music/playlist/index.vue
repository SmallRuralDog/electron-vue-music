<template>
    <el-scrollbar class="playlist-hot-view scroll-page">
        <hot-view/>
    </el-scrollbar>
</template>

<script>
    import HotView from './components/hot'

    export default {
        components: {
            HotView
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-page {
        overflow: hidden;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }

    .playlist-hot-view {
        flex: 1;
        overflow: hidden;
    }
</style>
