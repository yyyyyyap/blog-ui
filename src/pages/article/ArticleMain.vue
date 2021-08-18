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
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'ArticleMain',
  components: {
    Header
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

</style>
