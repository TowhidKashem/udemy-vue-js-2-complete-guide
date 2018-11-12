<template>
    <div class="col-md-3 well" @click="deleteQuoteHandler(index)">
        {{ quote }}
    </div>
</template>

<script>
    export default {
        props: ['quote', 'index', 'deleteQuoteHandler']
    }
</script>

<style>
</style>
