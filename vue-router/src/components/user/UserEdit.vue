<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Query: {{ $route.query.q }}</p>

        <button class="btn btn-primary" @click="confirmed = true">Confirm Leave Page</button>

        <div style="height:2000px"></div>
        <p id="name" name="data">Some text here...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>
