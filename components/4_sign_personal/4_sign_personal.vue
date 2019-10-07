<template>
	<view class="content" >
		<form @submit="formSubmit" @reset="formReset">

			<view class="node">
				<view class="explain">
					姓名<view class="must">(必填)</view>
				</view>
				<view class="input_content">
					<input name="team_name" class="input" placeholder-style="input_pla"  
					:value="content.team_name" placeholder="请输入文工团名称"  />
				</view>
			</view>
			<view class="node">
				<view class="explain">
					身份证<view class="must">(必填)</view>
				</view>
				<view class="input_content">
					<input name="leader_name" class="input" placeholder-style="input_pla"  
					:value="content.leader_name" placeholder="请输入领队姓名"  />
				</view>
			</view>
			<view class="node">
				<view class="explain">
					工作单位<view class="must">(必填)</view>
				</view>
				<view class="input_content">
					<input name="leader_phone" class="input" placeholder-style="input_pla"  
					:value="content.leader_phone" placeholder="请输入领队联系电话"  />
				</view>
			</view>
		<!-- 	<view class="node">
				<view class="explain">
					参赛曲目名称<view class="must">(必填)</view>
				</view>
				<view class="input_content">
					<input name="team_title" class="input" placeholder-style="input_pla"  
					:value="content.title" placeholder="请输入参赛曲目名称"  />
				</view>
			</view>
			<view class="node">
				<view class="explain">
					其他信息<view class="must"></view>
				</view>
				<view class="input_content">
					<input name="other" class="input" placeholder-style="input_pla"  
					value="" placeholder="请输入其他信息"  />
				</view>
			</view>
			
			<view class="btn-area">
				<button class="btn" formType="submit">下一步</button>
			</view> -->
		</form> 
		
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			text: {
				type: String,
				default:'下一步',
			},
			content:{
				type:Object,
				default () {
					return {
						team_name:"1",
						leader_name:"3s",
					}
				}
			}
		},
		methods: {
			click(){
				console.log("click")
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				this.$emit('submit',{ signData : e.detail.value })
			},
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #fff;
	}
	.node{
		padding: 5px 15px;
		display:flex;
		justify-content: center;
	}
	.explain{
		display: flex;
		align-items: center;
		font-size: 11pt;
		margin: 5px 0;
		width: 110px;
		
	}
	.must{ 
		color: red; 
		font-size: 8pt;
		margin-left: 5px;
	}
	
	.input_content{
		// width: 100%; 
		background-color: #eee; 
		padding: 10px;
		border-radius: 5px;
	}
	.input{font-size: 11pt; }
	.input_pla{font-size: 11pt;}
	
	
	.click{
		background-color:$sys-color-light;
	}
	
	.btn-area{
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
	.btn{
		background-color:$sys-color-base !important;
		color:#fff !important;
		font-size: 11pt !important;
	}
</style>
