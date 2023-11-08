import{D as h,F as C}from"./FilterBar-304ee155.js";import{d as V,a as n,o,b as l,w as s,e as i,p as k,f as c,E as z,G as b,v as d,_ as P}from"./index-70fb4e48.js";import{S as q}from"./SummaryView-e7da9a54.js";import"./AppCollection-08b32958.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7812bd48.js";import"./StatusBadge-63893a0a.js";import"./dataplane-0a086c06.js";const D=V({__name:"DataPlaneListView",setup(x){return(R,B)=>{const _=n("RouteTitle"),u=n("KCard"),f=n("RouterView"),y=n("AppView"),p=n("DataSource"),g=n("RouteView");return o(),l(p,{src:"/me"},{default:s(({data:w})=>[w?(o(),l(g,{key:0,name:"data-plane-list-view",params:{page:1,size:50,query:"",s:"",mesh:"",dataPlane:""}},{default:s(({route:e,t:v})=>[i(p,{src:`/meshes/${e.params.mesh}/dataplanes?page=${e.params.page}&size=${e.params.size}&search=${e.params.s}`},{default:s(({data:a,error:r})=>[i(y,null,{title:s(()=>[k("h2",null,[i(_,{title:v("data-planes.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[c(),i(u,null,{body:s(()=>[r!==void 0?(o(),l(z,{key:0,error:r},null,8,["error"])):(o(),l(h,{key:1,"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":parseInt(e.params.page),"page-size":parseInt(e.params.size),total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:r,"is-selected-row":t=>t.name===e.params.dataPlane,"summary-route-name":"data-plane-summary-view",onChange:e.update},{toolbar:s(()=>[i(C,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.params.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:t=>e.update({query:t.query,s:t.query.length>0?JSON.stringify(t.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),_:2},1032,["page-number","page-size","total","items","error","is-selected-row","onChange"]))]),_:2},1024),c(),e.params.dataPlane?(o(),l(f,{key:0},{default:s(t=>[i(q,{onClose:m=>e.replace({name:"data-plane-list-view",params:{mesh:e.params.mesh},query:{page:e.params.page,size:e.params.size}})},{default:s(()=>[(o(),l(b(t.Component),{name:e.params.dataPlane,"dataplane-overview":a==null?void 0:a.items.find(m=>m.name===e.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):d("",!0)]),_:2},1024)]),_:2},1032,["src"])]),_:1})):d("",!0)]),_:1})}}});const A=P(D,[["__scopeId","data-v-9f555512"]]);export{A as default};
