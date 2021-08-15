<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <div class="category">{{article.category}}</div>
      <span>{{article.title}}</span>
    </div>
    <div>{{article.content}}</div>
    <el-button style="float: right; padding: 3px 0" type="text" @click="getDetail(article.id)">阅读全文</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDetail (id) {
      this.$router.push({ path: '/article/create', query: { articleId: id } })
    }
  }
}
</script>

<style scoped>
  .box-card {
    margin: 20px;
    position: relative;
  }

  .clearfix {
    text-align: center;
  }

  .category {
    position: absolute;
    left: 10px;
    top: 2px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
  }
</style>
