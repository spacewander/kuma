import{E as d}from"./EnvoyData-51d7966a.js";import{d as m,a as n,o as l,b as g,w as t,e as a,p as u,f as _}from"./index-fa77c4eb.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-be05b1a9.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-76fc2d2e.js";import"./ErrorBlock-4851a125.js";import"./TextWithCopyButton-5090a504.js";import"./CopyButton-a6d96483.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-53706c7b.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-6411ade7.js";const B=m({__name:"ZoneIngressXdsConfigView",setup(f){return(x,h)=>{const s=n("RouteTitle"),r=n("KCard"),i=n("AppView"),p=n("RouteView");return l(),g(p,{name:"zone-ingress-xds-config-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:c})=>[a(i,null,{title:t(()=>[u("h2",null,[a(s,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-xds-config-view")},null,8,["title"])])]),default:t(()=>[_(),a(r,null,{body:t(()=>[a(d,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};