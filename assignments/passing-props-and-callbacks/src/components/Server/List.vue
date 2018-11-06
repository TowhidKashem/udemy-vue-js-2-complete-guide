<template>
<div>
    <li
        class="list-group-item"
        v-for="server in serverList"
        @click="updateServer(server)">

        Server #{{ server.id }} is {{ server.status }}

    </li>
</div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
    props: {
        serverList: {
            type: Array,
            required: true
        }
    },
    methods: {
        updateServer(server) {
            eventBus.$emit('setServer', server);
        }
    }
}
</script>

<style>

</style>
