/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="test2" :closable="false" center>
      <div slot="title">
        这个案例是关于父子组件数据流传递的方法。
      </div>
    </el-alert>
    <div class="mb20">
      <p>案例A：</p>
      <div class="df">
        <child1 class="mr20" style="flex: 1;" :value.sync="doc.title"></child1>
        <p style="flex: 2;" v-text="doc.title"></p>
      </div>
    </div>
    <div>
      <p>案例B：</p>
      <div class="mb20">
        <child2 :show.sync="show" />
        <el-button @click="show=true">打开modal</el-button>
      </div>
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
  data: () => ({
    doc: {
      title: '',
    },
    show: false,
  }),
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
