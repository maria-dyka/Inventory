<template>
    <section class="orders">
        <div class="orders-header">
            <button class="orders-header-add">+</button>
            <span class="orders-header-amount">{{ `Приходы / ${orders.length}` }}</span>
        </div>
        <OrdersList :orders="orders"></OrdersList>
    </section>
</template>

<script>
import OrdersList from '../components/OrdersList'
export default {
    name: "Orders",
    computed: {
      orders () {
          return this.$store.state.orders
      }
    },
    components: {
        OrdersList
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
    .orders-header-add {
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
        outline: none;
    }
    .orders-header-add:hover {
        box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, .2);
    }
    .orders-header-amount {
        font-size: 30px;
        font-weight: 600;
        margin-left: 20px;
    }

</style>
