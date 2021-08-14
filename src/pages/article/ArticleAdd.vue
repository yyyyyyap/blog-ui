<template>
  <div>
    <el-input v-model="article.title" placeholder="文章标题"></el-input>
    <el-input v-model="article.author" placeholder="文章作者"></el-input>
    <el-input v-model="article.content" placeholder="文章内容"></el-input>
    <el-input v-model="article.category" placeholder="文章分类"></el-input>
    <el-button @click="createArticle">新建文章</el-button>
  </div>
</template>

<script>
import articleApi from '@/api/article'

export default {
  article: {
    title: '',
    author: '',
    content: '',
    category: ''
  },
  methods: {
    async createArticle () {
      try {
        await articleApi.createArticle(this.article)
        this.$message({
          message: '新建文章成功',
          type: 'success'
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>

</style>
