

var index = 0 
var range = 10
export default {

	data() {
		return {			
			sellerID:"",
			sellerName:"",
			
			scoreList:[
				// {
				// 	seller_id:1,
				// 	name:"郭玉婷",
				// 	logo:"https://wx.qlogo.cn/mmhead/H3fDQcWb35hvtCiaValXnC3Xs4kC7Zg8Qfa9ow0Hhm7c/132",
				// 	create_time:"2019-09-12 15:35:06",
				// },
				// {
				// 	seller_id:1,
				// 	name:"郭玉婷",
				// 	logo:"https://wx.qlogo.cn/mmhead/H3fDQcWb35hvtCiaValXnC3Xs4kC7Zg8Qfa9ow0Hhm7c/132",
				// 	create_time:"2019-09-12 15:35:06",
				// },
			],
			isMore:true,
			// index:0,
			// range:10,
		};
	},

	onLoad(options) {
		console.log(options)
		var seller_id = options.seller_id
		var seller_name = options.seller_name
		
		this.setData({
			sellerID:seller_id,
			sellerName:seller_name,
		})
		this.getScoreDetail(seller_id)
		
		
		
		// this.getSellerData(seller_id)
	},
	onShow(){
		
			// this.getScoreDetail(this.$db.sellerID)
	},
	// onReady(){		
	// },
	methods: {
		/**
		 * @method 获取核销的积分数据
		 */
		getScoreDetail(seller_id){
			this.$db.getSellerDetail(seller_id,index * range , (index + 1)*range).then(res=>{
				console.log("getSellerDetail",res)
				// var scoreList = res.data.score_list
				
				var oldlist = this.$data.scoreList
				var newList = res.data.score_list
				var allList = oldlist.concat(newList)
				// debugger
				//判断是否还有数据
				var isMore = true
				if(newList.length < 10 )
					isMore = false
					
				this.setData({
					scoreList:allList,
					isMore:isMore,
				})
			})
		},
		
		/**
		 * @method 获取更多数据
		 */
		getMore(){
			index++
			this.getScoreDetail(this.$data.sellerID)
		},
	},
}