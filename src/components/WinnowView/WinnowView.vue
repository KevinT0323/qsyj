<template>
	<div class="winnow-view">
		<img :src="bigImg" class="big-img" />
		<div class="hidden-view">
			<div class="winnow-box" ref='itemsView'>
				<WinnowItemView v-for="item,index in contents" :key="index" :item='item'></WinnowItemView>
			</div>
		</div>
	</div>
</template>

<script>
	import WinnowItemView from '../WinnowItemView/WinnowItemView.vue'
	export default {
		name: 'winnowView',
		props: ['bigImg', 'contents'],
		components: {
			WinnowItemView
		},
		beforeUpdate() {
			// 獲取對應 winnow-box 節點. 動態設置寬度
			var temp = this.contents.length * (100 + 10)
			//必須是DOM節點已經被渲染
			this.$refs.itemsView.style.width = temp + 'px'
		}
	}
</script>

<style>
	.winnow-view>.big-img {
		width: 100%;
	}

	.winnow-view>.winnow-box {
		background: white;
		overflow: hidden;
		padding-left: 0.25rem;
	}

	.winnow-view .hidden-view {
		width: 100%;
		overflow: auto;
	}
</style>
