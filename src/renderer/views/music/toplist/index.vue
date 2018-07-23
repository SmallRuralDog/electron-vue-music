<template>
    <el-scrollbar class="toplist-view scroll-page">
        <toplist/>
    </el-scrollbar>
</template>

<script>

    import toplist from './components/toplist'

    export default {
        components: {
    
            toplist
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-page {
        overflow: hidden;
        background:#fafafa;

        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }


    }
    .toplist-view {
        flex: 1;
        overflow: hidden;

    }
</style>