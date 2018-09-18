<template>
<div class="slider__slide js-slide"  v-bind:style='"background-image: url(" + slide.img + ")"'>
</div>
</template>
<script>
export default {
  data: () => ({}),
  props: {
    slide: Object
  },
  mounted(){

  }
};
</script>
