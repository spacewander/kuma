import{E as d}from"./EnvoyData-44836f61.js";import{d as c,a as t,o as m,b as u,w as o,e as n,p as _,f as h}from"./index-7fe6d41d.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-83dc3584.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-6f5efa76.js";import"./ErrorBlock-58aa3600.js";import"./TextWithCopyButton-4896f22f.js";import"./CopyButton-3c266137.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-93ba8d74.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-7e4a27ea.js";const B=c({__name:"DataPlaneClustersView",setup(g){return(f,x)=>{const r=t("RouteTitle"),s=t("KCard"),p=t("AppView"),l=t("RouteView");return m(),u(l,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:i})=>[n(p,null,{title:o(()=>[_("h2",null,[n(r,{title:i("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:o(()=>[h(),n(s,null,{default:o(()=>[n(d,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};