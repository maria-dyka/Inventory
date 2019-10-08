<template>
    <div class="spec-select">
        <label class="spec-select-title" for="select-specification">
            Спецификация:
        </label>
        <select class="spec-select-list" id="select-specification">
            <option disabled selected value="">Выберите спецификацию</option>
            <option>Specification 1</option>
            <option>Specification 2</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "SpecificationSelect"
    }
</script>

<style scoped>
    .spec-select {
        flex-basis: 35%;
    }
    .spec-select-title {
        color: lightslategrey;
        font-weight: 500;
        margin-left: 2%;
    }
    .spec-select-list {
        width: 15em;
        background-color: white;
        font-weight: 600;
        outline: none;
    }
</style>
