<template>
  <div class="filter-content">
    <ul class="filter-menu">
    	<li class="filter-item" :class="{actived:order}" @click="orderShow">
    		<span>{{selectName}}</span>
    	 	<i class="icon"></i>
    	</li>
    	<li class="filter-item" :class="{actived:brand}" @click="brandShow">
    		<span>品牌</span> 
    		<i class="icon"></i>
    	</li>
  		<li class="filter-item more-filter" :class="{actived:select}" @click="selectShow">
  			<span>筛选</span> 
  			<i class="icon-filter"></i>
  		</li>
	  </ul>
    <transition name="filter">
      <ul class="filter-position list-orderBy-filter" v-show="order">
        <li :class="{active: num==index}" @click="loadPage(item.text,index)" v-for="(item,index) in defaultList">
          <span>{{item.text}}</span>
          <img :src="item.icon" class="select-icon">
        </li>
<!--         <li>
          <span>人气最高</span>
          <img src="../../assets/images/icon-select.png" class="select-icon">
        </li>
        <li>
          <span>销量最好</span>
          <img src="../../assets/images/icon-select.png" class="select-icon">
        </li> -->
        <!-- <li @click="loadPage('价格最高')">
          <span>价格最高</span>
          <img src="../../assets/images/icon-select.png" class="select-icon">
        </li>
        <li @click="loadPage('价格最低')">
          <span>价格最低</span>
          <img src="../../assets/images/icon-select.png" class="select-icon">
        </li> -->
      </ul>
    </transition>
    <transition name="filter">
      <div class="filter-position brand-filter-wrap" v-show="brand">
        <ul class="brand-filter">
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/1.png" class="brand-img">
            <span>别克</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/2.png" class="brand-img">
            <span>本田</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/3.png" class="brand-img">
            <span>大众</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/4.png" class="brand-img">
            <span>福特</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/5.png" class="brand-img">
            <span>日产</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/6.png" class="brand-img">
            <span>标致</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/7.png" class="brand-img">
            <span>JEEP</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/8.png" class="brand-img">
            <span>宝马</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/9.png" class="brand-img">
            <span>马自达</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/10.png" class="brand-img">
            <span>沃尔沃</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/11.png" class="brand-img">
            <span>英菲尼迪</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home'}">
            <img src="../../assets/images/12.png" class="brand-img">
            <span>MINI</span>
            </router-link>
          </li>
        </ul>
        <div class="btn-all-brand" @click="goallbrand">
              查看全部品牌
        </div>
      </div>
    </transition>
    <transition name="filter">
      <div class="filter-position select-filter-wrap" v-show="select">
        <div class="pay-type">
          <h3 class="pay-type-title">首付<span class="unit">(万)</span><span class="select-result" id="first-pay">不限首付</span></h3>
          <div class="range">
            <div class="range-wrap">
              <div class="range-run-wrap">
                <div class="range-runway"></div>
                <img src="../../assets/images/range-btn.png" class="start-btn range-btn">
                <div class="range-inner"></div>
                <img src="../../assets/images/range-btn.png" class="end-btn range-btn">
              </div>
              <ul class="range-number">
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>不限</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pay-type">
          <h3 class="pay-type-title">月供<span class="unit">(元)</span><span class="select-result" id="month-pay">不限月供</span></h3>
          <div class="range">
            <div class="range-wrap">
              <div class="range-run-wrap">
                <div class="range-runway"></div>
                <img src="../../assets/images/range-btn.png" class="start-btn range-btn" id="startbtn2">
                <div class="range-inner"></div>
                <img src="../../assets/images/range-btn.png" class="end-btn range-btn" id="endbtn2">
              </div>
              <ul class="range-number">
                <li>0</li>
                <li>1000</li>
                <li>2000</li>
                <li>3000</li>
                <li>4000</li>
                <li>5000</li>
                <li>不限</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="select-btn">
          <div class="select-txt">已选条件共<span class="select-num">777</span>辆车</div>
          <router-link :to="{name: 'home'}" class="check-select">查看</router-link>
        </div>
      </div>
    </transition>
    <!-- <Allbrand v-show="showAllBrand" :showAllBrand="showAllBrand" @brandEvent="brandEvent"></Allbrand> -->
    <div class="layout" v-show="flag" @click="closeFilter"></div>
  </div>
</template>
<script>
export default {
  name: 'mymenu',
  data () {
    return {
        order: false,
        brand: false,
        select: false,
        showTag: true,
        num: 0,
        selectName: '默认排序',
        defaultList: [
          {
            text: "默认排序",
            icon: require("../../assets/images/icon-select.png")
          },{
            text: "价格最高",
            icon: require("../../assets/images/icon-select.png")
          },{
            text: "价格最低",
            icon: require("../../assets/images/icon-select.png")
          },
        ]
    }
  },
  mounted: function() {
    var startBtn = document.querySelector('.start-btn');
    var endBtn = document.querySelector('.end-btn');
    var rangeInner = document.querySelector('.range-inner');
    var firstPay = document.getElementById('first-pay');
    var rangeWidth =0;
    var btnStartLeft=0;
    var btnEndLeft=100;
    function wetherScroll(ele){
        var startX = 0,
            endX = 0,
            endLeft =0;
        ele.addEventListener('touchstart',function(event){
          var touch = event.targetTouches[0];
          //滑动起点的坐标
          startX = touch.pageX;
          // console.log("startX:"+startX);
        });
        ele.addEventListener("touchmove",function(event){
          var touch = event.targetTouches[0];
          //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
            endX = touch.pageX;
            rangeWidth = document.querySelector('.range-run-wrap').offsetWidth;
            if(ele.getAttribute('class') == 'start-btn range-btn') {
              btnStartLeft =  Math.ceil((endX-30)/rangeWidth*100); 
              if(btnStartLeft>100) {
                btnStartLeft=100;
              }else 
              if(btnStartLeft+5>btnEndLeft) {
                ele.style.left = 'calc('+ Number(btnEndLeft-5) + '% -'+' 0.4rem)';  
                rangeInner.style.width = '4%'; 
                rangeInner.style.left = Number(btnEndLeft) + '%';
              }else if(btnStartLeft<0){
                ele.style.left = 'calc(0% - 0.4rem)';
                rangeInner.style.left = '0%';
                btnStartLeft=0;
                rangeInner.style.width = btnEndLeft - btnStartLeft + '%';
              }else {
                ele.style.left = 'calc('+ btnStartLeft + '% -'+' 0.4rem)';
                rangeInner.style.left = btnStartLeft + '%';
                rangeInner.style.width = btnEndLeft - btnStartLeft + '%';
              } 
            } else if(ele.getAttribute('class') == 'end-btn range-btn') {
              btnEndLeft = Math.ceil((endX-30)/rangeWidth*100);
              if(btnStartLeft+5>btnEndLeft) {
                ele.style.left = 'calc('+ Number(btnStartLeft+5) + '% -'+' 0.4rem)';
                rangeInner.style.width = '4%';  
              }else if(btnEndLeft>99){
                ele.style.left = 'calc(100% - 0.4rem)';
                btnEndLeft=100;
                rangeInner.style.width = btnEndLeft - btnStartLeft + '%';
              }else {
                ele.style.left = 'calc('+ btnEndLeft + '% -'+' 0.4rem)';
                rangeInner.style.width = btnEndLeft - btnStartLeft + '%';
              }
            }
        });
        ele.addEventListener("touchend",function(event){
            var firstNum = Math.round(btnStartLeft/100*6);
            var SecondNum = Math.round(btnEndLeft/100*6);
            if(btnStartLeft==0 && btnEndLeft==100) {
              firstPay.innerHTML = '不限首付';
              firstPay.setAttribute('class','select-result');
            }else {
              firstPay.setAttribute('class','select-result select-active');
              if(firstNum>SecondNum || firstNum==SecondNum) {
                firstPay.innerHTML = firstNum + '万';
              }else {
                firstPay.innerHTML = firstNum + '-' + SecondNum + '万';
              }
            }
            // console.log(btnStartLeft);
        });
    }
    wetherScroll(startBtn);
    wetherScroll(endBtn);
    // wetherScroll(startBtn2);
    // wetherScroll(endBtn2);
  },
  computed: {
    flag: function() {
      return this.order||this.brand||this.select;
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     // alert(11);
  //   }
  // },
  methods: {
    orderShow: function() {
      this.order = !this.order;
      this.brand = false;
      this.select = false;
      this.noScroll("hidden");
    },
    brandShow: function() {
      this.brand = !this.brand;
      this.order = false;
      this.select = false;
      this.noScroll("hidden");
    },
    selectShow: function() {
      this.select = !this.select;
      this.order = false;
      this.brand = false;
      this.noScroll("hidden");
    },
    closeFilter: function() {
      this.order = false;
      this.brand = false;
      this.select = false;
      this.noScroll("auto");
    },
    goallbrand(){
      this.$router.push({
        name: 'allbrand'
      });
    },
    // 遮罩禁止滑动
    noScroll(is){
      document.getElementsByTagName('html')[0].style.overflow=is;
    },
    loadPage(param,index) {
      this.num=index;
      this.selectName = param;
      this.noScroll("auto");
      this.order = false;
      this.$router.push({
          name: 'filtercar',
          params: {
            filter_name: param,
          }
      });
      // location.reload();
    }
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
@import "../../css/menu.scss";
</style>