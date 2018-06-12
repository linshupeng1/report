<template>
  <div class="home">
    <Heador></Heador>  
    <Banner></Banner>
    <HotBrand :hotBrandData="hotBrandData"></HotBrand> 
    <Promote :promoteData="promoteData"></Promote> 
    <Newcar :newcarData="newcarData"></Newcar>
    <Best :bestData="bestData"></Best>
    <Totop></Totop>
  </div>
</template>
<script>
import Heador from "./header.vue"
import Totop from "../public/totop.vue"
import Banner from "./banner.vue"
import HotBrand from "./hotbrand.vue"
import Promote from "./promote.vue"
import Newcar from "./newcar.vue"
import Best from "./best.vue"
import axios from 'axios'
export default {
  components: {
    Heador,
    Banner,
    HotBrand,
    Promote,
    Newcar,
    Best,
    Totop,
  },
  data(){
    return {
        // 促销专区
        promoteData: [],
        // 新车推荐
        newcarData: [],
        // 畅销榜单
        bestData: [],
        // 热门品牌
        hotBrandData: []
    }
  },
  created() {
    document.getElementsByTagName('html')[0].style.overflow="auto";
    this.fetchData();
    this.fetchData2();
  },
  methods: {
    fetchData() {
      axios.get('/home.php')
      .then((res)=>{
       this.promoteData = res.data.data.cuxiao;
       this.newcarData = res.data.data.tuijian;
       this.bestData = res.data.data.chanxiao;
       //console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
    },
    fetchData2() {
      axios.get('/home.php/index/get_hot_brand')
      .then((res)=>{
       this.hotBrandData = res.data.data;
       // console.log(this.hotBrandData);
      })
      .catch((err)=>{
        console.log(err);
      });
    },
  }
}
</script>
<style  lang="scss">

</style>