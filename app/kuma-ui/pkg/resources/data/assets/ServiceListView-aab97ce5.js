import{q as f,J as g,T as k,l as w,a as b}from"./kongponents.es-406a7d3e.js";import{A as h,_ as S}from"./DataSource.vue_vue_type_script_setup_true_lang-7a9429c6.js";import{i as x,A as z,_ as V,f as A}from"./RouteView.vue_vue_type_script_setup_true_lang-99401e5a.js";import{_ as C}from"./RouteTitle.vue_vue_type_script_setup_true_lang-64e3d4a6.js";import{S as L}from"./StatusBadge-5c5ecbac.js";import{d as $,r as B,o as i,a as _,w as e,h as t,k as T,b as a,g as l,t as c,e as m,F as p}from"./index-abe682b3.js";const N=$({__name:"ServiceListView",props:{page:{},size:{},mesh:{}},setup(u){const n=u,{t:r}=x();return(q,D)=>{const d=B("RouterLink");return i(),_(V,{name:"services-list-view"},{default:e(({route:v})=>[t(S,{src:`/${n.mesh}/services?page=${n.page}&size=${n.size}`},{default:e(({data:o,error:y})=>[t(z,null,{title:e(()=>[T("h2",null,[t(C,{title:a(r)("services.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[l(),t(a(f),null,{body:e(()=>[t(h,{class:"service-collection","data-testid":"service-collection","empty-state-title":a(r)("common.emptyState.title"),"empty-state-message":a(r)("common.emptyState.message",{type:"Services"}),headers:[{label:"Name",key:"name"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"online"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":n.page,"page-size":n.size,total:o==null?void 0:o.total,items:o==null?void 0:o.items,error:y,onChange:v.update},{name:e(({row:s})=>[t(d,{to:{name:"service-detail-view",params:{service:s.name}}},{default:e(()=>[l(c(s.name),1)]),_:2},1032,["to"])]),status:e(({row:s})=>[s.status?(i(),_(L,{key:0,status:s.status},null,8,["status"])):(i(),m(p,{key:1},[l(`
                  —
                `)],64))]),online:e(({row:s})=>[s.dataplanes?(i(),m(p,{key:0},[l(c(s.dataplanes.online||0)+" / "+c(s.dataplanes.total||0),1)],64)):(i(),m(p,{key:1},[l(`
                  —
                `)],64))]),actions:e(({row:s})=>[t(a(g),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[t(a(k),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[t(a(w),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:e(()=>[t(a(b),{item:{to:{name:"service-detail-view",params:{service:s.name}},label:a(r)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-title","empty-state-message","headers","page-number","page-size","total","items","error","onChange"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}});const j=A(N,[["__scopeId","data-v-ff419415"]]);export{j as default};
