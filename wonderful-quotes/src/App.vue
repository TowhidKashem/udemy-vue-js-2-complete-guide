<template>
    <div class="container">
        <app-progress :curQuotes="curQuotes" :maxQuotes="maxQuotes"></app-progress>

        <app-form @addQuote=""></app-form>

        <div class="row" v-if="quotes">
            <app-quote v-for="(quote, index) in quotes" :key="index" :quote="quote"></app-quote> 
        </div>

        <div class="alert alert-info">Click on a quote to delete it</div>
    </div>
</template>

<script>
    import Progress from './components/Progress.vue';
    import Form from './components/Form.vue';
    import Quote from './components/Quote.vue';

    export default {
        components: {
            appProgress: Progress,
            appForm: Form,
            appQuote: Quote                        
        },
        data: function() {
            return {
                curQuotes: 0,
                maxQuotes: 10,
                quotes: []
            }
        }
    }
</script>

<style>
</style>
