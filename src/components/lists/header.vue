<template>
    <Heador :backname="backname">
        <div class="lists-left" slot="lists-left">
          <i class="icon-left" @click="back"></i>
          <div class="area-select-section">
            <span>福州</span>
            <i class="city-arrow"></i>
          </div>
        </div>
        <router-link :to="{name: 'newcar'}"  class="search-wrap" slot="search">
          <i class="search-icon"></i>
          品牌或车系
        </router-link>
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
</template>
<script>
import Heador from "../public/heador.vue"
export default {
  props: {
    backname: String
  },
  components: {
  	Heador,
  },
  data () {
    return {
      showMenu: false,
      // menuData: ['首页','选新车','选二手车','在线客服']
    }
  },
  methods: {
    back() {
      this.$router.back(-1);
    //    this.$router.push({
		 //    name: 'newcar'
	  // })
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
.lists-left {
  display: flex;
  align-items:center;
  .icon-left {
    display: inline-block;
    width: 20px;
    height: 36px;
    background: url('../../assets/images/icon-back.png') no-repeat;
    background-size: contain;
    margin-right: 30px;
  }
  .area-select-section {
    display: inline-block;
    font-size: 24px;
    color: #333;
  }
  .city-arrow {
    display: inline-block;
    width: 18px;
    height: 10px;
    background: url('../../assets/images/arrow-down.png') no-repeat;
    background-size: contain;
    margin: 0 5px 5px;
  }
}
</style>