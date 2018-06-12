<template>
  <div class="pay-type-wrap">
     <div class="pay-type-panel">
     	<h3 class="pay-type-title">
     		<i class="border-left"></i>
     		先用1年
     		<span class="pay-tag" v-for="item in tagArr(paytypeTagName)">{{item}}</span>
     		<!-- <span class="pay-tag">送1年保险</span> -->
     	</h3>
     	<ul class="pay-detail">
     		<li>
     			<span class="pay-detail-content">{{ paytypeData.bc_firstpay_money | filterMoney}}万</span>
     			<span class="pay-detail-txt">首付</span>
     		</li>
     		<li>
     			<span class="pay-detail-content">{{paytypeData.bc_firstmonth_pay | filterNum}}元</span>
     			<span class="pay-detail-txt">月供</span>
     		</li>
     		<li>
     			<span class="pay-detail-content">{{paytypeData.bc_month_period}}期</span>
     			<span class="pay-detail-txt">期数</span>
     		</li>
     	</ul>
     	<p class="pay-txt-line">购车时支付首付1.49万（提车后返还）</p>
     	<p class="pay-txt-line">需向门店支付交车服务费3000元<i class="icon-explain"></i></p>
     </div>
     <div class="pay-type-panel">
     	<h3 class="pay-type-title">
     		<i class="border-left"></i>
     		1年后
     	</h3>
     	<p class="pay-txt-line tail-price">尾款购车{{paytypeData.bc_firstend_pay | filterNum}}元<span class="tail-intro">（支持分期{{paytypeData.bc_firstend_monthpay | filterNum}}元*{{paytypeData.bc_end_period}}期）</span></p>
     	<p class="pay-txt-line others-txt">其它限制条件等</p>
     </div>
  </div>
</template>
<script>
export default {
  props: {
	paytypeData: {
		type: Object,	
	},
	paytypeTagName: {
		type: String
	}
  },
  data () {
    return {
     
    }
  },
  methods: {
  	tagArr(tag) {
    	// 保留前两个标签
    	var str1 = tag || '';
    	return str1.split(",").slice(0,2);
    },
  },

}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.pay-type-wrap {
	padding: 0 30px;
	margin: 30px 0;
	background: #fff;
	font-size: 24px;
	color: #333;
	.pay-type-panel {
		padding: 30px 0;
		&:last-child {
			border-top: 1px solid #ececec;
		}
	}
	.pay-type-title {
		display: flex;
		align-items: center;
		font-size: 28px;
		color: #333;
	}
	.border-left {
		display: inline-block;
		width: 6px;
		height: 28px;
		background-color: #f6ad3c;
		border-radius: 5px;
		margin-right: 20px;
	}
	.pay-tag {
		color: #fff;
		padding: 6px 14px;
		background-color: #f6ad3c;
		border-radius: 20px;
		margin-left: 24px;
	}
	.pay-detail {
		margin-top: 20px; 
		padding: 20px 0;
		background-color: #fbfafa;
		border-radius: 6px;
		@include flex(row);
		li {
			width: 33.33%;
			text-align: center;
			border-right: 1px solid #ececec;
			box-sizing: border-box;
			&:last-child {
				border-right: 0;
			}
		}
		.pay-detail-content {
			font-size: 36px;
			color: #eb4c51;
			display: block;
			font-weight: bold;
			margin-bottom: 16px;
		}
	}
	.pay-txt-line {
		color: #999;
		margin-top: 26px;
	}
	.tail-price {
		font-size: 30px;
		color: #eb4c51;
	}
	.tail-intro {
		font-size: 24px;
	}
	.others-txt {
		color: #333;
	}
}
</style>