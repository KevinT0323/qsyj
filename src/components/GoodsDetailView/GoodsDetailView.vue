<template>
	<div class="goods-detail-view" @click="back">
		商品詳情
	</div>
</template>

<script>
	export default {
		name: 'goodsDetailView',
		methods: {
			back: function() {
				this.$store.commit('changeGoodsDetailShow')
			}
		},
		created() {
			//根據goodsID獲取對應數據
			console.log(this.$store.state.goodsItemId)
			var that = this // eslint-disable-line no-unused-vars
			this.$ajax.get('/json/goods-detail.json')
			.then(function(response){
				console.log(response)
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<style>
	.goods-detail-view {
		background-color: blue;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		z-index: 99;
	}
</style>
