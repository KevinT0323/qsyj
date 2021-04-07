import Vue from 'vue'
import App from './App.vue'

//第一步:導入
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Lazyload
import { Lazyload } from 'vant';
Vue.use(Lazyload);

//Axios
import Axios from 'axios'
//Vue原型屬性
Vue.prototype.$ajax = Axios

Vue.config.productionTip = false

//第二步:導入組件
import HomeView from './components/HomeView/HomeView.vue'
import AssortView from './components/AssortView/AssortView.vue'
import SearchView from './components/SearchView/SearchView.vue'
import CartView from './components/CartView/CartView.vue'
import MineView from './components/MineView/MineView.vue'

//第三部:定義路由規則
var routes = [
	{
		path: '/',
		// component: HomeView
		redirect: '/home'
	},
	{
		path: '/home',
		component: HomeView
	},
	{
		path: '/assort',
		component: AssortView
	},
	{
		path: '/search',
		component: SearchView
	},
	{
		path: '/cart',
		component: CartView
	},
	{
		path: '/mine',
		component: MineView
	}
]

//第四步: 創建路由對象
var router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  //第五步: 添加路由管理器
  router
}).$mount('#app')
