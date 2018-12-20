/*
* author: mamingyang@baofeng.com
* date: 2018/12/13
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="test5" :closable="false" center>
      <div slot="title">这个案例是关于改vue，写出setState的方法。</div>
    </el-alert>
    <el-button @click="changeState">改变$data里a和b的值</el-button>
    <div>
      <p>当前$data里的值：</p>
      <p>a: {{a}}, b: {{b}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    a: 1,
    b: 2,
  }),
  methods: {
    changeState() {
      this.setState({ a: this.a + 1, b: this.b + 1 });
    },
    setState(obj) {
      if (typeof obj !== 'object') {
        return;
      }
      for (const i in obj) {
        if ({}.hasOwnProperty.call(obj, i)) {
          this[i] = obj[i];
        }
      }
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
