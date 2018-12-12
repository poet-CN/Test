/*
* author: mamingyang@baofeng.com
* date: 2018/12/11
*/

<template>
<div>

</div>
</template>

<script>
export default {
  name: 'String',
  data: () => ({

  }),
  methods: {
    testDsl1() {
      const count = 10;
      const price = 0.25;
      const msg = this.initDsl`A: ${count} items cost $${(count * price).toFixed(2)}.`;
      console.log(msg);
    },
    initDsl(literals, ...substitutions) {
      // 两个元素都是数组类型。感觉这个方法用的不多。
      console.log(literals); // 占位前的字符串，占位符之间的字符串，占位符后的字符串。若刚开始就是占位符，第一个元素返空。结尾亦然。
      console.log(substitutions); // 各变量
      let a = '';
      for (let i = 0; i < substitutions.length; i++) {
        a = a + literals[i] + substitutions[i];
      }
      a += literals[literals.length - 1];
      return a;
    },
    testDsl2() {
      const a = `A\nlong\nstring`; // eslint-disable-line
      const b = String.raw`A\nlong\nstring`; // 使用原始值
      console.log(a);
      console.log(b);
    },
  },
  created() {
    this.$emit('update:title', '字符串');
    this.testDsl1();
    this.testDsl2();
  },
};
</script>

<style lang="scss" scoped>

</style>
