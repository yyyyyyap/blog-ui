<template>
  <div id="headContainer">
    <el-row>
      <el-col :span="12">
        <p id="blogId">Yap</p>
      </el-col>
      <el-col :span="12">
        <el-menu
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
    <div id="head-category"><slot name="category"></slot></div>
    <div id="head-maintitle"><slot name="maintitle"></slot></div>
    <div id="head-subtitle"><slot name="subtitle"></slot></div>
    <div id="head-date"><slot name="date"></slot></div>
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
  }

  #blogId {
    margin: 0px;
    padding: 0 20px;
    line-height: 60px;
    color: #fff;
  }

  .el-menu--horizontal {
    padding: 0 20px;
    border-bottom: none;
  }

  .el-menu--horizontal li {
    float: right;
    width: 15%;
    text-align: center;
  }

  #head-maintitle {
    text-align: center;
    color: #fff;
    margin-top: 50px;
  }
</style>
