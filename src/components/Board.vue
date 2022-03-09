<template>
  <main id="main">
    <Display />

    <BoardCells />
  </main>
</template>

<script>
  import Display from "@components/Display";
  import BoardCells from "@components/BoardCells";

  export default {
    name: "Board",

    components: {
      Display,
      BoardCells
    }
  }
</script>

<style scoped lang="scss">
  #main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 18px 17px 22px;
    background-color: $gray1;

    @include sizedBox(562px, 672px);

    border: outset 4px;
    border-color: $white1 lighten($gray3, 15) lighten($gray3, 12) $white1;
  }
</style>
