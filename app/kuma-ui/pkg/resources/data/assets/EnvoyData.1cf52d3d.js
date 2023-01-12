import{d as y,ct as p,o as r,c as m,i as l,c1 as g,bP as i,h as d,bQ as h,c9 as c,w as _,a as v,k as E}from"./index.2d238a59.js";import{_ as N}from"./CodeBlock.vue_vue_type_style_index_0_lang.f5cf526a.js";import{_ as k}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.a51bf735.js";import{E as q}from"./ErrorBlock.6d694e33.js";import{_ as z}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.ccaabdfd.js";const P={key:3},S=y({__name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:[Error,p],required:!1,default:null}},setup(t){return(e,s)=>(r(),m("div",null,[t.isLoading?(r(),l(z,{key:0})):t.hasError?(r(),l(q,{key:1,error:t.error},null,8,["error"])):t.isEmpty?(r(),l(k,{key:2})):(r(),m("div",P,[g(e.$slots,"default")]))]))}}),I=y({__name:"EnvoyData",props:{dataPath:{type:String,required:!0},queryKey:{type:String,required:!1,default:null},mesh:{type:String,required:!1,default:""},dppName:{type:String,required:!1,default:""},zoneIngressName:{type:String,required:!1,default:""},zoneEgressName:{type:String,required:!1,default:""}},setup(t){const e=t,s=i(!0),o=i(void 0),u=i("");d(()=>e.dppName,function(){n()}),d(()=>e.zoneIngressName,function(){n()}),d(()=>e.zoneEgressName,function(){n()}),h(function(){n()});async function n(){o.value=void 0,s.value=!0;try{let a="";e.mesh!==""&&e.dppName!==""?a=await c.getDataplaneData({dataPath:e.dataPath,mesh:e.mesh,dppName:e.dppName}):e.zoneIngressName!==""?a=await c.getZoneIngressData({dataPath:e.dataPath,zoneIngressName:e.zoneIngressName}):e.zoneEgressName!==""&&(a=await c.getZoneEgressData({dataPath:e.dataPath,zoneEgressName:e.zoneEgressName})),u.value=typeof a=="string"?a:JSON.stringify(a,null,2)}catch(a){a instanceof Error?o.value=a:console.error(a)}finally{s.value=!1}}return(a,b)=>(r(),l(S,{class:"envoy-data","has-error":o.value!==void 0,"is-loading":s.value,error:o.value},{default:_(()=>{var f;return[v(N,{id:`code-block-${t.dataPath}`,language:"json",code:u.value,"is-searchable":"","query-key":(f=t.queryKey)!=null?f:`code-block-${t.dataPath}`},null,8,["id","code","query-key"])]}),_:1},8,["has-error","is-loading","error"]))}});const C=E(I,[["__scopeId","data-v-b9869c64"]]);export{C as E,S as _};
