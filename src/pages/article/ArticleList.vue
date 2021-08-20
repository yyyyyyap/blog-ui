<template>
  <div>
    <el-button @click="addArtcile">新增文章</el-button>
    <el-row :gutter="20">
      <el-col :span="18" class="item-con">
        <article-item
          v-for="item in articleList"
          :key="item.id"
          :article="item">
        </article-item>
        <button @click="handlePrevious" v-show="offset >= limit" class="pre-btn">previous</button>
        <button @click="handleNext" v-show="offset + limit < articleAmount" class="next-btn">Next</button>
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
            <p style="font-weight: bold; margin: 5px 0px">近期创建文章</p>
            <ul @click="getDetail" class="article-list">
              <li v-for="item in latestList" :id="item.id" :key="item.id">
                {{ item.title }}
              </li>
            </ul>
          </template>
          <template slot="updatelist">
            <p style="font-weight: bold; margin: 5px 0px">近期更新文章</p>
            <ul @click="getUpdatedDetail" class="article-list">
              <li v-for="item in updatedList" :id="item.id" :key="item.id">
                {{ item.title }}
              </li>
            </ul>
          </template>
        </Sidebar>
      </el-col>
    </el-row>
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
      updatedList: null,
      offset: 0,
      limit: 5,
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
    },
    getUpdatedDetail (e) {
      let target = e.target
      console.log(target)
      let id = target.getAttribute('id')
      this.$router.push({ path: '/article/detail', query: { articleId: id } })
    },
    async handleNext () {
      this.offset += 5
      try {
        let {data} = await articleApi.getBatchArticle({
          offset: this.offset,
          limit: this.limit
        })
        this.articleList = data.data
        console.log(this.articleList)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      } catch (error) {
        console.error(error)
      }
    },
    async handlePrevious () {
      if (this.offset >= 5) {
        this.offset -= 5
        try {
          let {data} = await articleApi.getArticle({
            sortField: 'createdAt',
            isPos: 0,
            offset: this.offset,
            limit: this.limit
          })
          this.articleList = data.data
          console.log(this.articleList)
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  async created () {
    try {
      let {data} = await articleApi.getArticle({
        sortField: 'createdAt',
        isPos: 0,
        offset: this.offset,
        limit: this.limit
      })
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
      let {data} = await articleApi.getArticle({
        sortField: 'createdAt',
        isPos: 0,
        offset: 0,
        limit: 5
      })
      this.latestList = data.data
    } catch (error) {
      console.error(error)
    }
    try {
      let {data} = await articleApi.getArticle({
        sortField: 'updatedAt',
        isPos: 0,
        offset: 0,
        limit: 5
      })
      this.updatedList = data.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style lang="less" scoped>
  .item-con {
    .next-btn {
      float:right
    }
  }

  .article-list {
    margin: 0px;
    li{
      cursor: pointer;
      margin-bottom: 10px;
      list-style-type: decimal;
    }
    li:hover {
      color: rgba(102, 102, 102, 0.8);
      text-decoration: underline;
    }
  }
</style>
