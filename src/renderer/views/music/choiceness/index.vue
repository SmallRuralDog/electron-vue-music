<template>
    <el-scrollbar class="choiceness-view scroll-page">
        <banner />
        <personalized/>
    </el-scrollbar>
</template>

<script>
    import Banner from './components/banner'
    import Personalized from './components/personalized'

    export default {
        components: {
            Banner,
            Personalized
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
    .choiceness-view {
        flex: 1;
        overflow: hidden;
    }
</style>
