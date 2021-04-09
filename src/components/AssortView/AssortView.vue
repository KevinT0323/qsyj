<template>
	<div class="assort-view">
		<div class="side-view">
			<div class="item" v-for="item,index in assortList" :key="index" @click="onNavClick(index)" ref="sideItem">
				{{ item.text }}
			</div>
		</div>
		<div class="main-view">
			<div class="main-wrapper" v-if="goodsList">
				<div class="goods-wrapper" v-for="item,index in goodsList" :key="index">
					<div class="img">
						<img :src="item.img" />
						<!-- 垂直居中設置參考 -->
						<span></span>
					</div>
					<div class="content">
						<p class="name">{{ item.name }}</p>
						<p class="old-price">原價：￥{{ item.oldPrice }}</p>
						<p class="price">折扣價：￥{{ item.price }}</p>
					</div>			
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'assortView',
		data() {
			return {
				title: '分類',
				navViewShow: true,
				assortList: null,
				activeIndex: 0,
				selectItem: null,
				goodsList: null
			}
		},
		methods: {
			onNavClick: function(index) {

				this.activeIndex = index
				this.goodsList = this.assortList[index].children
				// 先移出
				this.selectItem.className = 'item'
				// 當前
				this.selectItem = this.$refs.sideItem[this.activeIndex]

				// 添加樣式
				this.selectItem.className += ' active'
			}
		},
		created() {
			//發送標題
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)

			var that = this // eslint-disable-line no-unused-vars
			this.$ajax.get('/json/assort.json')
				.then(function(response) {
					// console.log(response)
					that.assortList = response.data

					that.$nextTick(function() {
						that.goodsList = that.assortList[that.activeIndex].children
						//默認選中
						that.selectItem = that.$refs.sideItem[that.activeIndex]

						that.selectItem.className = 'item active'
					})
				})
				.catch(function(err) {
					console.log(err)
				})
		}
	}
</script>

<style>
	@import url("../../temp.css");
</style>
