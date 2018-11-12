<template>
    <div>
        <h2>Quotes Added</h2>

        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{ width: curQuotes * 10 + '%' }">
                {{ curQuotes }} / {{ maxQuotes }}
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        props: ['curQuotes', 'maxQuotes']
    }
</script>

<style>
</style>
