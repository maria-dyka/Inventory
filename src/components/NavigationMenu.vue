<template>
    <aside class="navigation-menu">
        <div class="navigation-menu-user">
            <img src="../assets/redkliff.jpeg" class="navigation-menu-user-photo" alt="Profile photo">
        </div>
        <div class="navigation-menu-links">
            <router-link class="navigation-menu-link" to="/">Приходы</router-link>
            <router-link class="navigation-menu-link" to="/products">Продукты</router-link>
        </div>
    </aside>
</template>

<script>
export default {
  name: "NavigationMenu"
}
</script>

<style scoped lang="scss">
    @import "../styles/_variables.scss";
    .navigation-menu-user {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 7% auto 7% auto;
    }
    .navigation-menu-user-photo {
        width: 40%;
        border-radius: 50%;
    }
    .navigation-menu {
        height: 100%;
        flex-basis: 20%;
        box-shadow: 15px 0 15px -10px rgba(0, 0, 0, .2);
    }
    .navigation-menu-links {
        display: flex;
        flex-direction: column;
        margin-top: 3%;
        align-items: center;
    }
    .navigation-menu-link {
        text-decoration: none;
        font-size: 22px;
        font-weight: 600;
        color: black;
        padding: 2% 0 1% 0;
    }
    .router-link-exact-active {
        border-bottom: solid 2px $color;
    }
</style>
