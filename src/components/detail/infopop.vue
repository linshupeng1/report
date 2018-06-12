<template>
  <div class="info-pop-wrap">
    <!-- 遮罩 -->
    <div class="pop-cover" v-show="coverflag" @click="closePop"></div>
    <!-- 信息框 -->
    <div class="pop-content"  v-show="contentflag">
    	<div class="info-line">
    		<input type="text" v-model="phoneModel" maxlength="11" class="num-input" placeholder="输入手机号码"></input>
    	</div>
    	<div class="info-line">
    		<input type="text" v-model="codeModel" maxlength="5" class="num-input" placeholder="输入验证码"></input>
    		<div class="send-code" @click="getCode" v-show="showcode">发送验证码</div>
    		<div class="send-code send-success" v-show="!showcode">{{count}}s</div>
    	</div>
    	<div class="submit-info">
    		<div class="submit-btn" @click="submitInfo">提交信息</div>
    	</div>
    </div>
    <!-- 信息提交成功弹框 -->
    <div class="pop-tips" v-show="tipsflag">
	    	<h3 class="tips-title">您的信息已提交成功</h3>
	    	<img src="../../assets/images/tips-icon.png" class="tips-icon">
	    	<p class="tips-txt">金牌顾问将第一时间与您联系定制购车方案</p>
    </div>
    <!-- 立即咨询 -->
    <div class="consult" v-show="consultflag">
     <div class="consult-btn" @click="showInfopop">
     	<span class="consult-txt">立即咨询</span>
     	9:00-17:30
     </div>
  	</div>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  components: {
	// Footor
	// Toast
  },
  data () {
    return {
	      consultflag: true,  //立即咨询
	      tipsflag: false,	  //提交成功提示框
	      coverflag: false,   //遮罩
	      contentflag: false, //信息内容
	      showcode: true,     //验证码
	      phoneModel: '',
	      codeModel: '',
	      errorText: '',
	      token_msg: '',
	      c_id: 0,
	      count: '',
	      timer: null, 
      }
  },
  created(){
  	this.getToken();
  	this.c_id = this.$route.params.c_id;
  },	
  computed: {
  	// 手机号验证
  	phoneErrors(){
  		let errorText, status;
  		if(!/^1[3,4,5,7,8]\d{9}$/.test(this.phoneModel)) {
  			status=false;
  			errorText = "手机号不正确";
  		}else {
  			status=true;
  			errorText = '';
  		}
  		return {
  			status,
  			errorText
  		}
  	},
  	codeErrors(){
  		let errorText, status;
  		// 5个数字
  		if(!/^[0-9]{5}$/.test(this.codeModel)) {
  			status=false;
  			errorText = "验证码不正确";
  		}else {
  			status=true;
  			errorText = '';
  		}
  		return {
  			status,
  			errorText
  		}
  	}
  },
  methods: {
  	// 显示消息框
  	showInfopop() {
  		this.consultflag = !this.consultflag;
  		this.contentflag = !this.contentflag;
  		this.coverflag = !this.coverflag;
  	},
  	// 关闭消息框
  	closePop() {
  		this.coverflag =false;
  		this.contentflag = false;
  		this.tipsflag = false;
  		this.consultflag = true;
  	},
  	// 获取验证码
  	getCode(){
	  // 缓存获取token

  	  this.token_msg = localStorage.getItem("token_msg");
  	  if(this.phoneErrors.status) {
  	  	  // 倒计时
  	  	  this.timeLooper();
  	  	  // 获取验证码
    	  var querystring = require('querystring');
	  	  axios.post('/home.php/Ask/send_code',querystring.stringify({
          		phone: this.phoneModel,
	  	  		msg_token: this.token_msg
	      }))
	      .then((res)=>{
	           console.log("获取验证码成功");
	      })
	      .catch((err)=>{
	        console.log(err);
	      });
  	  }else {
  	  		this.$toast.center('手机号不正确');
  	  }
  	},
  	// 获取token
  	getToken() {
  	  axios.get('/home.php/Ask/rand_token')
      .then((res)=>{
        this.token_msg = res.data.data.msg_token;
        // token 缓存
       //console.log(this.token_msg);
        localStorage.setItem("token_msg", this.token_msg);
      })
      .catch((err)=>{
        console.log(err);
      });
  	},
  	// 提交信息
  	submitInfo() {

  		if(!this.phoneErrors.status || !this.codeErrors.status){
  	  	   	this.$toast.center('手机号或验证码不正确');
  		}else {
  			var querystring = require('querystring');
	  		axios.post('/home.php/Ask/order_ask',querystring.stringify({
	  			phone: this.phoneModel,
	  			c_id: this.c_id,
	  			code: this.codeModel
	  		}))
	        .then((res)=>{
	        	//console.log(res.data.msg);
	        	if(res.data.msg==="预约成功") {
		        	// 关闭内容框、显示提示框
			  		this.contentflag = !this.contentflag;
			  		this.tipsflag = !this.tipsflag;	
	        	}else {
  	  	   			this.$toast.center('已经帮您预约成功');
	        	}
	        })
	       .catch((err)=>{
	        	console.log(err);
	       });
  		}
  	},
  	// 倒计时
  	timeLooper(){
  		const TIME_COUNT = 60;
  		if(!this.timer){
  			this.count=TIME_COUNT;
  			this.showcode = false;
  			this.timer = setInterval(()=>{
  				if(this.count > 0 && this.count <= TIME_COUNT) {
  					this.count--;
  				}else {
  					this.showcode = true;
  					clearInterval(this.timer);
  					this.timer = null;
  				}
  			},1000)
  		}
  	}	
  }
}
</script>
<style  lang="scss" scoped>
@import "../../css/element.scss";
.consult {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 24px 50px;
	border-top: 1px solid #ececec;
	background: #fff;
	.consult-btn {
		line-height: 84px;
		border-radius: 40px;
		color: #412e11;
		font-size: 36px;
		text-align: center;
		background: #f6ad3c;
	}
	.consult-txt {
		font-weight: bold;
		margin-right: 20px;
	}
}
.pop-cover {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0,0,0,0.4);
}
.pop-content {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	padding: 20px 0 0;
	.info-line {
		margin: 0 50px;
		height: 84px;
		line-height: 84px;
		background: #f3f3f3;
		font-size: 24px;
		color: #999;
		margin-bottom: 20px;
		border-radius: 50px;
		display: flex;
	}
	.num-input {
		flex:1;
		background:transparent;
		border: 0;
		padding-left: 30px;
	}
	.send-code {
		width: 220px;
		background: #f6ad3c;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		text-align: center;
		color: #333;
	}
	.send-success {
		background: #ccc;
	}
	.submit-info {
		padding: 24px 50px;
		border-top: 1px solid #ececec;
		background: #fff;
	}
	.submit-btn {
		line-height: 84px;
		border-radius: 40px;
		color: #412e11;
		font-size: 36px;
		text-align: center;
		background: #f6ad3c;
		font-weight: bold;
	}
}
.pop-tips {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 540px;
	transform: translate(-50%,-50%);
	text-align: center;
	background: #fff;
	border-radius: 10px;
	padding: 40px 70px;
	box-sizing: border-box;
	.tips-title {
		font-size: 32px;
		font-weight: bold;
	}
	.tips-icon {
		width: 96px;
		margin: 34px 0; 
	}
	.tips-txt {
		text-align: left;
		font-size: 28px;
		color: #999;
		line-height: 36px;
	}
}
.error-tips {
	width: 400px;
	font-size: 24px;
	padding: 20px;
	.error-tips-btn {
		display: block;
		width: 120px;
		margin: 20px auto 0;
		padding: 10px 0;
		border-radius: 5px;
		background: #f6ad3c;
		color: #fff;
	}
}
</style>