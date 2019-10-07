<template>
	<view class="content" @click="click" hover-class="click">
		<!-- <view class=""> -->
			{{text}}
		<!-- </view> -->
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
			click(){
				// console.log("click")
				this.$emit('onClick',{msg:'页面更新'})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		line-height: 45px;
		color: #fff;
		background-color: $sys-color-base ;
		font-size: 11pt;
		// justify-content: center;
		text-align: center;
		// align-items: center;
	}
	.click{
		background-color:$sys-color-light;
	}
</style>
