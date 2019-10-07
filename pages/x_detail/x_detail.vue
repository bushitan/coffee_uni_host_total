<template>
	<view class="content">
		<view class="white" style="height:20px" ></view>
		<view class="white header">	
			<image class="logo" src="/static/ui/logo.png" mode=""></image>
		</view>
		<view class="white header">			
			<image class="title" src="/static/ui/title.png" mode="widthFix"></image>
		</view>
		<view class="white" style="height:20px"></view>
		
		<view class="white">				
			<!-- <page-head :title="match.activityTitle"></page-head> -->
			<view class="component proccess">
				<uni-steps :options="list1" :active="status" />
			</view>
		</view>
		
		<page-head title="参演节目"></page-head>
		<template v-for="(match,key) in matchList">
			
			<template v-for="(program,key) in match.competitionPrograms">
				<!-- <view class="">{{program.name}}
					
				</view> -->
				
				<view class="component ">
					<xx-mark :text="program.cateName"></xx-mark>
				</view>
				<view class="component " >
					<uni-list>
						<template v-for="(item,item_key) in program.list">
							
							<uni-list-item :show-arrow="false" :title="item.name" v-if="status == STATUS_LOT">
								<!-- <button  size="mini" @click="clickBtn(item)">{{btnContent}}</button>	 -->
								<view v-if="item.isSign" class="" >第{{item.signNum}}号</view>
								<button v-else size="mini" @click="clickBtn(item)">抽签</button>
							</uni-list-item>
							<uni-list-item :show-arrow="false" :title="item.name" v-else>
									<button  size="mini" @click="clickBtn(item)">{{btnContent}}</button>							
							</uni-list-item>
	<!-- 						<uni-list-item :show-arrow="false" :title="item.name">
								{{status == STATUS_SIGN}}
								{{status == STATUS_LOT}}
								<template v-show="status == STATUS_SIGN">
									<button  size="mini" @click="clickBtn(item)">{{btnContent}}</button>
								</template>
								
								<template v-show="status == STATUS_LOT">
									<button v-if="item.isSign" size="mini" @click="clickBtn(item)">抽签1</button>
									<view v-else class="" >{{item.signNum}}</view>
								</template>
								
							</uni-list-item> -->
						</template>
					</uni-list>
				 </view>
			</template>
		</template>
		
		<view class="unlogin">
			<button type="primary" @click="preAgenda()">查看赛程</button>
			<button type="primary" @click="toDownload()">下载文件</button>
			<button type="warn" @click="unlogin()">退出</button>
		</view>

<!-- 		<view class="component ">
			<xx-mark text="舞蹈"></xx-mark>
		</view>
		<view class="component " >
			<uni-list>
				<uni-list-item :show-arrow="false" title="<孔雀舞>">
					<button  size="mini" @click="clickBtn(1)">{{btnContent}}</button>
				</uni-list-item>
			</uni-list>
		 </view>
		 
		 <view class="component ">
		 	<xx-mark text="歌曲"></xx-mark>
		 </view>
		 <view class="component " >
		 	<uni-list>
		 		<uni-list-item :show-arrow="false" title="<孔雀舞>">
		 			<button  size="mini">{{btnContent}}</button>
		 		</uni-list-item>
		 	</uni-list>
		  </view>
		  
		  <view class="component ">
		  	<xx-mark text="杂技"></xx-mark>
		  </view>
		  <view class="component " >
		  	<uni-list>
		  		<uni-list-item :show-arrow="false" title="<孔雀舞>">
		  			<button  size="mini">{{btnContent}}</button>
		  		</uni-list-item>
		  	</uni-list>
		   </view> -->
		   
		   
		 <!--  <view class="component ">
				<button  size="mini" @click="change">测试:更改状态</button>
		   </view> -->
	</view>
</template>

<script src="./x_detail.js"></script>

<style src="./x_detail.css"></style>