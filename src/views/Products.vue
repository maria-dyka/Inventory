<template>
    <section class="products">
        <div class="products-header">
            <span class="products-amount">{{ `Продукты / ${products.length}` }}</span>
            <TypeSelect></TypeSelect>
            <SpecificationSelect></SpecificationSelect>
        </div>
        <ProductsList :products="products"></ProductsList>
    </section>
</template>

<script>
import TypeSelect from '../components/TypeSelect'
import SpecificationSelect from '../components/SpecificationSelect'
import ProductsList from '../components/ProductsList'
export default {
    name: "Products",
    computed: {
      products () {
         return this.$store.getters.getFilteredProducts || this.$store.getters.getAllProducts;
      }
    },
    components: {
        TypeSelect,
        ProductsList,
        SpecificationSelect
    },
    beforeCreate: function () {
        this.$store.dispatch('getProducts');
    },
}
</script>

<style scoped>
    .products {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .products-header {
        width: 80%;
        display: flex;
        align-items: center;
        margin: 4% 0 4% 0;
    }
    .products-amount {
        font-size: 30px;
        font-weight: 600;
    }
</style>
