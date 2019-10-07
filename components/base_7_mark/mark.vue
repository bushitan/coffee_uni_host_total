<template>
	<view class="content">
		<view v-if="type == PRE" class="mark pre" >{{text}}</view>
		<view v-if="type == ING" class="mark ing"  >{{text}}</view>
		<view v-if="type == COMPLETE" class="mark complete"  >{{text}}</view>
		<view v-if="type == CLOSE" class="mark close"  >{{text}}</view>
		
	</view>
</template>

<script>
	

	export default {
		props:{
			text:{
				type:String,
				default :()=>{
					return "321"
				},
			},
			type:{
				type:String,
				default :"pre",
			},
		},
		data() {
            return {
				PRE:'pre',
				ING:'ing',
				COMPLETE:'complete',
				CLOSE:'close',
			}
		},
		created() {
		
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		// padding:0 15px ;
		// background-color: #fff;
		// display: flex;
		// justify-content: space-around;
		// align-items: center;
		// text-align: center;
		// padding: 10px 0; 
		// font-display: 11pt;
	}
	.mark{
		line-height: 11pt;
		font-size: 11pt;
		
		padding-left:5px ;
	}

	.pre{ color: $oa-color-pre  ;border-left: 3px $oa-color-pre solid;}
	.ing{color: $oa-color-ing  ;border-left: 3px $oa-color-ing solid;}
	.complete{color: $oa-color-complete  ;border-left: 3px $oa-color-complete solid;}
	.close{color: $oa-color-close  ;border-left: 3px $oa-color-close solid;}
	
		
</style>
