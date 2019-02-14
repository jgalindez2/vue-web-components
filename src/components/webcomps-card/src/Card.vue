<template>
  <div class="card" 
    :style="styles"
    :class="[alignment, backgroundColor, borderColor]">
    <img v-if="showImageHeader" :src="imgSource" class="card-img-top" alt="...">
    <div class="card-header">
      <slot name="card-header">Card header</slot>
    </div>
    <div class="card-body">
      <slot name="card-body">
        <h5 class="card-title">Card body title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </slot>
    </div>
    <div class="card-footer">
      <slot name="card-footer">
        Card footer
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebcompsCard',
  props: {
    styles: {
      type: Object,
      default: () => ({ width: '18rem' }),
    },
    showImageHeader: {
      type: Boolean,
      default: false
    },
    imgSource: {
      type: String,
      default: 'http://via.placeholder.com/280x160'
    },
    alignment: {
      type: String,
      validator(prop) {
        return ['text-left', 'text-center', 'text-right'].indexOf(prop) > -1
      }
    },
    backgroundColor: {
      type: String,
      validator(prop) {
        return ['bg-primary', 'bg-danger', 'bg-success', 'bg-transparent'].indexOf(prop) > -1
      }
    },
    borderColor: {
      type: String,
      validator(prop) {
        return ['border-primary', 'border-danger', 'border-success'].indexOf(prop) > -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.125);
    .card-header, .card-footer{
      background-color: rgba(110, 91, 91, 0.03);
      padding: 8px;
    }
    .card-header{
      border-bottom: 1px solid rgba(0,0,0,.125);
    }
    .card-footer{
      border-top: 1px solid rgba(0,0,0,.125);
    }
    .card-body{
      padding: 10px;
      .card-title{
        margin-bottom: 10px;
        margin-top: 10px;
      }
      .card-text{
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .card-img-top{
      width: 100%;
      border-top-left-radius: calc(.25rem - 1px);
      border-top-right-radius: calc(.25rem - 1px);
    }
    &.text-left{
      text-align: left;
    }
    &.text-center{
      text-align: center;
    }
    &.text-right{
      text-align: right;
    }
    &.bg-primary{
      background-color: #0C66FF;
      color: white;
    }
    &.bg-danger{
      background-color: #F03D3D;
      color: white;
    }
    &.bg-success{
      background-color: #0BB07B;
      color: white;
    }
    &.bg-transparent{
      background: transparent;
    }
    &.border-primary{
      background-color: #0C66FF;
    }
    &.border-danger{
      background-color: #F03D3D;
    }
    &.border-success{
      background-color: #0BB07B;
    }
  }
</style>
