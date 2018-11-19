/*
* author: mamingyang@baofeng.com
* date: 2018/11/19
*/

<template>
  <div class="w600">
    <el-alert class="mb10" title="test5" :closable="false" center>
      <div slot="title">当前案例：{{$route.query.title}}</div>
    </el-alert>
    <div class="bb1 lh40 mb10">
      <router-link class="mr10" v-for="(item, index) in list" :key="index" :to="{name: item.name, query: {title: item.title}}">{{item.title}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Test7',
  data: () => ({
    list: [{
      name: 'Destructuring',
      title: '解构赋值',
    }],
  }),
  methods: {},
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
