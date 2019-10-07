<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
</script>
<style>
	
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color:#f9f9f9;
		/* background-color:#ffffff; */
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	/*每个页面公共css */
	.container{
		/* background-color: #eeeeee; */
	}

	.component{
		margin-bottom: 20upx;
	}
	.flex_center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.white{		background-color: #ffffff;	}
	.line_bottom{		border-bottom: 1rpx #E1E1E1 solid ;}
	.line_top{		border-top: 1rpx #E1E1E1 solid ;}
	.pd15{ padding: 15px;}
	.footer_space{ height: 70px;}
</style>
