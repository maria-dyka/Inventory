<template>
    <div class="order">
        <div class="title">{{ title }}</div>
        <div class="products"></div>
        <div class ="date"></div>
        <div class="price"></div>
        <div class="delete"></div>
    </div>
</template>

<script>
export default {
    name: "OrderItem",
    props: {
        title: String,
        id: Number
    }
}
</script>

<style scoped>
    .order {
        width: 80%;
        flex-basis: 50%;
        margin: 1% 0 2% 0;
        border: solid 1px lightslategrey;
    }
</style>
