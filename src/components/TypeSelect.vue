<template>
    <div class="type-select">
        <label class="type-select-title" for="select-type">
            Тип:
        </label>
        <select class="type-select-list" id="select-type" v-model="selected">
            <option disabled :value="selected">Выберите тип</option>
            <option value="">Все</option>
            <option value="Monitors">Мониторы</option>
            <option value="Keyboard">Клавиатуры</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "TypeSelect",
        computed: {
            selected: {
                get () {
                  return this.$store.state.criteria;
                },
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
        margin-left: 2%;
    }
    .type-select-title {
        color: lightslategrey;
        font-weight: 500;
        margin-left: 4%;
        flex-basis: 25%;
    }
    .type-select-list {
        width: 76%;
        background-color: white;
        font-weight: 600;
        outline: none;
    }
</style>
