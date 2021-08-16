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
  }
}
