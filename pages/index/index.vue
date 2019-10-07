<template>
	<view class="container">
		
		<view class="pd15 white ">
			<xx-mark text="综合统计" type="ing"></xx-mark>
		</view>
		<view class="all">
			<view class="node">
				<view class="num">集点：{{totalData.day.score}}</view>
				<view class="num">兑换：{{totalData.day.prize}}</view>
				<view class="title">今日</view>
			</view>
			<view class="node">
				<view class="num">集点：{{totalData.month.score}}</view>
				<view class="num">兑换：{{totalData.month.prize}}</view>
				<view class="title">本月</view>
			</view>
			<view class="node">
				<view class="num">集点：{{totalData.all.score}}</view>
				<view class="num">兑换：{{totalData.all.prize}}</view>
				<view class="title">总计</view>
			</view>
		</view>
		
<!-- 		<view class="pd15 white ">
			<xx-mark text="集点地图" type="ing"></xx-mark>
		</view>
		
		<view class="pd15  ">
			<map class="share_map" 
				scale="14"
				:latitude="storeInfo.latitude" 
				:longitude="storeInfo.longitude"  
				:markers="markers"
			></map>
		</view> -->
		
		<view class="pd15 white ">
			<xx-mark text="集点详情" type="ing"></xx-mark>
		</view>
		<view class="">
			<uni-list>
				<uni-list-item :show-arrow="true" :title="item.nick_name" :thumb="item.logo" v-for="(item,key) in sellerList ">
					<button size="mini" @click="toSellerDetail(item.id,item.nick_name)">查看详情</button>
				</uni-list-item>
			</uni-list>
		</view>
		
		<view class="pd15 component ">
			<button  @click="unlogin()">退出</button>
		</view>
	</view>
</template>

<script src="./index.js"></script>

<style src="./index.css"></style>