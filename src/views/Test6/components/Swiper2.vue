/*
* author: mamingyang@baofeng.com
* date: 2018/11/9
*/

<template>
  <div class="mb20">
    <slot name="title"></slot>
    <swiper class="wrapper" :options="options">
      <swiperSlide>
        <div class="h300 tc lh300 fz50 bgYel">Slide1</div>
      </swiperSlide>
      <swiperSlide>
        <div class="h300 tc lh300 fz50 bgBlue">Slide2</div>
      </swiperSlide>
      <swiperSlide>
        <div class="h300 tc lh300 fz50 bgGray">Slide3</div>
      </swiperSlide>
      <swiperSlide>
        <div class="h300 tc lh300 fz50 bgRed">Slide4</div>
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'; // eslint-disable-line
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'Swiper2',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      options: {
        effect: 'fade',
        autoplay: true,
        speed: 1500,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    border: 2px solid #000;
  }
</style>
