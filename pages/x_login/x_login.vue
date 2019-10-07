<template>
    <view class="container">
		
		<!-- <view class="sys_logo">
			<image class="sys_swiper" src="/static/cover/swiper.jpg" mode="widthFix"></image>
		</view> -->
		<view class="sys_title">
			《分享集点卡》商户端数据管理系统
		</view>
		
		<!-- <view class="component ">
			<news-item :theme="theme"></news-item>
		</view> -->
		<form @submit="formSubmit" >
			<view class="component ">
				<!-- <login></login> -->
				<view class="content_login ">
					<view class="detail">
						<view class="title">登陆</view>
						<view class="summary">
							<view class="name">账号:</view>
							<view class="input_content">
								<input class="input" placeholder-style="input_pla"  
								value="" placeholder="请输入账号" name="username" />
							</view>
						</view>	
						<view class="summary">
							<view class="name">密码:</view>
							<view class="input_content">
								<input class="input" placeholder-style="input_pla"  
								password="true"
								value="" placeholder="请输入密码"  name="password"/>
							</view>
						</view>
						<view class="footer">
							特别提示：系统账号由管理员下发，请没有账号的领队尽快与管理员联系
						</view>
					</view>
				</view>
			</view>
			<view class="btn-area">
				<button class="btn" formType="submit">下一步</button>
				<!-- <button formType="reset">Reset</button> -->
			</view>
		</form>
		<!-- <btn-next @onClick="onClick"></btn-next> -->
    </view>
	
</template>

<script src="./x_login.js"></script>

<style src="./x_login.css" ></style>

<style lang="scss">


	/*********登陆按钮**********/

	.btn-area{
		color: #fff;
		// background-color: $sys-color-base ;
		font-size: 11pt;
		// justify-content: center;
		text-align: center;
		padding: 0 20px 50px;
		// align-items: center;
	}
	.btn{
		background-color:$sys-color-base !important;
		color:#fff !important;
		font-size: 11pt !important;
	}
</style>