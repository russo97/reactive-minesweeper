<template>
  <section id="boardcells">
  </section>
</template>

<script>
  export default {
    name: "BoardCells"
  }
</script>

<style lang="scss" scoped>
  #boardcells {
    @include sizedBox(100%, 520px);

    background: red;
    border: inset 4px;
    border-color: lighten($gray3, 12) $white1 $white1 lighten($gray3, 15);
  }
</style>