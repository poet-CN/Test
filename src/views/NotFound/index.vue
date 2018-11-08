/*
* author: mamingyang@baofeng.com
* date: 2018/11/8
*/

<template>
<div>
  <p>你来到了一片可以寻找外星的机密系统。</p>
  <p>这波是一批会瞬移的外星人。</p>
  <p>外星人在宇宙中的精确坐标：<Alien /></p>
  <p>如果您疲于寻找，您可以点此<router-link :to="{name: 'Home'}"><el-button type="text">返回首页</el-button></router-link>或<router-link :to="-1"><el-button type="text">返回上一页</el-button></router-link>。</p>
</div>
</template>

<script>
export default {
  name: 'NotFound',
  components: {
    Alien: () => import('./components/Alien'),
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>

</style>
