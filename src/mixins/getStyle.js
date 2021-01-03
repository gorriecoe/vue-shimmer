/**
 * Get the given property computed styles.
 *
 * @param {DOMString} property
 */
export default {
  methods: {
    getStyle (property) {
      return window.getComputedStyle(this.$el).getPropertyValue(property)
    }
  }
}
