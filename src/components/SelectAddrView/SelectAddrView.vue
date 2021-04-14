<template>
	<div class="select-addr-view">
		<van-address-list v-model="chosenAddressId" :list="addList" add-button-text="下一步" @add="onNext"
			@edit="onEdit" />
	</div>
</template>

<script>
	import {
		AddressList,

	} from 'vant';
	export default {
		name: 'selectAddrView',
		props: ['addList'],
		components: {
			[AddressList.name]: AddressList
		},
		data() {
			return {
				chosenAddressId: '1',
			};
		},
		methods: {
			onNext() {
				console.log('下一步')
			},
			onEdit(item, index) {
				this.$emit('onEditAddr', index)
			},
		}
	}
</script>

<style>
</style>
