<template>
<div>
  <ul class="car-list">
    <li v-for="item in items">
      <div class="car-list-item" @click="toDetail(item.c_id)">
      	<img src="../../assets/images/item-car.jpg" class="item-car-img">
      	<div class="car-info">
      		<h4 class="car-name">{{item.c_seriesname}}</h4>
      		<p class="car-intro">{{item.c_typename}}</p>
      		<p class="car-guide-price" v-if="item.c_type=='新车'">厂家指导价：{{item.c_factoryprice | filterMoney}}万</p>
          <p class="usedcar-info" v-if="item.c_type=='二手车'"><span class="usedcar-year">{{item.c_num_time.slice(0,4)}}</span>{{item.c_mileage | filterMoney }}万公里</p>
      		<div class="car-pay-type">
      			<span class="car-first-pay">首付{{item.bc_firstpay_money | filterMoney}}万</span>
      			<span class="car-month-pay">月供{{item.bc_firstmonth_pay | filterNum}}元</span>
      		</div>
      		<div class="car-pay-tag">
      			<span class="pay-tag" v-for="tags in tagArr(item.tag_name)">{{tags}}</span>
      			<!-- <span class="pay-tag">月供直降</span> -->
      		</div>	
      	</div>
      </div>
    </li>
  </ul>
  <transition name="up">
	  <div class="total-num" v-show="carinfo.showTag">
	    共有{{carNum}}辆车符合条件
	  </div>
  </transition>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      carinfo: {
        c_type: "",
        c_search: "",
        filter_name: "",
        showTag: false,
        c_bid: 0,
      },
      items: [

      ],
      carNum: 0
    }
  },
  created() {
     this.carinfo.c_type = this.$route.params.c_type;
     this.carinfo.c_search = this.$route.params.user_search;
     this.carinfo.c_bid = this.$route.params.c_bid;
     this.carinfo.filter_name = this.$route.params.filter_name;
  	 this.fetchData();
  	 // var self = this;
     this.carinfo.showTag = true;
  	 setTimeout(()=>{
    		this.carinfo.showTag=false;
     },3000);
  },
  methods: {
  	fetchData() {
      var querystring = require('querystring');
      // 按标签名筛选条件
      if(this.carinfo.filter_name) {
        //alert(this.carinfo.filter_name);
        axios.post('/home.php/index/car_tag_search',querystring.stringify({
            tag_name: this.carinfo.filter_name,
        })) 
        .then((res)=>{
          this.items = res.data.data;
          // this.carinfo.c_type = res.data.data.c_type;
          this.carNum = this.items.length;
          console.log(this.items);
        })
        .catch((err)=>{
          console.log(err);
        });
      }else if(this.carinfo.c_search) {
  		  // 搜索入口
	    	axios.post('/home.php/index/car_search',querystring.stringify({
  			    c_type: this.carinfo.c_type,
  			    user_search: this.carinfo.c_search
  			}))
  			.then((res)=>{
  			  this.items = res.data.data;
          // this.carinfo.c_type = res.data.data.c_type;
  			  this.carNum = this.items.length;
  			  console.log(this.items);
  			})
  			.catch((err)=>{
  			  console.log(err);
  			});
  		}else if(this.carinfo.c_type){
  			// 首页入口-新车二手车
  			axios.post('/home.php/index/car_search',querystring.stringify({
              c_type: this.carinfo.c_type 
  			}))
  			.then((res)=>{
  			  this.items = res.data.data;
          // this.carinfo.c_type = res.data.data.c_type;
  			  this.carNum = this.items.length;
  			  console.log(this.items);
  			})
  			.catch((err)=>{
  			  console.log(err);
  			});
  		}else if(this.carinfo.c_bid){
        axios.post('/home.php/index/car_search',querystring.stringify({
            c_bid: this.carinfo.c_bid 
        }))
        .then((res)=>{
          this.items = res.data.data;
          // this.carinfo.c_type = res.data.data.c_type;
          this.carNum = this.items.length;
          console.log(this.items);
        })
        .catch((err)=>{
          console.log(err);
        });
      }
    },
  	// 字符串转数组，保留前两个标签
    tagArr(tag) {
      // alert(tag);
      var result = tag.split(",").slice(0,2);
    	return result;
    },
    // 跳转详情页
    toDetail(id) {
  		this.$router.push({
  		    name: 'detail',
  		    params: {
  		      c_id: id,
  		    }
  		})
    }
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.car-list {
  padding: 0 30px;
  font-size: 28px;
  color: #333;
  background-color: #fff;
  li {
		border-bottom: 1px solid #ececec;
    &:last-child {
      border-bottom: 0;
    }
  }
  .car-list-item {
    @include flex(row);
	padding: 30px 0;
    color: #333;
    justify-content: space-between;
	}
	.item-car-img {
		width: 280px;
		height: 172px;
	}
	.car-intro {
		margin: 14px 0;
		text-overflow: ellipsis;
		overflow:hidden;
		white-space: nowrap;
	}
	.car-pay-type {
		margin: 26px 0;
	}
	.car-guide-price {
		font-size: 24px;
		color: #999;
	}
	.car-first-pay {
		font-size: 30px;
		color: #eb4c51;
        margin-right: 20px;
	}
	.pay-tag {
		color: #fff;
		font-size: 18px;
		background: #eb4c51;
		line-height: 1;
		padding: 4px 14px;
		border-radius: 20px;
		margin-right: 20px;
	}
	.car-info {
		width: 50%;
	}
    .usedcar-info {
        font-size: 24px;
        color: #999;
    }
    .usedcar-year {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #ececec;
    }
}
.total-num {
  position: absolute;
  display: block;
  width: 330px;
  line-height: 70px;
  text-align: center;
  font-size: 24px;
  color: #333;
  background-color: #f6ad3c;
  top: 180px;
  left: 50%;
  margin-left: -165px;
  border-radius: 35px;
  z-index: 10;
}

.up-enter-active, .up-leave-active {
  transition: all .5s;
}
.up-enter, .up-leave-to {
  top: 0px;
}

</style>