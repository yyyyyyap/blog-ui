<template>
  <div>
    <div>
      <el-button @click="addArtcile">新增文章</el-button>
      <el-row :gutter="20">
        <el-col :span="18" >
          <article-item
            v-for="item in articleList"
            :key="item.id"
            :article="item">
          </article-item>
        </el-col>
        <el-col :span="6">
          <Sidebar>
            <template slot="statistic">
              <div>文章数<br>{{articleAmount}}</div>
              <el-divider direction="vertical"></el-divider>
              <div>类别数<br>3</div>
            </template>
            <template slot="search">
              <el-input v-model="searchContent" placeholder="请输入内容" @keyup.enter.native ="handleSearch">
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
              </el-input>
            </template>
            <template slot="latestlist">
              <p style="font-weight: bold; margin: 5px 0px">近期文章：</p>
              <ul @click="getDetail">
                <li v-for="item in latestList" :id="item.id" :key="item.id">
                  {{ item.title }}
                </li>
              </ul>
            </template>
          </Sidebar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import articleApi from '@/api/article'
import ArticleItem from './ArticleItem'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
    Sidebar
  },
  data () {
    return {
      articleList: null,
      latestList: null,
      header: {
        maintitle: '文章列表',
        subtitle: '个人学习过程中总结的一些经验'
      },
      articleAmount: '',
      searchContent: ''
    }
  },
  methods: {
    addArtcile () {
      this.$router.push('/article/add')
    },
    async handleSearch () {
      try {
        let params = {
          title: this.searchContent,
          desc: ''
        }
        let {data} = await articleApi.searchArticle(params)
        if (data.data.length) {
          this.articleList = data.data
        }
      } catch (error) {
        console.error(error)
      }
    },
    getDetail (e) {
      let target = e.target
      console.log(target)
      let id = target.getAttribute('id')
      this.$router.push({ path: '/article/detail', query: { articleId: id } })
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
    try {
      let {data} = await articleApi.getArticleAmount()
      this.articleAmount = data.data
    } catch (error) {
      console.error(error)
    }
    try {
      let {data} = await articleApi.getBatchArticle({
        offset: 0,
        limit: 5
      })
      this.latestList = data.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>

</style>
