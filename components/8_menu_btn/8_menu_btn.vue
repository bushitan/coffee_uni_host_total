<template>
	<view class="" >
		<view class="box">
			<button  size="mini" @click="addUSer()">添加人员</button>
			<button type="primary" size="mini" @click="confirm()">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'menu-btn',
		props: {
		
			
		},
		
		methods: {
			backToIndex(){
				console.log("click")
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			
			addUSer(){
				this.$emit('addUSer')
			},
			confirm(id){
				// console.log(id)
				this.$emit('confirm')
			},
		}
	}
</script>

<style lang="scss">
	.box{
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		background-color: #fff;
		z-index:9999;
	}
</style>
