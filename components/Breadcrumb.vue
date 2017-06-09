<template>
  <ol class="breadcrumb">
    <li v-for="(link, text, index) in items" class="breadcrumb-item" :class="{active: (index == (count - 1))}">
      <a v-if="link" :href="link">{{ text }}</a>
      <template v-else>{{text}}</template>
    </li>
  </ol>
</template>

<script>

export default {
  components: {
  },

  props: {
    items: {
      default: () => { }
    }
  },

  computed: {
    count() {
      return Object.keys(this.items).length;
    }
  }
}
</script>
