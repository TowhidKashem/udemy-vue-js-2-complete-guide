<template>
  <div>
    <p>Counter is {{ doubleCounter }}<p>
    <p>Number of clicks {{ clickCounter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types';

  export default {
      computed: {
        // ...mapGetters([
        //   'doubleCounter',
        //   'clickCounter'
        // ])
        ...mapGetters({
          doubleCounter: types.DOUBLE_COUNTER,
          clickCounter: types.CLICK_COUNTER
        })
      }
      // computed: {
      //     counter() {
      //         return this.$store.getters.doubleCounter;
      //     },
      //     clicks() {
      //       return this.$store.getters.clickCounter;
      //     }
      // }
  }
</script>
