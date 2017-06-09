<template>
  <input class="form-control" :type="type" :value="value" @input="onInput($event.target.value)">
</template>

<script>
import Base from './support/ControlBase';

export default {
  extends: Base
}
</script>
