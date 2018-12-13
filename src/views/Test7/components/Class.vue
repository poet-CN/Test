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
    a: 3,
    b: 4,
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
    init2() {
      class Fn {
        constructor(a) {
          this.a = a;
        }
        addA() {
          this.a = this.a + 1;
        }
      }
      class Fn2 extends Fn {
        constructor(a) {
          super(a, a);
        }
        log() {
          console.log(this);
        }
      }
      const initFn = new Fn(2);
      const initFn2 = new Fn2(3);
      console.log(initFn);
      console.log(initFn2);
      console.log(initFn2.addA);
      console.log(initFn2.log());
    },
  },
  created() {
    this.$emit('update:title', '类');
    this.init();
    this.init2();
  },
};
</script>

<style lang="scss" scoped>

</style>
