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
        <el-button @click="handlePrevious" :disabled="offset < limit" class="pre-btn">previous</el-button>
        <el-button @click="handleNext" :disabled="offset + limit >= articleAmount" class="next-btn">Next</el-button>
      </el-col>
      <el-col :span="6">
        <Sidebar>
          <template slot="statistic">
            <div>文章数<br>{{articleAmount}}</div>
            <el-divider direction="vertical"></el-divider>
            <div>总类别数<br>3</div>
          </template>
          <template slot="search">
            <el-radio-group v-model="searchType" size="small" fill="#666">
              <el-radio-button v-model="searchType" label="1">按标题搜索</el-radio-button>
              <el-radio-button v-model="searchType" label="2">按简介搜索</el-radio-button>
            </el-radio-group>
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
            <ul @click="getDetail" class="article-list">
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
      searchType: '1',
      searchTitle: '',
      searchDesc: '',
      header: {
        maintitle: '文章列表',
        subtitle: '个人学习过程中总结的一些经验'
      },
      totalAmount: '',
      articleAmount: '',
      searchContent: ''
    }
  },
  methods: {
    addArtcile () {
      this.$router.push('/article/add')
    },
    async handleSearch () {
      this.searchTitle = this.searchType === '1' ? this.searchContent : ''
      this.searchDesc = this.searchType === '2' ? this.searchContent : ''
      this.offset = 0
      this.limit = 5
      try {
        let {data} = await articleApi.getArticleAmount({
          title: this.searchTitle,
          desc: this.searchDesc
        })
        this.articleAmount = data.data
      } catch (error) {
        console.error(error)
      }
      try {
        let {data} = await articleApi.getArticle({
          sortField: 'createdAt',
          isPos: 0,
          offset: this.offset,
          limit: this.limit,
          title: this.searchTitle,
          desc: this.searchDesc
        })
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
    async handleNext (e) {
      this.offset += 5
      try {
        let {data} = await articleApi.getArticle({
          sortField: 'createdAt',
          isPos: 0,
          offset: this.offset,
          limit: this.limit,
          title: this.searchTitle,
          desc: this.searchDesc
        })
        this.articleList = data.data
        console.log(this.articleList)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      } catch (error) {
        console.error(error)
      }
      let target = e.target
      if (target.nodeName === 'SPAN') {
        target = e.target.parentNode
      }
      target.blur()
    },
    async handlePrevious (e) {
      if (this.offset >= 5) {
        this.offset -= 5
        try {
          let {data} = await articleApi.getArticle({
            sortField: 'createdAt',
            isPos: 0,
            offset: this.offset,
            limit: this.limit,
            title: this.searchTitle,
            desc: this.searchDesc
          })
          this.articleList = data.data
          console.log(this.articleList)
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        } catch (error) {
          console.error(error)
        }
      }
      let target = e.target
      if (target.nodeName === 'SPAN') {
        target = e.target.parentNode
      }
      target.blur()
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

    try {
      let {data} = await articleApi.getArticleAmount()
      this.totalAmount = data.data
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
  },
  activated () {
    this.$store.commit('setHeader', this.header)
  }
}
</script>

<style lang="less" scoped>
  .item-con {
    button:hover {
      color: white;
      background: #666;
    }
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

<style lang="less">
  .el-input__inner:focus {
    border-color: #666;
  }

  .el-radio-group {
    margin-bottom: 10px;
  }
  .el-radio-button__inner:hover {
    color: #000;
  }
</style>
