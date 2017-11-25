// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'	//引入路由
import Users  from './components/users'
import Test from './components/test'
//使用http http://jsonplaceholder.typicode.com/
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

//设置路由
Vue.config.productionTip = false

const  router=new VueRouter({
mode: 'history',
base: __dirname,
routes: [
{path: '/',component:Users},
{path: '/test',component:Test}]
})

/* eslint-disable no-new */
new Vue({
// el: '#app',
// template: '<App/>',
// components: { App }
router,
template: `
<div id='app'>
<ul>
<li>
<router-link to='/'>Users</router-link>
<router-link to='/test'>Test</router-link>
</li>
</ul>
<router-view></router-view>
</div>
`
}).$mount('#app')
