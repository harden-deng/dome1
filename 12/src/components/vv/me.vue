<template>
    <div id="Bom">

     <h4>我的</h4>

    </div>
</template>

<script>
import { wwo } from "@/api/getData"
export default {
   name:"Bom",
   data(){
      return{

      }
   },
   mounted(){
      this.wd();
   },
   methods:{
       async wd(){
           let res = await wwo ({ user_id:null })
           close.log(res)
       }
   }


}



</script>

<style scoped>



</style>