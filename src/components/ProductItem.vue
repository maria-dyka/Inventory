<template>
    <div class="product">
        <div class="product-dot"></div>
        <div class="product-title">
            <span class="title-text" id="product-title-text">{{ product.title }}</span>
            <span class="text" id="product-title-serial">{{ `SN-${product.serialNumber}` }}</span>
        </div>
        <div class="product-guarantee">
            <span class="guarantee" id="guarantee-start"><span class="text">c </span>{{ guaranteeDate.start }}</span>
            <span class="guarantee" id="guarantee-end"><span class="text">по </span>{{ guaranteeDate.end }}</span>
        </div>
        <div class="product-condition">
            <span>{{ isNew }}</span>
        </div>
        <div class="product-price">
            <p class="price-usd">{{ `${price.usd} $` }}</p>
            <p class="price-uah">{{ `${price.uah} UAH` }}</p>
        </div>
        <div class="product-order">
            <span class="title-text" id="product-order-text">{{ relatedOrder.title }}</span>
        </div>
        <div class="product-date">
            <p class="date-short">{{ date.short }}</p>
            <p class="date-full">{{ date.full }}</p>
        </div>
        <button class="delete"></button>
    </div>
</template>

<script>
import getProperDate from '../getProperDate'

export default {
    name: "ProductItem",
    props: {
        product: Object
    },
    computed: {
        guaranteeDate () {
            let start = getProperDate(this.product.guarantee.start).guarantee;
            let end = getProperDate(this.product.guarantee.end).guarantee;

            return {start, end};
        },
        isNew () {
            if(this.product.isNew === 1){
                return `новый`;
            }
            else {
                return `Б/У`;
            }
        },
        price () {
            let uah, usd;
            this.product.price.forEach(p => {
                if(p.symbol === 'USD'){
                    usd = p.value;
                }
                else if(p.symbol === 'UAH'){
                    uah = p.value;
                }
            });

            return {uah, usd};
        },
        relatedOrder () {
            return this.$store.getters.getOrderFromProduct(this.product.order);
        },
        date () {
            return getProperDate(this.product.date);
        }
    }
}
</script>

<style scoped>
    .product {
        margin: 1% 0 1% 0;
        border: solid 1px lightgrey;
        border-radius: 5px;
        display: flex;
    }
    .product:hover {
        box-shadow: 0 15px 40px -10px rgba(0, 0, 0, .2);
    }
    .product-dot {
        width: 10px;
        height: 10px;
        background-color: yellow;
        border-radius: 50%;
        align-self: center;
        margin: 0 10px 0 10px;
    }
    .product-title {
        flex-basis: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 1%;
    }
    .product-guarantee {
        flex-basis: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-condition {
        flex-basis: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(86, 94, 99);
        font-weight: 600;
    }
    .product-price {
        flex-basis: 10%;
    }
    .product-order {
        flex-basis: 26%;
        display: flex;
        align-items: center;
    }
    .product-date {
        flex-basis: 11%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1732px){
        .product-guarantee {
            flex-basis: 12%;
        }
        .delete {
            flex-basis: 6%;
        }
    }

    @media screen and (max-width: 1640px){
        .product {
            width: 130vh;
        }
    }

    @media screen and (max-width: 1340px){
        .product {
            width: 150vh;
        }
    }

    @media screen and (max-width: 1250px){
        .product {
            width: 170vh;
        }
    }

</style>
