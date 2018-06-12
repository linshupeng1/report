<template>
  <Panel class="promote-panel common-panel">
  	<template slot="panel-header-info">
	  	<div class="promote-header" @click="toPage()">
	      	<p class="header-main">促销专区</p>
	      	<p class="header-desc">超低首付，首付直降4000元</p>
		    <i class="icon-right"></i>
		</div>
	</template>
	<template slot="panel-content-info">
	    <section class="car-line car-line-first">
		    <router-link :to="{ name: 'detail',params:{c_id: promoteData2[0].c_id }}" class="car-line-inner">
		    	<img :src="joinUrl(promoteData2[0].imgsrc)" class="car-img">
		    	<div class="car-detail">
			    	<div class="car-name">{{promoteData2[0].c_seriesname}}<span class="car-tag">{{tagArr(promoteData2[0].tag_name)}}</span></div>
			    	<p class="car-desc">{{promoteData2[0].c_typename}}</p>
			    	<p class="car-price"><span class="font-b">{{promoteData2[0].bc_firstpay_money | filterMoney}}</span>万<span class="pay-type">首付</span></p>
			    	<p class="car-price"><span class="font-b">{{promoteData2[0].bc_firstmonth_pay | filterNum}}</span>元<span class="pay-type">月供</span></p>
		    	</div>
	    	</router-link>
	    </section>
	    <section class="car-line">
	    	<router-link :to="{ name: 'detail',params:{c_id: promoteData2[1].c_id }}" class="car-item">
		    	<div class="car-name">{{promoteData2[1].c_seriesname}}<span class="car-tag">{{tagArr(promoteData2[1].tag_name)}}</span></div>
		    	<div class="car-info-bottom">
			    	<img :src="joinUrl(promoteData2[1].imgsrc)" class="car-img">
			    	<div class="car-price-wrap">
		    			<p class="car-price"><span class="pay-type">首付</span><span class="font-b">{{promoteData2[1].bc_firstpay_money | filterMoney}}</span>万</p>
				    	<p class="car-price txt-gray mt16"><span class="pay-type">月供</span>{{promoteData2[1].bc_firstmonth_pay | filterNum}}元</p>
				    </div>
		    	</div>
	    	</router-link>
	    	<router-link :to="{ name: 'detail',params:{c_id: promoteData2[2].c_id }}" class="car-item">
    			<div class="car-name">{{promoteData2[2].c_seriesname}}<span class="car-tag">{{tagArr(promoteData2[2].tag_name)}}</span></div>
		    	<div class="car-info-bottom">
			    	<img :src="joinUrl(promoteData2[2].imgsrc)" class="car-img">
			    	<div class="car-price-wrap">
			    		<p class="car-price"><span class="pay-type">首付</span><span class="font-b">{{promoteData2[2].bc_firstpay_money | filterMoney}}</span>万</p>
				    	<p class="car-price txt-gray mt16"><span class="pay-type">月供</span>{{promoteData2[2].bc_firstmonth_pay | filterNum}}元</p>
				    </div>
		    	</div>
	    	</router-link>
	    </section>
	</template>
  </Panel>
</template>
<script>
import Panel from "../public/panel.vue"
export default {
  components: {
  	Panel,
  },
  props: {
    promoteData: {
    	type: Array,
    }
  },
  data () {
    return {
    	imgArr: [],
    	promoteData2: [
    		{
    			c_id: 0,
    			imgsrc: '20180531\\9bcffe3d0d460f7ea4d9ab694400322a.jpg',
    			tag_name: '5%首付',
    			c_seriesname: '宝马',
    			c_typename: '2011款 2.0L 自动两驱豪华型',
    			bc_firstpay_money: '184000.00',
    			bc_firstmonth_pay: '3500'
    		},{
    			c_id: 0,
    			imgsrc: '20180531\\9bcffe3d0d460f7ea4d9ab694400322a.jpg',
    			tag_name: '5%首付',
    			c_seriesname: '宝马',
    			c_typename: '2011款 2.0L 自动两驱豪华型',
    			bc_firstpay_money: '184000.00', 
    			bc_firstmonth_pay: '3500'
    		},{
    			c_id: 0,
    			imgsrc: '20180531\\9bcffe3d0d460f7ea4d9ab694400322a.jpg',
    			tag_name: '5%首付',
    			c_seriesname: '宝马',
    			c_typename: '2011款 2.0L 自动两驱豪华型',
    			bc_firstpay_money: '184000.00',
    			bc_firstmonth_pay: '3500'
    		},
    	]
    }
  },
  watch:{
  	promoteData(val) {
  		this.promoteData2 = val;
  	}
  },
  methods: {
  	toPage(){
  		this.$router.push({
  		    name: 'filtercar',
  		    params: {
  		      filter_name: '促销专区',
  		    }
  		})
  	},
  	// 字符串转数组，保留前1个标签
    tagArr(tag) {
      // alert(tag);
      var result = tag.split(",")[0];
      return result;
    },
  }
}

</script>
<style  lang="scss">
@import "../../css/element.scss";
.promote-panel {
	.header-main {
		color: #34c5e4;
	}
}
.common-panel {
	.panel-header {
		position: relative;
		padding: 30px;
		box-sizing: border-box;
		border-bottom: 1px solid #ececec;
		p {
			width: 100%;
		}
		.header-main {
			font-size: 34px;
			font-weight: bold;
		}
		.header-desc {
			font-size: 24px;
			color: #999;
			margin-top: 14px;
		}
		.icon-right {
			position: absolute;
			right: 30px;
			top: 50%;
			margin-top: -15px;
			display: inline-block;
			width: 18px;
			height: 31px;
			background: url('../../assets/images/home/icon-right.png') no-repeat;
			background-size: contain;
		}
	}
	.panel-content {
		@include flex;
	}
	.car-line {
		padding: 0 30px;
		@include flex(row);
		box-sizing: border-box;
	}
	.car-line-first {
		.car-price {
			display: inline-block;			
			width: 120px;
			margin-bottom: 20px;
			&:last-child {
				padding-left: 48px;
				border-left: 1px solid #ececec;
			}
		}
		.pay-type {
			display: block;
		}
	}
	.car-line-inner {
		@include flex(row);
		padding: 30px 0;
		border-bottom: 1px solid #ececec;
		width: 100%;
	}
	.car-img {
		width: 316px;
		height: 193px;
		margin-right: 30px;
	}
	.car-name {
		color: #333;
		font-size: 28px;
	}
	.car-detail {
		flex: 1;
		padding-left: 24px;
	}
	.car-tag {
		font-size: 18px;
		color: #fff;
		display: inline-block;
		padding: 6px 14px;
		border-radius: 20px;
		background-color: #eb4c51;
		margin-left: 14px;
	}
	.car-desc {
		width: 320px;
		font-size: 24px;
		color: #999;
		margin: 14px 0 36px 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.car-price {		
		font-size: 24px;
		color: #eb4c51;
	}
	.pay-type {
		margin-top: 10px;
		font-size: 24px;
	}
	.font-b {
		font-weight: bold;
		font-size: 32px;
	}
	.car-item {
		padding: 20px 0 40px 0;
		.car-img {
			width: 158px;
			height: 96px;
			// margin-top: 0;
			margin-right: 22px;
		}
		&:nth-child(even) {
			margin-left: 40px;
		}
	}
	.car-info-bottom {
		@include flex(row);
		margin-top: 28px;
	}
	.txt-gray {
		color: #999;
	}
	.mt16 {
		margin-top: 16px;
	}
}
</style>