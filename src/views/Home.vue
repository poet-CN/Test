/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div class="c-lh40">
    <div>
      <p>Tests</p>
    </div>
    <div>
      <router-link :to="{name: 'test1'}">Go To Test1: slot</router-link>
    </div>
    <div>
      <router-link :to="{name: 'test2'}">Go To Test2: .sync && :update</router-link>
    </div>
    <div>
      <router-link :to="{name: 'test3'}">Go To Test3: Vuex</router-link>
    </div>
    <div>
      <router-link :to="{name: 'test4'}">Go To Test4: ali-player</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .c-lh40 {
    div {
      line-height: 40px;
    }
  }
</style>
