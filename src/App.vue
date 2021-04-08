<template>
	<div id="app">
		<!-- 頭部-導航欄 -->
		<van-nav-bar :title="title" fixed v-show="navViewShow" />

		<!-- 主體內容 -->
		<!-- 路由規則匹配到的組件, 渲染位置 -->
		<router-view @onTitle='getTitle' @onNavShow='getShow'></router-view>
		<!-- 底部通欄 -->
		<van-tabbar v-model="active" active-color="red">
			<van-tabbar-item icon="home-o" to='/home'>首頁</van-tabbar-item>
			<van-tabbar-item icon="filter-o" to='/assort'>分類</van-tabbar-item>
			<van-tabbar-item icon="search" to='/search'>搜尋</van-tabbar-item>
			<van-tabbar-item icon="cart-o" to='/cart' info='20'>購物車</van-tabbar-item>
			<van-tabbar-item icon="contact" to='/mine'>我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import {
		NavBar,
		Tabbar,
		TabbarItem
	} from 'vant'
	export default {
		name: 'App',
		components: {
			[NavBar.name]: NavBar,
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem
		},
		data() {
			return {
				title: '', // 導航標題(子組件傳遞過來)
				navViewShow: true, //導航的顯示或隱藏,
				active: 0
			}
		},
		methods: {
			getTitle: function(title) {
				this.title = title
			},
			getShow: function(temp) {
				this.navViewShow = temp
			}
		},
	}
</script>

<style>
	#app {
		background: #F2F2F2;
	}

	.van-nav-bar {
		height: 2.8125rem;
		background: red;
		font-size: 1rem;
		font-weight: 700;
		line-height: 2.8125rem;
		text-align: center;
	}

	.van-nav-bar .van-nav-bar__title {
		color: white
	}

	/* transition name='xxxx' 
	xxx-enter (進入)過渡開始狀態
	xxx-enter-to (進入)過渡結束狀態
	xxx-enter-active (進入)過渡時間, 延遲, 曲線
	xxx-leave (離開)過渡開始狀態
	xxx-leave-to (離開)過渡結束
	xxx-leave-active (離開)過渡時間, 延遲, 曲線
	*/
   /* 從右到左 */
	.slide-to-left-enter-active,
	.slide-to-left-leave-active {
		transition: all 2s;
	}

	.slide-to-left-enter,
	.slide-to-left-leave-to {
		transform: translateX(100%);
	}
	/* 從底到頂 */
	.slide-to-top-enter-active,
	.slide-to-top-leave-active {
		transition: all 2s;
	}
	
	.slide-to-top-enter,
	.slide-to-top-leave-to {
		transform: translateY(100%);
	}
	
	.van-nav-bar .van-nav-bar__arrow {
		color: white;
		font-size: 1rem;
	}
</style>
