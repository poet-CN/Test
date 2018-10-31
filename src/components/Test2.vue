/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
<el-input v-model="title"></el-input>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      title: '',
    };
  },
  watch: {
    title(nv) {
      this.$emit('update:value', nv);
    },
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
