<template>
	<view class="content" >
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="bg_white" v-show="product.is_show">
					<view class="image-view">
						<image v-if="renderImage"
							class="uni-product-image" :src="product.image"
							mode="aspectFit"></image>
					</view>
					<view class="uni-product-title">{{product.title}}</view>
					<view class="uni-product-price" @click="addLike(product.id)">
						<!-- <text class="uni-product-price-favour">￥{{product.originalPrice}}</text> -->
						<image v-if="product.liked" src="/static/like.png" mode="" class="liked"></image>
						<image v-else src="/static/like_none.png" mode="" class="liked"></image>
						<text class="uni-product-price-original">{{product.favourPrice}}</text>
						<!-- <text class="uni-product-tip">{{product.tip}}</text> -->
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			productList:{
				type:Array,
				default(){
					return 	[
						 {
						    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						    title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
						    originalPrice: 9999,
						    favourPrice: 8888,
							liked:true,
						    tip: '自营'
						},
						{
						    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						    title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
						    originalPrice: 3499,
						    favourPrice: 3399,
							liked:false,
						    tip: '优惠'
						},
						{
						    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
						    title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
						    originalPrice: 12999,
						    favourPrice: 10688,
							liked:false,
						    tip: '秒杀'
						},
						{
						    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
						    title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
						    originalPrice: 999,
						    favourPrice: 958,
							liked:true,
						    tip: '秒杀'
						},
						{
						    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
						    title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
						    originalPrice: 8888,
						    favourPrice: 8288,
							liked:true,
						    tip: '优惠'
						},
						{
						    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
						    title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
						    originalPrice: 2899,
						    favourPrice: 2799,
							liked:true,
						    tip: '自营'
						}
					]
				}
			},
			renderImage:{
				type:Boolean,
				default:true,
			}
			
		},
		// data:{
		// 	page: 1,
		// 	start: 0,
		// 	end: 0,
		// 	list: [], // 列表
		// 	loading: true
		// },
		methods: {
			backToIndex(){
				console.log("click")
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			addLike(id){
				// console.log(id)
				this.$emit('addLike',{id:id})
			},
		}
	}
</script>

<style lang="scss">
	
	.uni-product-list{
		justify-content: center;
	}
	.uni-product-title{	font-size: 11pt;}
	.uni-product-price-original{font-size: 9pt;}
	.uni-product{
		padding: 3px;
	}
	.bg_white{
		background-color: #FFFFFF;
		padding: 7px;
	}
	
	.uni-product-list{
		// flex-direction: flex-start
		justify-content: flex-start;
		width: 100%;
	}
	.image-view ,.uni-product-image{
		// background-color: #eeeeee;
		height: 118px;
	}
	
	.uni-product-price-original{
		color: #999;
	}
	.uni-product-price {
		display: flex;
		align-items: center;
	}
	.liked{
		width: 20px;
		height: 20px;
	}
</style>
