<template>
    <div class="wrap">
        <user-info/>
        <menus/>
    </div>
</template>
<script>
import UserInfo from './UserInfo'
import menus from './menu'
export default {
    components: {
        UserInfo,
        menus,
    }
}
</script>
<style lang="scss" scoped>
    .wrap{
        flex: 1;
        display: flex;flex-direction: column;
    }
</style>
