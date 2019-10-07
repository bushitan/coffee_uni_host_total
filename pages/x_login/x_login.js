  import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../../components/m-input.vue'

var GP 
    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0,
				
					
				theme:{
					// cover:"/static/cover/7.jpg",
					// title:"大型杂技剧《梦回中山国》",
					// summary:"该剧以杂技表演为主，融合舞蹈、武术、魔术、戏曲等姊妹艺术形式，展现中山国特有的慷慨悲歌（音乐）和“跕屣”（舞蹈）等艺术技巧，并以浏览展示的手法，在舞台上再现中山国重器——山字形礼器、双翼神兽、四龙四凤方案、虎噬鹿屏风座等精美艺术品，感受中山国所处的战国时代风云变换、兴亡代序、生生不息的人文精神。",
					// address:"广西南宁市邕江桥南南宁剧场",
					// date:"2019.07.17 19:00 -- 07.17 21:00",
				},
				userName:"",
				password:""
            }
        },
        // computed: mapState(['forcedLogin']),
		
		onLoad(){
				
			// // TODO 检测是否登录，
			// // 已经登录，跳转至内容页面
			// // 未登录，进入登录页
			// var token = uni.getStorageSync(this.$db.KEY_TOKEN)
			// this.$db.checkToken(token).then(res=>{
			// 	
			// })		
				
			// 
			GP = this
			this.checkStatus()
		},
        methods: {
			/**
			 * @method 检测登陆状态
			 * @return
			 * 		true 已登录，跳转x_detail
			 * 		fasle 保持现有页面
			 */
			checkStatus(){			
				
				var token = uni.getStorageSync(this.$db.KEY_TOKEN) || ""
				// 用户未登录
				if(token == "")
					return
				
				// // 用户已登录
				// uni.showLoading({
				// 	title:"检测登陆状态",
				// 	icon:"loading"
				// })
				this.$db.checkToken(token).then(res=>{
					// uni.hideLoading()
					console.log(true,res.data)
					
					if(res.code == this.$db.CODE_SYS_SUCCESS)	// 登陆成功 跳转详情
						this.navToIndex()
					else	//登陆超时，重新登录
						uni.showToast({
							title:"身份超时，请重新输入账号密码登录",
						})
				})
			},
			
			/**
			 * 跳转页面
			 */
			navToIndex(){
				// uni.switchTab({url:"/pages/index/index"})
				uni.navigateTo({url:"/pages/index/index"})
			},
			
			/**
			 * @method 登陆
			 * @return 
			 * 		true 账号正确，跳转
			 * 		false  账号错误，提示
			 */
			login(userName,password){
				
				
				this.$db.login(userName,password).then(res=>{
					var code = res.code
					console.log(res)
					
					// debugger
					if(code == this.$CODE.LOGIN_FAIL){
						uni.showModal({
							title:"账号或密码错误",
							showCancel:false,
						})			
						return 
					}else{
						wx.showToast({
							title:"登陆成功"
						})			
						// 设置TOKEN
						// debugger
						
						uni.setStorageSync(this.$db.KEY_STORE_UUID,res.data.user_info.store_uuid)
						uni.setStorageSync(this.$db.KEY_TOKEN,res.data.token)
						console.log(uni.getStorageSync(this.$db.KEY_TOKEN))

						this.navToIndex()
					}
				})
			},
			
			/**
			 * @method 登陆表单submit
			 */
			formSubmit: function(e) {
				// console.log('onclick')
				var userName = e.detail.value.username
				var password = e.detail.value.password				
				// var userName = '18588276558'
				// var password = '123456'
				
				if( userName=="" || password == ""){
					uni.showModal({
						title:"请输入完整的账号密码",
						showCancel:false,
					})
					return 
					
				}
				this.login(userName,password)
			
			},
			
        },
        onReady() {
            // this.initPosition();
            // this.initProvider();
        },
		
    }