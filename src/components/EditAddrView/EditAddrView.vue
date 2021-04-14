<template>
	<div class="edit-addr-view">
		<van-address-edit :area-list="areaList" show-set-default show-search-result :address-info="editValue"
			:search-result="searchResult" @save="onSave" @change-detail="onChangeDetail" />
	</div>
</template>

<script>
	import {
		areaList
	} from '@vant/area-data';
	export default {
		name: 'editAddrView',
		props: ['editValue'],
		data() {
			return {
				areaList,
				searchResult: []
			};
		},
		methods: {
			onSave(content) {
				var new_addr = {
					"id": content.id,
					"name": content.name,
					"tel": content.tel,
					"address": content.city + content.county + content.addressDetail
				}
				this.$emit("onSaveAddr", new_addr)
			},
			onChangeDetail(val) {
				if (val) { //地圖定位
					this.searchResult = [{
						name: '黄龙万科中心',
						address: '杭州市西湖区',
					}];
				} else {
					this.searchResult = [];
				}
			},
		}
	}
</script>

<style>
</style>
