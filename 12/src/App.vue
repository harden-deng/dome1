<template>
  <div id="app">
    <!-- <div class="head">
         
         <Header></Header>
    </div> -->
    <div class="box">
       <div class="content">
         <router-view/>
       </div>
    </div>

    <!-- <div class="footer">
         <ul>
           <li><router-link to="/">跳到hello1</router-link></li>
           <li><router-link to="/aa">外卖</router-link></li>
           <li><router-link to="/">3</router-link></li>
           <li><router-link to="/">4</router-link></li>
         </ul>
    </div> -->
  </div>
</template>

<script>
// import rem from '@/util/rem.js'
import Header from "./components/head.vue"
export default {
  name: 'App',
  
}
</script>

<style scoped>


/* .head{
  width: 100%;
  height: 45px;
  border: 1px solid;
  text-align: center;
  line-height: 45px;
   position: fixed;
  top: 0;
  background: blue;
} */
 .box{
   margin-top: 45px;

    height:100%; 
    overflow: hidden;
    flex-grow: 1;
 }
.content{
   min-height: 1001px;
   background: whitesmoke;
 }
.footer{
  width: 100%;
  height: 45px;
  border: 1px solid;
  position: fixed;
  bottom:0;
  background: chocolate;
 }
.footer ul{
  display: flex;
  justify-content: space-around;
}
a{
  text-decoration: none;
}

ul,li,ol,p,h1,h2,h3,h4,body{
    margin: 0;padding: 0;
}
ul,li{
    list-style: none;
}

body{
    font-size: 16px;
    
}
body,html{
    display: flex;
    flex-direction: column;
    height: 100%;
}

</style>
