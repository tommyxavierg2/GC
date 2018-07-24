<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

.gc-blue-background {
  background-color: #23A5DC;
}

.gc-white-text {
  color: white;
}

.gc-bold {
  font: bold;
}

.gc-blue-border {
  color: #23A5DC;
}

</style>
