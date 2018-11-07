/*
* author: mamingyang@baofeng.com
* date: 2018/11/6
* attention: 运行前需打开index.html中的注释
*/

<template>
  <div>
    <el-alert
      v-if="errorTip"
      title="运行此test前需清除index.html中关于于阿里js和css的注释"
      type="error"
      center
      :closable="false"></el-alert>
    <div id="J_prismPlayer" class="prism-player"></div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'index',
  data() {
    return {
      errorTip: false,
    };
  },
  methods: {
    getData(videoId) {
      Axios.post('/apis/lesson/findAuthByVideoId', {
        videoId,
      }).then((res) => {
        try {
          new Aliplayer({ // eslint-disable-line
            id: 'J_prismPlayer',
            width: '800px',
            autoplay: false,
            vid: videoId,
            playauth: res.data.data,
          });
        } catch (e) {
          this.errorTip = true;
        }
      });
    },
  },
  mounted() {
    this.getData('2237d008a4f34147979bcbd3243a3eff');
  },
};
</script>

<style lang="scss" scoped>
  .prism-player {
    position: relative;
    width: 800px;
  }
</style>
