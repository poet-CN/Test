/*
* author: mamingyang@baofeng.com
* date: 2019/1/8
*/

<template>
  <div class="w750">
    <el-alert class="mb10" title="" :closable="false" center>
      <div slot="title">排序</div>
    </el-alert>
    <div class="wrapper">
      <el-button type="primary" @click="doPropagationSort(arr)">冒泡排序</el-button>
    </div>
    <div class="wrapper">
      <el-button type="primary" @click="doFastSort(arr2)">快速排序（未完成）</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test10',
  data: () => ({
    arr: [9, 8, 7, 6, 5],
    arr2: [6, 1, 2, 7, 9, 3, 4, 5, 10, 8],
  }),
  methods: {
    doPropagationSort(originArr) { // 冒泡排序
      let arr = JSON.parse(JSON.stringify(originArr));
      const arr2 = JSON.parse(JSON.stringify(originArr));
      const len = arr.length;
      for (let j = 0; j < len; j++) {
        for (let i = 0; i < len; i++) {
          if (arr[i] > arr[i + 1]) {
            arr2[i] = arr[i + 1];
            arr2[i + 1] = arr[i];
            console.log(arr2);
            arr = JSON.parse(JSON.stringify(arr2));
          }
        }
      }
      console.log(arr);
    },
    doFastSort(originArr) { // 快速排序，未完成
      let arr = JSON.parse(JSON.stringify(originArr));
      const arr2 = JSON.parse(JSON.stringify(originArr));

      let baseNo = arr[0];// 假设数组第一位为基准数
      const len = arr.length; // len/2为中间数
      let minNo = -2; // 较小的数的下标
      let maxNo = -2; // 较大的数的下标

      for (let i = 0; i < Math.ceil(len / 2); i++) {
        let foundLeft = false; // 已找到左侧符合条件的数
        let foundRight = false; // 已找到右侧符合条件的数
        if (!foundLeft && arr[i] > arr[0]) {
          minNo = i;
          foundLeft = true;
        }
        if (!foundRight && arr[len - i] < arr[0]) {
          maxNo = i;
          foundRight = true;
        }
        if (foundLeft && foundRight) {
          break;
        }
      }
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
