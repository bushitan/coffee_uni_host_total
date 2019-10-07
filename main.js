import Vue from 'vue'
import App from './App'
import DB from './db/db.js'
import CODE from './db/code.js'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'

import mIcon from '@/components/m-icon/m-icon.vue' //图标
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniIcon from '@/components/uni-icon/uni-icon.vue'
import uniSteps from '@/components/uni-steps/uni-steps.vue'
import uniListItemNormal from '@/components/uni-list-item-noraml/uni-list-item-noraml.vue'



Vue.component('uni-list-item', uniListItem)
Vue.component('m-icon', mIcon)
Vue.component('uni-icon', uniIcon)
Vue.component('uni-steps', uniSteps)
Vue.component('uni-list', uniList)
Vue.component('uni-list-item-noraml', uniListItemNormal)


import newsItem from '@/components/1_news_item/1_news_item.vue' //新闻节点
import login from '@/components/2_login/2_login.vue' //登陆
import btnNext from '@/components/3_btn_next/3_btn_next.vue' //下一步按钮
import signForm from '@/components/4_sign_form/4_sign_form.vue' //下一步按钮
import signPersonal from '@/components/4_sign_personal/4_sign_personal.vue'
import signCussess from '@/components/5_sign_success/5_sign_success.vue' //下一步按钮
import timeLine from '@/components/6_time_line/6_time_line.vue' //下一步按钮
import voteLine from '@/components/7_vote_line/7_vote_line' //下一步按钮
import mark from '@/components/base_7_mark/mark.vue' //标记
import menuBtn from '@/components/8_menu_btn/8_menu_btn.vue'


Vue.component('news-item', newsItem)
Vue.component('login', login)
Vue.component('btn-next', btnNext)
Vue.component('sign-form', signForm)
Vue.component('sign-personal', signPersonal)
Vue.component('sign-success', signCussess)
Vue.component('time-line', timeLine)
Vue.component('vote-line', voteLine)
Vue.component('xx-mark', mark)
Vue.component('menu-btn', menuBtn)


Vue.config.productionTip = false
Vue.prototype.$db = DB;
Vue.prototype.$CODE = CODE;

// 公共组件
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)



function setData(obj){  
	let that = this;  
	let keys = [];  
	let val,data;  
	Object.keys(obj).forEach(function(key){  
		 keys = key.split('.');  
		 val = obj[key];  
		 data = that.$data;  
		 keys.forEach(function(key2,index){  
			 if(index+1 == keys.length){  
				 that.$set(data,key2,val);  
			 }else{  
				 if(!data[key2]){  
					that.$set(data,key2,{});  
				 }  
			 }  
			 data = data[key2];  
		 })  
	});  
}  
Vue.prototype.setData = setData

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()



// "navigationBarBackgroundColor":"#ffffff",
// "navigationBarTextStyle": "black",

// ,
// 	"tabBar": {
// 		"color": "#C0C4CC",
// 		"selectedColor": "#03b753",
// 		"borderStyle": "black",
// 		"backgroundColor": "#ffffff",
// 		"list": [{
// 				"pagePath": "pages/index/index",
// 				"iconPath": "static/tab-home.png",
// 				"selectedIconPath": "static/tab-home-current.png",
// 				"text": "集点数"
// 			},
// 			{
// 				"pagePath": "pages/analysis/analysis",
// 				"iconPath": "static/tab-time.png",
// 				"selectedIconPath": "static/tab-time-current.png",
// 				"text": "统计分析"
// 			}
// 		]
// 	}