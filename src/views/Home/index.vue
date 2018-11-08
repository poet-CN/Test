/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div class="w600">
    <el-alert class="mb10" title="home" :closable="false" center>
      <div slot="title">
        这是Home页。
      </div>
    </el-alert>
    <div class="lh40">
      I am home.
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

</style>
