/*
* author: mamingyang@baofeng.com
* date: 2018/11/9
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="" :closable="false" center>
      <div slot="title">这个案例是关于vue-awesome-swiper的用法。</div>
    </el-alert>
    <Swiper1>
      <p slot="title">案例A：coverflow模式</p>
    </Swiper1>
    <Swiper2>
      <p slot="title">案例B：fade模式</p>
    </Swiper2>
    <Swiper3>
      <p slot="title">案例C：cube模式</p>
    </Swiper3>
    <Swiper4>
      <p slot="title">案例D：slide模式</p>
    </Swiper4>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
    Swiper1: () => import('./components/Swiper1'),
    Swiper2: () => import('./components/Swiper2'),
    Swiper3: () => import('./components/Swiper3'),
    Swiper4: () => import('./components/Swiper4'),
  },
  data() {
    return {

    };
  },
  methods: {},
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
