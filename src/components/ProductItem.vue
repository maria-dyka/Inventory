<template>
    <div class="product">
        <p class="product-title">{{ `${title}` }} </p>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        title: String,
        id: Number
    }
}
</script>

<style scoped>
    .product {
        margin: 1% 0 1% 0;
        border: solid 1px lightslategrey;
    }
</style>
