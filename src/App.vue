<template>
  <div id="app">
    <Buttons/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Buttons from './components/Buttons'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Buttons
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
