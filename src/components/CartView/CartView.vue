<template>
	<div class="cart-view">
		<CartItemView v-for="cart,index in carts" :key="index" :cart="cart" :isChecked="selectList[index]"
			@onChangeChecked="onItemCheckedChange" :index="index" ref='cartItemView'>
		</CartItemView>

		<!-- 地址選擇 -->
		<van-popup v-model="isSubmit" position="bottom">
			<SelectAddrView :addList="addList" @onEditAddr="onEditAddr"></SelectAddrView>
		</van-popup>

		<!-- 地址編輯 -->
		<van-popup v-model="isEdit" position="bottom">
			<EditAddrView :editValue="editValue" @onSaveAddr="onSaveAddr"></EditAddrView>
		</van-popup>

		<van-submit-bar :price="totalPrice" button-text="提交訂單" @submit="onSubmit">
			<van-checkbox v-model="isAll" class="all-checkbox" checked-color="red" @change='onAllSelect'>全選</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
	import {
		SubmitBar,
		Checkbox,
		Popup
	} from 'vant';
	import CartItemView from '../CartItemView/CartItemView.vue'
	import SelectAddrView from '../SelectAddrView/SelectAddrView.vue'
	import EditAddrView from '../EditAddrView/EditAddrView.vue'
	export default {
		name: 'cartView',
		components: {
			CartItemView,
			SelectAddrView,
			EditAddrView,
			[SubmitBar.name]: SubmitBar,
			[Checkbox.name]: Checkbox,
			[Popup.name]: Popup
		},
		data() {
			return {
				title: '購物車',
				navViewShow: true,
				carts: null,
				isAll: true,
				selectList: [],
				isSubmit: false,
				addList: [],
				isEdit: false,
				editValue: {},
				editIndex: -1
			}
		},
		methods: {
			onSubmit: function() {
				console.log('提交訂單')
				this.isSubmit = true
			},
			onItemCheckedChange: function(isChecked, index) {
				// console.log(isChecked, index)
				//更新狀態數組
				// this.selectList[index] = isChecked
				// console.log(this.selectList)
				
				this.$set(this.selectList, index, isChecked)
			},
			onAllSelect: function() {
				for(var i = 0; i < this.selectList.length ; i++){
					// this.selectList[i] = this.isAll
					this.$set(this.selectList, i, this.isAll)
					
					//需要將對應的狀態傳遞到子組件
					this.$refs.cartItemView[i].onItemViewChagne(this.isAll)
				}
			},
			onEditAddr: function(index){
				this.isEdit = true
				this.editValue = this.addList[index]
				this.editIndex = index
			},
			onSaveAddr: function(addr){
				this.$set(this.addList, this.editIndex, addr)
				this.isEdit = false
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
						that.selectList.push(true)
					}
				})
				.catch(function(err) {
					console.log(err)
				})
				
			this.$ajax.get('/json/user-addr.json')
			.then(function(response){
				// console.log(response.data)
				that.addList = response.data
			})
			.catch(function(err){
				console.log(err)
			})
		},
		computed: {
			totalPrice: function() {
				var total = 0
				for (var i = 0; i < this.selectList.length; i++) {
					if (this.selectList[i]) { //選中的狀態
						var price = this.carts[i].price
						var num = this.carts[i].num
						total += price * num
					}
				}
				//注意顯示單位
				return total * 10 * 10
			}
		}
	}
</script>

<style>
	.cart-view {
		padding-top: 2.8125rem;
		padding-bottom: 6.25rem;
		box-sizing: border-box;
	}
	
	.cart-view > .van-submit-bar {
		padding-bottom: 3.125rem;
	}
	
	.cart-view .all-checkbox {
		margin-left: 0.9375rem;
	}
</style>
