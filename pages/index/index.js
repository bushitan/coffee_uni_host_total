

var GP
export default {

	data() {
		return {	
			storeUUID:"",
			storeInfo:{}, //店铺的数据
			// 统计总数
			totalData:{
				day:{score:0,prize:0},
				month:{score:0,prize:0},
				all:{score:0,prize:0},
			},
			
			// 集点标记
			markers: [
				// {
    //             latitude: 22.8476540255,
    //             longitude: 108.2824409008,
    //             iconPath: '../../static/like.png'
    //         }, {
    //             latitude: 22.8476240255,
    //             longitude: 108.2824309008,
    //             iconPath: '../../static/like.png'
    //         }, {
    //             latitude: 22.847440255,
    //             longitude: 108.2828409008,
    //             iconPath: '../../static/like.png'
    //         },
			],
			
			// 员工
			sellerList:[
				{
					seller_id:1,
					name:"郭玉婷",
					logo:"https://wx.qlogo.cn/mmhead/H3fDQcWb35hvtCiaValXnC3Xs4kC7Zg8Qfa9ow0Hhm7c/132"
				},
				{
					seller_id:-1,
					name:"外卖",
					logo:"https://wx.qlogo.cn/mmhead/H3fDQcWb35hvtCiaValXnC3Xs4kC7Zg8Qfa9ow0Hhm7c/132"
				},
			],
			
		};
	},

	onShow() {
		GP = this
		this.onInit()
		this.getTotal()
		// this.getMark()  //准备上线
		this.getSellerList()
	},
	methods: {
		onInit(){
			this.setData({
				storeUUID:uni.getStorageSync(this.$db.KEY_STORE_UUID)
			})
			
		},
		/**
		 * @method 获取总计数
		 */
		getTotal(){
			
			GP.$db.getTotal(this.$data.storeUUID).then(res=>{
				console.log("getTotal",res)
				var storeInfo = res.data.store_info
				this.setData({
					storeInfo:storeInfo,
					totalData:res.data.total_dict,
				})
				// debugger
				uni.setNavigationBarTitle({
					title:storeInfo.title 
				})
				
			})
		},
		
		/**
		 * @method 获取mark点
		 */
		getMark(){
			GP.$db.getMap(this.$data.storeUUID).then(res=>{
				// console.log("getMap",res)
				this.setData({
					markers:res.data.score_list
				})
			})
		},
		
		
		/**
		 * @method 获取员工列把你
		 */
		getSellerList(){
			GP.$db.getSellerList(this.$data.storeUUID).then(res=>{
				// console.log("getSellerList",res)
				this.setData({
					sellerList:res.data.seller_list
				})
			})
		},
		
		/**
		 * @method 查看员工发放的点数
		 */
		toSellerDetail(id,name){
			// console.log(e)
			uni.navigateTo({
				url:"/pages/seller_detail/seller_detail?seller_id=" + id + "&seller_name=" + name
			})
		},
		
		/**
		 * @method 退出登陆状态
		 */
		unlogin(){
			uni.setStorageSync(this.$db.KEY_TOKEN , "") 
			uni.setStorageSync(this.$db.KEY_STORE_UUID,"")
			uni.navigateTo({
				url:"/pages/x_login/x_login"
			})
		},
	},
}