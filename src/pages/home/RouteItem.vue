<template>
  <button id="itemContainer" @click="handleLinkClick">
    <p>{{routeRule.category}}</p>
  </button>
</template>

<script>
export default {
  name: 'RouterItem',
  data () {
    return {
    }
  },
  props: {
    routeRule: {
      required: true,
      type: Object
    }
  },
  methods: {
    handleLinkClick () {
      this.$router.push(this.routeRule.url)
    }
  }
}
</script>

<style scoped>
  #itemContainer {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    border: 0;
    width: 80px;
    height: 80px;
    box-shadow: inset 0 0 0 2px #666;
    color: #666;
    font-size: 18px;
    background: none;
    cursor: pointer;
  }

  #itemContainer::before, button::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  }

  #itemContainer:hover {
    color: #fff;
  }

  #itemContainer::before, #itemContainer::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
            transform-origin: center;
  }
  #itemContainer::before {
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    -webkit-transform: scale3d(0, 1, 1);
            transform: scale3d(0, 1, 1);
  }
  #itemContainer::after {
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
    -webkit-transform: scale3d(1, 0, 1);
            transform: scale3d(1, 0, 1);
  }
  #itemContainer:hover::before, #itemContainer:hover::after {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
  }

</style>
