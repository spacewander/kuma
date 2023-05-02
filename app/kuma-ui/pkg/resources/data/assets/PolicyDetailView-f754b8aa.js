import{_ as P}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-6d79a859.js";import{D as E,a as B,_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-656dad5a.js";import{E as V}from"./ErrorBlock-a89934d5.js";import{_ as x}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-f8191c4b.js";import{T as C}from"./TabsWidget-ef133439.js";import{_ as L}from"./YamlView.vue_vue_type_script_setup_true_lang-5891772e.js";import{u as T}from"./index-128caa8e.js";import{d as $,r as p,c as y,E as A,j as _,e as o,b as t,w as i,o as e,i as F,t as h,g as v,F as S,q as j,h as k,f as q}from"./index-81bf8339.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-e1f4a219.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./kongponents.es-ae910f47.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-3cff1a2a.js";import"./store-299cf70b.js";import"./toYaml-4e00099e.js";const H={class:"policy-details kcard-border"},I={class:"entity-heading","data-testid":"policy-single-entity"},le=$({__name:"PolicyDetailView",props:{mesh:null,policyPath:null,policyName:null},setup(g){const f=g,w=T(),b=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],a=p(null),u=p(!0),n=p(null),r=y(()=>{if(a.value===null)return null;const{type:c,name:m,mesh:s}=a.value;return{type:c,name:m,mesh:s}}),d=y(()=>a.value!==null?A(a.value):null);D(f);async function D({mesh:c,policyPath:m,policyName:s}){u.value=!0,n.value=null,a.value=null;try{a.value=await w.getSinglePolicyEntity({mesh:c,path:m,name:s})}catch(l){l instanceof Error?n.value=l:console.error(l)}finally{u.value=!1}}return(c,m)=>(e(),_("div",H,[u.value?(e(),o(x,{key:0})):n.value!==null?(e(),o(V,{key:1,error:n.value},null,8,["error"])):t(r)===null?(e(),o(N,{key:2})):(e(),o(C,{key:3,tabs:b},{tabHeader:i(()=>[F("h1",I,h(t(r).name),1)]),overview:i(()=>[v(B,null,{default:i(()=>[(e(!0),_(S,null,j(t(r),(s,l)=>(e(),o(E,{key:l,term:l},{default:i(()=>[k(h(s),1)]),_:2},1032,["term"]))),128))]),_:1}),k(),t(d)!==null?(e(),o(L,{key:0,id:"code-block-policy",class:"mt-4",content:t(d),"is-searchable":""},null,8,["content"])):q("",!0)]),"affected-dpps":i(()=>[v(P,{mesh:t(r).mesh,"policy-name":t(r).name,"policy-type":f.policyPath},null,8,["mesh","policy-name","policy-type"])]),_:1}))]))}});export{le as default};