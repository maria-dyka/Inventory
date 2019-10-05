<template>
    <header class="top-menu">
        <div class="company">
            <img src="../assets/logo.png" width="50" height="50" class="company-logo" alt="Company Logo">
            <span class="company-name">INVENTORY</span>
        </div>
        <input type="text" class="search" placeholder="Поиск">
        <div class="date">
            <p>
                Здесь может быть когда-то будет дата <br/>
                И может быть какой-то счетчик:)
            </p>
        </div>
    </header>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style scoped>
    .top-menu {
        height: 10%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0 15px 15px -10px rgba(0, 0, 0, .2);
    }
    .company {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .company-name {
        font-size: 20px;
        color: green;
        font-weight: 700;
        margin-left: 20px;
    }
    .search {
        height: 25px;
        flex-basis: 20%;
        font-size: 15px;
        font-weight: 800;
        padding-left: 1%;
        border-radius: 5px;
        background-color: rgb(245, 247, 246);
    }
</style>
