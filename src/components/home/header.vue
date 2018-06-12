<template>
    <Heador>
        <i class="logo" slot="home-logo"></i>
        <router-link to="/search/newcar"  class="search-wrap" slot="search">
          <i class="search-icon"></i>
          品牌或车系
        </router-link>
        <router-link :to="{ name: 'news'}" slot="news">
	        <i class="icon-info"></i>
	      </router-link>
    </Heador>
</template>
<script>
import Heador from "../public/heador.vue"
export default {
  components: {
  	Heador,
  },
  data () {
    return {
      
    }
  }
}
</script>
<style  lang="scss">
@import "../../css/element.scss";

</style>