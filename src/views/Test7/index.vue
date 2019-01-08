/*
* author: mamingyang@baofeng.com
* date: 2018/11/19
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="" :closable="false" center>
      <div slot="title">当前案例：{{title || '主页'}}</div>
    </el-alert>
    <div class="bb1 lh40 mb10">
      <router-link class="mr10" v-for="(item, index) in list" :key="index" :to="{name: item.name}">{{item.title}}</router-link>
    </div>
    <router-view :title.sync="title" />
  </div>
</template>

<script>
export default {
  name: 'Test7',
  data: () => ({
    title: '',
    list: [{
      name: 'Switches',
      title: 'switch的一个神奇的用法',
    }, {
      name: 'Destructuring',
      title: '解构赋值',
    }, {
      name: 'String',
      title: '字符串',
    }, {
      name: 'Class',
      title: '类',
    }, {
      name: 'IteratorGenerator',
      title: '迭代器，生成器',
    }, {
      name: 'AsyncAwait',
      title: '异步函数',
    }],
  }),
  methods: {},
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
