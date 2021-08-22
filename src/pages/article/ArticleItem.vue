<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="head">
      <div class="categoryCon"></div>
      <p class="category">{{article.category}}</p>
      <h3 class="title">{{article.title}}</h3>
    </div>
    <div>{{article.desc}}</div>
    <div class="time"><span>{{article.createdAt}}</span><span>{{article.updatedAt}}</span></div>
    <el-button type="text" class="detailBtn" @click="getDetail(article.id)">阅读全文</el-button>
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
      this.$router.push({ path: '/article/detail', query: { articleId: id } })
    }
  }
}
</script>

<style lang="less" scoped>
  .box-card {
    margin-bottom: 20px;
    position: relative;
    .head {
      text-align: center;
      font-weight: bold;
      .categoryCon {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        border-top: 30px solid transparent;
        border-left: 60px solid #666;
        border-bottom: 30px solid transparent;
      }
      .title {
        margin: 0px;
      }
      .category {
        position: absolute;
        left: 5px;
        top: 2px;
        color: white;
      }
    }
    .detailBtn {
      float: right;
      margin: 10px 0;
      color: #000
    }
    .detailBtn:hover {
      color: rgba(102, 102, 102, 0.6);
    }
  }

</style>
