<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WebcompsButton>Hola</WebcompsButton>
    <WebcompsCard/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="@jfdev/webcomps-button/dist/webcomps-button.css"></style>
<style src="@jfdev/webcomps-card/dist/webcomps-card.css"></style>
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
