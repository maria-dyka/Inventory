<template>
    <aside class="navigation-menu">
        <div class="profile">
            <img src="../assets/redkliff.jpeg" class="profile-photo" alt="Profile photo">
        </div>
        <div class="links">
            <router-link class="link" to="/">Приходы</router-link>
            <router-link class="link" to="/products">Продукты</router-link>
        </div>
    </aside>
</template>

<script>
export default {
  name: "NavigationMenu"
}
</script>

<style scoped>
    .profile {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 7% auto 7% auto;
    }
    .profile-photo {
        width: 40%;
        border-radius: 50%;
    }
    .navigation-menu {
        height: 100%;
        flex-basis: 20%;
        box-shadow: 15px 0 15px -10px rgba(0, 0, 0, .2);
    }
    .links {
        display: flex;
        flex-direction: column;
        margin-top: 3%;
        align-items: center;
    }
    .link {
        text-decoration: none;
        font-size: 22px;
        font-weight: 600;
        color: black;
        padding: 2% 0 1% 0;
    }
    .link:active{
        border-bottom: solid 2px green;
    }
</style>
