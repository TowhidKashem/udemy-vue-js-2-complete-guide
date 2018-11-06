<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">Server Details are currently not updated</div>
        <div v-else>
            <h2>Server #{{ server.id }}</h2>
            <p>{{ server.status }}</p>
            <button @click="updateStatus(server)">Update Status</button>
        </div>
    </div>

</template>

<script>
import { eventBus } from '../../main.js';

export default {
    props: ['server'],
    methods: {
        updateStatus(server) {
            server.status = 'Normal'; // Objects passed around are references / pointers so this works
        }
    }
}
</script>

<style>

</style>
