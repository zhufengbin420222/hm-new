//配置路由信息
import Vue from 'vue';
import VueRouter from 'vue-router';

//导入组件
import login from '../pages/login.vue';
import Register from '../pages/Register.vue';
import userinfo from '../pages/Userinfo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  //配置路由规则
  routes: [
    { path: '/', redirect: './login' },
    { path: '/login', component: login },
    { path: '/Register', component: Register },
    { path: '/userinfo', component: userinfo }
  ]
});

export default router;
