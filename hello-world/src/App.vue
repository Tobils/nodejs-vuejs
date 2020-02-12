<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Nav msg="hi suhada"/> -->
    <Logo/>
  </div>
</template>

<script>
//  import HelloWorld from './components/HelloWorld.vue'
// import Nav from './components/nav.vue'
import Logo from './components/logo'

export default {
  name: 'App',
  components: {
    Logo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
