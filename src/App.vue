<template>
  <div id="app">
    <Board msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Board from './components/Board.vue';

  export default {
    name: 'App',
    components: {
      Board
    }
  }
  </script>

<style lang="scss">
  #app {
    height: 100%;
    position: relative;
  }
</style>
