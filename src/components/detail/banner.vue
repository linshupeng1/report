<template>
  <div class="detail-banner">
    <img src="../../assets/images/detail-img.jpg" class="detail-banner-img">
    <!-- <img :src="joinUrl(bannerData.c_cover)" class="detail-banner-img"> -->
    <div class="car-detail-info">
    	<h4 class="car-detail-title">{{bannerData.c_typename}}</h4>
    	<p class="car-guide-price" v-if="bannerData.c_type=='新车'">厂商指导价：{{bannerData.c_factoryprice | filterMoney}}万</p>
    	<div class="used-car-info" v-if="bannerData.c_type=='二手车'">
    		<p class="usedcar-info-item">新车含税价：{{bannerData.c_factoryprice | filterMoney}}万</p>
    		<p class="usedcar-info-item">
    			<span class="car-year">{{bannerData.c_num_time.slice(0,8)}}</span>{{bannerData.c_mileage | filterMoney}}万公里
    		</p>
    	</div>
    	<div class="first-pay">
    		<span class="pay-tag">{{tagArr(bannerData.tag_name)}}</span>
    		{{bannerData.c_ad}}
    		<!-- 0首付超值精选限量抢，详情咨询商家。 -->
    	</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  	bannerData: {
  		type: Object,
  	}
  },
  data () {
    return {
      newcarinfo: false,
      usedcarinfo: true
    }
  },
  methods: {
  	tagArr(tag) {
      var str1 = tag || '';
      var result = str1.split(",")[0];
      return result;
    },
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.detail-banner {
	.detail-banner-img {
		width: 100%;
	}
	.car-detail-info {
		padding: 24px 30px 0;
		background: #fff;
		font-size: 24px;
		color: #999;
	}
	.car-detail-title {
		font-size: 36px;
		color: #333;	
	}
	.car-guide-price {
		margin: 26px 0;
	}
	.first-pay {
		line-height: 78px;
		border-top: 1px solid #ececec;
	}
	.pay-tag {
		color: #fff;
		background: #eb4c51;
		padding: 5px 18px;
		border-radius: 20px;
		margin-right: 15px;
	}
	.usedcar-info-item {
		margin: 26px 0;
		.car-year {
			padding-right: 20px;
			margin-right: 20px;
			border-right: 1px solid #ececec;
		}
	}
}
</style>