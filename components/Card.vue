<template>
  <div class="card" :class="classArray">
    <div v-if="this.$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
  
    <template v-if="hasModel">
      <img v-if="model.image" class="card-img-top" src="http://via.placeholder.com/950x150/fff000/000000" alt="">
      <div class="card-block">
        <h4 v-if="model.title" class="card-title">{{ model.title}}</h4>
        <h6 v-if="model.subtitle" class="card-subtitle mb-2 text-muted">{{ model.subtitle }}</h6>
        <p v-if="model.text" class="card-text">{{ model.text }}</p>
        <div v-if="model.content" v-html="model.content"></div>
      </div>
    </template>
  
    <slot></slot>
    <slot name="block" class="card-block"></slot>
  
    <div v-if="this.$slots.footer" class="card-footer text-muted">
      <slot name="footer"></slot>
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
    inverse: Boolean,
    styling: String,
    align: String,
    model: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    hasModel() {
      return Object.keys(this.model).length > 0;
    },

    classArray() {
      let classes = [];
      const inverse = this.inverse || this.model.inverse || false;
      if (inverse) {
        classes.push('card-inverse');
      }

      const styling = this.styling || this.model.styling || null;
      if (styling) {
        classes.push('card-' + styling);
      }

      if (this.align) {
        classes.push('text-' + this.align);
      }

      return classes;
    }

  }
}
</script>

