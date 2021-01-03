<template>
  <div>
    <!-- Use a span to help simulate line styles of paragraphs -->
    <span class="line" v-for="(width, index) in sentences" v-bind:key="index">
      <textShimmer :width="width"></textShimmer>
    </span>
  </div>
</template>

<script>
import textShimmer from './text'

export default {
  name: 'sentencesShimmer',

  components: {
    textShimmer
  },

  props: {
    lines: {
      type: Number,
      default: 4
    }
  },

  data () {
    return {
      sentences: []
    }
  },

  mounted () {
    this.setSentences()
  },

  methods: {
    setSentences () {
      const sentences = []
      const widths = [
        90,
        70,
        45,
        60,
        80
      ]
      let widthIndex = 0
      for (let i = 0; i < this.lines; i++) {
        sentences.push(widths[widthIndex] + '%')
        widthIndex = widthIndex >= (widths.length - 1) ? 0 : widthIndex + 1
      }
      this.sentences = sentences
    }
  }
}
</script>

<style scoped>
  .line {
    display: block;
  }
</style>
