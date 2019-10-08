<template>
  <div id="app">
    <TopMenu/>
    <main>
      <NavigationMenu/>
      <section class="content">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'
import NavigationMenu from './components/NavigationMenu'

export default {
  name: 'app',
  components: {
    TopMenu,
    NavigationMenu,
  },
  beforeCreate() {
    this.$store.dispatch('getProducts');
    this.$store.dispatch('getOrders');
    this.$store.dispatch('getDate');
  },
  sockets: {
    connect: function () {
      // eslint-disable-next-line no-console
      console.log('socket connected');
    },
    ping: function(data) {
      this.$store.commit('set', {type: 'socketsCount', item: data.counter});
    }
  }
}
</script>

<style>
  html {
    height: 100vh;
  }
  body {
    margin: 0;
    height: 100%;
  }
  #app{
    margin: 0;
    height: 100%;
  }
  main {
    height: 85%;
    display: flex;
    align-items: stretch;
  }
  .content {
    flex-basis: 80%;
  }
</style>
