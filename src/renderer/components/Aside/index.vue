<template>
    <div class="axc">
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
    .axc{
        flex: 1;
        display: flex;flex-direction: column;
    }
</style>
