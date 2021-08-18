<template>
  <div id="sidebar-con">
    <!-- 显示博客的一些基本信息 -->
    <div id="sheetCon">
      <el-avatar :size="80" :src="iconUrl" class="icon"></el-avatar>
      <p>Yap</p>
      <p>hello world</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      iconUrl: 'https://raw.githubusercontent.com/yyyyyyap/MarkdownPhoto/master/front-end/alternate-box-model.png'
    }
  }
}
</script>

<style>
  #sidebar-con {
    text-align:center;
    max-width: 300px;
    margin: 0 auto;
    background-color: white;
  }
</style>
