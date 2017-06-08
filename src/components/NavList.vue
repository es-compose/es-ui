<template>
  <ul class="nav" :class="classes">
    <slot>
      <li v-for="(link, text) in items" class="nav-item">
        <a class="nav-link" :class="{active: active == text}" :href="link">
          {{ text }}
        </a>
      </li>
    </slot>
  </ul>
</template>

<script>

export default {
  props: {
    items: Object,
    layout: String,
    active: String,
    align: String
  },

  computed: {
    classes() {
      return [
        this.layout ? `nav-${this.layout}` : null,
        this.align ? `nav-${this.align}` : null
      ]
    }
  }
}
</script>
