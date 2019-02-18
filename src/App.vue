<template>
  <div id="app">
    <div class="container">
      <div class="col-12">
        <section class="d-flex flex-column align-items-baseline">
          <h1>Buttons</h1>
          <WebcompsButton>Default Button</WebcompsButton>
        </section>
        <section class="mt-4">
           <h1 class="text-left">Cards</h1>
           <WebcompsCard/>
        </section>
        <p class="text-center mt-5">More components soon ...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>
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
