<template>
    <div class="carousel">
        <el-carousel :interval="10000" type="card" :autoplay="false" height="200px">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
                <div class="carousel-item-image" :style="{backgroundImage:'url('+item.picUrl+')'}" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import { banner } from '../../../../api/index'
    export default {
        data() {
            return {
                banner: []
            }
        },
        mounted() {
            this.getBanner()
        },
        methods: {
            getBanner() {
                banner().then(res => {
                    this.banner = res.banners
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .carousel {
        padding: 20px 40px;
        .el-carousel__item {
            .carousel-item-image {
                background-size: cover;
                width: 445px;
                height: 200px;
                background-position: 50% 50%;
            }
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
</style>
