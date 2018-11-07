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
      <div>
        <p>我是内容</p>
        <div slot="footer" class="dialog-footer">
          <el-button @click="$emit('update:show', false)">点我关闭模态框</el-button>
        </div>
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

</style>
