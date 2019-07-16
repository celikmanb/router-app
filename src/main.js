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
    { path: '/', name: 'home' ,component: Home },
    { path: '/user/:id', name: 'user' ,component: UserProfile },
    { path: '/user/:id/posts', name: 'post' ,component: UserPosts }
  ],
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
