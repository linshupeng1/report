<template>
  <div class="car-info-tab-wrap">
    <ul class="car-info-tab">
    	<li :class="{active:index==num}" v-for="(item,index) in tabTxt" @click="tabChange('select'+index,index)">
    		{{item}}
    		<i class="border-bottom"></i>
    	</li>
    </ul>
    <div class="car-info-tab-content"  v-show="tabview=='select0'">
    	<div class="car-info-line">
    		<span class="car-info-left">油耗</span>
    		<span class="car-info-right">{{carinfoData.c_oil_consume}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">车辆配色</span>
    		<span class="car-info-right">{{carinfoData.c_color}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">所在地</span>
    		<span class="car-info-right">{{carinfoData.c_addr}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">核载人数</span>
    		<span class="car-info-right">{{carinfoData.c_people_num}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">使用性质</span>
    		<span class="car-info-right">{{carinfoData.c_use_nature}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">车辆性质</span>
    		<span class="car-info-right">{{carinfoData.c_nature}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">车身结构</span>
    		<span class="car-info-right">{{carinfoData.ct_structure}}</span>
    	</div>
    	<div class="car-info-line">
    		<span class="car-info-left">长/宽/高</span>
    		<span class="car-info-right">{{carinfoData.ct_long}}mm/{{carinfoData.ct_width}}mm/{{carinfoData.ct_height}}mm</span>
    	</div>
    	<div class="car-info-line" v-if="carinfoData.c_type=='二手车'" v-show="allshow">
    		<span class="car-info-left">公里数</span>
    		<span class="car-info-right">{{carinfoData.c_mileage}}</span>
    	</div>
    	<div class="car-info-line" v-if="carinfoData.c_type=='二手车'" v-show="allshow">
    		<span class="car-info-left">上牌时间</span>
    		<span class="car-info-right">{{carinfoData.c_num_time}}</span>
    	</div>
    	<div class="car-info-line" v-if="carinfoData.c_type=='二手车'" v-show="allshow">
    		<span class="car-info-left">年检到期时间</span>
    		<span class="car-info-right">{{carinfoData.c_check_time}}</span>
    	</div>
    	<div class="car-info-line" v-show="allshow">
    		<span class="car-info-left">发动机</span>
    		<span class="car-info-right">{{carinfoData.ct_motor}}</span>
    	</div>
    	<div class="car-info-line" v-show="allshow">
    		<span class="car-info-left">变速箱</span>
    		<span class="car-info-right">{{carinfoData.ct_variable}}</span>
    	</div>
    	<div class="car-info-line" v-show="allshow">
    		<span class="car-info-left">驱动方式</span>
    		<span class="car-info-right">{{carinfoData.ct_drive}}</span>
    	</div>
    	<div class="car-info-line" v-show="allshow">
    		<span class="car-info-left">燃料形式</span>
    		<span class="car-info-right">{{carinfoData.ct_oil}}</span>
    	</div>
    	<div class="car-info-line" v-show="allshow">
    		<span class="car-info-left">排放标准</span>
    		<span class="car-info-right">{{carinfoData.ct_ep_standard}}</span>
    	</div>
    	<div class="car-info-line" v-show="allshow">
    		<span class="car-info-left">排量</span>
    		<span class="car-info-right">{{carinfoData.ct_en_capacity}}</span>
    	</div>
    	<div class="all-config" @click="allshow=true">查看全部配置</div>
    </div>
    <div class="car-info-tab-content car-info-spot"  v-show="tabview=='select1'">
    	<div class="car-spot-item">
    		<img src="../../assets/images/car-spot1.jpg" class="car-spot-img">
    		<p class="car-spot-intro">今天的主角来自浪漫的布拉格，它有着张扬的个性、硬汉般的身躯、灵活的空间，它是生活的多面手，它是居家可靠的小能手，它就是——斯柯达Yeti。</p>
    	</div>
    	<div class="car-spot-item">
    		<img src="../../assets/images/car-spot1.jpg" class="car-spot-img">
    		<p class="car-spot-intro">今天的主角来自浪漫的布拉格，它有着张扬的个性、硬汉般的身躯、灵活的空间，它是生活的多面手，它是居家可靠的小能手，它就是——斯柯达Yeti。</p>
    	</div>
    	<div class="car-spot-item">
    		<img src="../../assets/images/car-spot1.jpg" class="car-spot-img">
    		<p class="car-spot-intro">今天的主角来自浪漫的布拉格，它有着张扬的个性、硬汉般的身躯、灵活的空间，它是生活的多面手，它是居家可靠的小能手，它就是——斯柯达Yeti。</p>
    	</div>
    </div>
    <div class="car-info-tab-content buy-car-intro" v-show="tabview=='select2'">
    	<div class="buy-car-item" v-for="item in carinfoData.c_show_bcid">
    		<h3 class="buy-car-title">{{item.bc_firstpay_point*100}}%首付</h3>
    		<p class="buy-car-txt">首付{{item.bc_firstpay_money | filterNum}}元，月供{{item.bc_firstmonth_pay | filterNum }}元*{{item.bc_month_period}}期</p>
    		<p class="buy-car-txt">尾款购车{{item.bc_firstend_pay | filterNum}}元，支持分期{{item.bc_firstend_monthpay | filterNum}}元*{{item.bc_end_period}}期</p>
    	</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  	carinfoData: {
  		type: Object
  	}
  },
  data () {
    return {
    	tabview: 'select0',
    	num:0,
    	allshow: false,
    	tabTxt: ['车辆信息','车型亮点','购车说明'],
    }
  },
  methods: {
  	tabChange(select,index) {
  		this.num=index;
  		this.tabview = select;
  	}
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.car-info-tab-wrap {
	margin: 30px 0;	
	background-color: #fff;
	.car-info-tab {
		position: -webkit-sticky;
	    position: sticky;
	    top: 0;
		@include flex(row);
		justify-content: space-between;
		line-height: 94px;
		padding: 0 30px;
		border-bottom: 1px solid #ececec;
		font-size: 32px;
		color: #777;
		background-color: #fff;
		li {
			padding: 0 20px; 
		}
		.border-bottom {
			display: none;
			width: 100px;
			height: 4px;
			background-color: #f6ad3c;
			margin: 0 auto;
		}
		.active {
			color: #333;
			.border-bottom {
				display: block;
			}
		}
	}
	.car-info-tab-content {
		padding: 0 50px 30px;
		font-size: 28px;
		color: #333;
	}
	.car-info-line {
		@include flex(row);
		line-height: 84px;
		justify-content: space-between;
		// border-bottom: 1px solid #ececec;
		box-sizing: border-box;
		&:last-child {
			border-bottom: none;
		}
	}
	.car-info-line + .car-info-line {
		border-top: 1px solid #ececec;
	}
	.border-none {
		border-bottom: 0;
	}
	.car-info-left {
		color: #777;
	}
	.all-config {
		line-height: 82px;
		font-size: 28px;
		color: #777;
		background-color: #ececec;
		text-align: center;
	}
	.car-info-spot {
		padding: 24px 30px;
	}
	.car-spot-item {
		margin-top: 24px;
		&:first-child {
			margin-top: 0;
		}
	}
	.car-spot-img {
		width: 100%;
	}
	.car-spot-intro {
		font-size: 24px;
		color: #777;
		line-height: 30px;
		margin-top: 20px;
	}
	.buy-car-intro {
		padding: 0 30px;
	}
	.buy-car-item {
		padding: 32px 0;
	}
	.buy-car-item + .buy-car-item {
		border-top: 1px solid #ececec;
	}
	.buy-car-title {
		font-size: 32px;
		color: #f8bd5f;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.buy-car-txt {
		font-size: 24px;
		color: #333;
		line-height: 36px;
	}
}
</style>