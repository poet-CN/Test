<template>
  <child1>
    <p slot="p">abc</p>
    <span slot="span">def</span>
    <h1>abcabc</h1>
  </child1>
</template>

<script>
export default {
  name: 'Test',
  components: {
    child1: () => import('./component/child1'),
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
