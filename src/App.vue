<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <router-link class="route" to="/questions">Go to Questions</router-link>
    <router-link  class="route" to="/">Go to Home</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.route{
  padding: 10px;
  margin: 10px;
}
</style>
