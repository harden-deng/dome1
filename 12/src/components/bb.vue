<template>
  <div id="Bb">
      <div id="heada">
          <p>＜</p>
          <p class="qa">{{this.ee.name}}</p>
          <p><router-link to="/">切换城市</router-link></p>
      </div>
  
       
       <div class="city-one">
         <el-input placeholder="输入学习、商务楼、地址"  v-model="input" clearable></el-input>
         <el-button type="primary" @click="ente()">提交</el-button>
      </div>
    <ul>
      <li v-for="(item,key) in cit" :key="key">
        <router-link :to="'/aa/aom/'+item.geohash" tag="div">
          <p class="p1">{{item.name}}</p>
          <p class="p2">{{item.address}}</p>
        </router-link>
      </li>
    </ul>



  </div>
</template>

<script>

import { dt,po } from "@/api/getData"

export default {
    name:'Bb',
    data(){
       return{
            ee:[],
            cit:[],
            input:"",
       }
    },
    components:{
      //  S olt
    },
    mounted(){
         this.dd();
    },
    methods:{
      //     enter($event){
      //   if(e.keyCode == 13){
      //       axios.get(`http://elm.cangdu.org/v1/pois?type=search&hot_id=${this.props.match.params.id}&keyword=${e.target.value}`).then((res)=>{
      //             console.log(res)
      //             this.list=res.data;
      //             console.log(this.list)
      //       })
      //   }
      // },

      //标题
      async dd(){
           let id= this.$route.params.id;
           console.log(id)

           let res = await dt(id)
           console.log(res)
           this.ee=res.data;
      },
      //提交
      async ente(){
        let id= this.$route.params.id;

        let res = await po({city_id:id,keyword:this.input});
        console.log(res)
        this.cit=res.data;
      }



    },
   
    


}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.city-one{
  margin-top: 23px;
  width: 100%;
  height: 120px;
  border: 1px solid;

}
 .el-input {
      width: 88%;
      color: #333;
      margin-bottom: 0.2rem;
      margin-left: 20px;
    }
 .el-button {
      width: 88%;
     margin-left: 20px;
   }

#heada{
   width: 98%;
   height: 40px;
   border: 1px solid;
   line-height: 40px;
   position: fixed;
   top: 0;
   background:#3190e8;
   display: flex;
   justify-content: space-between; 
}
 .qa{
   margin: 0 auto;
  /* width: 120px;
  height: 20px;
  border: 1px solid; */
   }



  


    .p1 {
        width: 90%;
        color: #333;
      }
      .p2 {
        width: 90%;
        color: #999;
        font-size: 12px;
        overflow: hidden;
      }

</style>