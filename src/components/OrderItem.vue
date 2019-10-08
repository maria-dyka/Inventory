<template>
    <div class="order" @click="openProducts">
        <div class="order-title" v-if="!small">
            <span class="title-text">{{ order.title }}</span>
        </div>
        <div :class="{'order-products': full, 'order-products-small': small}">
            <div class="order-products-icon"></div>
            <p class="order-products-amount">
                <span class="order-products-number">{{ numberOfProducts.number }}</span><br/>
                <span class="order-products-text">{{ numberOfProducts.text }}</span>
            </p>
        </div>
        <div :class="{'order-date': full, 'order-date-small': small}">
            <p class="date-short">{{ properDate.short }}</p>
            <p class="date-full">{{ properDate.full }}</p>
        </div>
        <div class="order-price" v-if="!small">
            <p class="price-usd">{{ `${fullPrice.usd} $` }}</p>
            <p class="price-uah">{{ `${fullPrice.uah} UAH` }}</p>
        </div>
        <button class="delete" v-if="!small" @click.stop="showPopUp"></button>
        <div class="order-arrow" v-if="order.id === currentId"></div>
    </div>
</template>

<script>
import incline from '../incline'
import getProperDate from '../getProperDate'

export default {
    name: "OrderItem",
    props: {
        order: Object,
        small: Boolean
    },
    data () {
        return {
            full: true,
            showArrow: false
        }
    },
    computed: {
        properDate () {
            return getProperDate(this.order.date);
        },
        productsInOrder () {
            return this.$store.getters.getProductsInOrder(this.order.id);
        },
        numberOfProducts () {
            let number = this.productsInOrder.length;
            let text = incline(number, ['Продукт', 'Продукта', 'Продуктов']);

            return {number, text};
        },
        fullPrice () {
            let uah = 0,
                usd = 0;
            this.productsInOrder.forEach( product => {
                product.price.forEach( p => {
                    if (p.symbol === 'USD') {
                        usd += p.value;
                    }
                    else if (p.symbol === 'UAH'){
                        uah += p.value;
                    }
                });
            });

            return {usd, uah};
        },
        currentId () {
            return this.$store.state.idToShow;
        }
    },
    methods: {
        openProducts () {
            this.showArrow = true;
            this.$store.commit('set', {type: 'idToShow', item: this.order.id});
            this.$emit('goSmall', this.order.id);
        },
        showPopUp() {
            this.$store.commit('set', {type: 'idToDelete', item: this.order.id});
            this.$store.commit('set', {type: 'showPopUp', item: true});
            this.$emit('showPopUp');
        }
    }
}
</script>

<style>
    .delete {
        flex-basis: 8%;
        background: url("../assets/delete.png") center no-repeat;
        background-size: 25%;
        border: none;
        cursor: pointer;
        outline: none;
    }
    .delete:hover {
        background-size: 30%;
    }
    .date-short, .price-usd, .text {
        color: lightslategray;
        font-size: 15px;
        margin-bottom: 0;
    }
    .date-full, .price-uah, .guarantee {
        margin-top: 0;
        font-weight: 600;
        color: rgb(86, 94, 99);
    }
    .title-text {
        color: rgb(86, 94, 99);
        font-size: 20px;
        text-decoration: underline lightgrey;
    }
</style>
<style scoped>
    .order {
        margin: 1% 0 0 0;
        border: solid 1px lightgrey;
        border-radius: 5px;
        display: flex;
    }
    .order-title {
        flex-basis: 50%;
        overflow: hidden;
        display: flex;
        padding-left: 3%;
        align-items: center;
    }
    .order-products {
        flex-basis: 10%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
    }
    .order-products-small {
        flex-basis: 50% !important;
        padding-left: 3%;
    }
    .order-products-icon {
        min-width: 35px;
        min-height: 35px;
        border: solid 1px black;
        border-radius: 50%;
        background: url("../assets/lines.png") center no-repeat;
        background-size: 70%;
        margin-right: 4%;
    }
    .order-products-number {
        font-size: 25px;
        color: rgb(86, 94, 99);
    }
    .order-products-text {
        color: lightslategray;
        font-size: 15px;
    }
    .order-date {
        flex-basis: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .order-date-small {
        flex-basis: 50% !important;
    }
    .order-price {
        flex-basis: 12%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .order:hover {
        box-shadow: 15px 15px 40px -10px rgba(0, 0, 0, .2);
    }
    .order-arrow {
        flex-basis: 15%;
        background-color: lightgrey;
        background-image: url("../assets/arrow.png");
        background-size: 30%;
        background-position: center;
        background-repeat: no-repeat;
    }

</style>
