<template>
	<view class="content" >
		<view class="agenda">
			<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
				<template v-for="(item,key) in agenda">
					
				<!-- 	<view class="uni-timeline-item uni-timeline-first-item" >
						<view class="uni-timeline-item-keynode">{{item.date}}</view>
						<view class="uni-timeline-item-divider"></view>
						<view class="uni-timeline-item-content">
							<view class="title">{{item.title}} </view>
							<view class="team">{{item.team}}</view>		
						</view>
					</view> -->
					
					
					<!-- <view class="uni-timeline-item ">
						<view class="uni-timeline-item-keynode">{{item.date}}</view>
						<view class="uni-timeline-item-divider"></view>
						<view class="uni-timeline-item-content">
							<view class="title">{{item.title}} </view>
							<view class="team">{{item.team}}</view>		
						</view>
					</view>
					
					<view class="uni-timeline-item uni-timeline-last-item" v-show="key==agenda.length-1">
						<view class="uni-timeline-item-keynode">{{item.date}}</view>
						<view class="uni-timeline-item-divider"></view>
						<view class="uni-timeline-item-content">
							<view class="title">{{item.title}} </view>
							<view class="team">{{item.team}}</view>		
						</view>
					</view> -->
					
					
					<view :class=" ['uni-timeline-item' ,key==0 ? 'uni-timeline-first-item' : '' ,,key==agenda.length-1 ? 'uni-timeline-last-item' : '' ]">						
						<view class="uni-timeline-item-keynode">{{item.date}}</view>
						<view class="uni-timeline-item-divider"></view>
						<view class="uni-timeline-item-content">
							<view class="title">{{item.title}} </view>
							<view class="team">{{item.team}}</view>		
						</view>
					</view>
				</template>
				<!-- <view class="uni-timeline-item ">
					<view class="uni-timeline-item-keynode">2018.07</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成</view>
				</view>
				<view class="uni-timeline-item uni-timeline-last-item">
					<view class="uni-timeline-item-keynode">2018.10</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 支持使用 npm 安装依赖，支持微信小程序自定义组件</view>
				</view> -->
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			agenda:{
				type:Array,
				default(){
					return 	[
						// { id : 1, date:"9:45",title:"海之歌" , team:"南宁大沙田团队"},
						// { id : 2, date:"9:50",title:"最美夕阳红" , team:"南宁青秀文艺队"},
					]
				}
			},
			
		
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

	/******固定的****/
	.uni-timeline-item-divider{
		background-color: #1AAD19;
	}
	
	.uni-timeline-item-content{
		margin-bottom:10px
	}
	
</style>
