<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-main>
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      article: {
        title: '',
        author: '',
        content: '',
        category: ''
      }
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: gold;
  }
  .el-main {
    height: 500px;
    background-color: goldenrod;
  }
  .el-footer {
    background-color: greenyellow;
  }
</style>
