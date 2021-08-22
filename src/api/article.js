import http from './instance'

export default {
  getAllArticle () {
    return http({
      url: '/article/findAll',
      method: 'get'
    })
  },

  getOneArticle (params) {
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

  getArticleAmount (params) {
    return http({
      url: '/article/amount',
      method: 'get',
      params
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
  },

  getBatchUpdatedArticle (params) {
    return http({
      url: '/article/getBatchUpdatedArticle',
      method: 'get',
      params: params
    })
  },

  getArticle (params) {
    return http({
      url: '/article/getArticle',
      method: 'get',
      params: params
    })
  }
}
