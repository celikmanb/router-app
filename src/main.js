import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home'
import User from './components/User'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'

Vue.config.productionTip = false

Vue.use(Router);


const router = new Router ({
  routes: [
    { path: '/', component: Home },
    { path: '/user/:id', component: UserProfile },
    { path: '/user/:userId/posts', component: UserPosts }
  ],
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
