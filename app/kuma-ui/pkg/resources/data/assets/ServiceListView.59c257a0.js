import{d as C,cu as L,bP as r,h as R,c9 as S,o as P,i as T,w as k,a as V,j as q}from"./index.2d238a59.js";import{C as z}from"./ContentWrapper.6f82fa9b.js";import{p as _,D as M}from"./DataOverview.b81dc292.js";import{S as O}from"./ServiceSummary.513f1d1e.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.a51bf735.js";import"./ErrorBlock.6d694e33.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.ccaabdfd.js";import"./StatusBadge.ce20a7cd.js";import"./TagList.ebca8e2c.js";import"./YamlView.vue_vue_type_script_setup_true_lang.196883ed.js";import"./index.58caa11d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.f5cf526a.js";import"./_commonjsHelpers.f037b798.js";const X=C({__name:"ServiceListView",props:{selectedServiceName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(A){const m=A,D=[{label:"Service",key:"name"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"dpProxiesStatus"}],h=50,N={title:"No Data",message:"There are no service insights present."},p=L(),v=r(!0),d=r(null),x=r(null),b=r(m.offset),l=r(null),w=r(null),i=r({headers:D,data:[]});R(()=>p.params.mesh,function(){p.name==="service-list-view"&&f(0)}),f(m.offset);async function f(e){var o;b.value=e,_("offset",e>0?e:null),v.value=!0,d.value=null;const t=p.params.mesh,s=h;try{const{items:a,next:y}=await S.getAllServiceInsightsFromMesh({mesh:t},{size:s,offset:e});if(x.value=y,Array.isArray(a)&&a.length>0){a.sort((n,u)=>n.name>u.name?1:n.name<u.name?-1:0),i.value.data=a.map(n=>E(n));const c=(o=m.selectedServiceName)!=null?o:a[0].name;await g({name:c,mesh:t})}else i.value.data=[]}catch(a){a instanceof Error?d.value=a:console.error(a)}finally{v.value=!1}}function E(e){var c;const t={name:"service-detail-view",params:{mesh:e.mesh,service:e.name}},s={name:"mesh-detail-view",params:{mesh:e.mesh}};let o="\u2014";if(e.dataplanes){const{online:n=0,total:u=0}=e.dataplanes;o=`${n} / ${u}`}const a=e.addressPort,y=(c=e.serviceType)!=null?c:"internal";return{...e,serviceType:y,nameRoute:t,meshRoute:s,dpProxiesStatus:o,addressPort:a}}async function g({mesh:e,name:t}){l.value=await S.getServiceInsight({mesh:e,name:t}),l.value.serviceType==="external"&&(w.value=await S.getExternalService({mesh:e,name:t})),_("service",t)}return(e,t)=>(P(),T(z,null,{content:k(()=>{var s;return[V(M,{"selected-entity-name":(s=l.value)==null?void 0:s.name,"page-size":h,error:d.value,"is-loading":v.value,"empty-state":N,"table-data":i.value,"table-data-is-empty":i.value.data.length===0,next:x.value,"page-offset":b.value,onTableAction:g,onLoadData:f},null,8,["selected-entity-name","error","is-loading","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:k(()=>[l.value!==null?(P(),T(O,{key:0,service:l.value,"external-service":w.value},null,8,["service","external-service"])):q("",!0)]),_:1}))}});export{X as default};
