/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div>
    <slot name="title">
      <p>我是title的默认值</p>
    </slot>
    <div class="cRed">
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
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
