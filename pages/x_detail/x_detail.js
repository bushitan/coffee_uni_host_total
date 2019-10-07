
var STATUS_SIGN = 0
var STATUS_LOT = 1
var STATUS_ING = 2

export default {
	data() {
		return {
			teamInfo:{},
			teamID:-1,
			
			title:"报名详情",
			active: 1,
			list1: [{
				title: '报名'
			}, {
				title: '抽签'
			}, {
				title: '比赛'
			}],
			
			STATUS_SIGN : 0, //开始报名
			STATUS_LOT : 1,  //抽签
			STATUS_ING : 2,  //拿连接
			
			status:1,
			btnContent:"",
			
			match:{},
			matchList:[],
			programList:[],
			
		}
	},
	methods: {
		
		
		/**
		 * @method 设置状态和button文字
		 */
		setStatus(status){
			var btnContent = ""
			if(status == STATUS_SIGN){
				btnContent = "填写资料"
			} else if (status == STATUS_LOT){
				btnContent = "抽签"
			} else {
				btnContent = "获取照片"
			}
			
			this.setData({
				status:status,
				btnContent:btnContent
			})
		},
		
		/**
		 * @method 点击btn
		 */
		clickBtn(program){
			// console.log(program_id)
			// debugger
			var program_id = program.id
			switch(this.$data.status){
				case STATUS_SIGN:
					uni.navigateTo({
						url:"/pages/x_sign/x_sign?program_id=" + program_id
					})
					break;
				case STATUS_LOT:
					uni.navigateTo({
						url:"/pages/x_lot/x_lot?program_id=" + program_id
					})
					break;
				case STATUS_ING:
					var content = "网址：" + program.bdImgUrl  + "，密码：" + program.bdImgUrlPwd 
					uni.showModal({
						title:"照片地址",
						content:content,
						showCancel:false,
						// confirmText:"复制地址",
						success(){
						}
					})
					break;
			}
		},
		
		
		//测试用
		change(){
			var status = this.$data.status
			status++
			status = status % 3
			
			this.setStatus(status)
		},
		
		/**
		 * @method 获取当前活动详情
		 * @return 
		 * 		活动状态
		 */
		getSchedule(){
			
			this.$db.getSchedule().then(res=>{
				console.log(res.data[0])
				this.setData({
					match:res.data[0]
				})	
				
			})
			// .catch( res=>{
			// 	console.log(res)
			// })
		},
		
		/**
		 * @method 获取所有的信息
		 */
		getAllInfo(){
			// 3.1 获取赛程、活动综合数据
			this.$db.getCompetitionAndSchedule().then(res=>{
				console.log("getCompetitionAndSchedule",res.data[0])
				var match = res.data[0]
				// this.setData({
				// 	match:match
				// })
				this.setData({
					match:match,
					matchList:res.data
				})	
				this.setStatus(match.scheduleStatus)
			})
		},
		
		/**
		 * @method 退出登陆状态
		 */
		unlogin(){
			uni.setStorageSync(this.$db.KEY_TOKEN , "") 
			uni.switchTab({
				url:this.$CODE.PAGE_LOGIN
			})
		},
		
		/**
		 * @method 查看赛程
		 */
		preAgenda(){
			uni.showModal({
				title:"赛程表正在制作中",
				content:"请稍后再浏览",
			})
			return
			
			uni.previewImage({
				urls:["/static/agenda/agenda.png"]
			})
		},
		
		toDownload(){
			uni.navigateTo({
				url:"/pages/x_download/x_download"
			})
		},
	},
	onLoad(options) {
		
		// this.getSchedule()
		// this.getCompetitionProgram()
		// debugger
		// this.setStatus(1)
		
		var str = ""
		for (var i=1;i<65;i++){
			var num = i
			if (num < 10)
				num = "0" + i
			str += "" + num + ","
		}
		console.log(str)
	},
	
	onShow(){
		
		this.getAllInfo()
	},
}