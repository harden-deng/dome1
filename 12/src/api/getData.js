import { Request } from "../util/req"

export const gu = data => Request.getData({
    url:"/api/v1/cities?type=guess",
    method:"get",
    data,
})

export const ho = data => Request.getData({
    url:"/api/v1/cities?type=hot",
    method:"get",
    data,
})

export const gr = data => Request.getData({
    url:"/api/v1/cities?type=group",
    method:"get",
    data,
})


// s搜索
export const po = data =>Request.getData({
    url:"/api/v1/pois?type=search",
    method:"get",
    data,
})


// 路由传参 id
export const dt = data =>Request.getData({
    url:"/api/v1/cities/"+data,
    method:"get",
  
})


//经纬度 路由传参
export const jw = data =>Request.getData({
    url:"/api/v2/pois/"+data,
    method:"get",
  
})

//商铺
export const sw = data =>Request.getData({
    url:"/api/v2/index_entry",
    method:"get", 
    data,
})


//商家数据
export const sj = data =>Request.getData({
    url:"/api/shopping/restaurants",
    method:"get",
    data,
  
})

//我的
export const wwo = data =>Request.getData({
    url:"/api/v1/user",
    method:"get",
    data,
  
})

