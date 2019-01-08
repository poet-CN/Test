/*
* author: mamingyang@baofeng.com
* date: 2019/1/8
*/

<template>
  <div class="clearfix">
    <el-card class="wrapper">
      <div slot="header" class="clearfix">
        <span>一道关于异步的面试题</span>
        <el-button class="fr p0" type="text" @click="runTest">运行此案例</el-button>
      </div>
      <pre>
          async function async1() {
            console.log( 'async1 start' )
            await async2()
            console.log( 'async1 end' )
        }

        async function async2() {
            console.log( 'async2' )
        }

        console.log( 'script start' )

        setTimeout( function () {
            console.log( 'setTimeout' )
        }, 0 )

        async1();

        new Promise( function ( resolve ) {
            console.log( 'promise1' )
            resolve();
        } ).then( function () {
            console.log( 'promise2' )
        } )

        console.log( 'script end' )
    </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AsyncAwait',
  data: () => ({}),
  methods: {
    async async1() {
      console.log('async1 start');
      await this.async2();
      console.log('async1 end');
    },
    async async2() {
      console.log('async2');
    },
    setTimeout1() {
      setTimeout(() => {
        console.log('setTimeout');
      }, 0);
    },
    promise1() {
      new Promise((resolve) => {
        console.log('promise1');
        resolve();
      }).then(() => {
        console.log('promise2');
      });
    },
    runTest() {
      console.log('script start');
      this.setTimeout1();
      this.async1();
      this.promise1();
      console.log('script end');
    },
  },
  created() {
    this.$emit('update:title', '异步函数');
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    box-sizing: border-box;
    width: 370px;
    margin-bottom: 10px;
    &:nth-child(odd) {
      margin-right: 10px;
    }
  }
</style>
