import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        orders: [],
        products: [],
        criteria: null,
        filteredProducts: null
    },
    getters: {
       getAllProducts: state => state.products,
       getFilteredProducts: state => state.filteredProducts,
       getProductsInOrder: state => id => {
           return state.products.filter(product => product.order === id);
       },
       getOrderFromProduct: state => id => {
           let orderToSend;
           state.orders.forEach(order => {
               if(order.id === id){
                  orderToSend = order;
               }
           });
           return orderToSend;
       }
    },
    mutations: {
        set(state, {type, item}){
            state[type] = item;
        },
        FILTERED_PRODUCTS (state, value) {
            if(!(value) || value === '{}') {
                state.criteria = null;
                state.filteredProducts = null
            }
            else {
                state.criteria = value;
                state.filteredProducts = state.products.filter(product => product.type === value);
            }
        }
    },
    actions: {
        getOrders ({ commit }){
            // // eslint-disable-next-line no-console
            axios.get('orders.json')
                .then(response => {
                    commit('set', {type: 'orders', item: response.data})
                });
        },
        getProducts ({commit}){
            axios.get('products.json')
                .then(response => {
                    commit('set', {type: 'products', item: response.data})
                })
        },
        FILTERED_PRODUCTS ({ commit }, value) {
            commit('FILTERED_PRODUCTS', value)
        }
    }
})
