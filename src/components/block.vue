<template>
  <div style="display: block">
    <div class="shimmer shimmer-block" :style="styles"></div>
  </div>
</template>

<script>
import { dimensions } from '../mixins'

export default {
  name: 'blockShimmer',

  mixins: [
    dimensions
  ],

  computed: {
    styles () {
      return {
        width: '100%',
        maxWidth: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style scoped>
@import '../shimmer';
</style>
