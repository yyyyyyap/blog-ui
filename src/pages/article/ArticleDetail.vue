<template>
  <div>
    <h2>{{article.title}}</h2>
    <div class="mdContainer" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import highlightJS from 'highlight.js'
import articleApi from '@/api/article'
import 'highlight.js/styles/monokai-sublime.css'

export default {
  name: 'ArticleDetial',
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
      console.log(this.article)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
  .mdContainer pre {
    padding: 5px;
    background: gray;
  }
</style>
