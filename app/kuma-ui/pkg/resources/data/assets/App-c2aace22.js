import{d as h,u as L,a as z,c as v,b as t,o,e as l,f as y,w as _,g as f,h as n,i as s,j as d,t as b,r as A,k as P,l as W,n as j,p as I,m as K,P as F,F as E,q as V,s as O,C as R,v as w,x as H,T as J}from"./index-81bf8339.js";import{r as q,d as x,j as G,M as T,Y as B,F as X,J as Z}from"./kongponents.es-ae910f47.js";import{u as $}from"./store-299cf70b.js";import{u as ee,a as k}from"./index-128caa8e.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{A as te,a as se}from"./AccordionList-914dea12.js";import{u as oe,a as ne}from"./index-279c5f31.js";import"./datadogLogEvents-302eea7b.js";import"./DoughnutChart-c9de2081.js";const ae=h({__name:"AppBreadcrumbs",setup(c){const e=L(),a=z(),i=$(),p=v(()=>{const r=new Map;for(const m of e.matched){if(m.name==="home"||m.meta.parent==="home")continue;if(m.meta.parent!==void 0){const u=a.resolve({name:m.meta.parent});u.name&&r.set(u.name,{to:u,key:u.name,title:u.meta.title,text:u.meta.title})}if((m.name===e.name||m.redirect===e.name)&&m.meta.breadcrumbExclude!==!0&&e.name){let u=e.meta.title;typeof e.meta.getBreadcrumbTitle=="function"?u=e.meta.getBreadcrumbTitle(e,i):e.meta.breadcrumbTitleParam&&e.params[e.meta.breadcrumbTitleParam]&&(u=e.params[e.meta.breadcrumbTitleParam]),r.set(e.name,{to:e,key:e.name,title:u,text:u})}}return Array.from(r.values())});return(r,m)=>t(p).length>0?(o(),l(t(q),{key:0,items:t(p)},null,8,["items"])):y("",!0)}}),ie=s("p",null,"Unable to reach the API",-1),ce={key:0},re=h({__name:"AppErrorMessage",setup(c){const e=ee();return(a,i)=>(o(),l(t(G),{class:"global-api-status empty-state--wide-content empty-state--compact","cta-is-hidden":""},{title:_(()=>[f(t(x),{class:"mb-3",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"64"}),n(),ie]),message:_(()=>[s("p",null,[n(`
        Please double check to make sure it is up and running `),t(e).baseUrl?(o(),d("span",ce,[n(", and it is reachable at "),s("code",null,b(t(e).baseUrl),1)])):y("",!0)])]),_:1}))}}),le=""+new URL("kuma-loader-v1-2aaed7d4.gif",import.meta.url).href,_e=c=>(I("data-v-06e19708"),c=c(),K(),c),de={class:"full-screen"},ue={class:"loading-container"},pe=_e(()=>s("img",{src:le},null,-1)),me={class:"progress"},fe=h({__name:"AppLoadingBar",setup(c){let e;const a=A(10);return P(function(){e=window.setInterval(()=>{a.value>=100&&(window.clearInterval(e),a.value=100),a.value=Math.min(a.value+Math.ceil(Math.random()*30),100)},150)}),W(function(){window.clearInterval(e)}),(i,p)=>(o(),d("div",de,[s("div",ue,[pe,n(),s("div",me,[s("div",{style:j({width:`${a.value}%`}),class:"progress-bar",role:"progressbar","data-testid":"app-progress-bar"},null,4)])])]))}});const he=S(fe,[["__scopeId","data-v-06e19708"]]),ge={key:0,class:"onboarding-check"},ye={class:"alert-content"},ve=h({__name:"AppOnboardingNotification",setup(c){const e=A(!1);function a(){e.value=!0}return(i,p)=>e.value===!1?(o(),d("div",ge,[f(t(B),{appearance:"success",class:"dismissible","dismiss-type":"icon",onClosed:a},{alertMessage:_(()=>[s("div",ye,[s("div",null,[s("strong",null,"Welcome to "+b(t(F))+"!",1),n(` We've detected that you don't have any data plane proxies running yet. We've created an onboarding process to help you!
          `)]),n(),s("div",null,[f(t(T),{appearance:"primary",size:"small",class:"action-button",to:{name:"onboarding-welcome"}},{default:_(()=>[n(`
              Get started
            `)]),_:1})])])]),_:1})])):y("",!0)}});const be=S(ve,[["__scopeId","data-v-34df3ed0"]]),Me={class:"py-4"},Ae=s("p",{class:"mb-4"},`
      A traffic log policy lets you collect access logs for every data plane proxy in your service mesh.
    `,-1),$e={class:"list-disc pl-4"},ke=["href"],Se=h({__name:"LoggingNotification",setup(c){const e=k();return(a,i)=>(o(),d("div",Me,[Ae,n(),s("ul",$e,[s("li",null,[s("a",{href:`${t(e)("KUMA_DOCS_URL")}/policies/traffic-log/?${t(e)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
          Traffic Log policy documentation
        `,8,ke)])])]))}}),Ue={class:"py-4"},we=s("p",{class:"mb-4"},`
      A traffic metrics policy lets you collect key data for observability of your service mesh.
    `,-1),xe={class:"list-disc pl-4"},Te=["href"],Ce=h({__name:"MetricsNotification",setup(c){const e=k();return(a,i)=>(o(),d("div",Ue,[we,n(),s("ul",xe,[s("li",null,[s("a",{href:`${t(e)("KUMA_DOCS_URL")}/policies/traffic-metrics/?${t(e)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
          Traffic Metrics policy documentation
        `,8,Te)])])]))}}),Ne={class:"py-4"},Re=s("p",{class:"mb-4"},`
      Mutual TLS (mTLS) for communication between all the components
      of your service mesh (services, control plane, data plane proxies), proxy authentication,
      and access control rules in Traffic Permissions policies all contribute to securing your mesh.
    `,-1),Le={class:"list-disc pl-4"},Pe=["href"],Ie=["href"],Ke=["href"],Ee=h({__name:"MtlsNotification",setup(c){const e=k();return(a,i)=>(o(),d("div",Ne,[Re,n(),s("ul",Le,[s("li",null,[s("a",{href:`${t(e)("KUMA_DOCS_URL")}/security/certificates/?${t(e)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
          Secure access across services
        `,8,Pe)]),n(),s("li",null,[s("a",{href:`${t(e)("KUMA_DOCS_URL")}/policies/mutual-tls/?${t(e)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
          Mutual TLS
        `,8,Ie)]),n(),s("li",null,[s("a",{href:`${t(e)("KUMA_DOCS_URL")}/policies/traffic-permissions/?${t(e)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
          Traffic Permissions policy documentation
        `,8,Ke)])])]))}}),Oe={class:"py-4"},Be=s("p",{class:"mb-4"},`
      A traffic trace policy lets you enable tracing logs and a third-party tracing solution to send them to.
    `,-1),De={class:"list-disc pl-4"},Ye=["href"],Qe=h({__name:"TracingNotification",setup(c){const e=k();return(a,i)=>(o(),d("div",Oe,[Be,n(),s("ul",De,[s("li",null,[s("a",{href:`${t(e)("KUMA_DOCS_URL")}/policies/traffic-trace/?${t(e)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
          Traffic Trace policy documentation
        `,8,Ye)])])]))}}),ze={class:"flex items-center"},We=h({__name:"SingleMeshNotifications",setup(c){const e=$(),a={LoggingNotification:Se,MetricsNotification:Ce,MtlsNotification:Ee,TracingNotification:Qe};return(i,p)=>(o(),l(se,{"multiple-open":""},{default:_(()=>[(o(!0),d(E,null,V(t(e).getters["notifications/singleMeshNotificationItems"],r=>(o(),l(te,{key:r.name},{"accordion-header":_(()=>[s("div",ze,[r.isCompleted?(o(),l(t(x),{key:0,color:"var(--green-500)",icon:"check",size:"20",class:"mr-4"})):(o(),l(t(x),{key:1,icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"20",class:"mr-4"})),n(),s("strong",null,b(r.name),1)])]),"accordion-content":_(()=>[r.component?(o(),l(O(a[r.component]),{key:0})):(o(),l(t(X),{key:1},{body:_(()=>[n(b(r.content),1)]),_:2},1024))]),_:2},1024))),128))]),_:1}))}}),je=c=>(I("data-v-ce28c0f7"),c=c(),K(),c),Fe={class:"mr-4"},Ve=je(()=>s("span",{class:"mr-2"},[s("strong",null,"Pro tip:"),n(`

            You might want to adjust your mesh configuration
          `)],-1)),He={key:0},Je={class:"text-xl tracking-wide"},qe={key:1},Ge={class:"text-xl tracking-wide"},Xe=h({__name:"NotificationManager",setup(c){const e=$(),a=A(!0),i=v(()=>e.state.selectedMesh?e.getters["notifications/meshNotificationItemMapWithAction"][e.state.selectedMesh]:!1);P(function(){const M=R.get("hideCheckMeshAlert");a.value=M!=="yes"});function p(){a.value=!1,R.set("hideCheckMeshAlert","yes")}function r(){e.dispatch("notifications/openModal")}function m(){e.dispatch("notifications/closeModal")}return(M,u)=>(o(),d("div",null,[a.value?(o(),l(t(B),{key:0,class:"mb-4",appearance:"info","dismiss-type":"icon","data-testid":"notification-info",onClosed:p},{alertMessage:_(()=>[s("div",Fe,[Ve,n(),f(t(T),{appearance:"outline","data-testid":"open-modal-button",onClick:r},{default:_(()=>[n(`
            Check your mesh!
          `)]),_:1})])]),_:1})):y("",!0),n(),f(t(Z),{class:"modal","is-visible":t(e).state.notifications.isOpen,title:"Notifications","text-align":"left","data-testid":"notification-modal"},{"header-content":_(()=>[s("div",null,[s("div",null,[t(i)?(o(),d("span",He,[n(`
              Some of these features are not enabled for `),s("span",Je,'"'+b(t(e).state.selectedMesh)+'"',1),n(` mesh. Consider implementing them.
            `)])):(o(),d("span",qe,[n(`
              Looks like `),s("span",Ge,'"'+b(t(e).state.selectedMesh)+'"',1),n(` isn't missing any features. Well done!
            `)]))])])]),"body-content":_(()=>[f(We)]),"footer-content":_(()=>[f(t(T),{appearance:"outline","data-testid":"close-modal-button",onClick:m},{default:_(()=>[n(`
          Close
        `)]),_:1})]),_:1},8,["is-visible"])]))}});const Ze=S(Xe,[["__scopeId","data-v-ce28c0f7"]]),et={key:0},tt={key:1,class:"app-content-container"},st={class:"app-main-content"},ot=h({__name:"App",setup(c){const[e,a]=[oe(),ne()],i=$(),p=L(),r=A(i.state.globalLoading),m=v(()=>p.path),M=v(()=>i.getters.shouldShowAppError),u=v(()=>i.getters.shouldShowNotificationManager),D=v(()=>i.getters.shouldShowOnboardingNotification),Y=v(()=>i.getters.getShouldShowBreadcrumbs(p.meta));w(()=>i.state.globalLoading,function(g){r.value=g}),w(()=>p.meta.title,function(g){C(g)}),w(()=>i.state.pageTitle,function(g){C(g)});function C(g){const U="Kuma Manager";document.title=g?`${g} | ${U}`:U}return(g,U)=>{const N=H("router-view");return r.value?(o(),l(he,{key:0})):(o(),d(E,{key:1},[f(t(a)),n(),t(p).meta.onboardingProcess?(o(),d("div",et,[f(N)])):(o(),d("div",tt,[f(t(e)),n(),s("main",st,[t(M)?(o(),l(re,{key:0})):y("",!0),n(),t(u)?(o(),l(Ze,{key:1})):y("",!0),n(),t(D)?(o(),l(be,{key:2})):y("",!0),n(),t(Y)?(o(),l(ae,{key:3})):y("",!0),n(),(o(),l(N,{key:t(m)},{default:_(({Component:Q})=>[f(J,{mode:"out-in",name:"fade"},{default:_(()=>[(o(),d("div",{key:t(p).name,class:"transition-root"},[(o(),l(O(Q)))]))]),_:2},1024)]),_:1}))])]))],64))}}});const pt=S(ot,[["__scopeId","data-v-845563ae"]]);export{pt as default};