// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/public/toast/toast.css';
import Toast from './components/public/toast/toast.js';

Vue.use(Toast);
/**
* 图片url拼接
*/
Vue.prototype.joinUrl = function (url){
  return 'http://zuche.168p2p.com/public/upload/' + url.replace(/\\/g, '/');
}
/**
* 数字取万
*/
Vue.filter('filterMoney',function(value){
	return value/10000;
});
/**
* 数字取整
*/
Vue.filter('filterNum',function(value){
	return parseInt(value);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
