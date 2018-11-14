<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded ID: {{ id }}</p>

        <hr>

        <div style="border: 2px solid red">
            <h2>Sub Routes</h2>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            // Since two routes are using the same component "/user" and "/user/10" 
            // we need to do this to update the params so components don't get stale data
            $route(to, from) {
                this.id = to.params.id
            } 
        }
    }
</script>
