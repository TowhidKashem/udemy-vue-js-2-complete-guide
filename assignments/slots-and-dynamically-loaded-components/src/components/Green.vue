<template>
    <div>
        <h2><slot name="title"></slot></h2>
        <p><slot name="body"></slot></p>
        <hr>
        <slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>