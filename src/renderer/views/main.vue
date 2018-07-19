<template>
    <div>
        <el-container>
            <el-aside width="230px" class="aside">
                <aside-view />
            </el-aside>
            <el-container class="container">
                <el-header class="header" height="40px" style="-webkit-app-region: drag"></el-header>
                <el-main class="main">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>

                </el-main>
                <el-footer class="footer" height="60px"></el-footer>
            </el-container>
        </el-container>
        <login-view />
    </div>
</template>
<script>
    import AsideView from '../components/Aside/'
    import LoginView from '../components/Login/'

    export default {
        components: {
            AsideView,
            LoginView
        }
    }
</script>
<style lang="scss" scoped>
    .aside {
        height: 100vh;
        background: linear-gradient(to bottom, #efefef, #efefef);
    }
    .container{
        height: 100vh;
    }
    .header {
        background: #fafafa;
    }
    .main {
        padding: 0;
        margin: 0;
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-shrink: 0;
    }
    .footer {
        background: #f7f7f7;
    }
</style>
