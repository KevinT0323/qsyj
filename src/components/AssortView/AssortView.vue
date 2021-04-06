<template>
	<div class="assort-view">
		分類
	</div>
</template>

<script>
	export default {
		name: 'assortView',
		data() {
			return {
				title: '分類',
				navViewShow: true
			}
		},
		created() {
			//發送標題
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
		}
	}
</script>

<style>
</style>
