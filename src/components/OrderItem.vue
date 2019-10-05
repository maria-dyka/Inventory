<template>
    <div class="order">
        <div class="order-title">
            <span class="order-title-text">{{ order.title }}</span>
        </div>
        <div class="order-products">
            <div class="order-products-icon"></div>
            <p class="order-products-amount">
                <span class="order-products-number">{{ numberOfProducts.number }}</span><br/>
                <span class="order-products-text">{{ numberOfProducts.text }}</span>
            </p>
        </div>
        <div class ="order-date">
            <p class="order-date-short">{{ properDate.short }}</p>
            <p class="order-date-full">{{ properDate.full }}</p>
        </div>
        <div class="order-price">
            <p class="order-price-usd">{{ `${fullPrice.usd} $` }}</p>
            <p class="order-price-uah">{{ `${fullPrice.uah} UAH` }}</p>
        </div>
        <button class="order-delete">
        </button>
    </div>
</template>

<script>
import incline from '../incline'
export default {
    name: "OrderItem",
    props: {
        order: Object
    },
    computed: {
        properDate () {
            let date = this.order.date;
            let months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
            let year = date.slice(0, 4);
            let month = months[date.slice(6, 7) - 1];
            let day = date.slice(8, 11);



            return {full: `${day} / ${month} / ${year}`,
                    short: `${date.slice(5, 7)} / 12`};
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
        }
    }
}
</script>

<style scoped>
    .order {
        width: 80%;
        flex-basis: 50%;
        margin: 1% 0 0 0;
        border: solid 1px lightgrey;
        border-radius: 5px;
        display: flex;
    }
    .order-title {
        flex-basis: 45%;
        overflow: hidden;
        display: flex;
        padding-left: 3%;
        align-items: center;
    }
    .order-title-text {
        color: rgb(86, 94, 99);
        font-size: 20px;
        border-bottom: solid 2px lightgrey;
    }
    .order-products {
        flex-basis: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
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
    .order-date-short, .order-price-usd {
        color: lightslategray;
        font-size: 15px;
        margin-bottom: 0;
    }
    .order-date-full, .order-price-uah {
        margin-top: 0;
        font-weight: 600;
        color: rgb(86, 94, 99);
    }
    .order-price {
        flex-basis: 12%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .order-delete {
        flex-basis: 8%;
        background: url("../assets/delete.png") center no-repeat;
        background-size: 25%;
        border: none;
        cursor: pointer;
    }
    .order:hover {
        box-shadow: 15px 15px 40px -10px rgba(0, 0, 0, .2);
    }

    @media screen and (max-width: 1556px) {
        .order-title-text {
            border-bottom: none;
        }
    }
</style>
