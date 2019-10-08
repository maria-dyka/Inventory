<template>
    <header class="top-menu">
        <div class="top-menu-company">
            <img src="../assets/logo.png" width="50" height="50" class="company-logo" alt="Company Logo">
            <span class="company-name">INVENTORY</span>
        </div>
        <input type="text" class="top-menu-search" placeholder="Поиск">
        <div class="top-menu-date">
            <div class="top-menu-date-full">
                <span>{{ date.day }}</span>
                <span>{{ date.fullDate }}</span>
            </div>
            <div class="top-menu-date-time">
                <div class="clock-icon"></div>
                <span id="time">{{ date.time }}</span>
            </div>

        </div>
    </header>
</template>

<script>
export default {
  name: "TopMenu",
  computed: {
      date () {
          return this.$store.getters.getCurrentDate;
      }
  }
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
    .top-menu-company {
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
    .top-menu-search {
        height: 25px;
        flex-basis: 20%;
        font-size: 15px;
        font-weight: 800;
        padding-left: 1%;
        border-radius: 5px;
        background-color: rgb(245, 247, 246);
        outline: none;
    }
    .top-menu-date {
        display: flex;
    }
    .top-menu-date-full {
        display: flex;
        flex-direction: column;
    }
    .top-menu-date-time {
        display: flex;
        align-self: flex-end;
        justify-content: space-between;
        padding-left: 9%;
    }
    .clock-icon {
        width: 15px;
        height: 15px;
        background: url("../assets/clock.png") center no-repeat;
        background-size: contain;
    }
    #time {
        padding-left: 10%;
    }
</style>
