import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FaceType from '@/components/FaceType'
import GlassesType from '@/components/GlassesType'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'FaceType',
        component: FaceType
    },
    {
        path: '/glasses-type',
        name: 'GlassesType',
        component: GlassesType
    }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
