import{g as s,h as o}from"./index-36de37d0.js";import{S as r}from"./sweetalert2.all-cd586b9e.js";import{v as i}from"./vueLoadingStore-4d81d366.js";const{VITE_APP_URL:c,VITE_APP_PATH:n}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Barbecue/",MODE:"production",DEV:!1,PROD:!0},f=s("cart",{state:()=>({cart:[],qtyMaxStatus:!1}),actions:{getCarts(){const{showLoading:t,hideLoading:e}=i();t(),o.get(`${c}v2/api/${n}/cart`).then(a=>{this.cart=a.data.data,e()}).catch(a=>{r.fire({title:a.response.data.message,icon:"error",confirmButtonText:"OK"}),e()})},qtyMax(t){t===30?this.qtyMaxStatus=!0:this.qtyMaxStatus=!1}},getters:{}});export{f as c};
