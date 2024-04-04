import{d as N,a as r,o as s,b as c,w as t,e as n,m as v,f as o,t as m,c as p,F as u,q as d,P,p as g,K as w,Q as I,D as T,_ as $}from"./index-BLP5TKFr.js";import{A as E}from"./AppCollection-Dxk09iX2.js";import{F}from"./FilterBar-4E_Wm5Zi.js";import{S as K}from"./StatusBadge-CBm-1aUH.js";import{S as R}from"./SummaryView-9S4nmcw9.js";const A={class:"stack"},O={key:0},Z={key:1},J=N({__name:"BuiltinGatewayDataplanesView",setup(Q){return(U,W)=>{const y=r("RouterLink"),C=r("KTooltip"),x=r("RouterView"),S=r("DataLoader"),V=r("KCard"),h=r("DataSource"),q=r("AppView"),B=r("RouteView");return s(),c(h,{src:"/me"},{default:t(({data:k})=>[k?(s(),c(B,{key:0,name:"builtin-gateway-dataplanes-view",params:{mesh:"",gateway:"",listener:"",page:1,size:k.pageSize,query:"",s:"",dataPlane:""}},{default:t(({can:z,route:a,t:l})=>[n(q,null,{default:t(()=>[n(h,{src:`/meshes/${a.params.mesh}/mesh-gateways/${a.params.gateway}`},{default:t(({data:_,error:L})=>[v("div",A,[n(V,null,{default:t(()=>[n(S,{src:_===void 0?"":`/meshes/${a.params.mesh}/dataplanes/for/${_.selectors[0].match["kuma.io/service"]}?page=${a.params.page}&size=${a.params.size}&search=${a.params.s}`,data:[_],errors:[L],loader:!1},{default:t(({data:i})=>{var b;return[n(E,{class:"data-plane-collection","data-testid":"data-plane-collection","page-number":a.params.page,"page-size":a.params.size,headers:[{label:"Name",key:"name"},...(((b=i==null?void 0:i.items[0])==null?void 0:b.namespace)??"").length>0?[{label:"Namespace",key:"namespace"}]:[],...z("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:i==null?void 0:i.items,total:i==null?void 0:i.total,"is-selected-row":e=>e.name===a.params.dataPlane,"summary-route-name":"builtin-gateway-data-plane-summary-view","empty-state-message":l("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":l("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":l("common.documentation"),onChange:a.update},{toolbar:t(()=>[n(F,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:a.params.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...z("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onFieldsChange:e=>a.update({query:e.query,s:e.query.length>0?JSON.stringify(e.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),namespace:t(({row:e})=>[o(m(e.namespace),1)]),name:t(({row:e})=>[n(y,{class:"name-link",title:e.name,to:{name:"builtin-gateway-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.name},query:{page:a.params.page,size:a.params.size,query:a.params.query}}},{default:t(()=>[o(m(e.name),1)]),_:2},1032,["title","to"])]),zone:t(({row:e})=>[e.zone?(s(),c(y,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:t(()=>[o(m(e.zone),1)]),_:2},1032,["to"])):(s(),p(u,{key:1},[o(m(l("common.collection.none")),1)],64))]),certificate:t(({row:e})=>{var f;return[(f=e.dataplaneInsight.mTLS)!=null&&f.certificateExpirationTime?(s(),p(u,{key:0},[o(m(l("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(s(),p(u,{key:1},[o(m(l("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:t(({row:e})=>[n(K,{status:e.status},null,8,["status"])]),warnings:t(({row:e})=>[e.isCertExpired||e.warnings.length>0?(s(),c(C,{key:0},{content:t(()=>[v("ul",null,[e.warnings.length>0?(s(),p("li",O,m(l("data-planes.components.data-plane-list.version_mismatch")),1)):d("",!0),o(),e.isCertExpired?(s(),p("li",Z,m(l("data-planes.components.data-plane-list.cert_expired")),1)):d("",!0)])]),default:t(()=>[o(),n(P,{class:"mr-1",size:g(w)},null,8,["size"])]),_:2},1024)):(s(),p(u,{key:1},[o(m(l("common.collection.none")),1)],64))]),details:t(({row:e})=>[n(y,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:e.name}}},{default:t(()=>[o(m(l("common.collection.details_link"))+" ",1),n(g(I),{decorative:"",size:g(w)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]),o(),a.params.dataPlane?(s(),c(x,{key:0},{default:t(e=>[n(R,{onClose:f=>a.replace({name:a.name,params:{mesh:a.params.mesh},query:{page:a.params.page,size:a.params.size}})},{default:t(()=>[typeof i<"u"?(s(),c(T(e.Component),{key:0,items:i.items},null,8,["items"])):d("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):d("",!0)]}),_:2},1032,["src","data","errors"])]),_:2},1024)])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):d("",!0)]),_:1})}}}),Y=$(J,[["__scopeId","data-v-96819966"]]);export{Y as default};
