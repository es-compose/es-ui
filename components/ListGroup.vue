<template>
  <div class="list-group">
    <a v-for="(item, index) in items" class="list-group-item" :class="{
                  'list-group-item-action' : (item.link),
                  'active' : item.active,
                  'justify-content-between': (item.badge)
              }" :href="item.link">
  
      {{ item.text }}
  
      <span v-if="item.badge" class="badge badge-default badge-pill">{{ item.badge }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {

    items: Array
  },

  computed: {

  }
}
</script>
