<template>
  <div class="form-group">
    <label v-if="model.label">{{ model.label }}</label>
    <component :is="component" :type="model.type" v-model="model.value" :data="model.data"></component>
  </div>
</template>

<script>
import InputControl from './Input.vue';
import TextAreaControl from './Textarea.vue';
import SelectControl from './Select.vue';


export default {
  components: {
    InputControl,
    TextAreaControl,
    SelectControl
  },

  props: {
    model: Object
  },

  computed: {
    component() {
      let type = this.model.type || 'text';
      return this.types[type];
    }
  },

  data() {
    return {
      types: {
        text: InputControl,
        password: InputControl,
        number: InputControl,
        email: InputControl,
        url: InputControl,
        textarea: TextAreaControl,
        select: SelectControl
      }
    }
  },

  created() {
    console.log('control created: ', this);
  }
}
</script>

