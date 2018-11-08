/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
*/

<template>
  <div>
    <el-input class="mb20" v-model="text"></el-input>
    <el-button @click="text=''">点我清空text</el-button>
    <p v-text="text"></p>
  </div>
</template>

<script>
export default {
  name: 'nav2',
  data() {
    return {
      text: '我是nav2的默认text',
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

</style>
