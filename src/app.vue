<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
    import layoutbox from '@/views/components/layoutbox/layoutbox.vue';
    export default {
        components: {
            layoutbox
        },
        
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    };
</script>

<style>
.app-main{
    width: 100%;
    height: 100%;
}
</style>
