<template>
  <div id="sidebar-con">
    <!-- 显示博客的一些基本信息 -->
    <div id="sidebar-base">
      <el-avatar shape="square" :size="50" :src="iconUrl" class="icon"></el-avatar>
      <el-divider></el-divider>
      <p style="font-weight: bold">Yap</p>
      <p>hello world</p>
      <div id="statisticBar"><slot name="statistic"></slot></div>
    </div>
    <div id="sidebar-search">
      <div><slot name="category"></slot></div>
      <div><slot name="search"></slot></div>
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

<style lang="less">
  #sidebar-con {
    max-width: 300px;
    #sidebar-base {
      text-align:center;
      background-color: white;
      box-shadow: 1px 1px 1px #eee;
      margin: 0 auto;
      padding: 10px;
      p {
        margin: 5px;
      }
      .el-avatar {
        border: 1px solid #eee;
      }
      .el-divider--horizontal {
        margin: 5px 0;
      }
      .el-divider--vertical {
        height: 32px;
      }
      #statisticBar {
        display: flex;
        align-items:center;
        justify-content:space-evenly;
      }
    }

  }
</style>
