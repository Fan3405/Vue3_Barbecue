import{g as o,j as i}from"./index-7aefdcdf.js";const a=o("vueLoading",{state:()=>({loading:{},loader:null,loadingCount:0}),actions:{showLoading(){this.loadingCount===0&&(this.loading=i.useLoading({container:this.fullPage,canCancel:!1,onCancel:this.onCancel,loader:"dots",width:100,height:100,color:"gray"}),this.loader=this.loading.show()),this.loadingCount+=1},hideLoading(){this.loadingCount-=1,this.loadingCount===0&&this.loader.hide()}},getters:{}});export{a as v};
