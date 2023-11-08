import{d as y,l as f,a as u,o as t,c as m,e as o,w as e,b as i,E as w,D as V,p as k,t as c,q as l,a6 as h,f as r,a3 as x,v as C,F as D,a0 as I}from"./index-70fb4e48.js";import{_ as $}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-7812bd48.js";import{T as b}from"./TagList-4dc017e6.js";import{S as B}from"./StatusBadge-63893a0a.js";const S={key:3,class:"columns"},T=y({__name:"ExternalServiceDetails",props:{mesh:{},service:{}},setup(_){const{t:a}=f(),s=_;return(g,v)=>{const p=u("DataSource");return t(),m("div",null,[o(p,{src:`/meshes/${s.mesh}/external-services/for/${s.service}`},{default:e(({data:n,error:d})=>[d?(t(),i(w,{key:0,error:d},null,8,["error"])):n===void 0?(t(),i(V,{key:1})):n===null?(t(),i($,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[k("p",null,c(l(a)("services.detail.no_matching_external_service",{name:s.service})),1)]),_:1})):(t(),m("div",S,[o(h,null,{title:e(()=>[r(c(l(a)("http.api.property.address")),1)]),body:e(()=>[o(x,{text:n.networking.address},null,8,["text"])]),_:2},1024),r(),n.tags!==null?(t(),i(h,{key:0},{title:e(()=>[r(c(l(a)("http.api.property.tags")),1)]),body:e(()=>[o(b,{tags:n.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]))]),_:1},8,["src"])])}}}),E={class:"columns"},N=y({__name:"ServiceInsightDetails",props:{serviceInsight:{}},setup(_){const{t:a}=f(),s=_;return(g,v)=>{var p,n;return t(),m("div",E,[o(h,null,{title:e(()=>[r(c(l(a)("http.api.property.status")),1)]),body:e(()=>[o(B,{status:s.serviceInsight.status??"not_available"},null,8,["status"])]),_:1}),r(),o(h,null,{title:e(()=>[r(c(l(a)("http.api.property.address")),1)]),body:e(()=>[s.serviceInsight.addressPort?(t(),i(x,{key:0,text:s.serviceInsight.addressPort},null,8,["text"])):(t(),m(D,{key:1},[r(c(l(a)("common.detail.none")),1)],64))]),_:1}),r(),o(I,{online:((p=s.serviceInsight.dataplanes)==null?void 0:p.online)??0,total:((n=s.serviceInsight.dataplanes)==null?void 0:n.total)??0},{title:e(()=>[r(c(l(a)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])])}}}),P={class:"stack"},q=y({__name:"ServiceDetailView",props:{data:{}},setup(_){const a=_;return(s,g)=>{const v=u("KCard"),p=u("AppView"),n=u("RouteView");return t(),i(n,{name:"service-detail-view",params:{mesh:"",service:""}},{default:e(({route:d})=>[o(p,null,{default:e(()=>[k("div",P,[o(v,null,{body:e(()=>[a.data.serviceType==="external"?(t(),i(T,{key:0,mesh:d.params.mesh,service:d.params.service},null,8,["mesh","service"])):(t(),i(N,{key:1,"service-insight":s.data},null,8,["service-insight"]))]),_:2},1024)])]),_:2},1024)]),_:1})}}});export{q as default};
