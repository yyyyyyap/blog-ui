<template>
  <div>
    <Header>
      <template v-slot:category>
        <p>{{$store.state.headerContent.category}}</p>
      </template>
      <template v-slot:maintitle>
        <h1>{{$store.state.headerContent.maintitle}}</h1>
      </template>
      <template v-slot:subtitle>
        <p>{{$store.state.headerContent.subtitle}}</p>
      </template>
      <template v-slot:date>
        <p>{{$store.state.headerContent.date}}</p>
      </template>
    </Header>
    <el-row id="contentContainer" style="margin: 0 auto;" :gutter="20">
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
      <el-col :span="4">
        <Sidebar></Sidebar>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'ArticleMain',
  components: {
    Header,
    Footer,
    Sidebar
  },
  data () {
    return {
    }
  },
  methods: {
  },
  async created () {
  }
}
</script>

<style scoped>
  #contentContainer {
    max-width: 1600px;
    min-height: 500px;
    margin-left: 0px;
    margin-right: 0px;
    margin: 0 auto;
    padding: 1% 3%;
  }
</style>
