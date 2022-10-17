import{j as y}from"./index.58caa11d.js";import{d as B,i as E,j as V,e as k,c as n,w as g,m as o,q as j,o as s,a as v,L as w,_}from"./index.ff83acd2.js";import{C as b}from"./CodeBlock.9a481ee8.js";import{_ as S}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.a3bd4170.js";import{E as C}from"./ErrorBlock.f11c1f94.js";import{_ as H}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.3473bd21.js";const Y={class:"yaml-view"},L={key:3,class:"yaml-view-content"},M=B({__name:"YamlView",props:{id:{type:String,required:!0},content:{type:Object,required:!1,default:null},isLoading:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},codeMaxHeight:{type:String,required:!1,default:null},isSearchable:{type:Boolean,required:!1,default:!1}},setup(e){const a=e,p=j(),c=[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}],i=E(c[0].hash),l=p.getters["config/getEnvironment"];typeof l=="string"&&(i.value="#"+l);const d=V(()=>{var f;const t={};if(t.apiVersion="kuma.io/v1alpha1",t.kind=a.content.type,a.content.mesh!==void 0&&(t.mesh=a.content.mesh),(f=a.content.name)!=null&&f.includes(".")){const h=a.content.name.split("."),q=h.pop(),x=h.join(".");t.metadata={name:x,namespace:q}}else t.metadata={name:a.content.name};const{type:r,name:m,mesh:O,...u}=a.content;return Object.keys(u).length>0&&(t.spec=u),{universal:y(a.content),kubernetes:y(t)}});return(t,r)=>(s(),k("div",Y,[e.isLoading?(s(),n(H,{key:0})):e.hasError?(s(),n(C,{key:1})):e.isEmpty?(s(),n(S,{key:2})):(s(),k("div",L,[(s(),n(o(w),{key:o(l),modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=m=>i.value=m),tabs:c},{universal:g(()=>[v(b,{id:e.id,language:"yaml",code:o(d).universal,"is-searchable":e.isSearchable,"query-key":e.id,"code-max-height":e.codeMaxHeight},null,8,["id","code","is-searchable","query-key","code-max-height"])]),kubernetes:g(()=>[v(b,{id:e.id,language:"yaml",code:o(d).kubernetes,"is-searchable":e.isSearchable,"query-key":e.id,"code-max-height":e.codeMaxHeight},null,8,["id","code","is-searchable","query-key","code-max-height"])]),_:1},8,["modelValue"]))]))]))}});const A=_(M,[["__scopeId","data-v-8956749a"]]);export{A as Y};