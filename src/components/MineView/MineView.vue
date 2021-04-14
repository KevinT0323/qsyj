<template>
	<div class="mine-view">
		<!-- head -->
		<div class="user-view">
			<div class="content-wrapper">
				<div class="user-msg">
					<img src="http://www.api.qsyj.com/img/atom.png" />
					<p>請叫我阿童木</p>

					<van-row>
						<van-col span="6">
							<dl>
								<dt>3</dt>
								<dd>收藏</dd>
							</dl>
						</van-col>
						<van-col span="6">
							<dl>
								<dt>2</dt>
								<dd>關注</dd>
							</dl>
						</van-col>
						<van-col span="6">
							<dl>
								<dt>22</dt>
								<dd>足跡</dd>
							</dl>
						</van-col>
						<van-col span="6">
							<dl style="border: 0;">
								<dt>33</dt>
								<dd>心得</dd>
							</dl>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
	
		<!-- order info -->
		<div class="item-wrapper">
			<div class="title-wrapper">
				<h4>我的訂單</h4>
				<a href="#" @click="onOrderView(0)">
					查看全部
					<van-icon name="arrow"></van-icon>
				</a>
			</div>
			<van-row>
				<van-col span="6">
					<MineItemView @onOrderItemClick='onOrderView' type='1' icon='shop' name='待付款'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView @onOrderItemClick='onOrderView' type='2' icon='shop-collect' name='待發貨'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView @onOrderItemClick='onOrderView' type='3' icon='clock' name='待收貨'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView @onOrderItemClick='onOrderView' type='4' icon='alipay' name='退款退貨'></MineItemView>
				</van-col>
			</van-row>
		</div>
		
		<!-- service info -->
		<div class="item-wrapper">
			<div class="title-wrapper">
				<h4>我的服務</h4>
				<a href="#">
					查看全部
					<van-icon name="arrow"></van-icon>
				</a>
			</div>
			<van-row style="border-bottom: 0.0625rem solid #dedede;">
				<van-col span="6">
					<MineItemView icon='youzan-shield' name='邀請好友' other='立賺30元'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='bell' name='簽到贏禮包' other='10豆'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='printer' name='優惠券' other='3張'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='audio' name='限時購'></MineItemView>
				</van-col>
			</van-row>
			
			<van-row style="border-bottom: 0.0625rem solid #dedede;">
				<van-col span="6">
					<MineItemView icon='comment' name='我的收藏' other='10個'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='gift' name='收貨地址' other='2個'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='question' name='客戶中心'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='todo-list' name='充值中心'></MineItemView>
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="6">
					<MineItemView icon='manager' name='我的問答'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='label' name='領券中心'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='service' name='驗光單' other='3張'></MineItemView>
				</van-col>
				<van-col span="6">
					<MineItemView icon='chat' name='試用中心' other='1元試用'></MineItemView>
				</van-col>
			</van-row>
		</div>
	
		<!-- logout -->
		<div class="logout">
			<a href="#">退出登錄</a>
		</div>
		
		<!-- order view -->
		<transition name='slide-to-left'>
			<OrderView v-if='orderViewShow' @onBack='onOrderViewHide' :orderType="orderType"></OrderView>
		</transition>
	</div>
</template>

<script>
	import MineItemView from '../MineItemView/MineItemView.vue'
	import OrderView from '../OrderView/OrderView.vue'
	import {
		Col,
		Row,
		Icon
	} from 'vant';
	export default {
		name: 'mineView',
		components: {
			[Col.name]: Col,
			[Row.name]: Row,
			[Icon.name]: Icon,
			MineItemView,
			OrderView
		},
		data() {
			return {
				title: '我的',
				navViewShow: false,
				orderViewShow: false,
				orderType: -1
			}
		},
		created() {
			this.$emit('onTitle', this.title)
			this.$emit('onNavShow', this.navViewShow)
		},
		methods: {
			onOrderView: function(type){
				this.orderViewShow = true
				this.orderType = parseInt(type)
				console.log(type)
			},
			onOrderViewHide: function(){
				this.orderViewShow = false
			}
		}
	}
</script>

<style>
	.mine-view {
		overflow: auto;
		padding-bottom: 3.125rem;
	}
	
	.mine-view>.user-view {
		width: 100%;
		height: 10rem;
		background-color: red;
		margin-bottom: 3.125rem;
		padding: 5rem 2rem 0;
		box-sizing: border-box;
	}
	
	.mine-view>.user-view>.content-wrapper {
		height: 7.6875rem;
		background-color: white;
		border-radius: 0.625rem;
		position: relative;
	}
	
	.mine-view>.user-view>.content-wrapper>.user-msg {
		height: 3.4375rem;
		line-height: 3.4375rem;
		margin-bottom: 0.625rem;
	}
	
	.mine-view>.user-view>.content-wrapper>.user-msg>img {
		width: 4.1875rem;
		height: 4.1875rem;
		border-radius: 50%;
		position: absolute;
		left: 1.25rem;
		top: -1.25rem;
	}
	
	.mine-view>.user-view>.content-wrapper>.user-msg>p {
		font: 0.9375rem;
		text-align: center;
	}
	
	.mine-view>.user-view>.content-wrapper dl {
		border-right: 0.0625rem solid #dbdbdb;
		text-align: center;
		height: 2.625rem;
	}
	
	.mine-view>.user-view>.content-wrapper dl dt {
		margin-bottom: -1.875rem;
		font-size: 0.6875rem;
		color: #7e7e7e;
	}
	
	.mine-view>.user-view>.content-wrapper dl dd {
		font-size: 0.75rem;
		color: #bdbdbd;
	}
	
	.mine-view>.item-wrapper {
		padding: 0 0.625rem;
		margin-bottom: 0.625rem;
		background-color: white;
	}
	
	.mine-view>.item-wrapper>.title-wrapper {
		border-bottom: 0.0625rem solid #DBDBDB;
		height: 3.125rem;
		font-size: 0.875rem;
		line-height: 3.125rem;
	}
	
	.mine-view>.item-wrapper>.title-wrapper>h4 {
		font-weight: 800;
		float: left;
	}
	
	.mine-view>.item-wrapper>.title-wrapper>a {
		float: right;
		color: #DBDBDB;
		vertical-align: middle;
	}
	.mine-view>.logout {
		width: 100%;
		padding: 0 0.625rem 0.625rem 0.625rem;
		box-sizing: border-box;
	}
	
	.mine-view > .logout > a {
		display: block;
		border: 0.0625rem solid #DBDBDB;
		text-align: center;
		height: 2.5625rem;
		line-height: 2.5625rem;
		background-color: white;
		color: black;
	}
</style>
