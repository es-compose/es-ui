<template>
  <div id="myAlert" ref="alert" class="alert" :class="classArray" role="alert">
    <button v-if="dismissible" type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
  </div>
</template>


<script>
export default {
  props: {
    dismissible: {
      type: Boolean,
      default: false
    },
    styling: {
      type: String,
      default: 'info'
    },
    show: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classArray() {
      let classes = [];
      if (this.dismissible) {
        classes.push('alert-dismissible fade')
      }

      if (this.show) {
        classes.push('show');
      }

      classes.push(`alert-${this.styling}`);

      return classes;
    }
  },

  mounted() {

    if ($) {
      $(this.$refs.alert).on('close.bs.alert', () => this.$emit('close', this.$refs.alert, this));
      $(this.$refs.alert).on('closed.bs.alert', () => this.$emit('closed', this.$refs.alert, this));
    }
  }
}
</script>
