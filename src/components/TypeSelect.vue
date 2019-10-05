<template>
    <div class="type-select">
        <label class="type" for="select-type">
            Тип:
        </label>
        <select class="select" id="select-type" v-model="selected">
            <option disabled value="">Выберите тип</option>
            <option>Monitors</option>
            <option>Keyboard</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "TypeSelect",
        computed: {
            selected: {
                set (value) {
                    this.$store.dispatch('FILTERED_PRODUCTS', value);
                }
            }
        }

    }
</script>

<style scoped>
    .type-select {
        flex-basis: 20%;
    }
    .type {
        color: lightslategrey;
        font-weight: 500;
        margin-left: 4%;
        flex-basis: 25%;
    }
    .select {
        width: 80%;
        background-color: white;
        font-weight: 600;
    }
</style>
