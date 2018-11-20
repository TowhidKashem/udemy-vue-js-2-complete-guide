<template>
  <div>
    Counter is {{ counter }}<br><br>
  </div>
</template>

<script>
  export default {
      computed: {
          counter() {
              return this.$store.getters.doubleCounter;
          }
      }
  }
</script>
