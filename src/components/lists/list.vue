<template>
  <div class="lists">
    <Heador></Heador>  
    <my-menu></my-menu>
    <keep-alive>
      <router-view :key="key"></router-view> 
    </keep-alive>
  </div>
</template>
<script>
import Heador from "./header.vue"
import MyMenu from "./menu.vue"
// import Carlist from "../public/carList.vue"
export default {
  data(){
    return {

    }
  },
  components: {
    Heador,
    MyMenu,
  },
  computed: {
    // 路由切换刷新
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
  },
  created: function(){
    document.getElementsByTagName('html')[0].style.overflow="auto";
  },

}
</script>
<style  lang="scss">

</style>