<template>
	<view class="container">
		
		
		<view class="example-title">5、报名成功</view>
		<view class="component ">
			<sign-success></sign-success>
		</view>
		
		<view class="example-title">4、填写资料</view>
		<view class="component ">
			<sign-form></sign-form>
		</view>
		
		
		
		<view class="example-title">3、登陆</view>
		<view class="component ">
			<login></login>
		</view>
		
		<view class="example-title">2、新闻条</view>
		<view class="component ">
			<news-item></news-item>
		</view>
		
		<view class="example-title">1、带箭头的信息列</view>
		<view class="component white pd15">
			<uni-list-item :show-arrow="false" title="标题文字" thumb="/static/location.png" />
			<uni-list-item title="标题文字" />
			<uni-list-item :show-badge="true" badge-text="我的" title="标题文字" badgeType="warning"/>
			<uni-list-item :showText="true" badge-text="2019-06-13至2019-06-13" title="标题文字" />
			<uni-list-item :showText="true" :show-arrow="false" badge-text="杨程：[拟同意。其他文字其他文字] 2019-05-28 20:18:03" title="标题文字" />
			<uni-list-item :disabled="true" :show-badge="true" :badge-text="23" title="禁用状态" />
		</view>
		
		
		<view class="example-title">4、下一步按钮</view>
		<view class="example-title">4、下一步按钮</view>
		<btn-next></btn-next>

	</view>
</template>

<script src="./test.js"></script>

<style type="scss" src="./test.css"></style>