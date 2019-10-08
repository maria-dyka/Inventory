import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        orders: [],
        products: [],
        criteria: null,
        filteredProducts: null,
        date: null,
        big: true,
        small:false,
        showProducts: null,
        idToShow: null,
        orderToDelete: null,
        productToDelete: null,
        showPopUp: false,
        socketsCount: 0
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
       },
       getCurrentDate: state => {
           let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
           let month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

           let day = days[state.date.getDay()];
           let day2 = getProperNumber(state.date.getDate());
           let fullDate = `${day2} ${month[state.date.getMonth()]}, ${state.date.getFullYear()}`;
           let hours = getProperNumber(state.date.getHours());
           let minutes = getProperNumber(state.date.getMinutes());
           let time = `${hours}:${minutes}`;

           //Function for adding zero to number if it's less than 10
           function getProperNumber (number) {
               if(number<10){
                   return `0${number}`;
               }
               else {
                   return number;
               }
           }

           return {day, fullDate, time};
       },
       getOrderTitleById: state => id => {
           let title = '';
           state.orders.forEach(order => {
               if(order.id === id){
                   title = order.title;
               }
           });
           return title;
       },
       getProductTitleById: state => id => {
           let title = '';
           state.products.forEach(product => {
               if(product.id === id){
                   title = product.title;
               }
           });
           return title;
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
        },
        updateDate (state) {
            state.date = new Date();
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
        },
        getDate ({ commit }){
            commit('updateDate');

            setInterval(() => {
                commit('updateDate');
            }, 5000);
        }
    }
})
