

import CODE from './code.js'

var DIALOG = "1"   
var HIDDEN = "2"    
var HACK   = "3"     
var SYS = "00"    
var SERVICES = "01"    

class db{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	KEY_TOKEN = 'key_token'
	KEY_STORE_UUID = 'key_store_uuid'
	
	CODE_SYS_SUCCESS = HIDDEN + SYS + "001"//正常返回，无任何提示
	CODE_SYS_ERROR =DIALOG + SYS + "002"   //登陆成功
	CODE_SYS_ERROR_NETWORK = DIALOG + SYS + "003" //登陆成功

	CODE_SERVICES_LOGIN_NONE = DIALOG + SERVICES + "001"  // 账号密码错误
	CODE_SERVICES_SESSION_NONE = HIDDEN + SERVICES + "002"  //session没有检测到
	
	// HOST = "https://www.51zfgx.com/dev/"
	// HOST = "http://127.0.0.1:8000/nn_theatre_server/"
	// HOST = "http://www.12xiong.top/nn_theatre_server/"
	// HOST = "http://nnjc.lwdweb.top/"
	// HOST = "http://192.168.200.105:9000/coffee_server_2019_10_2_v2_1_1/"
	// HOST = "http://192.168.200.105:9000/dev/"
	HOST = "https://www.51zfgx.com/dev/"
	
	
	// URL = this.HOST + "photo/"
	URL = this.HOST 
	// API_LOGIN =  `${this.URL}system/set/user_info/`
	
	
	constructor(){}
	
	
	// 封装基础的请求
    base(options){
        return new Promise((resolve, reject) => {
            var data = options.data || {}
            data['token'] = wx.getStorageSync(this.KEY_TOKEN)
			// var url = options.url + "?session=" + wx.getStorageSync(this.KEY_TOKEN)
			var url = options.url
            console.log(url)
			
			uni.showLoading({
				// title:""
			})
			uni.request({
                url: url,
                method: options.method || "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					// 'Access-Control-Allow-Origin':'*',
					
                },
                data: data,
                success(res) {
					uni.hideLoading()
					// debugger
                    resolve(res)
                },
                fail(res) {
					// debugger
                    console.log(res)
                    reject(res)
                },
            })
        })
    }
	
	checkCode(code,message){
		if( code == this.CODE_SYS_ERROR 
			|| code == this.CODE_SYS_ERROR_NETWORK
			|| code == this.CODE_SERVICES_LOGIN_NONE
		) {
			uni.showModal({
				title:message.title,
				content:message.content
			})
		}
	}
	
	
    // 获取店铺列表
    baseURL(url,data,method) {
        return new Promise((resolve, reject) => {
            this.base({
                url: url,
				method:method ,
                data:data || {}
            })
            .then(res =>{
				// debugger
				// console.log(getCurrentPages()[0].route)
				// console.log(CODE.LOGIN_FAIL)
				// console.log(CODE.LOGIN_FAIL == res.code)
				// console.log(res.data.code)
				this.checkCode(res.data.code,res.data.message)
				// if (res.code)
				
				
				// 检查登陆状态，未登录，跳转至登陆页面
				if(CODE.LOGIN_FAIL == res.data.code){
					var route = getCurrentPages()[0].route 
					// 当页面属于登陆、赛程，则不做login检查
					if(route != CODE.ROUTE_LOGIN && route != CODE.ROUTE_LOGIN){
							
						getCurrentPages()
						uni.showModal({
							title:"您未登录",
							content:"请登陆系统，再做报名操作",
							showCancel:false,
							success(){
								uni.switchTab({
									url:CODE.PAGE_LOGIN
								})	
							}
						})
						
					}
				}
				
				resolve(res.data)
			})
            .catch(res => {
				console.log(res)
				reject(res.data)
			})
        })
		
		// function checkIsLos(){}
    }
	
	
	
	
	/*
	 * @method 1 登陆
	 */
	login(username,password){
		return this.baseURL( this.URL + "host_total/login/", { username: username,password: password} )
	}
	/*
	 * @method 2 验证token
	 */
	checkToken(token){
		return this.baseURL( this.URL + "host_total/check/", { token:token} ,"POST")
	}
	/*
	 * @method 3 total 总计
	 */
	getTotal(store_id){
		return this.baseURL( this.URL + "host_total/total/", { store_id:store_id|| -1} ,"POST")
	}
	/*
	 * @method 4 map标记点
	 */
	getMap(store_id){
		return this.baseURL( this.URL + "host_total/map/", { store_id:store_id|| -1} ,"POST")
	}
	
	/*
	 * @method 5 seller的列表
	 */
	getSellerList(store_id){
		return this.baseURL( this.URL + "host_total/seller/list/", { store_id:store_id|| -1} ,"POST")
	}	
	/*
	 * @method 6 seller的核销详情
	 */
	getSellerDetail(seller_id,index,range){
		return this.baseURL( this.URL + "host_total/seller/detail/", 
			{ 
				seller_id:seller_id || -1,
				index:index || 0,
				range:range || 10,
			} ,
		"POST")
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	 * @method 3.1 获取赛程、活动综合数据
	 */
	getCompetitionAndSchedule(){		
		return this.baseURL( this.URL + "Schedule/GetComposeList/", {} ,"GET")
	}
	
	/*
	 * @method 3.2 获取赛程
	 */
	getSchedule(){		
		return this.baseURL( this.URL + "Schedule/GetList/", {} ,"GET")
	}
	
	/*
	 * @method 4 获取赛程
	 */
	getCompetitionProgram(){		
		return this.baseURL( this.URL + "CompetitionProgram/GetList/", {} ,"GET")
	}
	
	/*
	 * @method 5.1 获取节目详情
	 */
	getProgramDetail(programID){		
		return this.baseURL( this.URL + "CompetitionProgram/GetProgramDetail/", { programID:programID} ,"GET")
	}
	/*
	 * @method 5.2 修改节目详情
	 * @param 
	 * 		programID 参赛项目 Id
	 * 		desc  参赛项目 舞台技术要求
	 */
	updagteProgramDetail(programID,form){		
		return this.baseURL( this.URL + "CompetitionProgram/UpdateProgram/", { 
			projectId:programID ,
			name:form.name,
			company:form.company,
			desc:form.desc,
			// name:"12321",
			// name:"company",
		} ,"POST")
	}
	
	
	/*
	 * @method 5 项目抽签
	 */
	getCompetitionSignNum(cpcId){		
		return this.baseURL( this.URL + "CompetitionProgram/GetSignNum/", {cpcId:cpcId} ,"POST")
	}
	
	/*
	 * @method 6.1 添加成员
	 */
	CompetitionAddMember(memberInfo){		
		return this.baseURL( this.URL + "CompetitionProgram/AddMember/", memberInfo ,"POST")
	}
	/*
	 * @method 6.2 删除成员
	 */
	CompetitionDeleteMember(id){		
		return this.baseURL( this.URL + "CompetitionProgram/delmember/", {id:id} ,"POST")
	}
	/*
	 * @method 6.3 获取成员信息
	 */
	CompetitionGetMember(user_id){		
		return this.baseURL( this.URL + "CompetitionProgram/GetMember/", {id:user_id} ,"POST")
	}
	
	
	
	
	
	
	
	/*
	 * @method 7 获取抽签详情
	 */
	getLotteryDetail(program_id){		
		return this.baseURL( this.URL + "Lottery/Detail/", {program_id:program_id} ,"POST")
	}
	
	
	 /* @method 获取主题信息
	 */
	themeGetArticleList(){
		return this.baseURL("http://www.12xiong.top/nn_theatre_server/theme/get/article_list/" )
	}
	
	
	
	
	
	
	
		
	// /*
	//  * @method 获取团队信息
	//  */
	// teamGetInfo(teamID){
	// 	return this.baseURL( this.URL + "team/get/info/", { team_id: teamID} )
	// }
	// /*
	//  * @method 设置团队信息
	//  */
	// teamSetInfo(signData){
	// 	return this.baseURL( this.URL + "team/set/info/", signData )
	// }
	// 
	// /*
	//  * @method 获取主题信息
	//  */
	// themeGetInfo(){
	// 	return this.baseURL( this.URL + "theme/get/info/", { UserName: "code",Password: "123"} )
	// }
	// 	/*
	//  * @method 获取主题信息
	//  */
	// themeGetArticleList(){
	// 	return this.baseURL( this.URL + "theme/get/article_list/" )
	// }
	
}
module.exports = new db()