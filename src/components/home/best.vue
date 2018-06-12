<template>
   <Panel class="best-panel common-panel">
	   	<template slot="panel-header-info">
		   	<div class="best-header" @click="toPage()">
		      	<p class="header-main">畅销榜单</p>
		      	<p class="header-desc">好车不等人，手快有手慢无</p>
		      	<i class="icon-right"></i>
		    </div>
		</template>
		<template slot="panel-content-info">
			<section class="car-line car-line-first" v-for="(item,index) in bestData">
			    <router-link :to="{ name: 'detail',params:{c_id: item.c_id}}" class="car-line-inner">
			    	<img :src="joinUrl(item.imgsrc)" class="car-img">
			    	<div class="car-detail">
				    	<div class="car-name">
				    		{{item.c_seriesname}}
					    	<!-- <span class="car-tag">月供直降</span> -->
				    	</div>
				    	<p class="car-desc">{{item.c_typename}}</p>
				    	<p class="car-price"><span class="font-b">{{item.bc_firstpay_money | filterMoney}}万</span><span class="pay-type txt-gray">首付</span></p>
				    	<p class="car-price font-black"><span class="">{{item.bc_firstmonth_pay | filterNum}}</span>元<span class="pay-type txt-gray">月供</span></p>
			    	</div>
			    	<i class="icon-rank" :class="'icon-rank-' + (index+1)"></i>
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
    bestData: {
      type: Array
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
  	toPage(){
  		this.$router.push({
  		    name: 'filtercar',
  		    params: {
  		      filter_name: '畅销榜单',
  		    }
  		})
  	}
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.best-panel {
	.header-main {
		color: #eb4c51;
	}
	.car-line {
		@include border-b;
	}
	.font-black {
		color: #000;
		font-size: 28px;
	}

}
.car-line-inner {
	position: relative;
	.icon-rank {
		position: absolute;
		display: block;
		width: 48px;
		height: 60px;
		left: 0;
		top: 24px;
	}
	.icon-rank-1 {
		background: url('../../assets/images/home/rank-1.png') no-repeat;
		background-size: contain;
	}
	.icon-rank-2 {
		background: url('../../assets/images/home/rank-2.png') no-repeat;
		background-size: contain;
	}
	.icon-rank-3 {
		background: url('../../assets/images/home/rank-3.png') no-repeat;
		background-size: contain;
	}
}
</style>