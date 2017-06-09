<template>
  <button type="button" class="btn" :class="classes" :disabled="disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: String,
    label: String,
    styling: String,
    active: Boolean,
    disabled: Boolean
  },

  computed: {
    classes() {
      return [
        this.size ? 'btn-' + this.size : null,
        this.styling ? 'btn-' + this.styling : null,
        this.active ? 'active' : null,
        this.disabled ? 'disabled' : null
      ];
    }
  },

  methods: {
    onClick() {
      this.$emit('click', this);
    }
  }
}
</script>

