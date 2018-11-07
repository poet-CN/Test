/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
*/

<template>
  <div>
    <p>这个组件是keep-alive</p>
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
