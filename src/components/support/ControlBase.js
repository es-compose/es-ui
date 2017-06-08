export default {
  props: {
    value: {},
    type: String
  },

  methods: {
    onInput(val) {
      this.$emit('input', val);
    }
  }
}