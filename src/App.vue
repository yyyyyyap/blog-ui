<template>
  <div id="app">
    <el-container id="page-container">
      <el-header>
        <Nav></Nav>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style scoped>
  #page-container {
    max-width: 1400px;
    margin: 0 auto;
  }
  .el-header {
    padding: 0;
  }
  .el-aside {
    background-color: #003399;
  }
  .el-main {
    height: 1000px;
    background-color: #d5e9ee;
  }
  .el-footer {
    background-color: #6699CC;
  }
</style>>
