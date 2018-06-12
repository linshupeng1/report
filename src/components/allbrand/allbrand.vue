<template>
  <div class="allbrand">
  	<div class="allbrand-header">
  		<i class="icon-back" @click="back"></i>
  		选择品牌
  	</div>
    <div class="car-selector">
    	<ul class="car-content">
    		<li :id="'anchor-'+index" v-for="(item,index) in allBrandData">
    			<div class="section">{{index}}</div>
    			<div class="inner-list" v-for="name in item" @click="topage(name.b_id)">
	    			<!-- <img :src="name.b_imgurl" alt=""> -->
	    			<img src="" alt="">
	    			<span>{{name.b_typename}}</span>
    			</div>
    		</li>
    	</ul>
    	<ul class="letterList">
    		<li v-for="(item,index) in allBrandData" @click="goAnchor('anchor-'+index)">
    			{{index}}
    		</li>
    	</ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      allBrandData: [],
    }
  },
  created() {
  	this.fetchData();
  },
  methods: {
  	fetchData() {
      axios.get('/home.php/index/get_all_brand')
      .then((res)=>{
      	this.allBrandData = res.data.data;
      })
      .catch((err)=>{
        console.log(err);
      });
    },
  	back() {
  		this.$router.go(-1);
  	},
  	topage(id) {
  		this.$router.push({
  			name:'brandcar',
  			params: {
  				c_bid: id
  			} 
  		});
  	},
  	// 模拟锚点跳转
  	goAnchor(selector) {
        var anchor = document.getElementById(selector);
        document.querySelector(".car-content").scrollTop = anchor.offsetTop;
    }
  }

}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.allbrand {
	position: fixed;
	z-index: 13;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
	.allbrand-header {
	    font-size: 28px;
	    // height: 54px;
	    line-height: 98px;
	    text-align: center;
	    position: relative;
	    background-color: #fff;
	    color: #333;
	}
	.icon-back {
		display: inline-block;
		width: 20px;
		height: 36px;
		position: absolute;
		left: 30px;
		top: 30px;
		background: url('../../assets/images/icon-back.png') no-repeat;
		background-size: contain;
	}
	.car-selector {
	    width: 100%;
	    height: 100%;
	    // min-height: 100vh;
	    background-color: #fff;
	    -webkit-overflow-scrolling: touch;
	    position: relative;
	}
	.car-content {
	    position: absolute;
    	top: 0;
    	left: 0;
    	right: 0;
    	bottom: 0;
    	overflow: hidden;
    	overflow-y: scroll;
    	margin-right: 60px;
        padding-bottom: 150px;
	}
	.letterList {
		font-size: 24px;
	    width: 100%;
	    background-color: #fff;
	    position: fixed;
	    z-index: 2;
	    top: 50%;
	    right: 0;
	    transform: translateY(-50%);
	    text-align: center;
	    width: 60px;
	    color: #f5ae3c;
		li {
			line-height: 30px;
		}
		a {
			color: #f5ae3c;
		}
	}
	.section {
	    font-size: 24px;
	    background-color: #f3f3f3;
	    color: #777;
	    line-height: 58px;
	    padding: 0 30px;
	}
	.inner-list {
		margin-left: 30px;
	    display: -ms-flexbox;
	    display: flex;
	    line-height: 96px;
	    font-size: 28px;
	    color: #333;
	    -ms-flex-align: center;
	    align-items: center;
	    border-bottom: 1px solid #ececec;
	    &:last-child {
	    	border-bottom: none;
	    }
	    img {
	    	width: 50px;
		    height: 50px;
		    vertical-align: top;
		    margin-right: 24px;
	    }
	}
}
</style>