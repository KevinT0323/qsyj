<template>
	<div class="cart-view">
		<CartItemView v-for="cart,index in carts" :key="index" :cart="cart" :isChecked="selectList[index]" @onChangeChecked="onItemCheckedChange" :index="index">
		</CartItemView>

		<van-submit-bar :price="3050" button-text="提交訂單" @submit="onSubmit" label="合計:">
			<van-checkbox v-model="isAll" class="all-checkbox" checked-color="red">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
	import {
		SubmitBar,
		Checkbox
	} from 'vant';
	import CartItemView from '../CartItemView/CartItemView.vue'
	export default {
		name: 'cartView',
		components: {
			CartItemView,
			[SubmitBar.name]: SubmitBar,
			[Checkbox.name]: Checkbox
		},
		data() {
			return {
				title: '購物車',
				navViewShow: true,
				carts: null,
				isAll: false,
				selectList: []
			}
		},
		methods: {
			onSubmit: function() {

			},
			onItemCheckedChange: function(isChecked, index) {
				// console.log(isChecked, index)
				//更新狀態數組
				this.selectList[index] = isChecked
				console.log(this.selectList)
			}
		},
		created() {
			//發送標題
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)

			var that = this

			this.$ajax.get('/json/cart.json')
				.then(function(response) {
					that.carts = response.data

					//動態添加
					for (var i = 0; i < that.carts.length; i++) {
						that.selectList.push(false)
					}
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
