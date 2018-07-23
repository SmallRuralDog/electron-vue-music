<template>
    <div class="footer-view">
        <player-view/>
    </div>
</template>

<script>
    import PlayerView from './player'
    export default {
        components:{
            PlayerView
        },
        props:{
            height:String
        }
    }
</script>

<style lang="scss" scoped>
.footer-view{
    position: relative;
    z-index: 200;
}
</style>
