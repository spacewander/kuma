import{_ as E}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-CSjl2Ret.js";import{d as x,a as n,o as a,b as r,w as s,e as t,m as w,f as R,a1 as V,$ as k,q as z}from"./index-Bqk11xPq.js";import"./CodeBlock-CFUAVpmU.js";import"./toYaml-DB9FPXFY.js";const N=x({__name:"ZoneEgressConfigView",setup(v){return(y,F)=>{const m=n("RouteTitle"),i=n("DataSource"),g=n("KCard"),_=n("AppView"),u=n("RouteView");return a(),r(u,{name:"zone-egress-config-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:s(({route:e,t:f})=>[t(_,null,{title:s(()=>[w("h2",null,[t(m,{title:f("zone-egresses.routes.item.navigation.zone-egress-config-view")},null,8,["title"])])]),default:s(()=>[R(),t(g,null,{default:s(()=>[t(i,{src:`/zone-egresses/${e.params.zoneEgress}`},{default:s(({data:l,error:d})=>[d!==void 0?(a(),r(V,{key:0,error:d},null,8,["error"])):l===void 0?(a(),r(k,{key:1})):(a(),r(E,{key:2,resource:l.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:s(({copy:o,copying:h})=>[h?(a(),r(i,{key:0,src:`/zone-egresses/${e.params.zoneEgress}/as/kubernetes?no-store`,onChange:c=>{o(p=>p(c))},onError:c=>{o((p,C)=>C(c))}},null,8,["src","onChange","onError"])):z("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{N as default};
