<template>
    <section class="orders-list">
        <OrderItem v-for="order in orders"
                   :key="order.id"
                   :order="order"></OrderItem>
    </section>
</template>

<script>
import OrderItem from './OrderItem'
export default {
  name: "OrdersList",
  props: {
      orders: Array
  },
  components: {
      OrderItem
  }
}
</script>

<style scoped>
    .orders-list {
        width: 80%;
    }
</style>
