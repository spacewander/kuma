import{d as v,am as m,m as i,P as y,o as c,c as l,p as A,r as s,f as h,e as b,w as x,v as O,an as I,n as L,_ as p,ao as g}from"./index-70fb4e48.js";const $=["aria-expanded"],B={key:0,class:"accordion-item-content","data-testid":"accordion-item-content"},C=v({__name:"AccordionItem",setup(r){const e=m("parentAccordion"),t=i(null),n=y(()=>e===void 0?!1:e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.includes(t.value):t.value===e.active.value);e!==void 0&&(t.value=e.count.value++);function o(){n.value?u():_()}function u(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.splice(e.active.value.indexOf(t.value),1):e.active.value=null)}function _(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.push(t.value):e.active.value=t.value)}function d(a){a instanceof HTMLElement&&(a.style.height=`${a.scrollHeight}px`)}function f(a){a instanceof HTMLElement&&(a.style.height="auto")}return(a,k)=>(c(),l("li",{class:L(["accordion-item",{active:n.value}])},[A("button",{class:"accordion-item-header",type:"button","aria-expanded":n.value?"true":"false","data-testid":"accordion-item-button",onClick:o},[s(a.$slots,"accordion-header",{},void 0,!0)],8,$),h(),b(I,{name:"accordion",onEnter:d,onAfterEnter:f,onBeforeLeave:d},{default:x(()=>[n.value?(c(),l("div",B,[s(a.$slots,"accordion-content",{},void 0,!0)])):O("",!0)]),_:3})],2))}});const V=p(C,[["__scopeId","data-v-53a0b6ce"]]),E={class:"accordion-list"},N=v({__name:"AccordionList",props:{initiallyOpen:{type:[Number,Array],required:!1,default:null},multipleOpen:{type:Boolean,required:!1,default:!1}},setup(r){const e=r,t=i(0),n=i(e.initiallyOpen!==null?e.initiallyOpen:e.multipleOpen?[]:null);return g("parentAccordion",{multipleOpen:e.multipleOpen,active:n,count:t}),(o,u)=>(c(),l("ul",E,[s(o.$slots,"default",{},void 0,!0)]))}});const w=p(N,[["__scopeId","data-v-bdbadd5e"]]);export{V as A,w as a};
