<template>
  <div>
    <el-button @click="addArtcile">新增文章</el-button>
    <article-item
      v-for="item in articleList"
      :key="item.id"
      :article="item">
    </article-item>
  </div>
</template>

<script>
import articleApi from '@/api/article'
import ArticleItem from './ArticleItem'

export default {
  name: 'ArticleManager',
  components: {
    ArticleItem
  },
  data () {
    return {
      articleList: null
    }
  },
  methods: {
    addArtcile () {
      this.$router.push('/article/add')
    }
  },
  async created () {
    try {
      let {data} = await articleApi.getAllArticle()
      this.articleList = data.data
      console.log(this.articleList)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>

</style>
