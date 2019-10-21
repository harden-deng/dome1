<template>
  <div class="hello">
     <div class="head">
         
         <Header></Header>
    </div>
    

     <!-- <ul>
        <li><router-link to="/?type=guess">定位城市</router-link></li>
        <li><router-link to="/?type=hot">热门城市</router-link></li>
        <li><router-link to="/?type=group">工作</router-link></li>
        <li><router-link to="/aa">跳到aa</router-link></li>
      </ul> -->

      <h2>定位城市</h2>
      <!-- 在<router-link to="path/参数值/参数值"> -->
       <div class="bgu"><router-link :to="'/bb/'+guessCityid">{{guessCity}}</router-link></div>
     <div class="bhot">
      <h2>热门城市</h2>
      <div class="hot">
       <ul  v-for="(item,index) in hotcity" :key="index">
             <li><router-link :to="'/bb/'+item.id">{{item.name}}</router-link></li>
       </ul>
       </div>
     </div>
       
       <div class="bgroup">
          <div class="agro" v-for="(v,i) in  Object.keys(groupcity).sort()" :key="i">
             <h4><router-link to="/bb">{{v}}</router-link></h4>

            <div class="dia">
               <ul v-for="(vv,ii) in  groupcity[v]" :key="ii">
                 <li><router-link :to="'/bb/'+vv.id">{{vv.name}}</router-link></li>
               </ul>
            </div>
          </div>
       </div>



  </div>
</template>

<script>

import { gu,ho,gr } from "../api/getData"
import Header from "./head.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      guessCity: '', 
      guessCityid: '',
      hotcity:[],
      groupcity: {},
  

    }
  },
  components:{
      Header
  },
  mounted(){

          this.getGuess(),
          this.getHot(),
          this.getGroup()
    
        //  let good=this.$route.query.type;
        //  this.axios.get("http://elm.cangdu.org/v1/cities?type=guess").then((res)=>{
        //    console.log(6666655555)
        //        console.log(res)
        //        this.list=res.data;
        //        console.log(this.list)
        //  })

        //   this.axios.get("http://elm.cangdu.org/v1/cities?type=hot").then((res)=>{
        //    console.log(666666)
        //        console.log(res)
        //        this.hot=res.data;
        //        console.log(this.hot)
        //  })

        //    this.axios.get("http://elm.cangdu.org/v1/cities?type=group").then((res)=>{
        //    console.log(666666)
        //        console.log(res)
        //        this.group=res.data;
        //        console.log(this.group)
        //  })
  },
  methods:{
     async getGuess(){
       const res = await gu({  })

               console.log(res)
                this.guessCity=res.data.name;
                this.guessCityid=res.data.id
               
     },
      async getHot(){
       const res = await ho({  })
               console.log(res)
             this.hotcity=res.data;     
     },
      async getGroup(){
       const res = await gr({  })

               console.log(res)
             this.groupcity=res.data;
               
     },
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.head{
  width: 98%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  position: fixed;
  top: 0;
  background:#3190e8;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
  list-style: none;
  text-decoration: none;
}
.bgu a{
   color:#449aea;
}
.bhot{
  margin-top: 10px;
  border: 1px solid;
  background: white;
}
.bhot h2{
  color: #676767;
}
.hot{
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid; */

  /* justify-content: center; */
   /* justify-content: space-around; */
   box-sizing: border-box;
}
.hot ul{
   text-align: center;    
     width: 24.5%; 
     height: 30px;
     border: 1px solid gray;
     /* padding: 5px 0px; */
}
.hot ul li a{
  color:#449aea;
  line-height: 30px;
}

/* .bgroup{ */
  /* border: 1px solid; */
/* } */
.agro{
  border: 1px solid gray ;
    border-top: 2px solid gray;
    margin-top: 10px;
    background: white;
}
.agro h4 a{
  color: #6e6e6e;
}


.dia{
  display: flex;
  flex-wrap: wrap;
  
   margin-top: 6px;
  /* justify-content: space-around; */
}
.dia ul{
  text-align: center;
  width: 24.55%;
  height: 20px;
  line-height: 20px;
  border: 1px solid gray;
}
.dia ul li a{
  color: #6e6e6e;

}
</style>
