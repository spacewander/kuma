import{C as m}from"./CodeBlock-CFUAVpmU.js";import{d as u,a,o as g,b as _,w as t,e as n,m as f,f as h}from"./index-Bqk11xPq.js";const w=u({__name:"DiagnosticsDetailView",setup(C){return(x,b)=>{const c=a("RouteTitle"),d=a("DataLoader"),i=a("KCard"),r=a("AppView"),l=a("RouteView");return g(),_(l,{name:"diagnostics",params:{codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:s})=>[n(r,{breadcrumbs:[{to:{name:"diagnostics"},text:s("diagnostics.routes.item.breadcrumbs")}]},{title:t(()=>[f("h1",null,[n(c,{title:s("diagnostics.routes.item.title")},null,8,["title"])])]),default:t(()=>[h(),n(i,null,{default:t(()=>[n(d,{src:"/config"},{default:t(({data:p})=>[n(m,{"data-testid":"code-block-diagnostics",language:"json",code:JSON.stringify(p,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{w as default};
