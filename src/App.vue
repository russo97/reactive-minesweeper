<template>
  <div id="app">
    <Board />
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
    position: relative;
    background-color: $gray2;

    @include sizedBox(100%);

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
