<template>
	<div class="home-view">
		首頁
	</div>
</template>

<script>
	export default {
		name: 'homeView',
		data() {
			return {
				title: '全視眼鏡商城',
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
