<template>
	<div class="home-view">
		<!-- 輪播圖 -->
		<van-swipe :autoplay="3000" indicator-color="white" class="banner-view">
			<van-swipe-item v-for='item,index in banner' :key='index'>
				<img v-lazy='item.img' />
			</van-swipe-item>
		</van-swipe>

		<!-- 分類 -->
		<CategoryView></CategoryView>

		<!-- 單品熱賣 -->
		<TitleView name='單品熱賣' icon='star-o'></TitleView>
		<SellingView></SellingView>
		<!-- 精選活動 -->
		<TitleView name='精選活動' icon='gift-o'></TitleView>
		
		<!-- 為你推薦 -->
		<TitleView name='為你推薦' icon='label-o'></TitleView>
		
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant'
	import CategoryView from '../CategoryView/CategoryView.vue'
	import TitleView from '../TitleView/TitleView.vue'
	import SellingView from '../SellingView/SellingView.vue'
	export default {
		name: 'homeView',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			CategoryView,
			TitleView,
			SellingView
		},
		data() {
			return {
				title: '全視眼鏡商城',
				navViewShow: true,
				banner: []
			}
		},
		created() {
			//發送標題
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)

			var that = this
			//獲取輪播圖數據
			this.$ajax.get('/json/banner.json')
				.then(function(response) { //獲取數據成功
					console.log(response.data)
					that.banner = response.data
				})
				.catch(function(err) { //獲取數據失敗
					console.log(err)
				})
		}
	}
</script>

<style>
	.home-view {
		padding-top: 2.8125rem;
	}

	.home-view>.banner-view img {
		width: 100%;
		height: 100%;
	}

	.home-view>.banner-view {
		height: 9.875rem;
	}
</style>
