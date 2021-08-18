<template>
  <div>
    <div id="web_bg" :style="{backgroundImage:`url(${bg_img})`}"></div>
    <div id="titleCon">
      <p id="title">Yap's Blog</p>
    </div>
    <div id="briefCon">
      <p id="motto">Console.log('hello world')</p>
    </div>
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

  #titleCon {
    color: #666;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
  }

  #briefCon {
    color: #666;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }

  #title {
    font-weight: bold;
    border-right: 2px solid rgba(255, 255, 255, 0);
    font-size: 500%; /* 字体大小 */
    font-family: 'Courier New'; /* 等宽字体 */
    text-align: center; /* 文字横向居中 */
    white-space: nowrap; /* 文字不换行 */
    overflow: hidden; /* 多余的文字内容隐藏 */
    animation: borders 0.7s 3 normal,
      widths 2s steps(10); /* 重点 steps() */
  }

  #motto {
    border-right: 2px solid rgba(255, 255, 255, 0);
    font-size: 200%; /* 字体大小 */
    font-family: 'Courier New'; /* 等宽字体 */
    text-align: center; /* 文字横向居中 */
    white-space: nowrap; /* 文字不换行 */
    overflow: hidden; /* 多余的文字内容隐藏 */
    animation: appear 2s steps(1),
      borders 0.7s 5 2s normal,
      widths 3s steps(26) 2s; /* 重点 steps() */
  }

  #menuBar {
    display: flex;
    position: absolute;
    bottom: 5%;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    border-top: 2px solid #666;
    border-bottom: 2px solid #666;
    padding: 20px 0;
  }

  @keyframes appear {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  /* 边框闪烁动画 模拟指针闪烁 */
  @keyframes borders {
    from {border-right-color: rgba(255, 255, 255, 1);}
    to {border-right-color: rgba(255, 255, 255, 0);}
  }
  /* 容器宽的改变动画 */
  @keyframes widths {
    from {width: 0;}
    to {width: 100%;} /* 也可以是固定宽 */
  }
</style>
