<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'dog-music'
}
</script>

<style lang="scss">
@import url(./assets/styles/public.scss);
body {
  padding: 0;
  margin: 0;
  -webkit-user-select: none;
  height: 800px;
  overflow: hidden;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
