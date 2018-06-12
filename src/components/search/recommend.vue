<template>
<div class="car-recommend-wrap">
  <div class="car-recommend">
    <img src="../../assets/images/icon-empty.png" class="icon-empty">
    <p class="empty-intro">暂无符合条件的车源</p>
  </div>
  <div class="recommend-content">
  	<h4 class="recommend-title">为您推荐</h4>
	<!-- <Carlist :carinfo="carinfo"></Carlist> -->
  </div>
</div>
</template>
<script>
import Carlist from "../public/carList.vue"
export default {
  components: {
	Carlist,
  },
  data () {
    return {
      carinfo: {
        newcarinfo: true,
        usedcarinfo: false,
        c_type:'新车',
        c_search:'宝马',
        showTag: false,
      }
    }
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
.car-recommend {
	height: 230px;
	background: #f3f3f3;
	font-size: 28px;
	color: #bcbcbc;
	text-align: center;
	.icon-empty {
		display: inline-block;
		width: 100px;
		height: 100px;
		margin-top: 40px;
	}
	.empty-intro {
		margin: 26px 0 40px 0;
	}
}
.recommend-content {
	background: #fff;
	.recommend-title {
		font-size: 28px;
		color: #333;
		padding: 30px 30px 0;
	}
}
</style>