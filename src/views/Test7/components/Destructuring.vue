/*
* author: mamingyang@baofeng.com
* date: 2018/11/19
*/

<template>
  <div class="clearfix">
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例一</span>
        <el-button class="fr p0" type="text" @click="test1">运行此案例</el-button>
      </div>
      <pre>
        const [a, [b, c]] = [1, [2, 3]];
        console.log(a);
        console.log([b, c]);
      </pre>
    </el-card>
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例二</span>
        <el-button class="fr p0" type="text" @click="test2">运行此案例</el-button>
      </div>
      <pre>
        const [a = true] = [];
        console.log(a);
        const [b = true] = [false];
        console.log(b);
      </pre>
    </el-card>
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例三</span>
        <el-button class="fr p0" type="text" @click="test3({a: 1, b: 2})">运行此案例</el-button>
      </div>
      <pre>
        (传入一个JSON: {a: 1, b: 2})
        const { a } = res;
        console.log(a);
        const { b: c } = res;
        console.log(c);
      </pre>
    </el-card>
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例四</span>
        <el-button class="fr p0" type="text" @click="test4">运行此案例</el-button>
      </div>
      <pre>
        const obj = {
          p: [
            'Hello',
            { y: 'World' },
          ],
        };
        const { p: [x, { y }] } = obj;
        console.log(x, y);
      </pre>
    </el-card>
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例五</span>
        <el-button class="fr p0" type="text" @click="test5">运行此案例</el-button>
      </div>
      <pre>
        const res = {
          errorCode: -1,
          errorMessage: '这是一条错误消息',
        };
        ({
          errorCode: this.test5Data.errorCode,
          errorMessage: this.test5Data.errorMessage,
          row: this.test5Data.row = 10,
        } = res);
        console.log(this.test5Data);
      </pre>
    </el-card>
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例六</span>
        <el-button class="fr p0" type="text" @click="test6">运行此案例</el-button>
      </div>
      <pre>
        function move({ x = 0, y = 0 } = {}) {
          return [x, y];
        }

        console.log(move({x: 3, y: 8})); // [3, 8]
        console.log(move({x: 3})); // [3, 0]
        console.log(move({})); // [0, 0]
        console.log(move()); // [0, 0]
      </pre>
    </el-card>
    <el-card class="wrapper fl" shadow="hover">
      <div slot="header" class="clearfix">
        <span>案例七</span>
        <el-button class="fr p0" type="text" @click="test7">运行此案例</el-button>
      </div>
      <pre>
        function move({ x, y } = { x: 0, y: 0 }) {
          return [x, y];
        }

        console.log(move({x: 3, y: 8})); // [3, 8]
        console.log(move({x: 3})); // [3, undefined]
        console.log(move({})); // [undefined, undefined]
        console.log(move()); // [0, 0]
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Destructuring',
  data: () => ({
    test5Data: {
      errorCode: '',
      errorMessage: '',
      row: null,
    },
  }),
  methods: {
    test1() {
      const [a, [b, c]] = [1, [2, 3]];
      console.log(a);
      console.log([b, c]);
    },
    test2() {
      const [a = true] = [];
      console.log(a);
      const [b = true] = [false];
      console.log(b);
    },
    test3(res) {
      const { a } = res;
      console.log(a);
      const { b: c } = res;
      // b把值赋给了c, 打印b会报错b is not defined
      console.log(c);
    },
    test4() {
      const obj = {
        p: [
          'Hello',
          { y: 'World' },
        ],
      };
      const { p: [x, { y }] } = obj;
      console.log(x, y);
    },
    test5() {
      const res = {
        errorCode: -1,
        errorMessage: '这是一条错误消息',
      };
      ({
        errorCode: this.test5Data.errorCode,
        errorMessage: this.test5Data.errorMessage,
        row: this.test5Data.row = 10,
      } = res);
      console.log(this.test5Data);
    },
    test6() {
      function move({ x = 0, y = 0 } = {}) {
        return [x, y];
      }

      console.log(move({ x: 3, y: 8 })); // [3, 8]
      console.log(move({ x: 3 })); // [3, 0]
      console.log(move({})); // [0, 0]
      console.log(move()); // [0, 0]
    },
    test7() {
      function move({ x, y } = { x: 0, y: 0 }) {
        return [x, y];
      }

      console.log(move({ x: 3, y: 8 })); // [3, 8]
      console.log(move({ x: 3 })); // [3, undefined]
      console.log(move({})); // [undefined, undefined]
      console.log(move()); // [0, 0]
    },
  },
  mounted() {
    this.$emit('update:title', '解构赋值');
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
