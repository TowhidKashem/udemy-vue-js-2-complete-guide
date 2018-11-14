<template>
    <div class="well">
       <form @submit.prevent="addQuote">
           <label>Quote</label>
           <textarea class="form-control" v-model="quote"></textarea><br>
           <button class="btn btn-primary">Add Quote</button>
       </form>
    </div>
</template>

<script>
    export default {
        props: ['curQuotes', 'maxQuotes'],
        data: function() {
            return {
                quote: ''
            }
        },
        methods: {
            addQuote(e) {
                this.$emit('addQuote', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style>
</style>
