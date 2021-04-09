<template>
	<div class="search-view">
		<van-search v-model="searchKey" show-action placeholder="請輸入搜索關鍵詞" @search="onSearch">
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>

		<div class="history-view">
			<div class="history-title">
				<h4>最近搜索</h4>
				<span @click="onClear">清空紀錄</span>
			</div>
			<van-tag @click="onHistoryItem(item)" round v-for="item,index in historyList" :key="index">{{ item }}
			</van-tag>
		</div>

		<!-- 搜索詳情 -->
		<SearchDetailView v-if="searchDetailShow" @onBack='onDetailHide' :searchDataList="searchDataList">
		</SearchDetailView>
	</div>
</template>

<script>
	import {
		Search,
		Tag,
		Toast
	} from 'vant';
	import SearchDetailView from '../SearchDetailView/SearchDetailView.vue'
	export default {
		name: 'searchView',
		components: {
			[Search.name]: Search,
			[Tag.name]: Tag,
			[Toast.name]: Toast,
			SearchDetailView
		},
		data() {
			return {
				title: '搜索',
				navViewShow: false,
				searchKey: '',
				historyList: [
					'明月',
					'海昌',
					'隱形眼鏡'
				],
				searchDetailShow: false,
				searchDataList: null
			}
		},
		created() {
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
		},
		methods: {
			onSearch: function() {
				if (this.searchKey) {
					this.searchDetail()
					this.historyList.push(this.searchKey)
				}
			},
			onClear: function() {
				this.historyList = []
			},
			onHistoryItem: function(item) {
				this.searchKey = item
				this.searchDetail()
			},
			onDetailHide: function() {
				this.searchDetailShow = false
			},
			closeLoading: function() {
				//顯示搜索詳情頁
				this.searchDetailShow = true
			},
			searchDetail: function() {
				//加載提示
				Toast.loading({
					message: '加载中...',
					overlay: true,
					duration: 0,
					onClose: this.closeLoading() //關閉後的回調
				});

				//獲取數據
				//搜索內容
				//參數：搜關的關鍵字 searchKey
				// console.log('發送搜索關鍵字:' + this.searchKey)
				var that = this
				this.$ajax.get('/json/search-detail.json')
					.then(function(response) { //數據已經獲取
						// console.log(response.data)
						that.searchDataList = response.data.list
						//關閉加載提示
						Toast.clear()
					})
					.catch(function(err) {
						console.log(err)
					})


			}
		}
	}
</script>

<style>
	.search-view {
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		background-color: #F2F2F2;
	}

	.search-view>.history-view {
		padding: 0 1.25rem;
	}

	.search-view>.history-view>.history-title {
		margin: 1.125rem 0 1.25rem;
		overflow: hidden;
	}

	.search-view>.history-view>.history-title>h4 {
		float: left;
		font-size: 1rem;
		font-weight: 800;
	}

	.search-view>.history-view>.history-title>span {
		font-size: 1rem;
		color: red;
		float: right;
	}

	.search-view>.history-view>.van-tag {
		margin: 0 0.625rem;
	}
</style>
