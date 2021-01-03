<template>
  <div class="shimmer shimmer-image" :style="styles">
    <div :style="ratioStyles"></div>
  </div>
</template>

<script>
import { dimensions, getStyle } from '../mixins'
const WIDTH = '100%'

export default {
  name: 'imageShimmer',

  mixins: [
    dimensions,
    getStyle
  ],

  data () {
    return {
      ratio: 0
    }
  },

  mounted () {
    this.setRatio()
  },

  computed: {
    styles () {
      return {
        width: WIDTH,
        maxWidth: this.width + 'px',
        maxHeight: this.height + 'px'
      }
    },
    ratioStyles () {
      return {
        width: WIDTH,
        paddingTop: this.ratio + '%'
      }
    }
  },

  methods: {
    setRatio () {
      this.ratio = this.height / this.width * 100
    }
  }
}
</script>

<style scoped>
@import '../shimmer';
</style>
