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
    <div id="contentContainer">
      <router-view></router-view>
    </div>
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

<style lang="less" scoped>
  #contentContainer {
    margin: 0 auto;
    max-width: 1400px;
    min-height: 500px;
    margin-left: 0px;
    margin-right: 0px;
    margin: 0 auto;
    padding: 1% 3%;
  }
</style>
