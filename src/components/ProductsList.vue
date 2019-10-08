<template>
    <section class="products-list">
        <ProductItem v-for="product in products"
                     :key="product.id"
                     :product="product"
                     @showPopUp="$emit('showModal')"></ProductItem>
    </section>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: "ProductsList",
  props: {
      products: Array
  },
  components: {
      ProductItem
  }
}
</script>

<style scoped>
    .products-list {
        width: 80%;
        height: border-box;
        padding-bottom: 5%;
        overflow-x: scroll;
    }

    ::-webkit-scrollbar {
        height: 7px;
    }

    ::-webkit-scrollbar-track {
        border: solid 1px lightgrey;
        border-radius: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 7px;
        background-color: lightgrey;
    }

</style>
