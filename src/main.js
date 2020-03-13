import Vue from 'vue';
import App from './App.vue';

//导入通用样式
import './styles/base.less';
//导入字体图标
import './styles/iconfont.less';
// 导入lib-flexible模块，会自动适配所有的屏幕
// 他会给每一个屏幕设置一个html的大小  会把屏幕的大小/10 = 1rem
import 'lib-flexible';
//导入路由对象
import router from './router/index';

//注册全局组件
import hmheader from './components/hm-header.vue';
Vue.component('hm-header', hmheader);
import hmlogo from './components/hm-logo.vue';
Vue.component('hm-logo', hmlogo);
import hmbottom from './components/hm-bottom.vue';
Vue.component('hm-bottom', hmbottom);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
