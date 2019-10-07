<template>
	<view class="container">
		<view class="pd15 white ">
			<xx-mark :text="'核销人:'+sellerName + '(ID:' +sellerID + ')'" type="ing"></xx-mark>
		</view>
		<view class="">
			<uni-list>
				<uni-list-item :show-arrow="true" :title="'用户SN:10'+item.customer_id" :thumb="item.logo" v-for="(item,key) in scoreList ">
					<!-- <button size="mini" @click="toSellerDetail(item.seller_id)">查看详情</butt/on> -->
					<view class="date">核销时间:{{item.create_time}}</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="pd15">
			<button type="" @click="getMore" v-if="isMore">加载更多</button>
			<view class="compelte" v-else>数据加载完毕</view>
		</view>
	</view>
</template>

<script src="./seller_detail.js"></script>

<style src="./seller_detail.css"></style>