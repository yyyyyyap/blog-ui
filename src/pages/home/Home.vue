<template>
  <div id="homeContainer">
    <div id="web_bg" :style="{backgroundImage:`url(${bg_img})`}"></div>
    <div id="menuBar">
      <router-item v-for="item in routeRules" :key="item.index" :routeRule="item">
      </router-item>
    </div>
  </div>
</template>

<script>
import RouterItem from './RouteItem'

export default {
  name: 'Home',
  components: {
    RouterItem
  },
  data () {
    return {
      bg_img: require('@/assets/img/bg.jpeg'),
      routeRules: [
        {
          index: 1,
          category: 'Article',
          url: '/article'
        }, {
          index: 2,
          category: 'About',
          url: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
  #web_bg {
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
  #menuBar {
    display: flex;
    position: fixed;
    bottom: 50px;
    width: 60%;
    left: 50%;
    transform: translateX(-50%)
  }
</style>
