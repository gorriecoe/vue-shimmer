<template>
  <div style='display: inline-block'>
    <div class="shimmer shimmer-circle" :style="styles"></div>
  </div>
</template>

<script>
import { getStyle } from '../mixins'

export default {
  name: 'circleShimmer',

  mixins: [
    getStyle
  ],

  props: {
    size: String
  },

  data () {
    return {
      dimensions: 0
    }
  },

  mounted () {
    this.setStyles()
  },

  computed: {
    styles () {
      return {
        width: this.dimensions,
        height: this.dimensions,
        borderRadius: '50%'
      }
    }
  },

  methods: {
    setStyles () {
      this.dimensions = this.size || parseFloat(this.getStyle('font-size')) + 1 + 'px'
    }
  }
}
</script>

<style scoped>
@import '../shimmer';
</style>
