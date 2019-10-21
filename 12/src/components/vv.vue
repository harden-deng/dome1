<template>
  <div id="Vv">
     <h2>vvvvvvvv</h2>
     <h2> {{name}} </h2>
  </div>
</template>

<script>
export default {
     name:'Vv',
     data(){
         return{
           name:this.$route.query.idi
         }
     },
      mounted(){
        console.log(this.$route)
    },
}
</script>

<style scoped>

</style>