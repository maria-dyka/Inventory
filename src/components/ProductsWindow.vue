<template>
    <transition name="modal">
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
    </transition>
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
           return this.$store.state.idToShow;
       }
   }
}
</script>

<style scoped lang="scss">
    @import "../styles/_variables.scss";

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
        @extend %all-buttons;
        @extend %close-button;
    }
    .products-window-title {
        color: lightslategray;
        padding-left: 4%;
    }
    .products-window-add {
        padding-left: 4%;
    }
    .add-button {
        @extend %all-buttons;
        color: white;
        background-color: $color;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .add-text {
        color: $color;
        font-size: 15px;
        margin-left: 1%;
    }
    .modal-enter-active {
        transition: all .3s ease;
    }
    .modal-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .modal-enter, .modal-leave-to {
        transform: translateX(40%);
        opacity: 0;
    }
</style>
