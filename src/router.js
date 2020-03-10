import VueRouter from 'vue-router'

import home from './components/bartab/home.vue'
import contact from "./components/bartab/contact.vue";
import cart from "./components/bartab/cart.vue";
import search from "./components/bartab/search.vue";

import news from "./components/middle/news.vue";
import newsInfo from "./components/middle/newsInfo.vue";

import photoList from "./components/middle/photoList.vue";

var router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/home', component: home},
        {path: '/contact', component: contact},
        {path: '/cart', component: cart},
        {path: '/search', component: search},
        {path: '/home/news', component: news},
        {path: '/home/newsInfo', component: newsInfo},
        {path: '/home/photoList', component: photoList},
    ],
    linkActiveClass: 'mui-active' //覆盖路由的默认高亮
})
export default router