<template>
  <el-container direction="horizontal">
    <SideBar/>
    <router-view/>
  </el-container>
</template>

<script>
import { Notification } from 'element-ui';

export default {
  name: 'App',
  components: {
    SideBar: () => import('./components/SideBar'),
  },
  methods: {
    openNote() {
      Notification.info({
        title: '提示',
        message: '此案例定义了一个1s左右的，假的加载时间。跳页时请耐心等候。',
        duration: 5000,
      });
    },
  },
  created() {
    this.openNote();
  },
};
</script>

<style src="./public.scss"></style>
