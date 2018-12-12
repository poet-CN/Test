/*
* author: mamingyang@baofeng.com
* date: 2018/12/12
*/

<template>
  <div>
    <div class="wrapper">
      <p>基础案例</p>
      <div class="clearfix">
        <el-card class="fl">
          <div slot="header" class="clearfix">
            <span>ES5写法</span>
            <el-button class="fr p0" type="text" @click="work('createIteratorEs5')">运行</el-button>
          </div>
          <pre>
          createIteratorEs5(items) {
            let i = 0;
            return {
              next: () => {
                const done = (i >= items.length);
                const value = !done ? items[i++] : undefined;
                return {
                  done: value,
                  value,
                };
              },
            };
          }
        </pre>
        </el-card>
        <el-card class="fl">
          <div slot="header" class="clearfix">
            <span>ES6写法</span>
            <el-button class="fr p0" type="text" @click="work('createIteratorEs6')">运行</el-button>
          </div>
          <pre>
          * createIteratorEs6items() {
            for (let i = 0; i &lt; items.length; i++) {
              yield items[i];
            }
          }
        </pre>
        </el-card>
      </div>
    </div>
    <hr>
    <div class="wrapper">
      <p>Map, Set 和 Array有默认的迭代器</p>
      <div class="clearfix">
        <el-card class="fl">
          <div slot="header" class="clearfix">
            <el-button class="fr p0" type="text" @click="defaultIterators">运行</el-button>
          </div>
          <pre>
            const colors = ['red', 'green', 'blue'];
            const tracking = new Set([123, 456, 789]);
            const data = new Map();
            data.set('title', 'I\'m title');
            data.set('page', 'current-page');
            // 打印ES6新迭代器
          </pre>
        </el-card>
      </div>
    </div>
    <hr>
    <div class="wrapper">
      <div class="clearfix">
        <el-card class="fl">
          <div slot="header" class="clearfix">
            <span>next传参</span>
            <el-button class="fr p0" type="text" @click="runGeneratorParams">运行</el-button>
          </div>
          <pre>
            * generatorParams() {
              const first = yield 1;
              const second = yield first + 2;
              let third;
              try {
                third = yield second + 2;
              } catch (e) {
                console.warn(e);
                third = 0;
              }
              const fourth = yield third + 3;
              yield fourth;
            }
        </pre>
        </el-card>
        <el-card class="fl">
          <div slot="header" class="clearfix">
            <span>组合起来的Generator</span>
            <el-button class="fr p0" type="text" @click="doJoinGenerator">运行</el-button>
          </div>
          <pre>
            * joinGenerator1() {
              yield 1;
              yield 2;
              return 3;
            },
            * joinGenerator2(count) {
              for (let i = 0; i &lt; count; i++) {
                yield 'repeat';
              }
            },
            * joinGenerator() {
              const res = yield* this.joinGenerator1();
              yield* this.joinGenerator2(res);
            }
          </pre>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IteratorGenerator',
  data: () => ({}),
  methods: {
    createIteratorEs5(items) {
      let i = 0;
      return {
        next: () => {
          const done = (i >= items.length);
          const value = !done ? items[i++] : undefined;
          return { done, value };
        },
      };
    },
    * createIteratorEs6(items) {
      for (let i = 0; i < items.length; i++) {
        yield items[i];
      }
    },
    work(name) {
      const iterator = this[name]([1, 2, 3]);
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
    },
    defaultIterators() {
      const colors = ['red', 'green', 'blue'];
      const tracking = new Set([123, 456, 789]);
      const data = new Map();
      data.set('title', 'I\'m title');
      data.set('page', 'current-page');
      // entries迭代器
      for (const entry of (colors.entries())) {
        console.log(entry);
      }
      for (const entry of (tracking.entries())) {
        console.log(entry);
      }
      for (const entry of (data.entries())) {
        console.log(entry);
      }
      // keys迭代器
      for (const key of (colors.keys())) {
        console.log(key);
      }
      for (const key of (tracking.keys())) {
        console.log(key);
      }
      for (const key of (data.keys())) {
        console.log(key);
      }
      // values迭代器
      for (const value of (colors.values())) {
        console.log(value);
      }
      for (const value of (tracking.values())) {
        console.log(value);
      }
      for (const value of (data.values())) {
        console.log(value);
      }
    },
    * generatorParams() {
      const first = yield 1;
      const second = yield first + 2;
      let third;
      try {
        third = yield second + 2;
      } catch (e) {
        console.warn(e);
        third = 0;
      }
      const fourth = yield third + 3; // 替换的是yield的值而不是上一个变量的值
      yield fourth;
    },
    runGeneratorParams() {
      const a = this.generatorParams();
      console.log(a.next()); // 第一次的传参是无意义的，会被丢弃
      console.log(a.next(4)); // 参数会替代上一次yield的值
      console.log(a.next(5));
      console.log(a.throw(new Error('NM$L'))); // 抛出错误，阻止向后执行
      console.log(a.next(2)); // 使用catch捕获了错误，继续执行。
      console.log(a.next());
    },
    * joinGenerator1() {
      yield 1;
      yield 2;
      return 3;
    },
    * joinGenerator2(count) {
      for (let i = 0; i < count; i++) {
        yield 'repeat';
      }
    },
    * joinGenerator() {
      const res = yield* this.joinGenerator1(); // return的值是最终值，但不会被next调起。如果想看return的值，可以后面加一行 yield res;
      yield* this.joinGenerator2(res);
    },
    doJoinGenerator() {
      const fn = this.joinGenerator();
      console.log(fn.next());
      console.log(fn.next());
      console.log(fn.next());
      console.log(fn.next());
      console.log(fn.next());
      console.log(fn.next());
    },
  },
  created() {
    this.$emit('update:title', '迭代器，生成器');
  },
};
</script>

<style lang="scss" scoped>
  .wrapper > div >div {
    width: 365px;
    margin-bottom: 10px;
    &:nth-child(odd) {
      margin-right: 10px;
    }
  }
</style>
