<template>
	<view class="content" >
		 <!-- <uni-icon type="success" size="50" color="#03b753" ></uni-icon> -->
		<view class="title">提交资料成功</view>
		<view class="summay">您已经提交资料成功，请等待集团审核，点击我的即可查看最新结果</view>
		<button type="primary" class="btn" @click="backToIndex">返回首页</button>
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			text: {
				type: String,
				default:'下一步',
			}
		},
		methods: {
			backToIndex(){
				console.log("click")
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #fff;
		padding: 15px;
		text-align: center;
	}
	.title{font-size: 13pt; }
	.summay{
		padding: 5px 15px 25px;
		font-size: 11pt; 
		color: $uni-text-color-grey;
	}
	.btn{
		background-color: $sys-color-base;
		color: #fff;
	}
	
	.click{
		background-color:$sys-color-light;
	}
</style>
