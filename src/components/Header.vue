<template>
  <div id="headContainer">
    <el-row>
      <el-col :span="12">
        <p id="blogId">Yap-Blog</p>
      </el-col>
      <el-col :span="12">
        <el-menu
          id="menu-bar"
          :default-active="activeIndex"
          mode="horizontal"
          :router=true
          background-color="rgba(255, 255, 255, 0)"
          text-color="#666"
          active-text-color="#fff"
        >
          <el-menu-item index="/about">关于</el-menu-item>
          <el-menu-item index="/article">文章</el-menu-item>
          <el-menu-item index="/home">首页</el-menu-item>
          <!-- <el-submenu index="/outcome">
            <template slot="title">成果</template>
            <el-menu-item index="/outcome/article">文章</el-menu-item>
            <el-menu-item index="/outcome/patent">专利</el-menu-item>
          </el-submenu> -->
        </el-menu>
      </el-col>
    </el-row>
    <div id="head-content">
      <div id="head-category"><slot name="category"></slot></div>
      <div id="head-maintitle"><slot name="maintitle"></slot></div>
      <div id="head-subtitle"><slot name="subtitle"></slot></div>
      <div id="head-date"><slot name="date"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    handleMenuClick () {
      console.log(this.$route)
      console.log(this.activeIndex)
    }
  },
  created () {
    console.log(this.$route.path)
    this.activeIndex = this.$route.path
  }
}
</script>

<style scoped>
  #headContainer {
    background-color: #333;
    min-height: 300px;
    position: relative;
  }

  #blogId {
    font-weight: bold;
    margin: 0px;
    padding: 0 20px;
    line-height: 60px;
    color: #fff;
  }

  #menu-bar {
    padding: 0 20px;
    border-bottom: none;
  }

  #menu-bar li {
    float: right;
    width: 80px;
    padding: 0px;
    text-align: center;
  }

  #head-content {
    width: 500px;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #head-category {
    text-align: initial;
    border-radius: 5px;
    padding: 5px;
  }

  #head-category p{
    margin: 0px;
    text-decoration: underline;
  }

  #head-maintitle h1{
    margin: 0px;
  }

</style>
