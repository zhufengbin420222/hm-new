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
//导入axios
import axios from 'axios';

//------------------------------------------------注册全局组件----------------------------------------------
import hmheader from './components/hm-header.vue';
import hmlogo from './components/hm-logo.vue';
import hmbottom from './components/hm-bottom.vue';
import hminput from './components/hm-input.vue';
Vue.component('hm-header', hmheader);
Vue.component('hm-logo', hmlogo);
Vue.component('hm-bottom', hmbottom);
Vue.component('hm-input', hminput);

//axios和Vue并没有关系,强行让axios与Vue有关系
//把axios绑定到vue原型上,所有的Vue实例(组件)都可以通过this.axios访问到axios
Vue.prototype.$axios = axios;

//引入vant组件
import { Toast } from 'vant';
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
