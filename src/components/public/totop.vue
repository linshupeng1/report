<template>
  <transition name="fade">
	  <div class="totop" @click="totop" v-show="isShow">
	  </div>
  </transition>
</template>
<script>

export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted() {
  	window.addEventListener('scroll',this.hanScroll)
  },
  methods: {
  	totop() {
  		scrollTo(0,0);
  		this.isShow=false;
  	},
  	hanScroll() {
		var oTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(oTop > 400){
			this.isShow=true;
		}else if(oTop==0){
			this.isShow=false;
		} 
  	}
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.totop {
	position: fixed;
	bottom: 100px;
	right: 60px;
	width: 71px;
	height: 71px;
	background:  url('../../assets/images/icon-up.png') no-repeat;
	background-size: contain;
}
</style>