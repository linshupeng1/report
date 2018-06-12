<template>
  <div class="banner">
    <img src="../../assets/pic/home/banner-img.jpg" class="banner-img">
    <ul class="banner-list">
    	<li @click="toListPage('新车','homecarlists')">
    		<i class="banner-icon icon-new-car"></i>
    		新车
    	</li>
    	<li @click="toListPage('二手车','homecarlists')">
    		<i class="banner-icon icon-used-car"></i>
    		二手车
    	</li>
    	<li>
    		<i class="banner-icon icon-online-server"></i>
    		在线客服
    	</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'banner',
  data () {
    return {
      
    }
  },
  mounted: function() {
  	// this.getData();
  },
  methods: {
  	toListPage(type,listLink){
    	this.$router.push({
		    name: listLink,
		    params: {
		      c_type: type,
		    }
		});
    }
  }
}
</script>
<style  lang="scss" scoped>
	@import "../../css/element.scss";
 	$dir: "../../assets/images/home/";
	.banner-img {
		width: 100%;
	}
	.banner-list {
		@include flex(row);
		justify-content: space-between;
		align-items: center;
		height: 204px;
		background: #fff;
		color: #333;
		font-size: 24px;
		padding: 0 30px;
		text-align: center;
		li {
			padding: 0 50px;
		}
	}
	.banner-icon {
		display: block;
		width: 88px;
		height: 96px;
		margin-bottom: 20px;
	}
	.icon-new-car {
		background: url($dir + 'icon-new-car.png') no-repeat;
		background-size: contain;
	}
	.icon-used-car {
		background: url($dir + 'icon-used-car.png') no-repeat;
		background-size: contain;
	}
	.icon-online-server {
		background: url($dir + 'icon-online-server.png') no-repeat;
		background-size: contain;
	}
</style>