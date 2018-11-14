<template>
    <div style="border:1px solid blue">
        <router-link 
            to="/" 
            tag="li" 
            active-class="active"
            exact
        >
            <a>Home</a>
        </router-link>

        <router-link to="/user" tag="li"><a>User</a></router-link>

        <router-link to="/user/1" tag="li"><a>User With ID</a></router-link>

        <br>
        <br>

        <button @click="navigateToHome">Go to Home From Code</button>

        <hr>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style>
</style>
