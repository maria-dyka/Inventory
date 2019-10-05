import Vue from 'vue';
import VueRouter from 'vue-router';
import Orders from './views/Orders';
import Products from './views/Products';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Orders
        },
        {
            path: '/products',
            component: Products
        }
    ]
})
