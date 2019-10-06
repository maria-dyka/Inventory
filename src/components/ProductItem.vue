<template>
    <div class="product">
        <div class="product-dot"></div>
        <p class="product-title">{{ `${title}` }} </p>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        product: Object
    }
}
</script>

<style scoped>
    .product {
        margin: 1% 0 1% 0;
        border: solid 1px lightslategrey;
    }
</style>
