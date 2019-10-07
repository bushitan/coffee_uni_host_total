<template>
	<view class="content">
	<!-- 	<view class="">
			<image :src="cover" mode="widthFix" class="image-section-right "></image>
		</view> -->
		<view class="detail">
			<view class="title">报名登陆</view>
			
			<view class="summary">
				<view class="name">账号:</view>
				<view class="input_content">
					<input class="input" placeholder-style="input_pla"  
					value="" placeholder="请输入账号"  />
				</view>
			</view>	
			<view class="summary">
				<view class="name">密码:</view>
				<view class="input_content">
					<input class="input" placeholder-style="input_pla"  
					password="true"
					value="" placeholder="请输入密码"  />
				</view>
			</view>
			<view class="footer">
				特别提示：系统账号由集团下发，请没有账号的领队尽快与集团联系
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			cover: {
				type: String,
				default:'/static/shuijiao.jpg',
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 15px;
		display: flex;
		
	}
	.image-section-right {
		margin-top: 10upx;
		margin-left: 10upx;
		margin-rigth: 10upx;
		width: 225upx;
		/* height: 146upx; */
	}
	
	.detail {
		/* margin-left: 10px; */
		font-size: 9pt;
		background-color: #fff;
		color: #999;
		width: 100%;
		padding: 15px;
		border-radius: 5px;
		// bordr: $sys-color-base 1px solid;
		border:  $sys-color-base 1px solid;
	}
	.title{
		font-size: 11pt;
		color: #000;
		/* line-height: 25px; */
		margin-left: 3px;
		margin-bottom: 10px;
		
	}
	
	
	.icon{
		width: 20px;height:20px;
	}
	.des{
		display: inline-block;
	}
	.summary{
		display: flex;
		align-items: center;
		background-color: #eee; 
		margin-bottom: 10px;
		padding: 10px;
	}
	.name{ width: 50px; flex-basis: 50px;}
	.input_content{width: 100%;}
	.input{font-size: 11pt; }
	.input_pla{font-size: 11pt;}
	
	.footer{font-size: 9pt; color: #999;}
</style>
