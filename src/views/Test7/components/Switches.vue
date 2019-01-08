/*
* author: mamingyang@baofeng.com
* date: 2018/12/20
*/

<template>
<div class="wrapper">
  <el-card class="fl">
    <div slot="header" class="clearfix">
      <span>神奇用法1: switch(true)</span>
      <el-button class="fr p0" type="text" @click="switch1">运行</el-button>
    </div>
    <pre>
      const num = 20;
      switch (true) {
        case num &lt; 0:
          this.$alert('num小于0').then(() => {}, () => {});
          break;
        case num &gt;= 0 && num &lt; 30:
          this.$alert('num介于0到30之间').then(() => {}, () => {});
          break;
        default:
          this.$alert('num大于30').then(() => {}, () => {});
      }
    </pre>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'Switches',
  data: () => ({

  }),
  methods: {
    switch1() {
      const num = 20;
      switch (true) {
        case num < 0:
          this.$alert('num小于0').then(() => {}, () => {});
          break;
        case num >= 0 && num < 30:
          this.$alert('num介于0到30之间').then(() => {}, () => {});
          break;
        default:
          this.$alert('num大于30').then(() => {}, () => {});
      }
    },
  },
  created() {
    this.$emit('update:title', 'switch');
  },
};
</script>

<style lang="scss" scoped>
.wrapper > div {
  width: 365px;
}
</style>
