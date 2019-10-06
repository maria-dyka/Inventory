<template>
    <section class="products-list">
        <ProductItem v-for="product in products"
                     :key="product.id"
                     :product="product"></ProductItem>
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
    }

    @media screen and (max-width: 1640px){
        .products-list {
            overflow-x: scroll;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background-color: rgba(0,0,0,0.5);
            box-shadow: 0 0 1px rgba(255,255,255,0.5);
        }
        ::-webkit-scrollbar-track {
            border: solid 1px lightslategray;
        }
    }
</style>
