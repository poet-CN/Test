/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div>
    <slot name="p"></slot>
    <slot></slot>
    <slot name="span"></slot>
  </div>
</template>

<script>
export default {
  name: 'child1',
  data() {
    return {

    };
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
