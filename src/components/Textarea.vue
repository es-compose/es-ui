<template>
  <textarea class="form-control" :value="value" @input="onInput($event.target.value)"></textarea>
</template>
<script>
import Base from './support/ControlBase';

export default {
  extends: Base
}
</script>
