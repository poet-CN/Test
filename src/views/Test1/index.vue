<template>
  <child1>
    <p slot="title">如果不提供slot，展示的会是组件中的默认值或空</p>
    <span slot="bottom">在调用时可以随便写顺序，但是顺序只会以组件中排序为准</span>
    <p>不具名的slot</p>
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
