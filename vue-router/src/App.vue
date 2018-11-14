<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>

                <router-view name="headerTop"></router-view>

                <transition name="slide">
                    <router-view></router-view>
                </transition>

                <router-view name="headerBottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    /* .slide styles here... */
</style>
