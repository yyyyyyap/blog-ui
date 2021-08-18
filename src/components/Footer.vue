<template>
  <div id="footContainer">
    <el-row>
      <el-col :span="24" :offset="0"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  #footContainer {
    background-color: #333;
    min-height: 150px;
  }
</style>
