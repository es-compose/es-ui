<script>
export default {
  render: (h) => {
    return h(this.tag,)
  },

  props: {
    type: String,
    name: String,
    value: Any,
    label: String,
    data: String | Object | Array,
    attributes:  Object
  },

  computed: {
    tag() {
      return this.types[this.type] || 'input';
    }
  },

  data() {
    return {
      types: {
        text: 'input',
        password: 'input'
      }
    }
  },

  methods: {

  }
}
</script>
