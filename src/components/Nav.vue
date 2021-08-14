<template>
  <div id="navBar">
    <el-menu
      mode="horizontal"
      :router=true
      background-color="#6699CC"
      text-color="#ffffff"
      active-text-color="eeeeee"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <!-- <el-submenu index="/outcome">
        <template slot="title">成果</template>
        <el-menu-item index="/outcome/article">文章</el-menu-item>
        <el-menu-item index="/outcome/patent">专利</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="/article">文章</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      // activeIndex: '/home'
    }
  }
}
</script>

<style scoped>

</style>
