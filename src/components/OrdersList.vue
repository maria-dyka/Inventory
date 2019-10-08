<template>
    <section class="orders-list">
        <div :class="{'orders-list-wrapper': big, 'orders-list-small': small}">
            <OrderItem v-for="order in orders"
                       :key="order.id"
                       :order="order"
                       :small="small"
                       @goSmall="goSmall" @showPopUp="$emit('showModal')"></OrderItem>
        </div>
        <ProductsWindow v-show="showProducts" @hide="hideProducts"></ProductsWindow>
    </section>
</template>

<script>
import OrderItem from './OrderItem'
import ProductsWindow from './ProductsWindow'
export default {
  name: "OrdersList",
  props: {
      orders: Array
  },
  components: {
      OrderItem,
      ProductsWindow
  },
  computed: {
      big () {
          return this.$store.state.big;
      },
      small () {
          return this.$store.state.small;
      },
      showProducts () {
          return this.$store.state.showProducts;
      }
  },
  methods: {
      goSmall () {
          this.$store.commit('set', {type: 'big', item: false});
          this.$store.commit('set', {type: 'small', item: true});
          this.$store.commit('set', {type: 'showProducts', item: true});
      },
      hideProducts () {
          this.$store.commit('set', {type: 'showProducts', item: false});
          setTimeout(() => {
              this.$store.commit('set', {type: 'big', item: true});
              this.$store.commit('set', {type: 'small', item: false});
              this.$store.commit('set', {type: 'idToShow', item: null});
          }, 300);
      }
  }
}
</script>

<style scoped>
    .orders-list {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    .orders-list-wrapper{
        flex-basis: 100%;
    }
    .orders-list-small {
        flex-basis: 30%;
    }

</style>
