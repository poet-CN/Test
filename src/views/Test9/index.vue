/*
* author: mamingyang@baofeng.com
* date: 2018/12/18
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="" :closable="false" center>
      <div slot="title">requestAnimationFrame</div>
    </el-alert>
    <div class="wrapper">
      <div class="box" :style="{left: `${left}px`, top: `${top}px`}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    left: 0,
    top: 20,
    goRight: true,
    goBottom: true,
  }),
  methods: {
    runAnimate() {
      let startTime = 0;
      const draw = (timestrap) => {
        const drawStart = timestrap || Date.now();
        const diff = drawStart - startTime;
        if (diff > 100) {
          console.log(diff);
          startTime = drawStart;
          if (this.left > 700) {
            this.goRight = false;
          } else if (this.left < 0) {
            this.goRight = true;
          }
          if (this.top > 450) {
            this.goBottom = false;
          } else if (this.top < 0) {
            this.goBottom = true;
          }
          if (this.goRight) {
            this.addLeft();
          } else {
            this.minusLeft();
          }
          if (this.goBottom) {
            this.addTop();
          } else {
            this.minusTop();
          }
        }
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    },
    addLeft() {
      this.left = this.left + 10;
    },
    minusLeft() {
      this.left = this.left - 10;
    },
    addTop() {
      this.top = this.top + 10;
    },
    minusTop() {
      this.top = this.top - 10;
    },
  },
  created() {
    this.runAnimate();
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    width: 100%;
    height: 500px;
    border: 1px solid #000000;
    .box {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #ff0000;
      transition: all .2s linear;
    }
  }
</style>
