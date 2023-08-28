import{g,o as f,A as b,T as k,S as h,p as w,K as S,_ as T,f as x}from"./RouteView.vue_vue_type_script_setup_true_lang-d3d8e82f.js";import{d as C,r as z,o as c,a as _,w as t,h as a,q as A,b as s,g as i,G as L,t as l,e as m,F as p,V,D as N,v as B,H as E}from"./index-be7916f4.js";import{A as I}from"./AppCollection-14c097cb.js";import{_ as R}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d0d3b813.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-33662e2f.js";const $=C({__name:"ServiceListView",props:{page:{},size:{},mesh:{}},setup(u){const r=u,{t:o}=g();return(O,D)=>{const d=z("RouterLink");return c(),_(T,{name:"services-list-view"},{default:t(({route:v})=>[a(f,{src:`/meshes/${r.mesh}/service-insights?page=${r.page}&size=${r.size}`},{default:t(({data:n,error:y})=>[a(b,null,{title:t(()=>[A("h2",null,[a(R,{title:s(o)("services.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[i(),a(s(L),null,{body:t(()=>[a(I,{class:"service-collection","data-testid":"service-collection","empty-state-title":s(o)("common.emptyState.title"),"empty-state-message":s(o)("common.emptyState.message",{type:"Services"}),headers:[{label:"Name",key:"name"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"DP proxies (online / total)",key:"online"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":r.page,"page-size":r.size,total:n==null?void 0:n.total,items:n==null?void 0:n.items,error:y,onChange:v.update},{name:t(({row:e})=>[a(d,{to:{name:"service-detail-view",params:{service:e.name}}},{default:t(()=>[i(l(e.name),1)]),_:2},1032,["to"])]),serviceType:t(({rowValue:e})=>[i(l(e||s(o)("common.collection.none")),1)]),addressPort:t(({rowValue:e})=>[e?(c(),_(k,{key:0,text:e},null,8,["text"])):(c(),m(p,{key:1},[i(l(s(o)("common.collection.none")),1)],64))]),online:t(({row:e})=>[e.dataplanes?(c(),m(p,{key:0},[i(l(e.dataplanes.online||0)+" / "+l(e.dataplanes.total||0),1)],64)):(c(),m(p,{key:1},[i(l(s(o)("common.collection.none")),1)],64))]),status:t(({row:e})=>[a(h,{status:e.status||"not_available"},null,8,["status"])]),actions:t(({row:e})=>[a(s(V),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:t(()=>[a(s(N),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:t(()=>[a(s(B),{color:s(w),icon:"more",size:s(S)},null,8,["color","size"])]),_:1})]),items:t(()=>[a(s(E),{item:{to:{name:"service-detail-view",params:{service:e.name}},label:s(o)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-title","empty-state-message","headers","page-number","page-size","total","items","error","onChange"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}});const q=x($,[["__scopeId","data-v-a84204e3"]]);export{q as default};
