<template>
  <div>
    <div id="mdContainer" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import highlightJS from 'highlight.js'
import articleApi from '@/api/article'
import 'highlight.js/styles/monokai-sublime.css'

import Header from '@/components/Header.vue'

export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: {
        title: '',
        author: '',
        content: '',
        category: ''
      }
    }
  },
  components: {
    Header
  },
  computed: {
    compiledMarkdown: function () {
      let rendererMD = new marked.Renderer()
      marked.setOptions({
        renderer: rendererMD,
        highlight: function (code) {
          return highlightJS.highlightAuto(code).value
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      })
      return marked(this.article.content)
    }
  },
  methods: {
  },
  async created () {
    let id = this.$route.query.articleId
    try {
      let {data} = await articleApi.getArticle({id: id})
      this.article = data.data
      this.$store.commit('setHeader', {
        category: this.article.category,
        maintitle: this.article.title,
        date: '创建于：' + this.article.createdAt
      })
      console.log(this.article)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
  /* .mdContainer code {
    background: black;
  } */

  #mdContainer pre {
    padding: 5px;
    background: gray;
  }
</style>
