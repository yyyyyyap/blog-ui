import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// import ArticleManager from '@/pages/article/ArticleManager'
// import ArticleAdd from '@/pages/article/ArticleAdd'
// import ArticleDetail from '@/pages/article/ArticleDetail'

const ArticleMain = () => import('@/pages/article/ArticleMain.vue')
const ArticleList = () => import('@/pages/article/ArticleList')
const ArticleAdd = () => import('@/pages/article/ArticleAdd')
const ArticleDetail = () => import('@/pages/article/ArticleDetail')
const About = () => import('@/pages/about/About')

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
    component: ArticleMain,
    children: [{
      path: '',
      component: ArticleList
    }, {
      path: 'list',
      component: ArticleList
    }, {
      path: 'add',
      component: ArticleAdd
    }, {
      path: '/article/detail',
      component: ArticleDetail
    }]
  }, {
    path: '/about',
    component: About
  }]
})
