<template>
   <Panel class="newcar-panel common-panel">
	   	<template slot="panel-header-info">
		   	<div class="newcar-header" @click="toPage()">
		      	<p class="header-main">新车专区</p>
		      	<p class="header-desc">新品上市 ，更多精彩体验</p>
			    <i class="icon-right"></i>
			</div>
		</template>
		<template slot="panel-content-info">
			<section class="newcar-wrap">
		    	<router-link :to="{ name: 'detail',params:{c_id:item.c_id}}" class="car-item" v-for="item in newcarData">
			    	<div class="car-name">
			    		{{item.c_seriesname}}
			    		<!-- <span class="car-tag">月供直降</span> -->
			    	</div>
			    	<div class="car-info-bottom">
				    	<img :src="joinUrl(item.imgsrc)" class="car-img">
				    	<div class="car-price-wrap">
			    			<p class="car-price"><span class="pay-type">首付</span><span class="font-b">{{item.bc_firstpay_money | filterMoney}}</span>万</p>
					    	<p class="car-price txt-gray mt16"><span class="pay-type">月供</span>{{item.bc_firstmonth_pay | filterNum}}元</p>
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
    newcarData: {
      type: Array
    }
  },
  data () {
    return {
      pro: []
    }
  },
  methods: {
  	toPage(){
  		this.$router.push({
  		    name: 'filtercar',
  		    params: {
  		      filter_name: '新车专区',
  		    }
  		})
  	}
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.newcar-panel {
	.header-main {
		color: #f6ad3c;
	}
	.car-line {
		@include border-b;
	}
}
.newcar-wrap {
	position: relative;
	@include flex(row);
	padding: 0 30px;
	&:before {
		position: absolute;
		content:'';
		display: block;
		width: 92%;
		height: 0;
		border-bottom: 1px solid #ececec;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
}
</style>