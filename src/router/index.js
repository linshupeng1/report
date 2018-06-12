import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index';
import Search from '../components/search/search';
import SearchResult from '../components/search/searchResult';
import News from '../components/news/index';
import Allbrand from '../components/allbrand/allbrand';
import List from '../components/lists/list';
import Carlists from '../components/public/carList';
import Detail from '../components/detail/index';
import '../css/reset.scss'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      	path: '/',               //首页
      	name: 'home',
      	component: Home
    },{
        path: '/search',         //搜索
        component: Search,
        redirect: '/search/newcar',
        children: [
          {
            path:'/search/newcar',
            name: 'newcar',
            component: SearchResult
          },{
            path:'/search/usedcar',
            name: 'usedcar',
            component: SearchResult
          }
        ]
    },{
    	path: '/news',        //新闻页
    	name: 'news',
    	component: News
    },{
      path: '/allbrand',    //全部品牌页
      name: 'allbrand',
      component: Allbrand
    },{
      path: '/buy',
      component: List,
      children: [
        {
          path: '/buy/c_type=:c_type&user_search=:user_search', //搜索新车、二手车
          name: 'carlists',
          component: Carlists
        },
        {
          path: '/buy/c_type=:c_type',          //首页新车、二手车
          name: 'homecarlists',
          component: Carlists
        },
        {
          path: '/buy/tag_name=:filter_name',   //筛选查询
          name: 'filtercar',
          component: Carlists
        },
        {
          path: '/buy/c_bid=:c_bid',            //品牌查询
          name: 'brandcar',
          component: Carlists
        }
      ]
    },{
      path: '/detail/c_id=:c_id',               //详情页
      name: 'detail',
      component: Detail
    }
  ],
  
})
