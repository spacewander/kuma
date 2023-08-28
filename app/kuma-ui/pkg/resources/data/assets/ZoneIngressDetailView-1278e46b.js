import{d as h,c as b,o,a as i,w as e,h as s,b as n,G as u,q as f,g as a,t as p,e as x,F as k,s as $}from"./index-be7916f4.js";import{a as O,A as B,S,b as A}from"./SubscriptionHeader-68047fd3.js";import{g as w,D as g,S as D,T as q,A as E,o as V,r as C,E as T,s as F,_ as N}from"./RouteView.vue_vue_type_script_setup_true_lang-d3d8e82f.js";import{E as v}from"./EnvoyData-33f0c633.js";import{_ as L}from"./TabsWidget.vue_vue_type_style_index_0_lang-98199e00.js";import{g as Z}from"./dataplane-30467516.js";import{_ as j}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d0d3b813.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-33662e2f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-a766fd97.js";const G={class:"columns",style:{"--columns":"3"}},H=h({__name:"ZoneIngressDetails",props:{zoneIngressOverview:{type:Object,required:!0}},setup(_){const t=_,{t:r}=w(),y=[{hash:"#overview",title:r("zone-ingresses.routes.item.tabs.overview")},{hash:"#insights",title:r("zone-ingresses.routes.item.tabs.insights")},{hash:"#xds-configuration",title:r("zone-ingresses.routes.item.tabs.xds_configuration")},{hash:"#envoy-stats",title:r("zone-ingresses.routes.item.tabs.stats")},{hash:"#envoy-clusters",title:r("zone-ingresses.routes.item.tabs.clusters")}],c=b(()=>Z(t.zoneIngressOverview.zoneIngressInsight)),d=b(()=>{var l;const m=((l=t.zoneIngressOverview.zoneIngressInsight)==null?void 0:l.subscriptions)??[];return Array.from(m).reverse()});return(m,l)=>(o(),i(L,{tabs:y},{overview:e(()=>[s(n(u),null,{body:e(()=>[f("div",G,[s(g,null,{title:e(()=>[a(p(n(r)("http.api.property.status")),1)]),body:e(()=>[s(D,{status:c.value},null,8,["status"])]),_:1}),a(),s(g,null,{title:e(()=>[a(p(n(r)("http.api.property.name")),1)]),body:e(()=>[s(q,{text:t.zoneIngressOverview.name},null,8,["text"])]),_:1}),a(),s(g,null,{title:e(()=>[a(p(n(r)("http.api.property.type")),1)]),body:e(()=>[a(p(t.zoneIngressOverview.type),1)]),_:1})])]),_:1})]),insights:e(()=>[s(n(u),null,{body:e(()=>[s(O,{"initially-open":0},{default:e(()=>[(o(!0),x(k,null,$(d.value,(z,I)=>(o(),i(B,{key:I},{"accordion-header":e(()=>[s(S,{subscription:z},null,8,["subscription"])]),"accordion-content":e(()=>[s(A,{subscription:z,"is-discovery-subscription":""},null,8,["subscription"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":e(()=>[s(n(u),null,{body:e(()=>[s(v,{src:`/zone-ingresses/${t.zoneIngressOverview.name}/data-path/xds`,"query-key":"envoy-data-xds-zone-ingress"},null,8,["src"])]),_:1})]),"envoy-stats":e(()=>[s(n(u),null,{body:e(()=>[s(v,{src:`/zone-ingresses/${t.zoneIngressOverview.name}/data-path/stats`,"query-key":"envoy-data-stats-zone-ingress"},null,8,["src"])]),_:1})]),"envoy-clusters":e(()=>[s(n(u),null,{body:e(()=>[s(v,{src:`/zone-ingresses/${t.zoneIngressOverview.name}/data-path/clusters`,"query-key":"envoy-data-clusters-zone-ingress"},null,8,["src"])]),_:1})]),_:1}))}}),Y=h({__name:"ZoneIngressDetailView",setup(_){const{t}=w();return(r,y)=>(o(),i(N,{name:"zone-ingress-detail-view","data-testid":"zone-ingress-detail-view"},{default:e(({route:c})=>[s(E,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:n(t)("zone-ingresses.routes.item.breadcrumbs")}]},{title:e(()=>[f("h1",null,[s(j,{title:n(t)("zone-ingresses.routes.item.title",{name:c.params.zoneIngress}),render:!0},null,8,["title"])])]),default:e(()=>[a(),s(V,{src:`/zone-ingresses/${c.params.zoneIngress}`},{default:e(({data:d,isLoading:m,error:l})=>[m?(o(),i(C,{key:0})):l!==void 0?(o(),i(T,{key:1,error:l},null,8,["error"])):d===void 0?(o(),i(F,{key:2})):(o(),i(H,{key:3,"zone-ingress-overview":d,"data-testid":"detail-view-details"},null,8,["zone-ingress-overview"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{Y as default};
