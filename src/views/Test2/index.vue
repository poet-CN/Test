/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <child1 :value.sync="doc.title"></child1>
</template>

<script>
export default {
  name: 'Test2',
  components: {
    child1: () => import('./component/child1'),
  },
  data() {
    return {
      doc: {
        title: '',
      },
    };
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
