<template>
  <button class="btn"
    :style="styles"
    :class="[type, size]"
    :disabled="disabled">
    <slot>Button Text</slot>
  </button>
</template>

<script>
export default {
  name: 'WebcompsButton',
  props: {
    styles: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal',
      validator(prop) {
        return ['small', 'block'].indexOf(prop) > -1
      }
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    cursor: pointer;
    color: white;
    text-align: center;
    border-radius: 5px;
    transition: color 15s ease-in-out,background-color
      .15s ease-in-out,border-color
      .15s ease-in-out,box-shadow
      .15s ease-in-out;
    &.normal{
      padding: 20px;
      font-size: 14px;
    }
    &.small{
      padding: 10px;
      font-size: 10px;
    }
    &.block{
      width: 100;
    }
    &.primary{
      background-color: #5AACFF;
      &:hover{
        background-color: #007FFF;
      }
    }
    &.danger{
      background-color: #DD2727;
      &:hover{
        background-color: #BD0303;
      }
    }
  }
</style>
