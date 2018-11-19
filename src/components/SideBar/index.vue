/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
*/

<template>
<div class="wrapper">
  <el-radio-group v-model="isCollapse" style="">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
<el-menu router :collapse="isCollapse" :default-active="`/${$route.path.split('/')[1]}`">
  <el-menu-item v-for="(item, index) in list" :key="index" :index="item.link">
    <i v-show="item.icon" :class="[item.icon, 'fa-lg']" style="margin-right: 5px;" aria-hidden="true"></i>
    <span slot="title" v-text="item.title"></span>
  </el-menu-item>
</el-menu>
</div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isCollapse: false,
      list: [{
        link: '/',
        title: 'Test0: home',
        icon: 'fa fa-home',
      }, {
        link: '/test1',
        title: 'Test1: slot',
        icon: 'fa fa-exchange',
      }, {
        link: '/test2',
        title: 'Test2: .sync, :update',
        icon: 'fa fa-refresh',
      }, {
        link: '/test3',
        title: 'Test3: Vuex',
        icon: 'fa fa-database',
      }, {
        link: '/test4',
        title: 'Test4: ali-player',
        icon: 'fa fa-video-camera',
      }, {
        link: '/test5',
        title: 'Test5: keep-alive',
        icon: 'fa fa-heart-o',
      }, {
        link: '/test6',
        title: 'Test6: Swiper',
        icon: 'fa fa-picture-o',
      }, {
        link: '/test7',
        title: 'Test7: ES6',
        icon: 'fa fa-language',
      }],
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 250px;
    margin-right: 40px;
  }
</style>
