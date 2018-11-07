/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div>
    <div class="mb50">
      <child1 :value.sync="doc.title"></child1>
      <p v-text="doc.title"></p>
    </div>
    <div class="mb50">
      <child2 :show.sync="show" />
      <el-button @click="show=true">打开modal</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  components: {
    child1: () => import('./component/child1'),
    child2: () => import('./component/child2'),
  },
  data() {
    return {
      doc: {
        title: '',
      },
      show: false,
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
