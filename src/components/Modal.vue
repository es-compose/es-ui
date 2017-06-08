<template>
  <div class="d-inline-block">
    <!-- Modal -->
    <div ref="dialog" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog" :class="modalSize" role="document">
        <div class="modal-content">
          <div v-if="this.$slots.title" class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              <slot name="title"></slot>
            </h5>
            <button type="button" @click="close" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" @click="close" class="btn btn-secondary" :class="buttonSize">
              <slot name="close-label">Close</slot>
            </button>
            <button type="button" @click="ok" class="btn btn-primary" :class="buttonSize">
              <slot name="ok-label">Ok</slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'show',
    'size'
  ],

  computed: {
    modalSize() {
      return (this.size) ? `modal-${this.size}` : null
    },

    buttonSize() {
      return null;
      // return (this.size) ? `btn-${this.size}` : null
    }
  },

  created() {
    this.display(this.show);
    jQuery(this.$refs.dialog).on('shown.bs.modal', () => {
      this.$emit('shown', this);
    });
    jQuery(this.$refs.dialog).on('hidden.bs.modal', () => {
      this.$emit('hidden', this);
    });

    this.$watch('show', (val) => {
      console.log('value changed:', val);
      this.display(val);
    })
  },

  methods: {
    display(val) {
      console.log('showing: ', val);
      if (val) {
        jQuery(this.$refs.dialog).modal('show')
      } else {
        jQuery(this.$refs.dialog).modal('hide')
      }
    },

    close() {
      this.$emit('close', this);
    },

    ok() {
      this.$emit('ok', this);
    }
  }
}
</script>

