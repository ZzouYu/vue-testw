import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import router from './router'


Vue.use(VueRouter)
var vm = new Vue({
        el:'#app',
        render:c=>c(app),
        router
})