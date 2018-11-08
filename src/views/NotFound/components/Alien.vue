/*
* author: mamingyang@baofeng.com
* date: 2018/11/8
*/

<template>
  <span v-text="coordinate"></span>
</template>

<script>
export default {
  name: 'Alienware',
  data() {
    return {
      coordinate: '',
    };
  },
  methods: {
    getCoordinate() {
      this.coordinate = `(${Math.round(Math.random() * 1000)}, ${Math.round(Math.random() * 1000)}, ${Math.round(Math.random() * 1000)})`;
    },
  },
  mounted() {
    setInterval(() => {
      this.getCoordinate();
    }, 50);
  },
};
</script>

<style lang="scss" scoped>

</style>
