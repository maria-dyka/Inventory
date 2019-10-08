<template>
    <section class="orders">
        <div class="orders-header">
            <button class="orders-header-add">+</button>
            <span class="orders-header-amount">{{ `Приходы / ${orders.length}` }}</span>
        </div>
        <OrdersList :orders="orders" @showModal="showModal"></OrdersList>
        <popUp v-show="showPopUp">
            <h3>Вы уверены, что хотите удалить этот приход?</h3>
        </popUp>
    </section>
</template>

<script>
import OrdersList from '../components/OrdersList'
import popUp from '../components/popUp'
export default {
    name: "Orders",
    computed: {
      orders () {
          return this.$store.state.orders
      },
      showPopUp() {
          return this.$store.state.showPopUp;
      }
    },
    components: {
        OrdersList,
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
    .orders {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        height: 100%;
        overflow: hidden;
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
        background-color: rgb(72, 176, 44);
        font-weight: 700;
        font-size: 20px;
        border-radius: 50%;
        border: solid 4px rgb(62, 138, 41);
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
