import{d as l,o as a,j as s,t as r,b as n,l as t,D as P,y as b,Q as D,ct as f,cx as O,cy as h,cz as A,c as p,w as i,n as N,a as E,cA as I,F as K,i as _}from"./index.c585bc0e.js";const W=l({__name:"WarningDefault",props:{payload:{type:[String,Object],required:!0}},setup(e){return(c,o)=>(a(),s("span",null,r(e.payload),1))}}),x=l({__name:"WarningEnvoyIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(c,o)=>(a(),s("span",null,[n(" Envoy ("),t("strong",null,r(e.payload.envoy),1),n(") is unsupported by the current version of Kuma DP ("),t("strong",null,r(e.payload.kumaDp),1),n(") [Requirements: "),t("strong",null,r(e.payload.requirements),1),n("]. ")]))}}),V=l({__name:"WarningZoneAndKumaDPVersionsIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(c,o)=>(a(),s("span",null,[n(" There is a mismatch between versions of Kuma DP ("),t("strong",null,r(e.payload.kumaDp),1),n(") and the Zone CP. ")]))}}),v=l({__name:"WarningUnsupportedKumaDPVersion",props:{payload:{type:Object,required:!0}},setup(e){return(c,o)=>(a(),s("span",null,[n(" Unsupported version of Kuma DP ("),t("strong",null,r(e.payload.kumaDp),1),n(") ")]))}}),B=l({__name:"WarningZoneAndGlobalCPSVersionsIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(c,o)=>(a(),s("span",null,[n(" There is mismatch between versions of Zone CP ("),t("strong",null,r(e.payload.zoneCpVersion),1),n(") and the Global CP ("),t("strong",null,r(e.payload.globalCpVersion),1),n(") ")]))}}),S={name:"WarningsWidget",components:{KAlert:b,KCard:D},props:{warnings:{type:Array,required:!0}},methods:{getWarningComponent(e=""){switch(e){case A:return x;case h:return v;case O:return V;case f:return B;default:return W}}}};function T(e,c,o,$,q,d){const m=_("KAlert"),y=_("KCard");return a(),p(y,{"border-variant":"noBorder"},{body:i(()=>[t("ul",null,[(a(!0),s(K,null,N(o.warnings,({kind:u,payload:g,index:C})=>(a(),s("li",{key:`${u}/${C}`,class:"mb-1"},[E(m,{appearance:"warning"},{alertMessage:i(()=>[(a(),p(I(d.getWarningComponent(u)),{payload:g},null,8,["payload"]))]),_:2},1024)]))),128))])]),_:1})}const U=P(S,[["render",T]]);export{U as W};