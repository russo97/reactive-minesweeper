<template>
  <section id="display">
    <div class="instructions">
      <p class="instruction">
        <kbd class="command">CLIQUE ESQUERDO</kbd> PARA EXIBIR
      </p>

      <p class="instruction">
        <kbd class="command">CLIQUE DIREITO</kbd> PARA MARCAR
      </p>

      <p class="instruction">
        PRESSIONE <kbd class="command">R</kbd> PARA REINICIAR,<kbd class="command">P</kbd> PARA PAUSAR
      </p>
    </div>

    <div class="remain-time">

    </div>
  </section>
</template>

<script>
  export default {
    name: "Display"
  }
</script>

<style lang="scss" scoped>
  #display {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 36px 13px 26px;
    @include sizedBox(100%, 93px);

    border: inset 4px;
    border-color: lighten($gray3, 12) $white1 $white1 lighten($gray3, 15);

    .instructions {
      height: 100%;
      display: flex;
      flex-direction: column;

      .instruction {
        color: $gray4;

        &:last-child {
          margin: auto 0 0;
          justify-self: flex-end;
        }

        &,
        .command {
          font: 400 .5rem / 1.0625rem 'Press Start 2P', cursive;
        }

        .command {
          padding: 4px;
          color: $white1;
          background-color: $black1;
        }
      }
    }

    .remain-time {
      background-color: $black1;

      @include sizedBox(78px, 46px);
    }
  }
</style>