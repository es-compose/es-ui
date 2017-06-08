<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" :data-target="'#' + navId" :aria-controls="navId" aria-expanded="false" aria-label="Toggle navigation">
      <slot name="menu-icon">
        <span class="navbar-toggler-icon"></span>
      </slot>
    </button>
    <h1 class="navbar-brand mb-0" href="#">
      <slot name="brand">Navbar</slot>
    </h1>
  
    <div class="collapse navbar-collapse" :id="navId">
      <slot>
  
      </slot>
    </div>
  </nav>
</template>

<script>
import NavList from './NavList.vue';

export default {
  components: {
    NavList
  },

  props: {
    items: Object
  },

  data() {
    return {
      _id: 1
    }
  },

  created() {
    this._id++;
    console.log('children', this.$slots);
  },

  computed: {
    navId() {
      return 'navbar-' + this._id;
    }
  }
}
</script>
