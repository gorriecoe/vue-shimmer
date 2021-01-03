<template>
  <div :style="styles">
    <div :style="lineStyles">
      <div class="shimmer shimmer-text" :style="textStyles"></div>
    </div>
  </div>
</template>

<script>
import { getStyle } from '../mixins'
const WIDTH = '100%'

export default {
  name: 'textShimmer',

  mixins: [
    getStyle
  ],

  props: {
    width: {
      type: String,
      default: '45%'
    }
  },

  data () {
    return {
      height: 0,
      backgroundColor: null,
      lineHeight: 0
    }
  },

  mounted () {
    this.setStyles()
  },

  computed: {
    styles () {
      return {
        width: WIDTH,
        maxWidth: this.width,
        display: 'inline-block'
      }
    },
    textStyles () {
      return {
        height: this.height,
        width: WIDTH,
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    },
    lineStyles () {
      return {
        height: this.lineHeight,
        width: WIDTH,
        display: 'block'
      }
    }
  },

  methods: {
    setStyles () {
      this.height = parseFloat(this.getStyle('font-size')) + 1 + 'px'
      this.lineHeight = this.getStyle('line-height')
    }
  }
}
</script>

<style scoped>
@import '../shimmer';
</style>
