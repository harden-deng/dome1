<template>
  <div id="Restaurant">

       <div id="heada">
          <p>＜</p>
          <p class="qa">{{this.title}}</p>
          <p><router-link to="/">切换城市</router-link></p>
        </div>
       

       <div class="num-tow">
            <div class="zhong">
                 <p>
                   <select>
                     <option value="volvo">美食</option>
                     <option value="saab"></option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                   </select>
                 </p>
                 <p>
                    <select>
                     <option value="volvo">排序</option>
                     <option value="saab"><i class="el-icon-edit">11</i>智能排序</option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                   </select>
                 </p> 
                 <p>
                    <select>
                      <option value="volvo">筛选</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                 </p>
            </div>



          <div class="sjs">
           <i class="el-icon-ice-tea"></i>
           <span>附近的商家</span>
          </div>
          <ul>
            <li v-for="(item,index) in v" :key="index">
                    <div class="img" @click="shop()">

                      <img :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">

                    </div> 
                   <div class="sjright">
                        <section class="shang">
                           <h4>
                             <mark>品牌</mark>
                             <span>{{item.name}}</span>
                           </h4>
                           <div class="bao">
                                <span>{{item.supports[0].icon_name}}</span>
                                <span>{{item.supports[1].icon_name}}</span>
                                <span>{{item.supports[1].icon_name}}</span>
                           </div>
                        </section>
                        <section class="zhong">
                           <div class="zzhong">
                               <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}"
                                >
                               </el-rate>
                               <span>
                                   月销{{item.recent_order_num}}单
                               </span>

                    
                           </div>
                        </section>
                   </div>
            </li>
          </ul>
     </div>


  </div>
</template>

<script>
import { jw,sj } from "@/api/getData"
export default {
   name:'Food',
   data(){
      return{
        geohash:"",
        v: [],
        title:"",
        num:"",
      }
   },
   mounted(){
      this.nuu();
   },
  methods:{

    async nuu(){

        //  var title=this.$route.query.title;

        //  console.log(title)
        //  this.title=title;

        //-----传参
      let geohash = this.$route.query.geohash;
      this.geohash = geohash
      console.log(geohash)
       //----------------------------------
      //获去--    
      let res = await jw (geohash);
      console.log(res)
      console.log(res.data.latitude);
      console.log(res.data.longitude);
      

      //商家数据

      let d = await sj({
           latitude: res.data.latitude,
           longitude: res.data.longitude
      })
      console.log(d)
      this.v = d.data;
    },

    shop(){       
      this.$router.push({path:"/shop",query:{geohash:this.geohash}})
    }

   
      
  },



}
</script>

<style scoped>
*{
  margin: 0;padding: 0;
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

.sjs{
  width: 98%;
  height: 60px;
  border: 1px solid gray;
  line-height: 60px;
}


.num-tow ul{
   border: 1px solid blueviolet;
   width: 100%;
   height: auto;
}
.num-tow ul li{
  width: 100%;
  height: 217px;
  border: 1px solid red;
  display: flex;
}

.img{
  width: 29%;
  height: 212px;
  border: 1px solid;
}
.img img{
  width: 133px;
  height: 138px;
  display: block;
  margin: 0 auto;
  margin-top:13px;
}

.shang{
  display: block;
  width: 399px;
  height: 53px;
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;


}
.shang h4{
  line-height: 53px;
}
.bao{
  /* border: 1px solid; */
  line-height: 53px;
}
.bao span{
  border: 1px solid gray;
  border-radius: 5px;
}

.zhong{
   width: 98%;
   height: 40px;
   border: 1px solid;
   display: flex;
   justify-content:space-around; 
}
.zhong  p{
  width: 30%;
  border: 1px solid;
  align-items: center;
  line-height: 39px;
}

.zhong  p select{
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}


</style>