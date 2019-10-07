<template>
    <section class="products-window">
        <section class="products-window-header">
            <h2 class="products-window-title">{{ title }}</h2>
            <div class="products-window-add">
                <button class="add-button">+</button>
                <span class="add-text">Добавить продукт</span>
            </div>
        </section>
        <button class="products-window-close" @click="$emit('hide')">x</button>
        <ProductItem v-for="product in products"
                     :key="product.id"
                     :product="product"
                     :short="true"
                     :orderId="id"></ProductItem>
    </section>
</template>

<script>
import ProductItem from './ProductItem'
export default {
   name: "ProductsWindow",
   components: {
       ProductItem
   },
   computed: {
       title () {
           return this.$store.getters.getOrderTitleById(this.id);
       },
       products () {
           return this.$store.getters.getProductsInOrder(this.id);
       },
       id () {
           return this.$store.state.id;
       }
   }
}
</script>

<style scoped>
    .products-window {
        flex-basis: 68%;
        border: solid 1px lightgrey;
        border-radius: 5px;
        position: relative;
    }
    .products-window-header {
        margin-bottom: 2%;
    }
    .products-window-close {
        position: absolute;
        top: -7%;
        left: 97%;
        width: 38px;
        height: 38px;
        background-color: white;
        font-size: medium;
        color: lightgrey;
        font-weight: 600;
        outline: none;
        border: none;
        border-radius: 50%;
        box-shadow: 3px 3px 11px -4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
    .products-window-title {
        color: lightslategray;
        padding-left: 4%;
    }
    .products-window-add {
        padding-left: 4%;
    }
    .add-button {
        color: white;
        background-color: rgb(72, 176, 44);
        font-weight: 600;
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
    }
    .add-text {
        color: rgb(72, 176, 44);
        font-size: 15px;
        margin-left: 1%;
    }
</style>
