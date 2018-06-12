<template>
  <swiper :options="options" ref="mySwiper">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <router-link :to="{ name: 'item.href'}">
        <img :src="slide.imgSrc" alt="" class="slide-img">
        <p>
          <img :src="slide.iconSrc" alt="" class="slide-icon">
          <span>{{slide.txt}}</span>
        </p>
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      options: {
        type: Object,
        default: function() {
          return {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          }
        }
      },
      swiperSlides: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
<style type="scss"></style>