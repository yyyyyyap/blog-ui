import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ArticleManager from '@/pages/article/ArticleManager'
import ArticleAdd from '@/pages/article/ArticleAdd'
import ArticleDetail from '@/pages/article/ArticleDetail'

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
  }, {
    path: '/article/add',
    component: ArticleAdd
  }, {
    path: '/article/create',
    component: ArticleDetail
  }]
})
