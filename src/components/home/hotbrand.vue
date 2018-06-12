<template>
	<div>
    <Panel class="hot-brand-panel">
    	<router-link :to="{ name: 'allbrand'}" class="hot-brand" slot="panel-header-info">
        热门品牌
    		<span class="all-brand">全部品牌</span>
    	</router-link>
      <swiper :options="options" ref="mySwiper" slot="panel-content-info">
        <swiper-slide v-for="(slide,key) in hotBrandData" :key="key">
          <router-link :to="{ name: 'brandcar',params:{c_bid:slide.b_id}}">
            <img :src="joinUrl(slide.b_imgurl)" alt="" class="slide-img">
            <p>
              <img :src="joinUrl(slide.b_fileurl)" alt="" class="slide-icon">
              <span>{{slide.b_typename}}</span>
            </p>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
      </swiper>
    </Panel> 
    </div>
</template>
<script>
import Panel from "../public/panel.vue"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
  	Panel,
    swiper,
    swiperSlide
  },
  props: {
    hotBrandData: {
      type: Array
    }
  },
  data () {
    return {
      brand: [],
  	  options: {
  	  	  slidesPerView: 3.2,
          spaceBetween: 20,
          freeMode: true,
  	  },
      swiperSlides:[

      ]
    }
  },
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
.hot-brand-panel {
  // @include panel;
	.panel-header {
		border-bottom: 1px solid #ececec;
		height: 96px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #333;
		font-size: 34px;
	}
  .hot-brand {
    @include flex(row);
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: #333;
  }
	.all-brand {
		color: #f6ad3c;
		font-size: 24px;
	}
}
.swiper-container {
	padding: 28px 30px !important;
	box-sizing: border-box;
}
.swiper-slide {
	text-align: center;
	box-sizing: border-box;
	// height: 200px;
	padding: 20px 20px 0;
	border: 1px solid #ececec;
	.slide-img {
		width: 100%;
	}
	.slide-icon {
		width: 36px;
		margin-right: 10px;
	}
	p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		color: #333;
		margin: 10px 0;
	}
}
</style>