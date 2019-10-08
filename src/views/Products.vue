<template>
    <section class="products">
        <div class="products-header">
            <span class="products-header-amount">{{ `Продукты / ${products.length}` }}</span>
            <TypeSelect></TypeSelect>
            <SpecificationSelect></SpecificationSelect>
        </div>
        <ProductsList :products="products" @showModal="showModal"></ProductsList>
        <popUp v-show="showPopUp">
            <h3>Вы уверены, что хотите удалить этот продукт?</h3>
        </popUp>
    </section>
</template>

<script>
import TypeSelect from '../components/TypeSelect'
import SpecificationSelect from '../components/SpecificationSelect'
import ProductsList from '../components/ProductsList'
import popUp from '../components/popUp'
export default {
    name: "Products",
    computed: {
      products () {
         return this.$store.getters.getFilteredProducts || this.$store.getters.getAllProducts;
      },
      showPopUp () {
          return this.$store.state.showPopUp;
      }
    },
    components: {
        TypeSelect,
        ProductsList,
        SpecificationSelect,
        popUp
    },
    methods: {
        showModal() {
            this.$store.commit('set', {type: 'showPopUp', item: true});
        }
    }
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
    .products-header-amount {
        font-size: 30px;
        font-weight: 600;
    }
</style>
