import{_ as r,r as d,d as u,l as p,a as i,o as f,b as m,a5 as b,w as s,f as n,t as c,q as o,e as g,G as v,ae as B}from"./index-70fb4e48.js";const y={};function S(e,t){return d(e.$slots,"default")}const x=r(y,[["render",S]]),C=u({__name:"StatusBadge",props:{status:{}},setup(e){const{t}=p(),_={online:"success",offline:"danger",partially_degraded:"warning",not_available:"neutral",disabled:"neutral"},a=e;return(A,h)=>{const l=i("KBadge");return f(),m(v(a.status==="not_available"?o(B):x),null,b({default:s(()=>[g(l,{class:"status-badge",appearance:_[a.status],"data-testid":"status-badge"},{default:s(()=>[n(c(o(t)(`http.api.value.${a.status}`)),1)]),_:1},8,["appearance"]),n()]),_:2},[a.status==="not_available"?{name:"content",fn:s(()=>[n(c(o(t)("components.status-badge.tooltip.not_available")),1)]),key:"0"}:void 0]),1024)}}});const k=r(C,[["__scopeId","data-v-b7d5eecb"]]);export{k as S};
