<template>
  <slide>
    <img :src="image[index]" alt="">
    <div class="detailImg">
      <h3>Salut</h3>
      <p>afsdgdfgdfg</p>
    </div>
  </slide>
</template>

<script>
import { Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Slide
  },

  props: {
    images: {
      type: Array,
      required: true,
    }
  },
};

</script>