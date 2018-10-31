<template>
  <div>
    <slot name="p"></slot>
    <slot></slot>
    <slot name="span"></slot>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
