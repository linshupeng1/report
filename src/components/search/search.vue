<template>
  <div class="search-wrap">
    <div class="search-header">
      <div class="car-type" @click="showType=!showType">
        <span>{{cartype}}</span>
        <i  class="icon-down"></i>
      </div>
      <div class="search-wrap">
        <i class="search-icon"></i>
        <input type="text" placeholder="品牌或车系" class="search-input" v-model.trim="title" autocomplete="off" autofocus="autofocus" @input="searchCar(title)">
      </div>
      <router-link :to="{ name: 'home'}" class="search-cancel">
        取消
      </router-link>
      <transition name="car-type">
        <ul v-show="showType" class="car-type-wrap">
          <li @click="changeCar">
            <router-link :to="{name: carLink}">
              {{cartype2}}
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
    <ul class="search-result-list" v-show="showSearchResult">
      	<li v-for="item in search" @click="toListPage(item.c_type,item.c_brandname)">{{item.c_brandname}}</li>
    </ul>
    <Recommend v-show="showRecommend"></Recommend>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Recommend from "./recommend.vue"
import axios from 'axios'
export default {
  components: {
	Recommend,
  },
  data () {
    return {
	  // 下拉框显示
      showType: false,
      // 搜索结果显示
      showSearchResult: false,
      // 推荐汽车显示
      showRecommend: false,
      // 搜索框内容
      title:'',
      // 搜索接口匹配数据
      search: [],
      // 头部汽车类型
      cartype: '',
      // 下拉汽车类型
      cartype2: '',
      // 跳转子路由
      carLink: '',	
      // 跳转列表页
      buyLink: '',
    }
  },
  /**/
  watch: {
  	title() {
  		// 搜索框不为空进行查询
  		if(this.title){
  			this.fetchData();
  		}
  	}
  },
  created(){
  	this.initSearchPage();
  },
  methods: {
  	// 数组去重
  	//dedupe(array){
	// return Array.from(new Set(array));
	//},

  	// 新车二手车切换
    changeCar() {
      // 下拉框切换
      this.showType = false;
      // 清除搜索框
      this.title="";
      // 清除搜索内容
      this.search = [];
      this.initSearchPage();
    },
    // 根据地址初始化页面
    initSearchPage() {
  		var path = this.$route.path;
  	  if(path=="/search/newcar") {
  	  		this.cartype = "新车";
  	      	this.cartype2 = "二手车";
  	      	this.carLink = 'usedcar';
  	      	this.buyLink = 'carlists';
            this.showRecommend = false;
  		}else {
  	      	this.cartype = "二手车";
  			    this.cartype2 = "新车";
  	      	this.carLink = 'newcar';
        		this.buyLink = 'carlists';
            this.showRecommend = false;
  		}
    },
    // 搜索内容展示
    searchCar(title){
    	// this.search=[];
      if(title=="") {
    		this.showSearchResult = false;
    	}else {
    		this.showSearchResult = true;
    	}
    },
    // 搜索页面跳转到列表页
    toListPage(type,search){
    	this.$router.push({
		    name: this.buyLink,
		    params: {
		      user_search: search,
		      c_type: type
		    }
		});
    },
    //边输入边搜索
    async fetchData() {
      var querystring = require('querystring');
    	await axios.post('/home.php/index/car_search',querystring.stringify({
		    user_search: this.title,
		    c_type: this.cartype
  		}))
  		.then((res)=>{
  		  this.search = res.data.data;
  		  // 是否有搜索内容
  		  if(this.search) {
  		  	this.showRecommend=false;
          this.showSearchResult = true;
  		  }else {
  		  	this.showRecommend=true;
          this.showSearchResult = false;
          // this.search = [];
  		  }
  		})
  		.catch((err)=>{
  		  console.log(err);
  		});
    },
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
@import "../../css/search.scss";
.search-result-list {
	padding: 0 30px;
	font-size: 28px;
	color: #333;
	margin-bottom: 30px;
	li {
		padding: 20px 0;
	}
}
.car-type-enter-active, .car-type-leave-active {
  transform-origin: 50% 0;
  transition: transform .2s;
}
.car-type-enter, .car-type-leave-to {
  transform-origin: 50% 0;
  transform: scaleY(0);
}
</style>