/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
*/

<template>
  <div class="w600">
    <el-alert class="mb10" title="test5" :closable="false" center>
      <div slot="title">这个案例是关于keep-alive的用法。</div>
    </el-alert>
    <el-alert title="test5" :closable="false" center>
      <div slot="title">你可以任意改变input的值，但切换路由后他们仍会保留。</div>
    </el-alert>
    <p>当前路由：{{$route.path}}</p>
    <router-link :to="{name: 'test5'}">test5</router-link>
    <router-link :to="{name: 'test5-nav1'}">nav1</router-link>
    <router-link :to="{name: 'test5-nav2'}">nav2</router-link>
    <router-link :to="{name: 'test5-nav3'}">nav3</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'test5',
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
