/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
*/

<template>
  <div class="w600">
    <el-alert class="mb10" title="test5" :closable="false" center>
      <div slot="title">这个案例是关于keep-alive的用法。</div>
    </el-alert>
    <el-alert class="mb10" title="test5" :closable="false" center>
      <div slot="title">你可以任意改变input的值，但切换路由后他们仍会保留。</div>
    </el-alert>
    <el-alert title="test5" :closable="false" center>
      <div slot="title">在缓存状态下，该页面的方法仍会持续正常运行。</div>
    </el-alert>
    <div class="df">
      <div class="f1 mr10">
        <div class="mb20">
          <p class="mb20">案例A：router-view路由切换</p>
          <div>
            <router-link :to="{name: 'test5-nav1'}">nav1</router-link>
            <router-link :to="{name: 'test5-nav2'}">nav2</router-link>
            <router-link :to="{name: 'test5-nav3'}">nav3</router-link>
          </div>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="f1">
        <div>
          <div class="mb20">
            <p class="mb20">案例B：v-if组件切换</p>
            <div>
              <a class="cp tdu" @click.stop="show=true">show input1</a>
              <a class="cp tdu" @click.stop="show=false">show input2</a>
            </div>
          </div>
          <div>
            <keep-alive>
              <input1 v-if="show"></input1>
              <input2 v-else></input2>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test5',
  components: {
    input1: () => import('./components/input1'),
    input2: () => import('./components/input2'),
  },
  data() {
    return {
      show: 'a',
    };
  },
  methods: {},
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
