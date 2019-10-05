<template>
    <div class="order">
        <div class="title">{{ order.title }}</div>
        <div class="products">{{ numberOfProducts }}</div>
        <div class ="date">
            <p>{{ properDate.short }}</p>
            <p>{{ properDate.full }}</p>
        </div>
        <div class="price">
            <p>{{ `${fullPrice.USD} $` }}</p>
            <p>{{ `${fullPrice.UAH} UAH` }}</p>
        </div>
        <div class="delete"></div>
    </div>
</template>

<script>
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
            return this.productsInOrder.length;
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

            return {USD: usd, UAH: uah};
        }
    }
}
</script>

<style scoped>
    .order {
        width: 80%;
        flex-basis: 50%;
        margin: 1% 0 2% 0;
        border: solid 1px lightslategrey;
    }
</style>
