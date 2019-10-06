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
    }
</style>
