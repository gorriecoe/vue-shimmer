<template>
  <div>
    <p v-for="(lines, index) in paragraphs" v-bind:key="index">
      <sentencesShimmer :lines="lines"></sentencesShimmer>
    </p>
  </div>
</template>

<script>
import sentencesShimmer from './sentences'
import { text } from '../mixins'

export default {
  name: 'paragraghsShimmer',

  mixins: [
    text
  ],

  components: {
    sentencesShimmer
  },

  props: {
    total: {
      type: Number,
      default: 4
    }
  },

  data () {
    return {
      paragraphs: []
    }
  },

  mounted () {
    this.setParagraphs()
  },

  methods: {
    setParagraphs () {
      const paragraphs = []
      const lines = [
        4,
        2,
        3,
        4,
        2
      ]
      let lineIndex = 0
      for (let i = 0; i < this.total; i++) {
        paragraphs.push(lines[lineIndex])
        lineIndex = lineIndex >= (lines.length - 1) ? 0 : lineIndex + 1
      }
      this.paragraphs = paragraphs
    }
  }
}
</script>
