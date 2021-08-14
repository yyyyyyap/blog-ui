import http from './instance'

export default {
  getAllArticle () {
    return http({
      url: '/article/findAll',
      method: 'get'
    })
  },

  getArticle (query) {
    return http({
      url: '/article/find',
      method: 'get',
      params: query
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
