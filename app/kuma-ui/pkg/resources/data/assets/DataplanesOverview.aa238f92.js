import{k as O,cj as x,bW as w,c9 as h,c7 as k,cd as e,o as s,i as b,w as l,a as i,c as m,e as p,bV as P,b as _,F as B}from"./index.2d238a59.js";import{L as N}from"./LoadingBox.49616a46.js";import{S as A}from"./StatusBadge.ce20a7cd.js";import{O as S}from"./OnboardingNavigation.8f3c988a.js";import{O as T,a as F}from"./OnboardingPage.a10858c9.js";const H={name:"DataplanesOverview",components:{OnboardingNavigation:S,OnboardingHeading:T,OnboardingPage:F,LoadingBox:N,StatusBadge:A,KTable:x},metaInfo(){return{title:this.title}},data(){return{productName:w,tableHeaders:[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],tableData:{total:0,data:[]},timeout:null}},computed:{title(){return this.tableData.data.length?"Success":"Waiting for DPPs"},description(){return this.tableData.data.length?"The following data plane proxies (DPPs) are connected to the control plane:":null}},created(){this.getAllDataplanes()},beforeUnmount(){clearTimeout(this.timeout)},methods:{async getAllDataplanes(){let r=!1;const c=[];try{const{items:a}=await h.getAllDataplanes({size:10});if(Array.isArray(a))for(const g of a){const{name:t,mesh:n}=g,d=await h.getDataplaneOverviewFromMesh({mesh:n,name:t}),o=k(d.dataplaneInsight);o==="offline"&&(r=!0),c.push({status:o,name:t,mesh:n})}}catch(a){console.error(a)}this.tableData.data=c,this.tableData.total=this.tableData.data.length,r&&(this.timeout=setTimeout(()=>{this.getAllDataplanes()},1e3))}}},I={key:0,class:"justify-center flex my-4"},L={key:1},j={class:"flex justify-center mt-10 mb-16 pb-16"},C={class:"w-full sm:w-3/5 p-4"},K={class:"font-bold mb-4"};function M(r,c,a,g,t,n){const d=e("OnboardingHeading"),o=e("LoadingBox"),f=e("StatusBadge"),v=e("KTable"),D=e("OnboardingNavigation"),y=e("OnboardingPage");return s(),b(y,null,{header:l(()=>[i(d,{title:n.title,description:n.description},null,8,["title","description"])]),content:l(()=>[t.tableData.data.length?(s(),m("div",L,[p("div",j,[p("div",C,[p("p",K,`
              Found `+P(t.tableData.data.length)+` DPPs:
            `,1),_(),i(v,{class:"onboarding-dataplane-table",fetcher:()=>t.tableData,headers:t.tableHeaders,"disable-pagination":"","is-small":""},{status:l(({rowValue:u})=>[u?(s(),b(f,{key:0,status:u},null,8,["status"])):(s(),m(B,{key:1},[_(`
                  \u2014
                `)],64))]),_:1},8,["fetcher","headers"])])])])):(s(),m("div",I,[i(o)]))]),navigation:l(()=>[i(D,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":t.tableData.data.length>0},null,8,["should-allow-next"])]),_:1})}const z=O(H,[["render",M]]);export{z as default};
