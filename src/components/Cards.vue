<template>
  <div :class="classes">
    <slot>
      <Card v-for="(model, index) in models" :model="model" :key="index" />
    </slot>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card
  },

  props: {
    layout: {
      type: String,
      default: 'group'
    },

    models: Array
  },

  computed: {
    classes() {
      return 'card-' + this.layout;
    }
  }
}
</script>
