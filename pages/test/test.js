
var GP 
export default {

	data() {
		return {	
			
			
		};
	},

	onLoad() {
		GP = this
		this.testAPI()
	},
	methods: {
		testAPI(){
			// 1 登陆			
			// GP.$db.login("sa","sa").then(res=>{
			// 	console.log("login",res)
			// 	uni.setStorageSync(GP.$db.KEY_TOKEN ,res.data.token)
			// })
			
			// 2验证token
			// debugger
			// var token = uni.getStorageSync(GP.$db.KEY_TOKEN)
			// console.log("token",token)
			// GP.$db.checkToken(token).then(res=>{
			// 	console.log("checkToken",res)
			// })
			
			// d 3 total 总计
			var store_id = 1
			GP.$db.getTotal(store_id).then(res=>{
				console.log("getTotal",res)
			})
			//  4 map标记点
			GP.$db.getMap(store_id).then(res=>{
				console.log("getMap",res)
			})
			// 5 seller的列表
			GP.$db.getSellerList(store_id).then(res=>{
				console.log("getSellerList",res)
			})
			
			// 6 seller的列表
			var seller_id = 1
			GP.$db.getSellerDetail(seller_id).then(res=>{
				console.log("getSellerDetail",res)
			})
			
			
			// 
			// // 3.2 获取赛程
			// GP.$db.getSchedule().then(res=>{
			// 	console.log("getSchedule",res)
			// })
			// 
			// // 4 获取参赛项目列表
			// GP.$db.getCompetitionProgram().then(res=>{
			// 	console.log("getCompetitionProgram",res)
			// })
			// 
			// // 5 项目抽签
			// var cpcId = 2
			// GP.$db.getCompetitionSignNum(cpcId).then(res=>{
			// 	console.log("getCompetitionSignNum",res)
			// })
			// 
			// // 6.1 添加成员
			// var memberInfo = {
			// 	"ProjectId": "1",
			// 	"Name": "李小二",
			// }
			// GP.$db.CompetitionAddMember(memberInfo).then(res=>{
			// 	console.log("CompetitionAddMember",res)
			// })
			// 
			// // 6.2 删除成员
			// var memberID = "1"
			// GP.$db.CompetitionDeleteMember(memberID).then(res=>{
			// 	console.log("CompetitionDeleteMember",res)
			// })
			// 
			// // 7 获取抽签详情
			// var program_id = 1
			// GP.$db.getLotteryDetail(program_id).then(res=>{
			// 	console.log("getLotteryDetail",res)
			// })
			
			
			
		},
	},
}