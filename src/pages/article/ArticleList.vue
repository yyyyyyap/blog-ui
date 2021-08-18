<template>
  <div>
    <div>
      <!-- <el-button @click="addArtcile">新增文章</el-button> -->
      <article-item
        v-for="item in articleList"
        :key="item.id"
        :article="item">
      </article-item>
    </div>
  </div>
</template>

<script>
import articleApi from '@/api/article'
import ArticleItem from './ArticleItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  data () {
    return {
      articleList: null,
      header: {
        maintitle: '文章列表',
        subtitle: '个人学习过程中总结的一些经验'
      }
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
    this.$store.commit('setHeader', this.header)
  }
}
</script>

<style scoped>

</style>
