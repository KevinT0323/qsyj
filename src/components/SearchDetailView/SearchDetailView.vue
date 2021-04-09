<template>
	<div class="search-detail-view">
		<van-nav-bar fixed title="搜索結果" left-arrow @click-left="onBack" />
		
		<SearchItemView v-for="goods,index in searchDataList" :key="index" :goods="goods"></SearchItemView>
	</div>
</template>

<script>
	import { NavBar } from 'vant';
	import SearchItemView from'../SeachItemView/SearchItemView.vue'
	export default {
		name: 'searchDetailView',
		props: ['searchDataList'],
		components: {
			[NavBar.name]: NavBar,
			SearchItemView
		},
		methods: {
			onBack:function() {
				this.$emit('onBack')
			}
		}
	}
</script>

<style>
	.search-detail-view {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		background-color: #F2F2F2;
		z-index: 999;
		padding-top: 2.8125rem;
		overflow: auto;
	}
</style>
