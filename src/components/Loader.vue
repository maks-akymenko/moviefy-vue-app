
<template>
  <transition name="fade">
    <div
      :class="{
        'loader-overlay': true,
        ['loader-overlay--type-' + type]: true
      }"
    >
      <div class="loader loader-overlay__loader"></div>
    </div>
  </transition>
</template>

<script>
export default  {
  props: {
    type: {
      type: String,
      default: 'none',
      validator (value) {
        return ['cards', 'none'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss">
// we use [class] to increase specifity
.loader[class] {
  width: 5em;
  height: 5em;

}
[data-loader-target] {
  position: relative;
}
.loader-overlay {
  $cards-offset: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 100;
  background-color: rgba(54, 54, 54, 0.65);
  &--type-none {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &--type-cards {
    top: $cards-offset;
    left: $cards-offset;
    right: $cards-offset;
    bottom: $cards-offset;
    border-radius: 10px;
  }
  &__loader {
    margin-top: 11rem;
  }
}
</style>