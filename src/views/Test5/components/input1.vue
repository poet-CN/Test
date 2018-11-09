/*
* author: mamingyang@baofeng.com
* date: 2018/11/8
*/

<template>
  <div>
    <el-input class="mb20" v-model="val"></el-input>
    <el-button @click="val=''">点我清空text</el-button>
    <p v-text="val"></p>
    <p>我是正在运行的定时器：{{time}}</p>
  </div>
</template>

<script>
export default {
  name: 'input1',
  data() {
    return {
      val: 'a',
      time: 0,
    };
  },
  methods: {

  },
  mounted() {
    setInterval(() => {
      this.time = this.time + 1;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>

</style>
