import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home'
import User from './components/User'
import UserPosts from './components/UserPosts'
import UserProfile from './components/UserProfile'

Vue.use(Router);


const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home' ,component: Home },
        { path: '/user/:id', name: 'user' ,component: UserProfile },
        { path: '/user/:id/posts', name: 'post' ,component: UserPosts }
    ]
});

export default router;