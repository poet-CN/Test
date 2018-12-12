/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="home" :closable="false" center>
      <div slot="title">
        这是Home页。
      </div>
    </el-alert>
    <img src="../../assets/img/home.png" alt="加载失败">
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
  img {
    display: block;
    margin: 50px auto 0;
  }
</style>
