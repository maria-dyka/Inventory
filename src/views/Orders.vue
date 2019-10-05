<template>
    <section class="orders">
        <div class="orders-header">
            <button class="orders-add">+</button>
            <span class="orders-amount">{{ `Приходы / ${orders.length}` }}</span>
        </div>
        <OrderItem v-for="order in orders"
                   :key="order.id"
                   :order="order"></OrderItem>
    </section>
</template>

<script>
import OrderItem from '../components/OrderItem'
export default {
    name: "Orders",
    computed: {
      orders () {
          return this.$store.state.orders
      }
    },
    components: {
        OrderItem
    }
}
</script>

<style scoped>
    .orders {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .orders-header {
        width: 80%;
        display: flex;
        align-items: center;
        margin: 4% 0 4% 0;
    }
    .orders-add {
        width: 38px;
        height: 38px;
        color: white;
        background-color: limegreen;
        font-weight: 700;
        font-size: 20px;
        border-radius: 50%;
        border: solid 3px green;
        box-shadow: 4px 4px 11px -4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
    .orders-amount {
        font-size: 30px;
        font-weight: 600;
        margin-left: 20px;
    }
</style>
