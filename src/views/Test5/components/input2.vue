/*
* author: mamingyang@baofeng.com
* date: 2018/11/8
*/

<template>
  <div>
    <el-input class="mb20" v-model="val"></el-input>
    <el-button @click="val=''">点我清空text</el-button>
    <p v-text="val"></p>
  </div>
</template>

<script>
export default {
  name: 'input2',
  data() {
    return {
      val: 'b',
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
