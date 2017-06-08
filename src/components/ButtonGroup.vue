<template>
  <div :class="classes" role="group" aria-label="Buttons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    layout: String,
    size: String
  },

  computed: {
    classes() {
      return [
        this.size ? `btn-group-${this.size}` : null,
        this.layout == 'vertical' ? 'btn-group-vertical' : 'btn-group'
      ]
    }
  }
}
</script>

