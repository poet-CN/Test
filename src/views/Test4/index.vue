/*
* author: mamingyang@baofeng.com
* date: 2018/11/6
*/

<template>
  <div>
    <div id="J_prismPlayer" class="prism-player"></div>
    <!--<Player-->
      <!--v-if="vid && playAuth"-->
      <!--width="800px"-->
      <!--height="600px"-->
      <!--:vid="vid"-->
      <!--:playauth="playAuth"></Player>-->
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'index',
  data() {
    return {
      vid: '',
      playAuth: '',
    };
  },
  methods: {
    getData(videoId) {
      Axios.post('/apis/lesson/findAuthByVideoId', {
        videoId,
      }).then((res) => {
        try {
          new Aliplayer({
            id: 'J_prismPlayer',
            width: '800px',
            autoplay: false,
            vid: videoId,
            playauth: res.data.data,
          });
        } catch (e) {
          console.log(e);
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
