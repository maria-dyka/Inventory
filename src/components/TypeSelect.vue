<template>
    <div class="type-select">
        <label class="type-select-title" for="select-type">
            Тип:
        </label>
        <select class="type-select-list" id="select-type" v-model="selected">
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
    .type-select-title {
        color: lightslategrey;
        font-weight: 500;
        margin-left: 4%;
        flex-basis: 25%;
    }
    .type-select-list {
        width: 80%;
        background-color: white;
        font-weight: 600;
    }
</style>
