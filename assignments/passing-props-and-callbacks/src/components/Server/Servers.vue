<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-list :serverList="servers"></app-list>
        </ul>
    </div>
</template>

<script>
import List from './List.vue';

export default {
    components: {
        appList: List
    },
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Critical' },
                { id: 2, status: 'Normal' },  
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Critical' }                
            ]
        }
    }
}
</script>

<style>

</style>
