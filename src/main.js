// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import ECharts from 'vue-echarts/components/ECharts'// 图表
	//折线图
	import 'echarts/lib/chart/line';
	// 柱状图
	import 'echarts/lib/chart/bar';
  // 象形柱状
  import 'echarts/lib/chart/pictorialBar';
  // 饼图
  import 'echarts/lib/chart/pie';
  // 球图
  import 'echarts-liquidfill/src/liquidFill.js';
  //仪表盘
  import 'echarts/lib/chart/gauge';
	// 提示
	import 'echarts/lib/component/tooltip'
	// 图例
	import 'echarts/lib/component/legend'
	// 标题
	import 'echarts/lib/component/title'
	// 基准线
	import 'echarts/lib/component/markLine'
	//拖拽
	import 'echarts/lib/component/dataZoom'
  //
  import 'echarts/lib/component/polar'

  import appHeader from '@/components/appHeader.vue'

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.component('chart', ECharts)
Vue.component('appHeader',appHeader)

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  console.log(to.path)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
