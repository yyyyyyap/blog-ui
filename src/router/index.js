import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ArticleManager from '@/pages/article/ArticleManager'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/article',
    component: ArticleManager
  }]
})
