<template>
    <div class="specification-select">
        <label class="specification" for="select-specification">
            Спецификация:
        </label>
        <select class="select" id="select-specification">
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
    .specification-select {
        flex-basis: 35%;
    }
    .specification {
        color: lightslategrey;
        font-weight: 500;
        margin-left: 2%;
    }
    .select {
        width: 15em;
        background-color: white;
        font-weight: 600;
    }
</style>
