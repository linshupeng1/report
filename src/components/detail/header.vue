<template>
  <div class="detail-header">
    <Heador>
    	<div class="detail-left" slot="detail-left">
    		<i class="icon-left" @click="back"></i>
    		<i class="icon-share"></i>
    	</div>
    	<div class="header-menu" slot="home-menu">
          <i class="menu-icon" @click="showMenu=!showMenu"></i>
          <transition name="menu-list">
            <ul class="menu-list" v-show="showMenu">
              <li @click="topage('','home')">首页</li>
              <li @click="topage('新车','carlists')">选新车</li>
              <li @click="topage('二手车','carlists')">选二手车</li>
              <li>在线客服</li>
            </ul>
          </transition>
        </div>
    </Heador>
  </div>
</template>
<script>
import Heador from "../public/heador.vue"
export default {
  components: {
  	Heador
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
  	back() {
  		this.$router.back(-1);
  	},
    topage(type,link) {
      if(type) {
        this.$router.push({
          name: link,
          params: {
            c_type: type,
          }
        })
      }else {
        this.$router.push({
          name: link,
        })
      }
    }	
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
.detail-left {
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex:1;
  .icon-left {
    display: inline-block;
    width: 20px;
    height: 36px;
    background: url('../../assets/images/icon-back.png') no-repeat;
    background-size: contain;
    margin-right: 30px;
  }
  .icon-share {
  	display: inline-block;
  	width: 34px;
  	height: 36px;
  	background: url('../../assets/images/icon-share.png') no-repeat;
  	background-size: contain;
  	margin-right: 34px;
  }
}
</style>