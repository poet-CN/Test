/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
*/

<template>
<div>
  <el-input class="mb20" v-model="text"></el-input>
  <el-button @click="text=''">点我清空text</el-button>
  <p v-text="text"></p>
  <p>我是正在运行的定时器：{{time}}</p>
</div>
</template>

<script>
export default {
  name: 'nav1',
  data() {
    return {
      text: '我是nav1的默认text',
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
