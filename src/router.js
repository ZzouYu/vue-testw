import VueRouter from 'vue-router'
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import goods from './main/Goods.vue'
import account from './main/Account.vue'
var router = new VueRouter({
    routes:[
        {path:'/account',component:account,
            children:[
                {path:"login",component:login},
                {path:"register",component:register}
            ]},
        {path:'/goods',component:goods},
    ]
})
export default router