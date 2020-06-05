<template>
    <div id="app">
        <h1>这是app组件</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goods">goods</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>