<template>
  <div id="Head">
       <p>ele.me</p>
           


      
      <p> <img src="@/assets/logo.png" alt=""></p>
        
        

        
     
   



  </div>
</template>

<script>
export default {
    name:"Head",
    data(){
        return{
          
        }


    },
    methods:{


    }
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
#Head{
  display: flex;
  justify-content: space-between;

}
#Head img{
  margin-right: 13px;
  width: 16px;
  height: 16px;
  
}
#Head p:nth-of-type(1){
      color: white;
}

/* #Head p:nth-of-type(2){
    width: 550px;
    height: 20px;
    border: 1px solid;
} */
 
</style>