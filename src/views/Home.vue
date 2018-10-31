/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div>
    <Test>
      <p slot="p">abc</p>
      <span slot="span">def</span>
      <h1 @click="show=!show">abcabc</h1>
    </Test>
    <Test2 :value.sync="doc.title"></Test2>
    <el-dialog :visible.sync="show">
      <div slot="title">
        我是标题
      </div>
      abcabc
      <div slot="footer">
        <el-button @click="show=!show">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Test: () => import('../components/Test'),
    Test2: () => import('../components/Test2'),
  },
  data() {
    return {
      show: false,
      doc: {
        title: '',
      },
    };
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
