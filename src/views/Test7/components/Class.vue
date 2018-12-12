/*
* author: mamingyang@baofeng.com
* date: 2018/12/11
*/

<template>
<div></div>
</template>

<script>
export default {
  name: 'Class',
  data: () => ({

  }),
  methods: {
    init() {
      class Fn {
        constructor(num = 0, str = '') {
          this.num = num;
          this.str = str;
        }
        addNum(a = 1) {
          this.num = this.num + a;
          return this.num;
        }
      }
      const fn = new Fn();
      console.log(fn.addNum(10));
      console.log(fn.addNum(10));
      console.log(fn instanceof Fn);
      console.log(fn);
    },
  },
  created() {
    this.$emit('update:title', '类');
    this.init();
  },
};
</script>

<style lang="scss" scoped>

</style>
