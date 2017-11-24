<template>
  <div id="app">
    <users></users>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/users.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,Users
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
</style>
