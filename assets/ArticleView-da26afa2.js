import{_ as n,a as l,r as d,o as _,c as h,b as t,d as u,w as m,t as o,f as a}from"./index-36de37d0.js";import{S as p}from"./sweetalert2.all-cd586b9e.js";import{v as g}from"./vueLoadingStore-4d81d366.js";const{VITE_APP_URL:f,VITE_APP_PATH:L}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Barbecue/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{article:{},id:""}},methods:{...l(g,["showLoading","hideLoading"]),getArticle(){const i=`${f}v2/api/${L}/article/${this.id}`;this.showLoading(),this.$http.get(i).then(s=>{this.article=s.data.article,this.hideLoading()}).catch(s=>{p.fire({title:s.response.data.message,icon:"error",confirmButtonText:"OK"}),this.hideLoading()})},date(i){return new Date(i*1e3).toLocaleDateString()}},mounted(){this.id=this.$route.params.id,this.getArticle()}},v={class:"container py-3"},A={"aria-label":"breadcrumb"},P={class:"breadcrumb"},x={class:"breadcrumb-item"},T={class:"breadcrumb-item active","aria-current":"page"},V={class:"row justify-content-center"},w={class:"col-8"},E={class:"text-muted"},B={class:"text-muted"},D=["src"],R=["innerHTML"];function S(i,s,k,H,e,c){const r=d("RouterLink");return _(),h("div",v,[t("nav",A,[t("ol",P,[t("li",x,[u(r,{to:"/articles"},{default:m(()=>[a("最新消息")]),_:1})]),t("li",T,o(e.article.title),1)])]),t("div",V,[t("article",w,[t("h2",null,o(e.article.title),1),t("p",null,[t("small",E,o(c.date(e.article.create_at)),1),a(" - "),t("small",B,"作者："+o(e.article.author),1)]),t("img",{src:e.article.imageUrl,alt:"文章圖片",height:"500",class:"w-100 object-fit mb-3"},null,8,D),t("div",{innerHTML:e.article.content},null,8,R)])])])}const M=n(b,[["render",S]]);export{M as default};