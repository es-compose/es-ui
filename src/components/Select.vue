<template>
  <select class="form-control" name="" id="" :value="value" @input="onInput($event.target.value)">
    <option v-for="option in data" value="option.value || option">{{ option.text || option }}</option>
  </select>
</template>

<script>
import Base from './support/ControlBase';

export default {
  extends: Base,
  props: {
    data: Array
  }
}
</script>
