<template>
  <el-container direction="horizontal">
    <SideBar/>
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  components: {
    SideBar: () => import('./components/SideBar'),
  },
};
</script>

<style src="./public.scss"></style>
