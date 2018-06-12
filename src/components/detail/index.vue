<template>
  <div class="detail">
  	<Heador></Heador>
	  <Banner :bannerData="bannerData"></Banner>
	  <Paytype :paytypeData="paytypeData" :paytypeTagName="paytypeTagName"></Paytype>
	  <Carinfotab :carinfoData="carinfoData"></Carinfotab>
	  <Infopop></Infopop>
  </div>
</template>
<script>
import Heador from './header.vue'
import Banner from './banner.vue'
import Paytype from './paytype.vue'
import Carinfotab from './carinfotab.vue'
import Infopop from './infopop.vue'
import axios from 'axios'
export default {
  components: {
  	Heador,
  	Banner,
  	Paytype,
  	Carinfotab,
  	Infopop,
  },
  data () {
    return {
      bannerData: {},
      paytypeData: {},
      paytypeTagName: '',
      carinfoData: {}
    }
  },
  created(){
    document.getElementsByTagName('html')[0].style.overflow="auto";
    this.fetchData();
  },
  methods: {
    fetchData() {
      var querystring = require('querystring');
      axios.post('/home.php/index/car_details',querystring.stringify({
          c_id: this.$route.params.c_id
      }))
      .then((res)=>{
        //console.log(res);
        // banner信息
        this.bannerData= res.data.data;
        // 支付方案
        this.paytypeData = res.data.data.c_bcid;
        this.paytypeTagName = res.data.data.tag_name;
        // 车辆信息
        this.carinfoData= res.data.data;
      })
      .catch((err)=>{
        console.log(err);
      });
      }
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.detail {
	padding-bottom: 120px;
}
</style>