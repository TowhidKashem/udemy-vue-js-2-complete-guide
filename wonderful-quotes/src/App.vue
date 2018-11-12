<template>
    <div class="container">
        <app-progress :curQuotes="curQuotes" :maxQuotes="maxQuotes"></app-progress>

        <app-form @addQuote="addQuoteHandler"></app-form>

        <div class="row" v-if="quotes">
            <app-quote v-for="(quote, index) in quotes" :key="index" :quote="quote" :index="index" :deleteQuoteHandler="deleteQuoteHandler"></app-quote> 
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
        data() {
            return {
                curQuotes: 1,
                maxQuotes: 5,
                quotes: ['A quote to get you started!']
            }
        },
        methods: {
            addQuoteHandler(quote) {
                if (this.curQuotes !== 5) {
                    this.quotes.push(quote);
                    this.curQuotes++;
                } else {
                    alert('Too many quotes, delete some before adding any new ones!')
                }
            },
            deleteQuoteHandler(index) {
                this.quotes.splice(index, 1);
                this.curQuotes--;
            }
        } 
    }
</script>

<style>
</style>
