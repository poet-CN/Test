/*
* author: mamingyang@baofeng.com
* date: 2018/11/7
* case: 1、P标签的update传值；2、el-dialog的update传值
*/

<template>
  <div>
    <el-dialog
      :visible="show"
      @close="$emit('update:show', false)">
      <div slot="title">
        <p>标题</p>
      </div>
      <div>
        <p>需要注意的是，在子组件你中使用el-dialog，需要去掉控制是否展示的key中的.sync。</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="$emit('update:show', false)">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'child2',
  props: ['show'],
  data() {
    return {};
  },
  methods: {},
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  p {
    margin: 0;
  }
</style>
