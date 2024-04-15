import{a as I,A as K}from"./AccordionList-DPEoKG3-.js";import{C as N}from"./CodeBlock-Lphgg1S3.js";import{d as T,a as l,o as t,b as _,w as e,e as o,c as n,F as d,D as h,X as b,f as a,t as f,m as r,q as g,p as z,s as M,v as j,_ as F}from"./index-C0P2XlBb.js";import{P as q}from"./PolicyTypeTag-CQZHpKsN.js";import{R as E}from"./RuleMatchers-AcdCgJyr.js";import{t as H}from"./toYaml-DB9FPXFY.js";const B=i=>(M("data-v-9dfd5b3e"),i=i(),j(),i),X={key:0,class:"rules"},Y=B(()=>r("h3",null,"Rules",-1)),G={class:"mt-4"},J={class:"stack-with-borders"},Q=B(()=>r("dt",null,`
                                    Config
                                  `,-1)),U={class:"mt-2"},W=T({__name:"ConnectionOutboundSummaryOverviewView",props:{data:{},dataplaneOverview:{}},setup(i){const V=i;return(Z,ee)=>{const D=l("KBadge"),P=l("RouterLink"),R=l("DataSource"),O=l("KCard"),S=l("DataCollection"),L=l("DataLoader"),$=l("AppView"),x=l("RouteView");return t(),_(x,{params:{mesh:"",dataPlane:"",connection:""},name:"connection-outbound-summary-overview-view"},{default:e(({t:A,route:y})=>[o($,null,{default:e(()=>[(t(!0),n(d,null,h([y.params.connection.replace(/-([a-f0-9]){16}$/,"")],v=>(t(),n("div",{key:v,class:"stack-with-borders"},[o(b,{layout:"horizontal"},{title:e(()=>[a(`
              Protocol
            `)]),body:e(()=>[o(D,{appearance:"info"},{default:e(()=>[a(f(A(`http.api.value.${["grpc","http","tcp"].find(w=>typeof V.data[w]<"u")}`)),1)]),_:2},1024)]),_:2},1024),a(),V.data?(t(),n("div",X,[Y,a(),o(L,{src:`/meshes/${y.params.mesh}/dataplanes/${y.params.dataPlane}/rules`},{default:e(({data:w})=>[o(S,{predicate:p=>p.ruleType==="to"&&!["MeshHTTPRoute","MeshTCPRoute"].includes(p.type)&&p.matchers.every(s=>s.key==="kuma.io/service"&&(s.not?s.value!==v:s.value===v)),items:w.rules},{default:e(({items:p})=>[r("div",G,[o(I,{"initially-open":0,"multiple-open":"",class:"stack"},{default:e(()=>[(t(!0),n(d,null,h(Object.groupBy(p,s=>s.type),(s,k)=>(t(),_(O,{key:k},{default:e(()=>[o(K,null,{"accordion-header":e(()=>[o(q,{"policy-type":k},{default:e(()=>[a(f(k)+" ("+f(s.length)+`)
                            `,1)]),_:2},1032,["policy-type"])]),"accordion-content":e(()=>[r("div",J,[(t(!0),n(d,null,h(s,u=>(t(),n(d,{key:u},[u.matchers.length>0?(t(),_(b,{key:0,layout:"horizontal"},{title:e(()=>[a(`
                                    To
                                  `)]),body:e(()=>[r("p",null,[o(E,{items:u.matchers},null,8,["items"])])]),_:2},1024)):g("",!0),a(),u.origins.length>0?(t(),_(b,{key:1,layout:"horizontal"},{title:e(()=>[a(`
                                    Origin Policies
                                  `)]),body:e(()=>[o(R,{src:"/*/policy-types"},{default:e(({data:C})=>[(t(!0),n(d,null,h([Object.groupBy((C==null?void 0:C.policies)??[],m=>m.name)],m=>(t(),n("ul",{key:m},[(t(!0),n(d,null,h(u.origins,c=>(t(),n("li",{key:`${c.mesh}-${c.name}`},[m[c.type]?(t(),_(P,{key:0,to:{name:"policy-detail-view",params:{mesh:c.mesh,policyPath:m[c.type][0].path,policy:c.name}}},{default:e(()=>[a(f(c.name),1)]),_:2},1032,["to"])):(t(),n(d,{key:1},[a(f(c.name),1)],64))]))),128))]))),128))]),_:2},1024)]),_:2},1024)):g("",!0),a(),r("div",null,[Q,a(),r("dd",U,[r("div",null,[o(N,{code:z(H)(u.raw),language:"yaml","show-copy-button":!1},null,8,["code"])])])])],64))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])]),_:2},1032,["predicate","items"])]),_:2},1032,["src"])])):g("",!0)]))),128))]),_:2},1024)]),_:1})}}}),le=F(W,[["__scopeId","data-v-9dfd5b3e"]]);export{le as default};