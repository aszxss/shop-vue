import requests from "./request";



export const reqCatgoryList = ()=>{
   return requests({url:'/product/getBaseCategoryList',method:'get'})
}