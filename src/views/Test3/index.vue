/*
* author: mamingyang@baofeng.com
* date: 2018/11/2
*/

<template>
  <div class="lh60 w600">
    <div>
      <a class="tdu cp mr20" @click="resetData">点此清除数据</a>
      <a class="tdu cp mr20" @click="readonly = !readonly">点此将输入框设为/取消只读</a>
    </div>
    <div>
      vuex里的数据：<span class="cRed" v-text="data"></span>
    </div>
    <div class="lh20">
      <p>在这里<span v-if="readonly">并不能</span>输入你想把它改成什么：</p>
      <el-input :disabled="readonly" type="textarea" :rows="2" v-model="text"></el-input>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Message } from 'element-ui';

export default {
  name: 'Test3',
  computed: mapState(['data']),
  data() {
    return {
      text: '',
      readonly: false,
    };
  },
  watch: {
    data(nv) {
      this.text = nv;
    },
    text(nv) {
      this.$store.dispatch('setData', nv);
    },
  },
  methods: {
    modifyData() {
      this.$store.dispatch('setData', '我是数据');
    },
    resetData() {
      this.$store.dispatch('resetData').then(() => {
        Message.success('已成功清除数据');
      });
    },
  },
  mounted() {
    this.modifyData();
  },
};
</script>

<style lang="scss" scoped>

</style>
