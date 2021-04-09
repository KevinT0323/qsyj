<template>
	<div class="cart-item-view">
		<div class="cart-checkbox">
			<van-checkbox v-model="checked" checked-color="red" class="checkbox" @change="onCheckedChange"></van-checkbox>
			<span></span>
		</div>
		
		<div class="cart-img">
			<img :src="cart.img" />
			<span></span>
		</div>
		
		<div class="cart-detail">
			<div class="goods-detail">
				<span>特價</span>
				<span>{{ cart.name }}</span>
			</div>
			<p>￥{{ cart.price }}</p>
			<p>{{ cart.num }}</p>
		</div>
	</div>
</template>

<script>
	import { Checkbox } from 'vant';
	export default {
		name: 'cartItemView',
		props: ['cart', 'isChecked', 'index'],
		components: {
			[Checkbox.name]: Checkbox
		},
		data() {
			return {
				checked: true
			}
		},
		created() {
			this.checked = this.isChecked;
		},
		methods: {
			onCheckedChange: function() {
				// console.log(this.checked)
				this.$emit('onChangeChecked', this.checked, this.index)
			}
		}
	}
</script>

<style>
	.cart-item-view {
		width: 22.1875rem;
		height: 6.25rem;
		margin: 0.625rem;
		border: 0.0625rem solid #BBBBBB;
		box-shadow: 0 0 0.25rem 0 gray;
		border-radius: 0.5rem;
		background-color: white;
	}
	
	.cart-item-view>.cart-checkbox {
		width: 1.5625rem;
		float: left;
		height: 100%;
		text-align: right;
	}
	
	.cart-item-view>.cart-checkbox>span {
		height: 100%;
		display: inline-block;
		vertical-align: middle;
		width: 0;
	}
	
	.cart-item-view>.cart-checkbox>.checkbox {
		display: inline-block;
		vertical-align: middle;
	}
	
	.cart-item-view>.cart-img {
		width: 4.8125rem;
		height: 100%;
		text-align: center;
		float: left;
	}
	
	.cart-item-view>.cart-img>img {
		width: 4.375rem;
		display: inline-block;
		vertical-align: middle;
	}
	
	.cart-item-view>.cart-img>span {
		height: 100%;
		display: inline-block;
		vertical-align: middle;
		width: 0;
	}
	
	.cart-item-view>.cart-detail {
		float: left;
		width: 15.625rem;
	}
	
	.cart-item-view>.cart-detail>.goods-detail {
		margin-top: 1.5625rem;
		font-size: 0.875rem;
	}
	
	.cart-item-view>.cart-detail > .goods-detail > span:nth-of-type(1){
		font-size: 0.875rem;
		color: red;
		margin-right: 0.6875rem;
	}
	
	.cart-item-view>.cart-detail > p {
		font-size: 0.625rem;
	}
	
	.cart-item-view>.cart-detail > p:nth-of-type(1){
		line-height: 2.1875rem
	}
</style>
