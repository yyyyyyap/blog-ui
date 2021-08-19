import http from './instance'

export default {
  getAllArticle () {
    return http({
      url: '/article/findAll',
      method: 'get'
    })
  },

  getArticle (params) {
    return http({
      url: '/article/find',
      method: 'get',
      params: params
    })
  },

  createArticle (data) {
    return http({
      url: '/article/create',
      method: 'post',
      data: data
    })
  },

  getArticleAmount () {
    return http({
      url: '/article/amount',
      method: 'get'
    })
  },

  searchArticle (params) {
    return http({
      url: '/article/searchArticle',
      method: 'get',
      params: params
    })
  },

  getBatchArticle (params) {
    return http({
      url: '/article/getBatchArticle',
      method: 'get',
      params: params
    })
  }
}
