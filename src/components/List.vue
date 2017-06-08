<template>
  <component :is="type">
    <li v-for="(item, key, index) in items" :class="listClass">
      <template v-if="index === undefined">{{ item }}</template>
      <a v-else :href="item" :title="key" :class="[(activeKey == key) ? 'active' : null, ...linkClass]">{{ key }}</a>
    </li>
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'ul'
    },

    items: {
      default: () => []
    },
    activeKey: String,


    listClass: String,
    linkClass: String,
    activeClass: {
      type: String,
      default: 'active'
    }
  }
}
</script>

