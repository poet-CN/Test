<template>
  <el-container direction="horizontal">
    <sidebar/>
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  components: {
    sidebar: () => import('./components/sidebar'),
  },
};
</script>

<style lang="scss">
  .w600 {
    width: 600px;
  }

  .mr20 {
    margin-right: 20px;
  }

  .cRed {
    color: #ff0000;
  }

  .lh20 {
    line-height: 20px;
  }

  .lh60 {
    line-height: 60px;
  }

  .tdu {
    text-decoration: underline;
  }

  .cp {
    cursor: pointer;
  }
</style>
