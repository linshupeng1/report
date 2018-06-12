<template>
	<div class="news-wrap">
		<section class="news-header">
			<router-link :to="{name:'home'}">
				<i class="icon-back"></i>
			</router-link>
			消息
		</section>
		<Panel class="news-items" v-for="item in newsData">
			<template slot="panel-header-info">
				{{ymdDate(item.m_create_time)}}
			</template>
			<template slot="panel-content-info">
				<div class="news-content-wrap">
					<h4 class="news-content-tit">{{item.m_title}}</h4>
					<p class="news-content-info">{{item.m_contents}}</p>
					<div class="news-content-detail" @click="toDetail(1)">
						<!-- <router-link :to="{name:'home'}" class="detail-link"> -->
							查看详情
							<i class="icon-right"></i>
						<!-- </router-link> -->
					</div>
				</div>
			</template>
		</Panel>
	</div>
</template>
<script>
import Panel from "../public/panel.vue"
import axios from "axios"
export default {
	components: {
		Panel
	},
  	data () {
    	return {
    		newsData: []
    	}
  	},
   created() {
   		this.fetchData();
   },
  	methods: {
  		fetchData() {
	      axios.get('/home.php/messages/get_sys_message')
	      .then((res)=>{
	      	this.newsData = res.data.data;
	      	console.log(res);
	      })
	      .catch((err)=>{
	        console.log(err);
	      });
	    },
  		// 时间戳转化为日期格式
  		ymdDate(obj) {
  			var date = new Date(Number(obj)*1000);
			var Y = date.getFullYear() + '年';
			var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
			var D = date.getDate() + '日';
			return Y+M+D;
  		},
  		toDetail(id) {
			this.$router.push({
			    name: 'detail',
			    params: {
			      c_id: id,
			    }
			})
	    }
  	},

}
</script>
<style  lang="scss">
@import "../../css/element.scss";
.news-wrap {
	.news-header {
		position: relative;
		background: #fff;
		line-height: 100px;
		text-align: center;
		font-size: 32px;
		color: #333;
		padding: 0 30px;
	}
	.icon-back {
		display: inline-block;
		width: 20px;
		height: 36px;
		position: absolute;
		left: 30px;
		top: 30px;
		background: url('../../assets/images/icon-back.png') no-repeat;
		background-size: contain;
	}
	.news-items {
		padding: 0 30px;
		background-color: #f3f3f3!important;
	    margin: 0!important;
	    font-size: 24px;
		color: #333;
		.panel-header {
			line-height: 70px;
			text-align: center;
			color: #999;
			font-size: 18px;
		}
	}
	.news-content-wrap {
		background: #fff;
		padding: 0 30px;
		border-radius: 8px;
	}
	.news-content-tit {
		font-size: 32px;
		color: #333;
		padding: 30px 0;
	}
	.news-content-info {
		font-size: 24px;
		color: #999;
		line-height: 36px;
		margin-bottom: 24px;
	}
	.news-content-detail {
		position: relative;
		line-height: 72px;
		border-top: 1px solid #ececec;
	}
	.detail-link {
		color: #333;
		display: block;
	}
	.icon-right {
		position: absolute;
		right: 0;
		top: 24px;
		display: inline-block;
		width: 14px;
		height: 24px;
		background: url('../../assets/images/icon-right2.png') no-repeat;
		background-size: contain;
	}
}
</style>