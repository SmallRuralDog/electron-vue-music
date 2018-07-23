<template>

    <div class="toplist">
        <div class="title">排行榜</div>
        <el-row :gutter="20" style="margin-top:20px;">
            <toplist-item v-for="(item,index) in list" :id="item" :key="index"/>
        </el-row>
    </div>

</template>
<script>
    import ToplistItem from './toplist-item'
    export default{
        components: {
            ToplistItem
        },


        data(){
            return {
                list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 20, 21, 22],
            }
        },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    .toplist {
        padding: 0 30px;
        box-sizing: border-box;

    }

    .title {
        font-size: 18px;
        letter-spacing: 5px;
    }
</style>