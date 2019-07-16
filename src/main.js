import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false



/*const router = new Router ({
  routes: [
    { path: '/', name: 'home' ,component: Home },
    { path: '/user/:id', name: 'user' ,component: UserProfile },
    { path: '/user/:id/posts', name: 'post' ,component: UserPosts }
  ],
  mode: 'history'
});*/

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
