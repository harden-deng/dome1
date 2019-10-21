<template>
  <div id="Shop">
         <div id="heada">
            <p>商品</p>
            <p><router-link to="/">评价</router-link></p>
         </div>
         <div class="box">
            <div class="left">
               <ul v-for="(v,index) in shopp" :key="index">
                 <li>{{v.name}}</li>
               </ul>
            </div>
            <div class="right">
              <ol>
                <li v-for="(v,i) in shopp" :key="i">
                      <div>
                        <h4><span>{{v.name}}</span> <span>{{v.description}}</span></h4>
                      </div>

                      <div class="dl" v-for="(item,inde) in v.foods " :key="inde">
                         
                         <div>
                           <p class="lelel">
                           <img :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">
                           </p>
                            <div class="riri">
                                 <h3>{{item.name}}</h3>
                                 <p>{{item.description}}</p>
                                 <p>月售{{item.month_sales}}份 好评率{{item.satisfy_rate}}</p>
                                
                                 <div class="price">
                                      <div><span>￥</span>20<span>起</span></div>
                                      <!-- <i class="el-icon-circie-plus">

                                      </i>   -->
                                      <button @click="jia()">+</button>

                                      <button @click="jian()">-</button>


                                         <!-- <button @click="jia(index)">+</button>
                                           {{item.shu}}
                                         <button @click="jian(index)">-</button> -->
                                 </div>
                            </div>
                        </div>
                         
                      </div>
                </li>

              </ol>
             </div>
         </div>

        <div class="footer">
          <div class="qleft">
                <!-- <img src="@/assets/123wer.jpg" alt=""> -->
                <!-- <span class="span" :class="{span_:this.num!=0}"> -->
                <div class="plele">  
                 <i class="el-icon-shopping-cart-2">
                  
                </i>
                <span v-show="num"> {{this.shu}}</span> 
             
              </div>
               <dl>
                  <dd>$<a ref="price">0.00</a></dd>
                  <dd>配送费5元</dd>
               </dl>

          </div>

          
         <div class="qright" v-if="this.shu==0">
            <!-- <i class="el-icon-shopping-cart-2"></i> -->
            <p class="pp1" >还相差#20起送</p>
            <!-- <p class="pp2" v-if="this.num!=0">去结算</p> -->

         </div>

        <div class="qright2" v-if="this.shu!==0">
            <!-- <i class="el-icon-shopping-cart-2"></i> -->
            <p class="pp1" >去结算</p>
            <!-- <p class="pp2" v-if="this.num!=0">去结算</p> -->

        </div>







    </div>
  </div>
</template>

<script>
export default {
    name:"Shop",
    data(){
      return{
          shopp:[],
          fage:false,
          shu:0,
          num:true,

      }
    },
    mounted(){
           this.axios.get("http://elm.cangdu.org/shopping/v2/menu?restaurant_id=1").then(res=>{
               console.log(res)
               this.shopp=res.data
               console.log(this.shopp)
           })
    },
    methods:{
       jia(){
            this.shu++;
           this.$refs.price.innerHTML=20*this.shu+".00"
             this.num=true
       },
       jian(){

         this.shu--;
         if(this.shu<1){
              this.shu=0
              this.num=false


         }
       }

       },
       //计算价格
      
    
   }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.el-icon-shopping-cart-2{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid;
    background: white;
    font-size: 27px;
    position: absolute;
    line-height: 60px;
    align-items: center;
    text-align: center;
    bottom: 10px;
    left: 12px;
    }

dl{
  right: 0;
  float: right;
  width: 100px;
  height: 61px;
  border: 1px solid;
}
dl dd{
  /* background: white; */
  color: white;
}


  #heada{
   width: 98%;
   height: 40px;
   border: 1px solid;
   line-height: 40px;
   position: fixed;
   top: 0;
   background:white;
   display: flex;
   justify-content: space-around; 
   }
   .qa{
     margin: 0 auto;
     /* width: 120px;
     height: 20px;
     border: 1px solid; */
   }
#heada p:hover{
  border-bottom: 2px solid blue;
}
#heada p a{
  text-decoration: none;
  color: #222;
}

.box{
  display: flex;
}


.left{
  width: 30%;
  height: auto;
  border: 1px solid;
  overflow: hidden;
}

.right{
  width: 70%;
  height: 614px;
  border: 1px solid;
}
.dl>div{
    width: 98%;
    height: 236px;
    border: 1px solid red;
    display: flex;
}
.lelel{
  width: 25%;
  height: 209px;
  border: 1px solid blue;
}

.lelel img{
    margin-top: 10px;
}

.dl img{
   width: 76px;
   height: 82px;
}

.riri{
  width: 85%;
  height: 209px;
  border: 1px solid;
}


/* .right ul li{
    width: 98%;
    height: 236px;
    border: 1px solid red;
    display: flex;

}

.lele{
    width: 15%;
    height: 235px;
    border: 1px solid;

}
.riri{
    width: 85%;
    height:  235px;
    border: 1px solid goldenrod;


} */

.footer{
  width: 97%;
  height: 45px;
  display: flex;
  border: 1px solid;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background: #3d3d3f;


}

/* .footer ul{
     display: flex;
     justify-content: space-around;
  } */

 .qleft{
     width: 45%;
     height: 85px;
     border: 1px solid blue;
 }

.qleft span{
      position: absolute;
      left:60px;
      bottom: 55px;
      color: white;
      display: block;
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: red;
      line-height: 19px;
      text-align: center;
      
}


 .qright{
     width: 40%;
     height: 84px;
     border: 1px solid gray;
     background: #535356;
 }
 .qright2{
     width: 40%;
     height: 84px;
     border: 1px solid gray;
     background:rgb(107, 121, 86);
     color: aliceblue;
 }
 .pp1{
          /* width: 106px;
          height: 61px;
          border: 1px solid red; */
           line-height: 40px;
           text-align: center;
           /* color: white; */
         } 

</style>
