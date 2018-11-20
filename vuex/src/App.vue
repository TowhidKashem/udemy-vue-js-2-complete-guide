<template>
  <div id="app">
    <h1>Vuex</h1>

    <app-result></app-result>
    <app-another-result></app-another-result>    
    <hr>
    <app-counter></app-counter>
    <br>
    <app-another-counter></app-another-counter>
    <br>
    <hr>
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AnotherCounter from './components/AnotherCounter.vue';  
  import Result from './components/Result.vue';
  import AnotherResult from './components/AnotherResult.vue';

  export default {
    computed: {
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch('updateValue', value);
        }
      }
    },
    // methods: {
    //   updateValue(event) {
    //     this.$store.dispatch('updateValue', event.target.value);
    //   }
    // },
    components: {
      appResult: Result,
      appAnotherResult: AnotherResult,
      appCounter: Counter,
      appAnotherCounter: AnotherCounter      
    }
  }
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css";
  #app { padding: 100px; }
</style>
