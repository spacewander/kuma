import{d as L,f as S,o as e,j as a,u as w,c as B,b as fe,e as n,J as ve,t as p,E as H,i as pe,w as c,n as I,cl as Z,l as A,a as m,F as g,T as Te,cm as $,A as N,C as ee,D as te,K as De,Q as we,r as U,g as X,k as J,q as ae,cz as Be,cy as se,cB as be,y as Pe,cI as Ce,L as ke,z as Ee,ck as Oe,cF as Qe,cG as Ge,cJ as Ie,cH as ze,cv as Ue,p as Me}from"./index.60b0f0ac.js";import{j as Ae}from"./index.58caa11d.js";import{_ as Se}from"./CodeBlock.vue_vue_type_style_index_0_lang.85e36160.js";import{T as oe}from"./TagList.b3d2d71f.js";import{_ as de}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.548da37c.js";import{E as ye}from"./ErrorBlock.2ee4d08e.js";import{_ as me}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.be7e4bb1.js";import{E as Le}from"./EntityStatus.6fc3c7d6.js";import{_ as Re,E as V}from"./EnvoyData.7149ad2a.js";import{_ as le}from"./LabelList.vue_vue_type_style_index_0_lang.bd2c37a0.js";import{T as xe}from"./TabsWidget.5b63a728.js";import{_ as Ye}from"./YamlView.vue_vue_type_script_setup_true_lang.152633f3.js";import{a as Ne,S as He}from"./SubscriptionHeader.5a1c32ae.js";import{W as Fe}from"./WarningsWidget.252ff619.js";import"./_commonjsHelpers.f037b798.js";const qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAVFBMVEXa2tra2tra2tra2tra2tra2tr////a2toAfd6izPLvzPnRfvDYteSKr86zas0Aar4AhODY6vr3+Prx8v2Kv+9aqOk3muUOj+N5t+211vXhqfW01fXvn55GAAAABnRSTlMC9s/Hbhsvz/I3AAABVklEQVRo3u3b3Y6CMBCG4SJYhnV/KD+K7v3f57bN7AFJTcDUmZB+74lH5EmMA5hmjK+pq1awqm5M6HxqxTudPSzssmxM06rUmDp8DFawIYi1qYRdlisTeCtcMAGnAgwYMGDAgJ8GGPDB4B8frepnl9cZH5d1374E7GmX1WVuA0xzTvixA+5zwpc0/OXrVgU5N/yx6tMHGDBgwIABvxmeiBZhmF3fPMjDFLuOSjDdnBJMvVOAb1G+y8PjlUKdOGyHOcpLJniiDfEVC/FYZYA3unxFx2OVAd7sTjZ073msRGB2Yy7KvcsC2z05Hitx2P6PVTEwf9W/h/5xvTBOB76ByN8ydzRRzofELln1schjVNCrTxyjsl5vtV7ol7L+tAEGDLhMWOAw5ADHPxIHXmpHfAWepgJOBBgwYMCAAT8NMGDAgJOw2hKO2tqR2qKV1mqZ3jKd2vrgH/W3idgykdWgAAAAAElFTkSuQmCC",Ke="data:image/png;base64,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",je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAEj0lEQVRoBe1aS28TVxT+7ngydhwnPGISTBKHEB6iUtOWHTvWqCtKqQhISC2vBbCpRDf9BUgsgAWbdlGppWqlSl1UXfMLCmXRqgXUxmCclOCWxI4Tv4Zz7s00BntmLh4rTCSfxJ4755458333fHfuTTQCZFOHTo+ijCs2cAi2nWJfaE2InABuw8Lle7e/eCwYvL2CXwF7a2hBtwQm8iKKdwwe+Y0HnhnRgBN2Q8qmJcPwOxm7EXrNe40jzVfDq38j9HUJvOkqdSvQrUDAEeiIhGaPH8bsyfe1oWQuTuPxhePa8V6BplenTl85tQ2l9A7YMUsnHMsTIyjtm9CK1QkKXIHC3nEI2l3RgqhzPzw/sB/g+A5ZYAKlPTsVFMnCH1Xx3f26XP2TUUQgAuXhJKr9fQqQRgVYPpUtA7IANvQq5sciEIHi7jHKb5OE9DQh5SOvoGs6pKNABJYn06tAaDQ1SLB82DoFnnO1TaA8NIhqIo7IQkFLDI58zPx/WvEMTsfaJlAiPbPF789oiWHxPTX6A3f/kPGdmQEBKlCaGJUE+oiANJ9JvEAEeOL23/ldHvVmjUrt9d1WBSrJLaiRfMzCEqzcU8pPcDzmAMunSk8f699FxP7KqngvVK/R19ZKvDy+Qy5cvQ8z8la2xuhzII8+m9foF9+axOz0YRm3/dbP6PvtoWy7fZm1iIV6tAd1i4+W3BLUrR7Y1Jb+1T7eKqg41ccajj94JPPy4DskaoleZM8cRYmeUGyO1hm0Q6DRz5XMnj2KpV1jTcSYyOTnNzjc1Uw1eCwBpQIFhNWqfvhKCZDPZbCQoGK5eVhz82uJKYjBPDp/DFwhBswZnEcmT3YlnzV/jRbBzKVplFNDTeDXEnu3TLNeBpb44x3o20vksh8fQYU2d1GaF+nr3yBCc6SVOaQyl05gxYm/9rWMf1VCra5v9LU1BxoT/N+mCpSHB2HNzmP05neu4J14ltZKKqnIroLnPta8n2ycHHzsHAGqgPXPM4x8+QOBLzXeo6ntSMsiGaYbwDcFajg6QiA6k0M9EQM/NSJFb/CMqe/PDD0QTKrU976V8uMg3j74ifOg8IsNZX9bC1mYmHQJvOlqBJ7EcUPgw8EELFq5vn1WQKHmPaX6IwIXhzdJ3jfmnmPRJ95vgAJJqJfAf0Tgx3pMpGn7cW5oExIE0M0Y/GepzdgT65EfbrPvVZuKW7g6vlV+uO1lYurgWTtmGHIEo7QYxYhSlM6jlJf9UT6nNvtiBFj5+SjUNeRbrNWpLTBmRSiOc6h8bjfOlquya8TyEQDdN1+t4dOZvFsqXsjU3ob/rqVfMv5iGaijbdORO2ihUlshiqdu5RZ4Uqnix3wRBsWcSiawj/8/xAEqGSd8ye4vV8DS4e3EheEBWYmXAl7zJJTrAMvm1LaEpPLV0wLu8V7NxUJJwAVrS3egSdwy4zo7uwTWecCbbtetQNOQrLPDoOd1bp3v2bnbEXZaN+nFiQ1qjJ3WfFymZdN9rQ4tOcJM2CNzf/+ysH33gVuiLlIkpyTh7Q8tZgbGr9sI8RO9qfIBv27zAiEVYZQrGIvuAAAAAElFTkSuQmCC",Je="data:image/png;base64,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",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB5CAYAAADyOOV3AAAFOklEQVR4Ae2dP2tUQRTFp7S385MofgRFiGBhKr9GuqBiI9iktwosCAnRLo0g8Q+ojSaNBomumESTIAqSLiPTTc4k7+bmztudu3sCAztv7p137/nNebtuREMIIXz9eXBluLO/NNzZe8sxCRrsL23tHlxObMP33b3ZzeHO0edv25FjcjRITBPbsPXj12+CnRywOcvENtC9kwk3gU5sQ048vf7775DDsQbIswAc+eNaAQJ2jU8unoBljVxHELBrfHLxBCxr5DqCgF3jk4snYFkj1xEE7BqfXDwByxq5jiBg1/jk4glY1sh1BAG7xicXT8CyRq4jCNg1Prl4ApY1ch1BwK7xycUTsKyR6wgCdo1PLp6AZY1cRxCwa3xy8QQsa+Q6goBd45OLJ2BZI9cRBOwan1w8AcsauY4gYNf45OIJWNbIdQQBu8YnF0/AskauIwjYNT65eAKWNXIdUQD+c2sm5iPemY2mIcnD/bsVMuqTs0yvQ7wQYtXRXb79XtxfpSEB4wH3foCgHwIGQSS+5qeddAOsxzgPOwsLMR9xsBhNQ2qA+3crZNQnZ5le89/o6Jbb3WrxKRovuOuIBR9TAHnSwcfk8T8hYP8MOzsg4E55/C8SsH+GnR0QcKc8/hcJ2D/Dzg4IuFMe/4sE7J9hZwcE3CmP/8WpAzz7cCnm48bdQaw58r3T63H/TB3gcG0+jnIQ8IgVGCXcdK9x/9DBPTuagEesADr43uBFrDlwf217+B5unV+fX4z5mPjfJiGA95vbsebA/bWAMb/6HJ/Z2gJbj0fBasJNe+H+Wj0wv/qcgG2ORiAErFXAGI8AWnfwo5U30TLmHq/GfPA92PiejAdIex4x33oAl9c+xnwQMAFrz2Rb8bUdgg7D/bXdYz7ur53n7k2v6WA6WHsm24qv7RB0FO6v7R7zcX/tnA42OhYFR0AErFXAGI8AEJB1jvtry8V8az2Fg/PvLdNr63ehmK9tuHZ8bQERAO6vrR/zcX/tvACMN6g91zZcOx770QomxeP+2voxX7qftE7A0/YejCeo9lx7omvHYz+SA7TruL+2fszX3h/jCwfn31um15bvQVMuFqxtGN/DrXOsBwWxznF/bb+Yb62nAIwXrDfAgq0N437WubU/zMd6rP3i/to58gx4QbshxtduGPezzrFe6xzrIWBBARSs9twKFPOxPqG9YhnzcX/tHA3bvIOtnwkwXyuYFI+ACoLCBcyX7ietuwMsNTTudQQk8CyWMd/aDwFP25+Dkbj1BOGJLI6scAHzrfX0nY/1Cu0Vy5hvrRd5Nv8ebG2473wEVBAULmC+tV4C5iO6rb9Gaj3RfeejAwXDFsuYb62XDqaD6WCNi9CBhUWFC5ivufdJsXQwHUwHn+SM066hAwXDFsuYf9p9znqdDqaD6zpY+/vc2if6rCf/vHFY77j7HbmDUQDt/LzCjypP248Ub62bgHt+REsApXUCrgzIKqgETLturad3B+PvX61za8N951v7w3xrvb0DthbIfNuHXAJu7BFf+0ATMAHbHhG1TyT30/Ggg+lg3Ymhw9rSiw6mg9s6kXxC6HjQwXSw7sTQYW3pRQfTwW2dSD4hdDzoYDpYd2LosLb0ooPp4LZOJJ8QOh50MB2sOzF0WFt60cF0cFsnkk8IHQ86mA7WnRg6rC296OBpd/Dqu0+Rw68GhYNXXq4f4UXOj//fQ171SGzD8tr60GsDrFs6iOvDcPP+k5mnrzYOKZYklq/1xDSxDWHmwcWr84NLz15v3H7+4csch38NEsvENLH9DwLs1co+Fv2iAAAAAElFTkSuQmCC",_e=""+new URL("Retry.8b2ec896.png",import.meta.url).href,Ve=""+new URL("Timeout.dcabf0f7.jpg",import.meta.url).href,ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAABYklEQVRoBe2av0oDQRDGZxbRxhfwDRI0NhKtRAhWPkM6Ex9KTOczWElArBRsAuEeIS+QRpvJfJdcqkWRLWYH5or7s7N797v59j4Odph2m4hw//xywsT3JHQqJMddrIajcq2Jaalcs2bx+cTMAi7Grn9xfSI/388kMsJ19RvznA+Pxs3X+yoh867gkV1NNJjBzr3BcKpT5rH6rOcAmR5SO+dzQQdtYE/4YB2w5hGVPdXmNnnSfCvYUz7kpzVewFor9woc/DeDb/OXX4fcjO728b/67jsWnLhXgHtnw/anqCAJpkPdKxAvYDp/9OHhQtYKhAtZKxAuZK1AuJC1AuFC1gqEC1krEC5krUC4kLUC4ULWCoQLWSsQLmStQLhQKFCYAaxSrgvvYTYc7AnL92YEpQ9WdqxSzkrvYzUe7Lwt8rh6dVMn0WVL6yWaxcdtQtUHCidIG7pY9cddsUfL3sF6LbfZAN5wf/+tIkpkAAAAAElFTkSuQmCC",ce="data:image/png;base64,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",Xe="data:image/png;base64,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",re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAEs0lEQVRoBe1azWtUVxQ/781HkslHzQwpDfkQUUpdaHZtaUtTuhACYtC/wI22FHd+bMSlFNSdIhjcddFNKW0pZlfS0BayEdSFqAjRJMbGfBgTZ+JM8p7nd27ezMvkvsy7yUucAS+898479+P8zj3n3nvembGIy8xMttOhwiVy6RuX3HbwqrVYZE2SRUM2Jc5lMqlxaxX8Hdd109UKWofLsqxZVqLHxszXGngoBMzAbsNtdBrWBI+x29Xu8xtNJLDbGzWohbr3CrxrK8W3A4BtW9SYqqdEQg1fKCzT6+wSOY4bubjIFQD41g+ayLZL3hmrS1KSlZmbX4xciZKUiOYGMw/wfz/M0ldXnsgFGjzURV2sfRceF+3KhwPxCYdDQslhml+ImVq54KKlVwv6v7Pd9GFzXIA/f7Ui/T5qidE/Z3bT1MIyfXn5qfRBhb9/ptGmvv11dOLzFCVi0i3ULe560mVEBr/6lN4igW/+Nr5hRU+u8/TlfdlXqychr9QO8tQUTGcd+ul2TmT98EVK31nDtaamX1aWqukYxGpuaqB69nm4zfk/Xkizi0faqPfjFC29ydPCIoPUlH9H83T61gKlUzbdOt6qaaFnRa6AbhFDtOM4FRfxpzdmxNgj32X0aDXcyHchbJXYbTa1jTIa0502cgXUbLuBrqKZxCJrhffEgP2i2Kac2BYFyoWEfmc0pguyqhRwePusaQu4cW9bDW0z2hYLbDYWcmOmDkTRK6DbRsPGQuJC4SdfWm5bLDQ4sURdv07KBbpSLDT8f55c9oc0hxQmxciFCg7RtUdZ+v1ZnqbfOBIz+WMn0HePdhFCtpMjczSe4w6r9NixdprnffLA4CxzAlwlZlF/d530CXszUuDq4yzdfLqkgh+eKMDwLzuhA+ImAEIc5LCfl3YaNFajtNXZ1N+epFN7w8dBGNNIgd+m8gJgoKeFvs4k0H9daeZEDcrAZ61iBY/GcxfX3T8UPkxAn0rFKBb6ZHhW3OZBbzAI3SIGiDCxUCWwunojCzichPHZXzeefHFtOhbSjrgx00gBHDRhCgK6oLA5TH+TNkYKYAFWWzFSgOSory4VjBRQFgjnRjulptGxJ8FWiA9u7ET4tEy3NssFGrytlO9fLNLMynoXNlOAW1daB942iu/iGKdScIFWuaLNK/FnNk/fTr4kPP3FSIG2es7Gs9P99brgH2MN7eWFBl/lqOv+hFygK8VCawYJeIEFYAm/NYwOsh/ncnR9PldMo3hhgHpCqkWjB7uoPRkX4OMFlRfq5ETP2P4Omswv0557Y3IYKoywiAolpDe/+tNQHi1pm7KpznDcdDHdaBZKnNnVwPGMS78s5mlqhUMGBDUiX7mGCFKkwld+R/PVSwDzrQSf3ZPfMaQKRvCCrBEz+Mm/jaHLumJkgXW9NQwvLwS3OTmByJPjoo409bU0bJgX0gy1htX5RI0F5uFUUmYfVjDaRteMGPCCLDQSuQA81tJRbIVYCHVbKZ7bQAGvRK7AlvJCHirN0z/r/urIXcg/+E7QZWt7J0RGK+O9AtHOp/loHKHwfw9qtAC7zefDUI3i5wOOhmr/zx74ywr+9cE5nZ9rwZ2AEViBGdjfAhPs4mowdpbkAAAAAElFTkSuQmCC",Ze=""+new URL("VirtualOutbound.3bb05b70.png",import.meta.url).href,$e={class:"policy-type-tag"},et=["src"],tt=L({__name:"PolicyTypeTag",props:{policyType:{type:String,required:!0}},setup(o){const s=o,Q={CircuitBreaker:{iconUrl:qe},FaultInjection:{iconUrl:Ke},HealthCheck:{iconUrl:je},MeshAccessLog:{iconUrl:ie},MeshGateway:{iconUrl:null},MeshGatewayRoute:{iconUrl:null},MeshTrace:{iconUrl:re},MeshTrafficPermission:{iconUrl:ce},ProxyTemplate:{iconUrl:Je},RateLimit:{iconUrl:We},Retry:{iconUrl:_e},Timeout:{iconUrl:Ve},TrafficLog:{iconUrl:ie},TrafficPermission:{iconUrl:ce},TrafficRoute:{iconUrl:Xe},TrafficTrace:{iconUrl:re},VirtualOutbound:{iconUrl:Ze}},T=S(()=>Q[s.policyType]);return(f,v)=>(e(),a("span",$e,[w(T).iconUrl!==null?(e(),a("img",{key:0,class:"policy-type-tag-icon",src:w(T).iconUrl,alt:""},null,8,et)):(e(),B(w(fe),{key:1,icon:"brain",size:"24"})),n(),ve(f.$slots,"default",{},()=>[n(p(s.policyType),1)],!0)]))}});const at=H(tt,[["__scopeId","data-v-d24cd305"]]),nt={class:"policy-list"},st={key:0,class:"origin-list"},At=L({__name:"PolicyTypeEntryList",props:{id:{type:String,required:!1,default:"entry-list"},policyTypeEntries:{type:Object,required:!0}},setup(o){const s=o,Q=[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origins",key:"origins"}];function T({headerKey:f}){return{class:`cell-${f}`}}return(f,v)=>{const D=pe("router-link");return e(),B($,{"initially-open":[],"multiple-open":""},{default:c(()=>[(e(!0),a(g,null,I(s.policyTypeEntries,(d,E)=>(e(),B(Z,{key:E},{"accordion-header":c(()=>[A("h3",null,[m(at,{"policy-type":d.type},{default:c(()=>[n(p(d.type)+" ("+p(d.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":c(()=>[A("div",nt,[m(w(Te),{class:"policy-type-table",fetcher:()=>({data:d.connections,total:d.connections.length}),headers:Q,"cell-attrs":T,"disable-pagination":"","is-clickable":""},{sourceTags:c(({rowValue:l})=>[Array.isArray(l)&&l.length>0?(e(),B(oe,{key:0,class:"tag-list",tags:l},null,8,["tags"])):(e(),a(g,{key:1},[n(`
                \u2014
              `)],64))]),destinationTags:c(({rowValue:l})=>[Array.isArray(l)&&l.length>0?(e(),B(oe,{key:0,class:"tag-list",tags:l},null,8,["tags"])):(e(),a(g,{key:1},[n(`
                \u2014
              `)],64))]),name:c(({rowValue:l})=>[l!==null?(e(),a(g,{key:0},[n(p(l),1)],64)):(e(),a(g,{key:1},[n(`
                \u2014
              `)],64))]),origins:c(({rowValue:l})=>[l.length>0?(e(),a("div",st,[(e(!0),a(g,null,I(l,(b,q)=>(e(),B(D,{key:`${E}-${q}`,to:b.route},{default:c(()=>[n(p(b.name),1)]),_:2},1032,["to"]))),128))])):(e(),a(g,{key:1},[n(`
                \u2014
              `)],64))]),config:c(({rowValue:l,rowKey:b})=>[l!==null?(e(),B(Se,{key:0,id:`${s.id}-${E}-${b}-code-block`,code:l,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(e(),a(g,{key:1},[n(`
                \u2014
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const ue=H(At,[["__scopeId","data-v-8bc102ca"]]),he=o=>(ee("data-v-e9f9fe56"),o=o(),te(),o),ot=he(()=>A("h2",{class:"visually-hidden"},`
    Policies
  `,-1)),lt={key:0,class:"mt-2"},it=he(()=>A("h2",null,"Rules",-1)),ct=L({__name:"SidecarDataplanePolicyList",props:{dppName:{type:String,required:!0},policyTypeEntries:{type:Object,required:!0},policyTypeEntriesFromRules:{type:Array,required:!0}},setup(o){const s=o;return(Q,T)=>(e(),a(g,null,[ot,n(),m(ue,{id:"policies","policy-type-entries":s.policyTypeEntries},null,8,["policy-type-entries"]),n(),o.policyTypeEntriesFromRules.length>0?(e(),a("div",lt,[it,n(),m(ue,{id:"rules","policy-type-entries":s.policyTypeEntriesFromRules},null,8,["policy-type-entries"])])):N("",!0)],64))}});const rt=H(ct,[["__scopeId","data-v-e9f9fe56"]]),F=o=>(ee("data-v-66a856b3"),o=o(),te(),o),ut={class:"mesh-gateway-policy-list"},pt=F(()=>A("h3",null,"Gateway policies",-1)),dt={key:0,class:"policy-list"},yt=F(()=>A("h3",{class:"mt-6"},`
      Listeners
    `,-1)),mt=F(()=>A("b",null,"Host",-1)),ht=F(()=>A("h4",{class:"mt-2"},`
              Routes
            `,-1)),gt={class:"dataplane-policy-header"},ft=F(()=>A("b",null,"Route",-1)),vt=F(()=>A("b",null,"Service",-1)),Tt={key:0,class:"badge-list"},Dt={class:"policy-list mt-1"},wt=L({__name:"MeshGatewayDataplanePolicyList",props:{meshGatewayDataplane:{type:Object,required:!0},meshGatewayListenerEntries:{type:Array,required:!0},meshGatewayRoutePolicies:{type:Array,required:!0}},setup(o){const s=o;return(Q,T)=>{const f=pe("router-link");return e(),a("div",ut,[pt,n(),o.meshGatewayRoutePolicies.length>0?(e(),a("ul",dt,[(e(!0),a(g,null,I(o.meshGatewayRoutePolicies,(v,D)=>(e(),a("li",{key:D},[A("span",null,p(v.type),1),n(`:

        `),m(f,{to:v.route},{default:c(()=>[n(p(v.name),1)]),_:2},1032,["to"])]))),128))])):N("",!0),n(),yt,n(),A("div",null,[(e(!0),a(g,null,I(s.meshGatewayListenerEntries,(v,D)=>(e(),a("div",{key:D},[A("div",null,[A("div",null,[mt,n(": "+p(v.hostName)+":"+p(v.port)+" ("+p(v.protocol)+`)
          `,1)]),n(),v.routeEntries.length>0?(e(),a(g,{key:0},[ht,n(),m($,{"initially-open":[],"multiple-open":""},{default:c(()=>[(e(!0),a(g,null,I(v.routeEntries,(d,E)=>(e(),B(Z,{key:E},De({"accordion-header":c(()=>[A("div",gt,[A("div",null,[A("div",null,[ft,n(": "),m(f,{to:d.route},{default:c(()=>[n(p(d.routeName),1)]),_:2},1032,["to"])]),n(),A("div",null,[vt,n(": "+p(d.service),1)])]),n(),d.policies.length>0?(e(),a("div",Tt,[(e(!0),a(g,null,I(d.policies,(l,b)=>(e(),B(w(we),{key:`${D}-${b}`},{default:c(()=>[n(p(l.type),1)]),_:2},1024))),128))])):N("",!0)])]),_:2},[d.policies.length>0?{name:"accordion-content",fn:c(()=>[A("ul",Dt,[(e(!0),a(g,null,I(d.policies,(l,b)=>(e(),a("li",{key:`${D}-${b}`},[n(p(l.type)+`:

                      `,1),m(f,{to:l.route},{default:c(()=>[n(p(l.name),1)]),_:2},1032,["to"])]))),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):N("",!0)])]))),128))])])}}});const Bt=H(wt,[["__scopeId","data-v-66a856b3"]]),bt={key:2,class:"policies-list"},Pt={key:3,class:"policies-list"},Ct=L({__name:"DataplanePolicies",props:{dataPlane:{type:Object,required:!0}},setup(o){const s=o,Q=ae(),T=U(null),f=U([]),v=U([]),D=U([]),d=U([]),E=U(!0),l=U(null);X(()=>s.dataPlane.name,function(){b()}),b();async function b(){var t,u;l.value=null,E.value=!0,f.value=[],v.value=[],D.value=[],d.value=[];try{if(((u=(t=s.dataPlane.networking.gateway)==null?void 0:t.type)==null?void 0:u.toUpperCase())==="BUILTIN")T.value=await J.getMeshGatewayDataplane({mesh:s.dataPlane.mesh,name:s.dataPlane.name}),D.value=q(T.value),d.value=W(T.value.policies);else{const{items:r}=await J.getSidecarDataplanePolicies({mesh:s.dataPlane.mesh,name:s.dataPlane.name});f.value=_(r!=null?r:[]);const{items:y}=await J.getDataplaneRules({mesh:s.dataPlane.mesh,name:s.dataPlane.name});v.value=C(y!=null?y:[])}}catch(i){i instanceof Error?l.value=i:console.error(i)}finally{E.value=!1}}function q(t){const u=[];for(const i of t.listeners)for(const r of i.hosts)for(const y of r.routes){const O=[];for(const z of y.destinations){const M=W(z.policies),k={routeName:y.route,route:{name:"meshgatewayroutes",params:{mesh:t.gateway.mesh},query:{ns:y.route}},service:z.tags["kuma.io/service"],policies:M};O.push(k)}u.push({protocol:i.protocol,port:i.port,hostName:r.hostName,routeEntries:O})}return u}function W(t){if(t===void 0)return[];const u=[];for(const i of Object.values(t)){const r=Q.state.policiesByType[i.type];u.push({type:i.type,name:i.name,route:{name:r.path,params:{mesh:i.mesh},query:{ns:i.name}}})}return u}function _(t){const u=new Map;for(const r of t){const{type:y,service:O}=r,z=typeof O=="string"&&O!==""?[{label:"kuma.io/service",value:O}]:null,M=y==="inbound"||y==="outbound"?r.name:null;for(const[k,R]of Object.entries(r.matchedPolicies)){u.has(k)||u.set(k,{type:k,connections:[]});const x=u.get(k),Y=Q.state.policiesByType[k];for(const ne of R){const G=P(ne,Y,r,z,M);x.connections.push(...G)}}}const i=Array.from(u.values());return i.sort((r,y)=>r.type.localeCompare(y.type)),i}function P(t,u,i,r,y){const O=t.conf&&Object.keys(t.conf).length>0?Ae(JSON.stringify(t.conf,null,2)):null,M=[{name:t.name,route:{name:u.path,query:{ns:t.name},params:{mesh:t.mesh}}}],k=[];if(i.type==="inbound"&&Array.isArray(t.sources))for(const{match:R}of t.sources){const Y={sourceTags:[{label:"kuma.io/service",value:R["kuma.io/service"]}],destinationTags:r,name:y,config:O,origins:M};k.push(Y)}else{const x={sourceTags:null,destinationTags:r,name:y,config:O,origins:M};k.push(x)}return k}function C(t){const u=new Map;for(const r of t){u.has(r.policyType)||u.set(r.policyType,{type:r.policyType,connections:[]});const y=u.get(r.policyType),O=Q.state.policiesByType[r.policyType],z=h(r,O);y.connections.push(...z)}const i=Array.from(u.values());return i.sort((r,y)=>r.type.localeCompare(y.type)),i}function h(t,u){const{type:i,service:r,subset:y,conf:O}=t,z=y?Object.entries(y):[];let M,k;if(i==="clientSubset"){const G=z.length>0?z:[["kuma.io/service","*"]];M=G.length>0?G.map(([K,j])=>({label:K,value:j})):null}else M=null;if(typeof r=="string"&&r!==""){const G=[["kuma.io/service",r]];k=G.length>0?G.map(([K,j])=>({label:K,value:j})):null}else if(i==="destinationSubset"){const G=z.length>0?z:[["kuma.io/service","*"]];k=G.length>0?G.map(([K,j])=>({label:K,value:j})):null}else k=null;const R=i==="clientSubset"||i==="destinationSubset"||r?t.name:null,x=O&&Object.keys(O).length>0?Ae(JSON.stringify(O,null,2)):null,Y=[];for(const G of t.origins)Y.push({name:G.name,route:{name:u.path,query:{ns:G.name},params:{mesh:G.mesh}}});return[{sourceTags:M,destinationTags:k,name:R,config:x,origins:Y}]}return(t,u)=>E.value?(e(),B(me,{key:0})):l.value!==null?(e(),B(ye,{key:1,error:l.value},null,8,["error"])):f.value.length>0?(e(),a("div",bt,[m(rt,{"dpp-name":o.dataPlane.name,"policy-type-entries":f.value,"policy-type-entries-from-rules":v.value},null,8,["dpp-name","policy-type-entries","policy-type-entries-from-rules"])])):D.value.length>0&&T.value!==null?(e(),a("div",Pt,[m(Bt,{"mesh-gateway-dataplane":T.value,"mesh-gateway-listener-entries":D.value,"mesh-gateway-route-policies":d.value},null,8,["mesh-gateway-dataplane","mesh-gateway-listener-entries","mesh-gateway-route-policies"])])):(e(),B(de,{key:4}))}});const kt=H(Ct,[["__scopeId","data-v-91c758e1"]]),ge=o=>(ee("data-v-b3b88350"),o=o(),te(),o),Et={key:0},Ot={key:1},Qt=ge(()=>A("h4",null,"Tags",-1)),Gt=ge(()=>A("h4",null,"Versions",-1)),It={class:"config-wrapper"},zt={key:0},Ut=["href"],Mt=L({__name:"DataPlaneDetails",props:{dataPlane:{type:Object,required:!0},dataPlaneOverview:{type:Object,required:!0}},setup(o){const s=o,Q=ae(),T=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"DPP Insights"},{hash:"#dpp-policies",title:"Policies"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"},{hash:"#mtls",title:"Certificate Insights"},{hash:"#warnings",title:"Warnings"}],f=U([]),v=S(()=>{const{type:P,name:C,mesh:h}=s.dataPlane,t=Be(s.dataPlane,s.dataPlaneOverview.dataplaneInsight);return{type:P,name:C,mesh:h,status:t}}),D=S(()=>se(s.dataPlane)),d=S(()=>be(s.dataPlaneOverview.dataplaneInsight)),E=S(()=>Pe(s.dataPlane)),l=S(()=>Ce(s.dataPlaneOverview)),b=S(()=>{var C,h;const P=Array.from((h=(C=s.dataPlaneOverview.dataplaneInsight)==null?void 0:C.subscriptions)!=null?h:[]);return P.reverse(),P}),q=S(()=>{const P=Q.getters["config/getKumaDocsVersion"];return P!==null?P:"latest"}),W=S(()=>f.value.length===0?T.filter(P=>P.hash!=="#warnings"):T);function _(){var t,u;const P=(u=(t=s.dataPlaneOverview.dataplaneInsight)==null?void 0:t.subscriptions)!=null?u:[];if(P.length===0||!("version"in P[0]))return;const C=P[0].version;if(C&&C.kumaDp&&C.envoy){const i=Qe(C);i.kind!==Ge&&i.kind!==Ie&&f.value.push(i)}Q.getters["config/getMulticlusterStatus"]&&C&&se(s.dataPlane).find(y=>y.label===ze)&&typeof C.kumaDp.kumaCpCompatible=="boolean"&&!C.kumaDp.kumaCpCompatible&&f.value.push({kind:Ue,payload:{kumaDp:C.kumaDp.version}})}return _(),(P,C)=>(e(),B(xe,{tabs:w(W),"initial-tab-override":"overview"},{tabHeader:c(()=>[A("div",null,[A("h1",null,`
          DPP: `+p(o.dataPlane.name),1)])]),overview:c(()=>[m(le,null,{default:c(()=>[A("div",null,[A("ul",null,[(e(!0),a(g,null,I(w(v),(h,t)=>(e(),a("li",{key:t},[A("h4",null,p(t),1),n(),t==="status"&&typeof h!="string"?(e(),a("div",Et,[m(Le,{status:h.status},null,8,["status"]),n(),(e(!0),a(g,null,I(h.reason,(u,i)=>(e(),a("div",{key:i,class:"reason"},p(u),1))),128))])):(e(),a("div",Ot,p(h),1))]))),128))])]),n(),A("div",null,[w(D).length>0?(e(),a(g,{key:0},[Qt,n(),A("p",null,[(e(!0),a(g,null,I(w(D),(h,t)=>(e(),a("span",{key:t,class:"tag-cols"},[A("span",null,p(h.label)+`:
                `,1),n(),A("span",null,p(h.value),1)]))),128))])],64)):N("",!0),n(),w(d)?(e(),a(g,{key:1},[Gt,n(),A("p",null,[(e(!0),a(g,null,I(w(d),(h,t)=>(e(),a("span",{key:t,class:"tag-cols"},[A("span",null,p(t)+`:
                `,1),n(),A("span",null,p(h),1)]))),128))])],64)):N("",!0)])]),_:1}),n(),A("div",It,[m(Ye,{id:"code-block-data-plane",content:w(E),"is-searchable":""},null,8,["content"])])]),insights:c(()=>[m(Re,{"is-empty":w(b).length===0},{default:c(()=>[m(w(ke),{"border-variant":"noBorder"},{body:c(()=>[m($,{"initially-open":0},{default:c(()=>[(e(!0),a(g,null,I(w(b),(h,t)=>(e(),B(Z,{key:t},{"accordion-header":c(()=>[m(Ne,{details:h},null,8,["details"])]),"accordion-content":c(()=>[m(He,{details:h,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["is-empty"])]),"dpp-policies":c(()=>[m(kt,{"data-plane":o.dataPlane},null,8,["data-plane"])]),"xds-configuration":c(()=>[m(V,{"data-path":"xds",mesh:o.dataPlane.mesh,"dpp-name":o.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),"envoy-stats":c(()=>[m(V,{"data-path":"stats",mesh:o.dataPlane.mesh,"dpp-name":o.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),"envoy-clusters":c(()=>[m(V,{"data-path":"clusters",mesh:o.dataPlane.mesh,"dpp-name":o.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),mtls:c(()=>[m(le,null,{default:c(()=>[w(l)!==null?(e(),a("ul",zt,[(e(!0),a(g,null,I(w(l),(h,t)=>(e(),a("li",{key:t},[A("h4",null,p(h.label),1),n(),A("p",null,p(h.value),1)]))),128))])):(e(),B(w(Ee),{key:1,appearance:"danger"},{alertMessage:c(()=>[n(`
            This data plane proxy does not yet have mTLS configured \u2014
            `),A("a",{href:`https://kuma.io/docs/${w(q)}/policies/mutual-tls/`,class:"external-link",target:"_blank"},`
              Learn About Certificates in `+p(w(Oe)),9,Ut)]),_:1}))]),_:1})]),warnings:c(()=>[m(Fe,{warnings:f.value},null,8,["warnings"])]),_:1},8,["tabs"]))}});const St=H(Mt,[["__scopeId","data-v-b3b88350"]]),Lt={class:"component-frame"},$t=L({__name:"DataPlaneDetailView",setup(o){const s=Me(),Q=ae(),T=U(null),f=U(null),v=U(!0),D=U(null);async function d(){D.value=null,v.value=!0;const E=s.params.mesh,l=s.params.dataPlane;try{T.value=await J.getDataplaneFromMesh({mesh:E,name:l}),f.value=await J.getDataplaneOverviewFromMesh({mesh:E,name:l})}catch(b){T.value=null,b instanceof Error?D.value=b:console.error(b)}finally{v.value=!1}}return X(()=>s.params.mesh,function(){s.name==="data-plane-detail-view"&&d()}),X(()=>s.params.dataPlane,function(){s.name==="data-plane-detail-view"&&d()}),d(),Q.dispatch("updatePageTitle",s.params.dataPlane),(E,l)=>(e(),a("div",Lt,[v.value?(e(),B(me,{key:0})):D.value!==null?(e(),B(ye,{key:1,error:D.value},null,8,["error"])):T.value===null||f.value===null?(e(),B(de,{key:2})):(e(),B(St,{key:3,"data-plane":T.value,"data-plane-overview":f.value},null,8,["data-plane","data-plane-overview"]))]))}});export{$t as default};