import{d as _,u as d,r as i,v as u,o,j as c,b as l,g as k}from"./index-db096db9.js";import{_ as w}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-b580fda1.js";import{_ as z}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-8bb600e3.js";import{E as h}from"./ErrorBlock-b74653c5.js";import{_ as y}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5f979512.js";import{u as g}from"./store-37ce95a4.js";import{u as B}from"./index-e12d6bed.js";import"./kongponents.es-34b4eee7.js";import"./AccordionList-4db69613.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-e7868d19.js";import"./DefinitionListItem-228ec8df.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-89f4c97f.js";import"./TabsWidget-45eca158.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-974dc861.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-0e046911.js";const E={class:"zone-details"},$={key:3,class:"kcard-border"},H=_({__name:"ZoneDetailView",setup(b){const p=B(),e=d(),f=g(),r=i(null),n=i(!0),a=i(null);u(()=>e.params.mesh,function(){e.name==="zone-detail-view"&&s()}),u(()=>e.params.name,function(){e.name==="zone-detail-view"&&s()}),v();function v(){f.dispatch("updatePageTitle",e.params.zone),s()}async function s(){n.value=!0,a.value=null;const m=e.params.zone;try{r.value=await p.getZoneOverview({name:m})}catch(t){r.value=null,t instanceof Error?a.value=t:console.error(t)}finally{n.value=!1}}return(m,t)=>(o(),c("div",E,[n.value?(o(),l(y,{key:0})):a.value!==null?(o(),l(h,{key:1,error:a.value},null,8,["error"])):r.value===null?(o(),l(z,{key:2})):(o(),c("div",$,[k(w,{"zone-overview":r.value},null,8,["zone-overview"])]))]))}});export{H as default};
