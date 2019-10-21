<template>
  <div class="nn">
       <div id="heada">
          <p>＜</p>
          <p class="qa">{{this.num.name}}</p>
          <p><router-link to="/">切换城市</router-link></p>
       </div>
     <!-- <div class="hee">
      <swiper :options="swiperOption" class="lunbo">
        <swiper-slide v-for="(v,i) in ee" :key="i">
             <img  :src="'https://fuss10.elemecdn.com/'+v.image_url" alt=""  />
             <p>{{v.title}}</p>
        </swiper-slide>
        
      </swiper>
       <div id="spp" class="swiper-pagination" slot="pagination"></div>

     </div> -->

     <!-- <div class="num-tow">
          <div class="sjs">
           <i class="el-icon-ice-tea"></i>
           <span>附近的商家</span>
          </div>
          <ul>
            <li v-for="(item,index) in v" :key="index">
                    <div class="img">
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

     </div> -->
     
        <router-view/>

      <div class="footer">
         <ul>
           <li><router-link to="/aa/aom">外卖</router-link></li>
           <li><router-link to="/aa/search">搜索</router-link></li>
           <li><router-link to="/aa/order">订单</router-link></li>
           <li><router-link to="/aa/me">我的</router-link></li>
         </ul>
    </div>
    
  </div>
</template>

<script>

import { jw,sj,sw } from "@/api/getData"
import axios from "axios"
export default {
  name: 'Aa',
  data () {
    return {
       ee:[],
       num:"",
       v:[],
       value:3.7,
    swiperOption: {
　　   pagination: {
　　　  　el: '.swiper-pagination',
　　　  　clickable: true // 允许点击小圆点跳转
　　   },
　　   autoplay: {
　　　　   delay: 3000,
　　　　   disableOnInteraction: false // 手动切换之后继续自动轮播
　　   },
　　   loop: true,
       slidesPerColumn:2,
       slidesPerView:4,
       slidesPerGroup:8,

// 　  　 navigation: {
// 　　　  　nextEl: '.swiper-button-next',
// 　　　　  prevEl: '.swiper-button-prev'
// 　　   }
     }, 
    }
  },
  mounted(){
    //n
    // axios.get("http://elm.cangdu.org/v2/pois/45.761089,126.631908").then((res)=>{
    //     console.log(res.data)
    //     this.nn=res.data.name
    // })

    //n
    //  axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((res)=>{
    //     console.log(res.data)
    //    this.n=res.data
    // })
   this.nu();
   this.may();
  },

  methods:{
    async nu(){
      //经纬度
      let geohash = this.$route.params.geohash;

      let res = await jw (geohash)
      console.log(res.data.latitude);
      console.log(res.data.longitude);
      this.num = res.data;

      //商家数据
      let d = await sj({
           latitude: res.data.latitude,
           longitude: res.data.longitude
      })
      console.log(d)
      this.v = d.data;
    },
    async may(){
       let res = await sw({});
       console.log(res)
       this.ee = res.data;
    }
      
  },

}

</script>


<style>
*{
  margin: 0;
  padding: 0;
  
}
ul li{
  list-style-type: none;
}
.nn{
  width: 100%;
}
.hee{
  width: 100%;
  height: 280px;
  border: 1px solid red;
  background: #fff;
  padding-top:10px;

}
.lunbo{
  border: 1px solid yellowgreen;
  justify-content: space-around;
}
.lunbo p{
  margin-left: 26px;
}

.lunbo img{
   width: 100px;
   height: 100px;
   margin-left: 16px;
}

#spp{
  margin: 0 auto;
  /* position: absolute; */
  left: 300px;
}

/* ------ */
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








.footer{
  width: 100%;
  height: 45px;
  border: 1px solid;
  position: fixed;
  bottom:0;
  background:white;
 }
.footer ul{
  display: flex;
  justify-content: space-around;
}
a{
  text-decoration: none;
}

</style>
