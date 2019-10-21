<template>
  <div id="Search">
      <div class="">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
         <el-button type="primary">主要按钮</el-button>
      </div>
     
  </div>
</template>

<script>
export default {
    name:"Search",
  data() {
    return {
      input: ''
     }
    }
}

</script>

<style scoped>

</style>

