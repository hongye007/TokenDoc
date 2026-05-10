const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.CtKyyCD3.js","assets/chunks/framework.oFDsBAuP.js"])))=>i.map(i=>d[i]);
import{d as y,c as u,r as d,n as x,o as s,a as F,t as R,b as P,w as f,T as $e,e as h,_ as S,u as Pe,i as Ye,f as Qe,g as se,h as _,j as r,k as l,l as Q,m as _e,p as A,q as U,s as ce,v as G,x as Z,y as Te,z as Ze,A as et,F as V,B as j,C as ee,D as ue,E as k,G as xe,H as z,I as Ve,J as te,K as X,L as de,M as tt,N as Be,O as ye,P as Se,Q as qe,R as pe,S as nt,U as ot,V as at,W as Me,X as De,Y as st,Z as rt,$ as it,a0 as je,a1 as lt,a2 as Ue,a3 as oe,a4 as Ee,a5 as fe}from"./framework.oFDsBAuP.js";const ct=y({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(s(),u("span",{class:x(["VPBadge",e.type])},[d(t.$slots,"default",{},()=>[F(R(e.text),1)])],2))}}),ut={key:0,class:"VPBackdrop"},dt=y({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(s(),P($e,{name:"fade"},{default:f(()=>[e.show?(s(),u("div",ut)):h("",!0)]),_:1}))}}),pt=S(dt,[["__scopeId","data-v-c79a1216"]]),O=Pe;function mt(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function ge(e){return e.startsWith("/")?e:`/${e}`}function we(e){const{pathname:t,search:n,hash:o,protocol:a}=new URL(e,"http://a.com");if(Ye(e)||e.startsWith("#")||!a.startsWith("http")||!Qe(t))return e;const{site:i}=O(),c=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${n}${o}`);return se(c)}function re({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:a,hash:i}=O(),c=_(()=>{var m,T;return{label:(m=t.value.locales[n.value])==null?void 0:m.label,link:((T=t.value.locales[n.value])==null?void 0:T.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:_(()=>Object.entries(t.value.locales).flatMap(([m,T])=>c.value.label===T.label?[]:{text:T.label,link:ft(T.link||(m==="root"?"/":`/${m}/`),a.value.i18nRouting!==!1&&e,o.value.relativePath.slice(c.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:c}}function ft(e,t,n,o){return t?e.replace(/\/$/,"")+ge(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const ht={class:"NotFound"},vt={class:"code"},_t={class:"title"},yt={class:"quote"},gt={class:"action"},kt=["href","aria-label"],bt=y({__name:"NotFound",setup(e){const{theme:t}=O(),{currentLang:n}=re();return(o,a)=>{var i,c,p,m,T;return s(),u("div",ht,[r("p",vt,R(((i=l(t).notFound)==null?void 0:i.code)??"404"),1),r("h1",_t,R(((c=l(t).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=r("div",{class:"divider"},null,-1)),r("blockquote",yt,R(((p=l(t).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),r("div",gt,[r("a",{class:"link",href:l(se)(l(n).link),"aria-label":((m=l(t).notFound)==null?void 0:m.linkLabel)??"go to home"},R(((T=l(t).notFound)==null?void 0:T.linkText)??"Take me home"),9,kt)])])}}}),$t=S(bt,[["__scopeId","data-v-d6be1790"]]);function Fe(e,t){if(Array.isArray(e))return ie(e);if(e==null)return[];t=ge(t);const n=Object.keys(e).sort((a,i)=>i.split("/").length-a.split("/").length).find(a=>t.startsWith(ge(a))),o=n?e[n]:[];return Array.isArray(o)?ie(o):ie(o.items,o.base)}function Pt(e){const t=[];let n=0;for(const o in e){const a=e[o];if(a.items){n=t.push(a);continue}t[n]||t.push({items:[]}),t[n].items.push(a)}return t}function Tt(e){const t=[];function n(o){for(const a of o)a.text&&a.link&&t.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(e),t}function ke(e,t){return Array.isArray(t)?t.some(n=>ke(e,n)):Q(e,t.link)?!0:t.items?ke(e,t.items):!1}function ie(e,t){return[...e].map(n=>{const o={...n},a=o.base||t;return a&&o.link&&(o.link=a+o.link),o.items&&(o.items=ie(o.items,a)),o})}function K(){const{frontmatter:e,page:t,theme:n}=O(),o=_e("(min-width: 960px)"),a=A(!1),i=_(()=>{const H=n.value.sidebar,M=t.value.relativePath;return H?Fe(H,M):[]}),c=A(i.value);U(i,(H,M)=>{JSON.stringify(H)!==JSON.stringify(M)&&(c.value=i.value)});const p=_(()=>e.value.sidebar!==!1&&c.value.length>0&&e.value.layout!=="home"),m=_(()=>T?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),T=_(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),b=_(()=>p.value&&o.value),v=_(()=>p.value?Pt(c.value):[]);function w(){a.value=!0}function $(){a.value=!1}function L(){a.value?$():w()}return{isOpen:a,sidebar:c,sidebarGroups:v,hasSidebar:p,hasAside:T,leftAside:m,isSidebarEnabled:b,open:w,close:$,toggle:L}}function St(e,t){let n;ce(()=>{n=e.value?document.activeElement:void 0}),G(()=>{window.addEventListener("keyup",o)}),Z(()=>{window.removeEventListener("keyup",o)});function o(a){a.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function wt(e){const{page:t,hash:n}=O(),o=A(!1),a=_(()=>e.value.collapsed!=null),i=_(()=>!!e.value.link),c=A(!1),p=()=>{c.value=Q(t.value.relativePath,e.value.link)};U([t,e,n],p),G(p);const m=_(()=>c.value?!0:e.value.items?ke(t.value.relativePath,e.value.items):!1),T=_(()=>!!(e.value.items&&e.value.items.length));ce(()=>{o.value=!!(a.value&&e.value.collapsed)}),Te(()=>{(c.value||m.value)&&(o.value=!1)});function b(){a.value&&(o.value=!o.value)}return{collapsed:o,collapsible:a,isLink:i,isActiveLink:c,hasActiveLink:m,hasChildren:T,toggle:b}}function Lt(){const{hasSidebar:e}=K(),t=_e("(min-width: 960px)"),n=_e("(min-width: 1280px)");return{isAsideEnabled:_(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const At=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,be=[];function ze(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Le(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{element:n,title:Ct(n),link:"#"+n.id,level:o}});return Ot(t,e)}function Ct(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(At.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Ot(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return It(e,o,a)}function Rt(e,t){const{isAsideEnabled:n}=Lt(),o=mt(i,100);let a=null;G(()=>{requestAnimationFrame(i),window.addEventListener("scroll",o)}),Ze(()=>{c(location.hash)}),Z(()=>{window.removeEventListener("scroll",o)});function i(){if(!n.value)return;const p=window.scrollY,m=window.innerHeight,T=document.body.offsetHeight,b=Math.abs(p+m-T)<1,v=be.map(({element:$,link:L})=>({link:L,top:Et($)})).filter(({top:$})=>!Number.isNaN($)).sort(($,L)=>$.top-L.top);if(!v.length){c(null);return}if(p<1){c(null);return}if(b){c(v[v.length-1].link);return}let w=null;for(const{link:$,top:L}of v){if(L>p+et()+4)break;w=$}c(w)}function c(p){a&&a.classList.remove("active"),p==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const m=a;m?(m.classList.add("active"),t.value.style.top=m.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Et(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function It(e,t,n){be.length=0;const o=[],a=[];return e.forEach(i=>{const c={...i,children:[]};let p=a[a.length-1];for(;p&&p.level>=c.level;)a.pop(),p=a[a.length-1];if(c.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){a.push({level:c.level,shouldIgnore:!0});return}c.level>n||c.level<t||(be.push({element:c.element,link:c.link}),p?p.children.push(c):o.push(c),a.push(c))}),o}const Ht=["href","title"],Nt=y({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const o=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(o));a==null||a.focus({preventScroll:!0})}return(n,o)=>{const a=ee("VPDocOutlineItem",!0);return s(),u("ul",{class:x(["VPDocOutlineItem",e.root?"root":"nested"])},[(s(!0),u(V,null,j(e.headers,({children:i,link:c,title:p})=>(s(),u("li",null,[r("a",{class:"outline-link",href:c,onClick:t,title:p},R(p),9,Ht),i!=null&&i.length?(s(),P(a,{key:0,headers:i},null,8,["headers"])):h("",!0)]))),256))],2)}}}),We=S(Nt,[["__scopeId","data-v-b933a997"]]),xt={class:"content"},Vt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Bt=y({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=O(),o=xe([]);ue(()=>{o.value=Le(t.value.outline??n.value.outline)});const a=A(),i=A();return Rt(a,i),(c,p)=>(s(),u("nav",{"aria-labelledby":"doc-outline-aria-label",class:x(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:a},[r("div",xt,[r("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),r("div",Vt,R(l(ze)(l(n))),1),k(We,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),qt=S(Bt,[["__scopeId","data-v-a5bbad30"]]),Mt={class:"VPDocAsideCarbonAds"},Dt=y({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,o)=>(s(),u("div",Mt,[k(l(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),jt={class:"VPDocAside"},Ut=y({__name:"VPDocAside",setup(e){const{theme:t}=O();return(n,o)=>(s(),u("div",jt,[d(n.$slots,"aside-top",{},void 0,!0),d(n.$slots,"aside-outline-before",{},void 0,!0),k(qt),d(n.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=r("div",{class:"spacer"},null,-1)),d(n.$slots,"aside-ads-before",{},void 0,!0),l(t).carbonAds?(s(),P(Dt,{key:0,"carbon-ads":l(t).carbonAds},null,8,["carbon-ads"])):h("",!0),d(n.$slots,"aside-ads-after",{},void 0,!0),d(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Ft=S(Ut,[["__scopeId","data-v-3f215769"]]);function zt(){const{theme:e,page:t}=O();return _(()=>{const{text:n="Edit this page",pattern:o=""}=e.value.editLink||{};let a;return typeof o=="function"?a=o(t.value):a=o.replace(/:path/g,t.value.filePath),{url:a,text:n}})}function Wt(){const{page:e,theme:t,frontmatter:n}=O();return _(()=>{var T,b,v,w,$,L,H,M;const o=Fe(t.value.sidebar,e.value.relativePath),a=Tt(o),i=Gt(a,E=>E.link.replace(/[?#].*$/,"")),c=i.findIndex(E=>Q(e.value.relativePath,E.link)),p=((T=t.value.docFooter)==null?void 0:T.prev)===!1&&!n.value.prev||n.value.prev===!1,m=((b=t.value.docFooter)==null?void 0:b.next)===!1&&!n.value.next||n.value.next===!1;return{prev:p?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((v=i[c-1])==null?void 0:v.docFooterText)??((w=i[c-1])==null?void 0:w.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??(($=i[c-1])==null?void 0:$.link)},next:m?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((L=i[c+1])==null?void 0:L.docFooterText)??((H=i[c+1])==null?void 0:H.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((M=i[c+1])==null?void 0:M.link)}}})}function Gt(e,t){const n=new Set;return e.filter(o=>{const a=t(o);return n.has(a)?!1:n.add(a)})}const W=y({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=_(()=>t.tag??(t.href?"a":"span")),o=_(()=>t.href&&Ve.test(t.href)||t.target==="_blank");return(a,i)=>(s(),P(z(n.value),{class:x(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?l(we)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:f(()=>[d(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Kt={class:"VPLastUpdated"},Jt=["datetime"],Xt=y({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:o}=O(),a=_(()=>new Date(n.value.lastUpdated)),i=_(()=>a.value.toISOString()),c=A("");return G(()=>{ce(()=>{var p,m,T;c.value=new Intl.DateTimeFormat((m=(p=t.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&m.forceLocale?o.value:void 0,((T=t.value.lastUpdated)==null?void 0:T.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(p,m)=>{var T;return s(),u("p",Kt,[F(R(((T=l(t).lastUpdated)==null?void 0:T.text)||l(t).lastUpdatedText||"Last updated")+": ",1),r("time",{datetime:i.value},R(c.value),9,Jt)])}}}),Yt=S(Xt,[["__scopeId","data-v-e98dd255"]]),Qt={key:0,class:"VPDocFooter"},Zt={key:0,class:"edit-info"},en={key:0,class:"edit-link"},tn={key:1,class:"last-updated"},nn={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},on={class:"pager"},an=["innerHTML"],sn=["innerHTML"],rn={class:"pager"},ln=["innerHTML"],cn=["innerHTML"],un=y({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:o}=O(),a=zt(),i=Wt(),c=_(()=>t.value.editLink&&o.value.editLink!==!1),p=_(()=>n.value.lastUpdated),m=_(()=>c.value||p.value||i.value.prev||i.value.next);return(T,b)=>{var v,w,$,L;return m.value?(s(),u("footer",Qt,[d(T.$slots,"doc-footer-before",{},void 0,!0),c.value||p.value?(s(),u("div",Zt,[c.value?(s(),u("div",en,[k(W,{class:"edit-link-button",href:l(a).url,"no-icon":!0},{default:f(()=>[b[0]||(b[0]=r("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),F(" "+R(l(a).text),1)]),_:1},8,["href"])])):h("",!0),p.value?(s(),u("div",tn,[k(Yt)])):h("",!0)])):h("",!0),(v=l(i).prev)!=null&&v.link||(w=l(i).next)!=null&&w.link?(s(),u("nav",nn,[b[1]||(b[1]=r("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),r("div",on,[($=l(i).prev)!=null&&$.link?(s(),P(W,{key:0,class:"pager-link prev",href:l(i).prev.link},{default:f(()=>{var H;return[r("span",{class:"desc",innerHTML:((H=l(t).docFooter)==null?void 0:H.prev)||"Previous page"},null,8,an),r("span",{class:"title",innerHTML:l(i).prev.text},null,8,sn)]}),_:1},8,["href"])):h("",!0)]),r("div",rn,[(L=l(i).next)!=null&&L.link?(s(),P(W,{key:0,class:"pager-link next",href:l(i).next.link},{default:f(()=>{var H;return[r("span",{class:"desc",innerHTML:((H=l(t).docFooter)==null?void 0:H.next)||"Next page"},null,8,ln),r("span",{class:"title",innerHTML:l(i).next.text},null,8,cn)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),dn=S(un,[["__scopeId","data-v-e257564d"]]),pn={class:"container"},mn={class:"aside-container"},fn={class:"aside-content"},hn={class:"content"},vn={class:"content-container"},_n={class:"main"},yn=y({__name:"VPDoc",setup(e){const{theme:t}=O(),n=te(),{hasSidebar:o,hasAside:a,leftAside:i}=K(),c=_(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,m)=>{const T=ee("Content");return s(),u("div",{class:x(["VPDoc",{"has-sidebar":l(o),"has-aside":l(a)}])},[d(p.$slots,"doc-top",{},void 0,!0),r("div",pn,[l(a)?(s(),u("div",{key:0,class:x(["aside",{"left-aside":l(i)}])},[m[0]||(m[0]=r("div",{class:"aside-curtain"},null,-1)),r("div",mn,[r("div",fn,[k(Ft,null,{"aside-top":f(()=>[d(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[d(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[d(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[d(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[d(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[d(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),r("div",hn,[r("div",vn,[d(p.$slots,"doc-before",{},void 0,!0),r("main",_n,[k(T,{class:x(["vp-doc",[c.value,l(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(dn,null,{"doc-footer-before":f(()=>[d(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(p.$slots,"doc-after",{},void 0,!0)])])]),d(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),gn=S(yn,[["__scopeId","data-v-39a288b8"]]),kn=y({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=_(()=>t.href&&Ve.test(t.href)),o=_(()=>t.tag||(t.href?"a":"button"));return(a,i)=>(s(),P(z(o.value),{class:x(["VPButton",[e.size,e.theme]]),href:e.href?l(we)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:f(()=>[F(R(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),bn=S(kn,[["__scopeId","data-v-fa7799d5"]]),$n=["src","alt"],Pn=y({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const o=ee("VPImage",!0);return e.image?(s(),u(V,{key:0},[typeof e.image=="string"||"src"in e.image?(s(),u("img",X({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:l(se)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,$n)):(s(),u(V,{key:1},[k(o,X({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),k(o,X({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),le=S(Pn,[["__scopeId","data-v-8426fc1a"]]),Tn={class:"container"},Sn={class:"main"},wn={class:"heading"},Ln=["innerHTML"],An=["innerHTML"],Cn=["innerHTML"],On={key:0,class:"actions"},Rn={key:0,class:"image"},En={class:"image-container"},In=y({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=de("hero-image-slot-exists");return(n,o)=>(s(),u("div",{class:x(["VPHero",{"has-image":e.image||l(t)}])},[r("div",Tn,[r("div",Sn,[d(n.$slots,"home-hero-info-before",{},void 0,!0),d(n.$slots,"home-hero-info",{},()=>[r("h1",wn,[e.name?(s(),u("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Ln)):h("",!0),e.text?(s(),u("span",{key:1,innerHTML:e.text,class:"text"},null,8,An)):h("",!0)]),e.tagline?(s(),u("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Cn)):h("",!0)],!0),d(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(s(),u("div",On,[(s(!0),u(V,null,j(e.actions,a=>(s(),u("div",{key:a.link,class:"action"},[k(bn,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||l(t)?(s(),u("div",Rn,[r("div",En,[o[0]||(o[0]=r("div",{class:"image-bg"},null,-1)),d(n.$slots,"home-hero-image",{},()=>[e.image?(s(),P(le,{key:0,class:"image-src",image:e.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),Hn=S(In,[["__scopeId","data-v-4f9c455b"]]),Nn=y({__name:"VPHomeHero",setup(e){const{frontmatter:t}=O();return(n,o)=>l(t).hero?(s(),P(Hn,{key:0,class:"VPHomeHero",name:l(t).hero.name,text:l(t).hero.text,tagline:l(t).hero.tagline,image:l(t).hero.image,actions:l(t).hero.actions},{"home-hero-info-before":f(()=>[d(n.$slots,"home-hero-info-before")]),"home-hero-info":f(()=>[d(n.$slots,"home-hero-info")]),"home-hero-info-after":f(()=>[d(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":f(()=>[d(n.$slots,"home-hero-actions-after")]),"home-hero-image":f(()=>[d(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),xn={class:"box"},Vn={key:0,class:"icon"},Bn=["innerHTML"],qn=["innerHTML"],Mn=["innerHTML"],Dn={key:4,class:"link-text"},jn={class:"link-text-value"},Un=y({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(s(),P(W,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:f(()=>[r("article",xn,[typeof e.icon=="object"&&e.icon.wrap?(s(),u("div",Vn,[k(le,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(s(),P(le,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(s(),u("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Bn)):h("",!0),r("h2",{class:"title",innerHTML:e.title},null,8,qn),e.details?(s(),u("p",{key:3,class:"details",innerHTML:e.details},null,8,Mn)):h("",!0),e.linkText?(s(),u("div",Dn,[r("p",jn,[F(R(e.linkText)+" ",1),n[0]||(n[0]=r("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Fn=S(Un,[["__scopeId","data-v-a3976bdc"]]),zn={key:0,class:"VPFeatures"},Wn={class:"container"},Gn={class:"items"},Kn=y({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=_(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,a)=>e.features?(s(),u("div",zn,[r("div",Wn,[r("div",Gn,[(s(!0),u(V,null,j(e.features,i=>(s(),u("div",{key:i.title,class:x(["item",[n.value]])},[k(Fn,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),Jn=S(Kn,[["__scopeId","data-v-a6181336"]]),Xn=y({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=O();return(n,o)=>l(t).features?(s(),P(Jn,{key:0,class:"VPHomeFeatures",features:l(t).features},null,8,["features"])):h("",!0)}}),Yn=y({__name:"VPHomeContent",setup(e){const{width:t}=tt({initialWidth:0,includeScrollbar:!1});return(n,o)=>(s(),u("div",{class:"vp-doc container",style:Be(l(t)?{"--vp-offset":`calc(50% - ${l(t)/2}px)`}:{})},[d(n.$slots,"default",{},void 0,!0)],4))}}),Qn=S(Yn,[["__scopeId","data-v-8e2d4988"]]),Zn=y({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=O();return(o,a)=>{const i=ee("Content");return s(),u("div",{class:x(["VPHome",{"external-link-icon-enabled":l(n).externalLinkIcon}])},[d(o.$slots,"home-hero-before",{},void 0,!0),k(Nn,null,{"home-hero-info-before":f(()=>[d(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[d(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[d(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[d(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[d(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(o.$slots,"home-hero-after",{},void 0,!0),d(o.$slots,"home-features-before",{},void 0,!0),k(Xn),d(o.$slots,"home-features-after",{},void 0,!0),l(t).markdownStyles!==!1?(s(),P(Qn,{key:0},{default:f(()=>[k(i)]),_:1})):(s(),P(i,{key:1}))],2)}}}),eo=S(Zn,[["__scopeId","data-v-8b561e3d"]]),to={},no={class:"VPPage"};function oo(e,t){const n=ee("Content");return s(),u("div",no,[d(e.$slots,"page-top"),k(n),d(e.$slots,"page-bottom")])}const ao=S(to,[["render",oo]]),so=y({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=O(),{hasSidebar:o}=K();return(a,i)=>(s(),u("div",{class:x(["VPContent",{"has-sidebar":l(o),"is-home":l(n).layout==="home"}]),id:"VPContent"},[l(t).isNotFound?d(a.$slots,"not-found",{key:0},()=>[k($t)],!0):l(n).layout==="page"?(s(),P(ao,{key:1},{"page-top":f(()=>[d(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[d(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(n).layout==="home"?(s(),P(eo,{key:2},{"home-hero-before":f(()=>[d(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[d(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[d(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[d(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[d(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[d(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[d(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[d(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[d(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(n).layout&&l(n).layout!=="doc"?(s(),P(z(l(n).layout),{key:3})):(s(),P(gn,{key:4},{"doc-top":f(()=>[d(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[d(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":f(()=>[d(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[d(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[d(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":f(()=>[d(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":f(()=>[d(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[d(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[d(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[d(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":f(()=>[d(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ro=S(so,[["__scopeId","data-v-1428d186"]]),io={class:"container"},lo=["innerHTML"],co=["innerHTML"],uo=y({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=O(),{hasSidebar:o}=K();return(a,i)=>l(t).footer&&l(n).footer!==!1?(s(),u("footer",{key:0,class:x(["VPFooter",{"has-sidebar":l(o)}])},[r("div",io,[l(t).footer.message?(s(),u("p",{key:0,class:"message",innerHTML:l(t).footer.message},null,8,lo)):h("",!0),l(t).footer.copyright?(s(),u("p",{key:1,class:"copyright",innerHTML:l(t).footer.copyright},null,8,co)):h("",!0)])],2)):h("",!0)}}),po=S(uo,[["__scopeId","data-v-e315a0ad"]]);function mo(){const{theme:e,frontmatter:t}=O(),n=xe([]),o=_(()=>n.value.length>0);return ue(()=>{n.value=Le(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:o}}const fo={class:"menu-text"},ho={class:"header"},vo={class:"outline"},_o=y({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=O(),o=A(!1),a=A(0),i=A(),c=A();function p(v){var w;(w=i.value)!=null&&w.contains(v.target)||(o.value=!1)}U(o,v=>{if(v){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),ye("Escape",()=>{o.value=!1}),ue(()=>{o.value=!1});function m(){o.value=!o.value,a.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function T(v){v.target.classList.contains("outline-link")&&(c.value&&(c.value.style.transition="none"),Se(()=>{o.value=!1}))}function b(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,w)=>(s(),u("div",{class:"VPLocalNavOutlineDropdown",style:Be({"--vp-vh":a.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(s(),u("button",{key:0,onClick:m,class:x({open:o.value})},[r("span",fo,R(l(ze)(l(n))),1),w[0]||(w[0]=r("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(s(),u("button",{key:1,onClick:b},R(l(n).returnToTopLabel||"Return to top"),1)),k($e,{name:"flyout"},{default:f(()=>[o.value?(s(),u("div",{key:0,ref_key:"items",ref:c,class:"items",onClick:T},[r("div",ho,[r("a",{class:"top-link",href:"#",onClick:b},R(l(n).returnToTopLabel||"Return to top"),1)]),r("div",vo,[k(We,{headers:e.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),yo=S(_o,[["__scopeId","data-v-8a42e2b4"]]),go={class:"container"},ko=["aria-expanded"],bo={class:"menu-text"},$o=y({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=O(),{hasSidebar:o}=K(),{headers:a}=mo(),{y:i}=qe(),c=A(0);G(()=>{c.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ue(()=>{a.value=Le(n.value.outline??t.value.outline)});const p=_(()=>a.value.length===0),m=_(()=>p.value&&!o.value),T=_(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:p.value,fixed:m.value}));return(b,v)=>l(n).layout!=="home"&&(!m.value||l(i)>=c.value)?(s(),u("div",{key:0,class:x(T.value)},[r("div",go,[l(o)?(s(),u("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=w=>b.$emit("open-menu"))},[v[1]||(v[1]=r("span",{class:"vpi-align-left menu-icon"},null,-1)),r("span",bo,R(l(t).sidebarMenuLabel||"Menu"),1)],8,ko)):h("",!0),k(yo,{headers:l(a),navHeight:c.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),Po=S($o,[["__scopeId","data-v-a6f0e41e"]]);function To(){const e=A(!1);function t(){e.value=!0,window.addEventListener("resize",a)}function n(){e.value=!1,window.removeEventListener("resize",a)}function o(){e.value?n():t()}function a(){window.outerWidth>=768&&n()}const i=te();return U(()=>i.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:o}}const So={},wo={class:"VPSwitch",type:"button",role:"switch"},Lo={class:"check"},Ao={key:0,class:"icon"};function Co(e,t){return s(),u("button",wo,[r("span",Lo,[e.$slots.default?(s(),u("span",Ao,[d(e.$slots,"default",{},void 0,!0)])):h("",!0)])])}const Oo=S(So,[["render",Co],["__scopeId","data-v-1d5665e3"]]),Ro=y({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=O(),o=de("toggle-appearance",()=>{t.value=!t.value}),a=A("");return Te(()=>{a.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,c)=>(s(),P(Oo,{title:a.value,class:"VPSwitchAppearance","aria-checked":l(t),onClick:l(o)},{default:f(()=>[...c[0]||(c[0]=[r("span",{class:"vpi-sun sun"},null,-1),r("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Ae=S(Ro,[["__scopeId","data-v-5337faa4"]]),Eo={key:0,class:"VPNavBarAppearance"},Io=y({__name:"VPNavBarAppearance",setup(e){const{site:t}=O();return(n,o)=>l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(s(),u("div",Eo,[k(Ae)])):h("",!0)}}),Ho=S(Io,[["__scopeId","data-v-6c893767"]]),Ce=A();let Ge=!1,he=0;function No(e){const t=A(!1);if(pe){!Ge&&xo(),he++;const n=U(Ce,o=>{var a,i,c;o===e.el.value||(a=e.el.value)!=null&&a.contains(o)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(c=e.onBlur)==null||c.call(e))});Z(()=>{n(),he--,he||Vo()})}return nt(t)}function xo(){document.addEventListener("focusin",Ke),Ge=!0,Ce.value=document.activeElement}function Vo(){document.removeEventListener("focusin",Ke)}function Ke(){Ce.value=document.activeElement}const Bo={class:"VPMenuLink"},qo=["innerHTML"],Mo=y({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=O();return(n,o)=>(s(),u("div",Bo,[k(W,{class:x({active:l(Q)(l(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,qo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),me=S(Mo,[["__scopeId","data-v-35975db6"]]),Do={class:"VPMenuGroup"},jo={key:0,class:"title"},Uo=y({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(s(),u("div",Do,[e.text?(s(),u("p",jo,R(e.text),1)):h("",!0),(s(!0),u(V,null,j(e.items,o=>(s(),u(V,null,["link"in o?(s(),P(me,{key:0,item:o},null,8,["item"])):h("",!0)],64))),256))]))}}),Fo=S(Uo,[["__scopeId","data-v-69e747b5"]]),zo={class:"VPMenu"},Wo={key:0,class:"items"},Go=y({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(s(),u("div",zo,[e.items?(s(),u("div",Wo,[(s(!0),u(V,null,j(e.items,o=>(s(),u(V,{key:JSON.stringify(o)},["link"in o?(s(),P(me,{key:0,item:o},null,8,["item"])):"component"in o?(s(),P(z(o.component),X({key:1,ref_for:!0},o.props),null,16)):(s(),P(Fo,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):h("",!0),d(t.$slots,"default",{},void 0,!0)]))}}),Ko=S(Go,[["__scopeId","data-v-b98bc113"]]),Jo=["aria-expanded","aria-label"],Xo={key:0,class:"text"},Yo=["innerHTML"],Qo={key:1,class:"vpi-more-horizontal icon"},Zo={class:"menu"},ea=y({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=A(!1),n=A();No({el:n,onBlur:o});function o(){t.value=!1}return(a,i)=>(s(),u("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:i[1]||(i[1]=c=>t.value=!0),onMouseleave:i[2]||(i[2]=c=>t.value=!1)},[r("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=c=>t.value=!t.value)},[e.button||e.icon?(s(),u("span",Xo,[e.icon?(s(),u("span",{key:0,class:x([e.icon,"option-icon"])},null,2)):h("",!0),e.button?(s(),u("span",{key:1,innerHTML:e.button},null,8,Yo)):h("",!0),i[3]||(i[3]=r("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(s(),u("span",Qo))],8,Jo),r("div",Zo,[k(Ko,{items:e.items},{default:f(()=>[d(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Oe=S(ea,[["__scopeId","data-v-cf11d7a2"]]),ta=["href","aria-label","innerHTML"],na=y({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=A();G(async()=>{var i;await Se();const a=(i=n.value)==null?void 0:i.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=_(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(a,i)=>(s(),u("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,ta))}}),oa=S(na,[["__scopeId","data-v-bd121fe5"]]),aa={class:"VPSocialLinks"},sa=y({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(s(),u("div",aa,[(s(!0),u(V,null,j(e.links,({link:o,icon:a,ariaLabel:i})=>(s(),P(oa,{key:o,icon:a,link:o,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Re=S(sa,[["__scopeId","data-v-7bc22406"]]),ra={key:0,class:"group translations"},ia={class:"trans-title"},la={key:1,class:"group"},ca={class:"item appearance"},ua={class:"label"},da={class:"appearance-action"},pa={key:2,class:"group"},ma={class:"item social-links"},fa=y({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=O(),{localeLinks:o,currentLang:a}=re({correspondingLink:!0}),i=_(()=>o.value.length&&a.value.label||t.value.appearance||n.value.socialLinks);return(c,p)=>i.value?(s(),P(Oe,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:f(()=>[l(o).length&&l(a).label?(s(),u("div",ra,[r("p",ia,R(l(a).label),1),(s(!0),u(V,null,j(l(o),m=>(s(),P(me,{key:m.link,item:m},null,8,["item"]))),128))])):h("",!0),l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(s(),u("div",la,[r("div",ca,[r("p",ua,R(l(n).darkModeSwitchLabel||"Appearance"),1),r("div",da,[k(Ae)])])])):h("",!0),l(n).socialLinks?(s(),u("div",pa,[r("div",ma,[k(Re,{class:"social-links-list",links:l(n).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),ha=S(fa,[["__scopeId","data-v-bb2aa2f0"]]),va=["aria-expanded"],_a=y({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(s(),u("button",{type:"button",class:x(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[r("span",{class:"container"},[r("span",{class:"top"}),r("span",{class:"middle"}),r("span",{class:"bottom"})],-1)])],10,va))}}),ya=S(_a,[["__scopeId","data-v-e5dd9c1c"]]),ga=["innerHTML"],ka=y({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=O();return(n,o)=>(s(),P(W,{class:x({VPNavBarMenuLink:!0,active:l(Q)(l(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,ga)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ba=S(ka,[["__scopeId","data-v-e56f3d57"]]),$a=y({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=O(),o=i=>"component"in i?!1:"link"in i?Q(n.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(o),a=_(()=>o(t.item));return(i,c)=>(s(),P(Oe,{class:x({VPNavBarMenuGroup:!0,active:l(Q)(l(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||a.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),Pa={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Ta=y({__name:"VPNavBarMenu",setup(e){const{theme:t}=O();return(n,o)=>l(t).nav?(s(),u("nav",Pa,[o[0]||(o[0]=r("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(s(!0),u(V,null,j(l(t).nav,a=>(s(),u(V,{key:JSON.stringify(a)},["link"in a?(s(),P(ba,{key:0,item:a},null,8,["item"])):"component"in a?(s(),P(z(a.component),X({key:1,ref_for:!0},a.props),null,16)):(s(),P($a,{key:2,item:a},null,8,["item"]))],64))),128))])):h("",!0)}}),Sa=S(Ta,[["__scopeId","data-v-dc692963"]]);function wa(e){const{localeIndex:t,theme:n}=O();function o(a){var L,H,M;const i=a.split("."),c=(L=n.value.search)==null?void 0:L.options,p=c&&typeof c=="object",m=p&&((M=(H=c.locales)==null?void 0:H[t.value])==null?void 0:M.translations)||null,T=p&&c.translations||null;let b=m,v=T,w=e;const $=i.pop();for(const E of i){let g=null;const D=w==null?void 0:w[E];D&&(g=w=D);const Y=v==null?void 0:v[E];Y&&(g=v=Y);const C=b==null?void 0:b[E];C&&(g=b=C),D||(w=g),Y||(v=g),C||(b=g)}return(b==null?void 0:b[$])??(v==null?void 0:v[$])??(w==null?void 0:w[$])??""}return o}const La=["aria-label"],Aa={class:"DocSearch-Button-Container"},Ca={class:"DocSearch-Button-Placeholder"},Ie=y({__name:"VPNavBarSearchButton",setup(e){const n=wa({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,a)=>(s(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(n)("button.buttonAriaLabel")},[r("span",Aa,[a[0]||(a[0]=r("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),r("span",Ca,R(l(n)("button.buttonText")),1)]),a[1]||(a[1]=r("span",{class:"DocSearch-Button-Keys"},[r("kbd",{class:"DocSearch-Button-Key"}),r("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,La))}}),Oa={class:"VPNavBarSearch"},Ra={id:"local-search"},Ea={key:1,id:"docsearch"},Ia=y({__name:"VPNavBarSearch",setup(e){const t=ot(()=>at(()=>import("./VPLocalSearchBox.CtKyyCD3.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:o}=O(),a=A(!1),i=A(!1);G(()=>{});function c(){a.value||(a.value=!0,setTimeout(p,16))}function p(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}function m(v){const w=v.target,$=w.tagName;return w.isContentEditable||$==="INPUT"||$==="SELECT"||$==="TEXTAREA"}const T=A(!1);ye("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),T.value=!0)}),ye("/",v=>{m(v)||(v.preventDefault(),T.value=!0)});const b="local";return(v,w)=>{var $;return s(),u("div",Oa,[l(b)==="local"?(s(),u(V,{key:0},[T.value?(s(),P(l(t),{key:0,onClose:w[0]||(w[0]=L=>T.value=!1)})):h("",!0),r("div",Ra,[k(Ie,{onClick:w[1]||(w[1]=L=>T.value=!0)})])],64)):l(b)==="algolia"?(s(),u(V,{key:1},[a.value?(s(),P(l(n),{key:0,algolia:(($=l(o).search)==null?void 0:$.options)??l(o).algolia,onVnodeBeforeMount:w[2]||(w[2]=L=>i.value=!0)},null,8,["algolia"])):h("",!0),i.value?h("",!0):(s(),u("div",Ea,[k(Ie,{onClick:c})]))],64)):h("",!0)])}}}),Ha=y({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=O();return(n,o)=>l(t).socialLinks?(s(),P(Re,{key:0,class:"VPNavBarSocialLinks",links:l(t).socialLinks},null,8,["links"])):h("",!0)}}),Na=S(Ha,[["__scopeId","data-v-0394ad82"]]),xa=["href","rel","target"],Va=["innerHTML"],Ba={key:2},qa=y({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=O(),{hasSidebar:o}=K(),{currentLang:a}=re(),i=_(()=>{var m;return typeof n.value.logoLink=="string"?n.value.logoLink:(m=n.value.logoLink)==null?void 0:m.link}),c=_(()=>{var m;return typeof n.value.logoLink=="string"||(m=n.value.logoLink)==null?void 0:m.rel}),p=_(()=>{var m;return typeof n.value.logoLink=="string"||(m=n.value.logoLink)==null?void 0:m.target});return(m,T)=>(s(),u("div",{class:x(["VPNavBarTitle",{"has-sidebar":l(o)}])},[r("a",{class:"title",href:i.value??l(we)(l(a).link),rel:c.value,target:p.value},[d(m.$slots,"nav-bar-title-before",{},void 0,!0),l(n).logo?(s(),P(le,{key:0,class:"logo",image:l(n).logo},null,8,["image"])):h("",!0),l(n).siteTitle?(s(),u("span",{key:1,innerHTML:l(n).siteTitle},null,8,Va)):l(n).siteTitle===void 0?(s(),u("span",Ba,R(l(t).title),1)):h("",!0),d(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,xa)],2))}}),Ma=S(qa,[["__scopeId","data-v-1168a8e4"]]),Da={class:"items"},ja={class:"title"},Ua=y({__name:"VPNavBarTranslations",setup(e){const{theme:t}=O(),{localeLinks:n,currentLang:o}=re({correspondingLink:!0});return(a,i)=>l(n).length&&l(o).label?(s(),P(Oe,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(t).langMenuLabel||"Change language"},{default:f(()=>[r("div",Da,[r("p",ja,R(l(o).label),1),(s(!0),u(V,null,j(l(n),c=>(s(),P(me,{key:c.link,item:c},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Fa=S(Ua,[["__scopeId","data-v-88af2de4"]]),za={class:"wrapper"},Wa={class:"container"},Ga={class:"title"},Ka={class:"content"},Ja={class:"content-body"},Xa=y({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=qe(),{hasSidebar:o}=K(),{frontmatter:a}=O(),i=A({});return Te(()=>{i.value={"has-sidebar":o.value,home:a.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(c,p)=>(s(),u("div",{class:x(["VPNavBar",i.value])},[r("div",za,[r("div",Wa,[r("div",Ga,[k(Ma,null,{"nav-bar-title-before":f(()=>[d(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[d(c.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),r("div",Ka,[r("div",Ja,[d(c.$slots,"nav-bar-content-before",{},void 0,!0),k(Ia,{class:"search"}),k(Sa,{class:"menu"}),k(Fa,{class:"translations"}),k(Ho,{class:"appearance"}),k(Na,{class:"social-links"}),k(ha,{class:"extra"}),d(c.$slots,"nav-bar-content-after",{},void 0,!0),k(ya,{class:"hamburger",active:e.isScreenOpen,onClick:p[0]||(p[0]=m=>c.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=r("div",{class:"divider"},[r("div",{class:"divider-line"})],-1))],2))}}),Ya=S(Xa,[["__scopeId","data-v-6aa21345"]]),Qa={key:0,class:"VPNavScreenAppearance"},Za={class:"text"},es=y({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=O();return(o,a)=>l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(s(),u("div",Qa,[r("p",Za,R(l(n).darkModeSwitchLabel||"Appearance"),1),k(Ae)])):h("",!0)}}),ts=S(es,[["__scopeId","data-v-b44890b2"]]),ns=["innerHTML"],os=y({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=de("close-screen");return(n,o)=>(s(),P(W,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:l(t)},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,ns)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),as=S(os,[["__scopeId","data-v-df37e6dd"]]),ss=["innerHTML"],rs=y({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=de("close-screen");return(n,o)=>(s(),P(W,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:l(t)},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,ss)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Je=S(rs,[["__scopeId","data-v-3e9c20e4"]]),is={class:"VPNavScreenMenuGroupSection"},ls={key:0,class:"title"},cs=y({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(s(),u("div",is,[e.text?(s(),u("p",ls,R(e.text),1)):h("",!0),(s(!0),u(V,null,j(e.items,o=>(s(),P(Je,{key:o.text,item:o},null,8,["item"]))),128))]))}}),us=S(cs,[["__scopeId","data-v-8133b170"]]),ds=["aria-controls","aria-expanded"],ps=["innerHTML"],ms=["id"],fs={key:0,class:"item"},hs={key:1,class:"item"},vs={key:2,class:"group"},_s=y({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=A(!1),o=_(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(i,c)=>(s(),u("div",{class:x(["VPNavScreenMenuGroup",{open:n.value}])},[r("button",{class:"button","aria-controls":o.value,"aria-expanded":n.value,onClick:a},[r("span",{class:"button-text",innerHTML:e.text},null,8,ps),c[0]||(c[0]=r("span",{class:"vpi-plus button-icon"},null,-1))],8,ds),r("div",{id:o.value,class:"items"},[(s(!0),u(V,null,j(e.items,p=>(s(),u(V,{key:JSON.stringify(p)},["link"in p?(s(),u("div",fs,[k(Je,{item:p},null,8,["item"])])):"component"in p?(s(),u("div",hs,[(s(),P(z(p.component),X({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(s(),u("div",vs,[k(us,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,ms)],2))}}),ys=S(_s,[["__scopeId","data-v-b9ab8c58"]]),gs={key:0,class:"VPNavScreenMenu"},ks=y({__name:"VPNavScreenMenu",setup(e){const{theme:t}=O();return(n,o)=>l(t).nav?(s(),u("nav",gs,[(s(!0),u(V,null,j(l(t).nav,a=>(s(),u(V,{key:JSON.stringify(a)},["link"in a?(s(),P(as,{key:0,item:a},null,8,["item"])):"component"in a?(s(),P(z(a.component),X({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(s(),P(ys,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),bs=y({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=O();return(n,o)=>l(t).socialLinks?(s(),P(Re,{key:0,class:"VPNavScreenSocialLinks",links:l(t).socialLinks},null,8,["links"])):h("",!0)}}),$s={class:"list"},Ps=y({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=re({correspondingLink:!0}),o=A(!1);function a(){o.value=!o.value}return(i,c)=>l(t).length&&l(n).label?(s(),u("div",{key:0,class:x(["VPNavScreenTranslations",{open:o.value}])},[r("button",{class:"title",onClick:a},[c[0]||(c[0]=r("span",{class:"vpi-languages icon lang"},null,-1)),F(" "+R(l(n).label)+" ",1),c[1]||(c[1]=r("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),r("ul",$s,[(s(!0),u(V,null,j(l(t),p=>(s(),u("li",{key:p.link,class:"item"},[k(W,{class:"link",href:p.link},{default:f(()=>[F(R(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),Ts=S(Ps,[["__scopeId","data-v-858fe1a4"]]),Ss={class:"container"},ws=y({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=A(null),n=Me(pe?document.body:null);return(o,a)=>(s(),P($e,{name:"fade",onEnter:a[0]||(a[0]=i=>n.value=!0),onAfterLeave:a[1]||(a[1]=i=>n.value=!1)},{default:f(()=>[e.open?(s(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[r("div",Ss,[d(o.$slots,"nav-screen-content-before",{},void 0,!0),k(ks,{class:"menu"}),k(Ts,{class:"translations"}),k(ts,{class:"appearance"}),k(bs,{class:"social-links"}),d(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),Ls=S(ws,[["__scopeId","data-v-f2779853"]]),As={key:0,class:"VPNav"},Cs=y({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:o}=To(),{frontmatter:a}=O(),i=_(()=>a.value.navbar!==!1);return De("close-screen",n),ce(()=>{pe&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(c,p)=>i.value?(s(),u("header",As,[k(Ya,{"is-screen-open":l(t),onToggleScreen:l(o)},{"nav-bar-title-before":f(()=>[d(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[d(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[d(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[d(c.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(Ls,{open:l(t)},{"nav-screen-content-before":f(()=>[d(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[d(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),Os=S(Cs,[["__scopeId","data-v-ae24b3ad"]]),Rs=["role","tabindex"],Es={key:1,class:"items"},Is=y({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:o,isLink:a,isActiveLink:i,hasActiveLink:c,hasChildren:p,toggle:m}=wt(_(()=>t.item)),T=_(()=>p.value?"section":"div"),b=_(()=>a.value?"a":"div"),v=_(()=>p.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),w=_(()=>a.value?void 0:"button"),$=_(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:n.value},{"is-link":a.value},{"is-active":i.value},{"has-active":c.value}]);function L(M){"key"in M&&M.key!=="Enter"||!t.item.link&&m()}function H(){t.item.link&&m()}return(M,E)=>{const g=ee("VPSidebarItem",!0);return s(),P(z(T.value),{class:x(["VPSidebarItem",$.value])},{default:f(()=>[e.item.text?(s(),u("div",X({key:0,class:"item",role:w.value},st(e.item.items?{click:L,keydown:L}:{},!0),{tabindex:e.item.items&&0}),[E[1]||(E[1]=r("div",{class:"indicator"},null,-1)),e.item.link?(s(),P(W,{key:0,tag:b.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:f(()=>[(s(),P(z(v.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(s(),P(z(v.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(s(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:H,onKeydown:rt(H,["enter"]),tabindex:"0"},[...E[0]||(E[0]=[r("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,Rs)):h("",!0),e.item.items&&e.item.items.length?(s(),u("div",Es,[e.depth<5?(s(!0),u(V,{key:0},j(e.item.items,D=>(s(),P(g,{key:D.text,item:D,depth:e.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),Hs=S(Is,[["__scopeId","data-v-b3fd67f8"]]),Ns=y({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=A(!0);let n=null;return G(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),it(()=>{n!=null&&(clearTimeout(n),n=null)}),(o,a)=>(s(!0),u(V,null,j(e.items,i=>(s(),u("div",{key:i.text,class:x(["group",{"no-transition":t.value}])},[k(Hs,{item:i,depth:0},null,8,["item"])],2))),128))}}),xs=S(Ns,[["__scopeId","data-v-c40bc020"]]),Vs={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Bs=y({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=K(),o=e,a=A(null),i=Me(pe?document.body:null);U([o,a],()=>{var p;o.open?(i.value=!0,(p=a.value)==null||p.focus()):i.value=!1},{immediate:!0,flush:"post"});const c=A(0);return U(t,()=>{c.value+=1},{deep:!0}),(p,m)=>l(n)?(s(),u("aside",{key:0,class:x(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:a,onClick:m[0]||(m[0]=je(()=>{},["stop"]))},[m[2]||(m[2]=r("div",{class:"curtain"},null,-1)),r("nav",Vs,[m[1]||(m[1]=r("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),d(p.$slots,"sidebar-nav-before",{},void 0,!0),(s(),P(xs,{items:l(t),key:c.value},null,8,["items"])),d(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),qs=S(Bs,[["__scopeId","data-v-319d5ca6"]]),Ms=y({__name:"VPSkipLink",setup(e){const{theme:t}=O(),n=te(),o=A();U(()=>n.path,()=>o.value.focus());function a({target:i}){const c=document.getElementById(decodeURIComponent(i.hash).slice(1));if(c){const p=()=>{c.removeAttribute("tabindex"),c.removeEventListener("blur",p)};c.setAttribute("tabindex","-1"),c.addEventListener("blur",p),c.focus(),window.scrollTo(0,0)}}return(i,c)=>(s(),u(V,null,[r("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),r("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},R(l(t).skipToContentLabel||"Skip to content"),1)],64))}}),Ds=S(Ms,[["__scopeId","data-v-0b0ada53"]]),js=y({__name:"Layout",setup(e){const{isOpen:t,open:n,close:o}=K(),a=te();U(()=>a.path,o),St(t,o);const{frontmatter:i}=O(),c=lt(),p=_(()=>!!c["home-hero-image"]);return De("hero-image-slot-exists",p),(m,T)=>{const b=ee("Content");return l(i).layout!==!1?(s(),u("div",{key:0,class:x(["Layout",l(i).pageClass])},[d(m.$slots,"layout-top",{},void 0,!0),k(Ds),k(pt,{class:"backdrop",show:l(t),onClick:l(o)},null,8,["show","onClick"]),k(Os,null,{"nav-bar-title-before":f(()=>[d(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[d(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[d(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[d(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":f(()=>[d(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[d(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(Po,{open:l(t),onOpenMenu:l(n)},null,8,["open","onOpenMenu"]),k(qs,{open:l(t)},{"sidebar-nav-before":f(()=>[d(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":f(()=>[d(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(ro,null,{"page-top":f(()=>[d(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[d(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":f(()=>[d(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":f(()=>[d(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[d(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[d(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[d(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[d(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[d(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[d(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[d(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[d(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":f(()=>[d(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[d(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[d(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":f(()=>[d(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[d(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":f(()=>[d(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[d(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[d(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[d(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[d(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[d(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(po),d(m.$slots,"layout-bottom",{},void 0,!0)],2)):(s(),P(b,{key:1}))}}}),Us=S(js,[["__scopeId","data-v-5d98c3a5"]]),Xe={Layout:Us,enhanceApp:({app:e})=>{e.component("Badge",ct)}},N="https://atomflow.vip/v1",Fs=`{
  "created": 1706000000,
  "data": [
    {
      "url": "https://...",
      "revised_prompt": "A fluffy white cat with bright eyes..."
    }
  ]
}`,zs={curl:`curl -X POST "${N}/images/generations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gemini-3-pro-image-preview",
    "prompt": "A cinematic portrait of a white cat sitting on a rainy windowsill",
    "aspect_ratio": "16:9",
    "resolution": "2k",
    "n": 1
  }'`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${N}",
)

response = client.images.generate(
    model="gemini-3-pro-image-preview",
    prompt="A cinematic portrait of a white cat sitting on a rainy windowsill",
    aspect_ratio="16:9",
    resolution="2k",
    n=1,
)

print(response.data[0].url)`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${N}'
});

const response = await client.images.generate({
  model: 'gemini-3-pro-image-preview',
  prompt: 'A cinematic portrait of a white cat sitting on a rainy windowsill',
  aspect_ratio: '16:9',
  resolution: '2k',
  n: 1
});

console.log(response.data[0].url);`,go:`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    body, _ := json.Marshal(map[string]interface{}{
        "model": "gemini-3-pro-image-preview",
        "prompt": "A cinematic portrait of a white cat sitting on a rainy windowsill",
        "aspect_ratio": "16:9",
        "resolution": "2k",
        "n": 1,
    })
    req, _ := http.NewRequest("POST", "${N}/images/generations", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${N}/images/generations');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'gemini-3-pro-image-preview',
        'prompt' => 'A cinematic portrait of a white cat sitting on a rainy windowsill',
        'aspect_ratio' => '16:9',
        'resolution' => '2k',
        'n' => 1
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['data'][0]['url'];
`},Ws=`{
  "created": 1706000000,
  "data": [
    {
      "url": "https://..."
    }
  ]
}`,Gs={curl:`curl -X POST "${N}/images/edits" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "image=@sunlit_lounge.png" \\
  -F "mask=@mask.png" \\
  -F "prompt=阳光明媚的室内休息区，带有游泳池" \\
  -F "n=1" \\
  -F "size=1024x1024"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${N}",
)

response = client.images.edit(
    model="dall-e-2",
    image=open("sunlit_lounge.png", "rb"),
    mask=open("mask.png", "rb"),
    prompt="阳光明媚的室内休息区，带有游泳池",
    n=1,
    size="1024x1024",
)

print(response.data[0].url)`,javascript:`import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${N}'
});

const response = await client.images.edit({
  model: 'dall-e-2',
  image: fs.createReadStream('sunlit_lounge.png'),
  mask: fs.createReadStream('mask.png'),
  prompt: '阳光明媚的室内休息区，带有游泳池',
  n: 1,
  size: '1024x1024'
});

console.log(response.data[0].url);`,go:`// multipart 编辑建议用 curl / SDK；以下为 JSON + image_url 示意（依网关是否支持）
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model":     "dall-e-2",
        "prompt":    "阳光明媚的室内休息区，带有游泳池",
        "image_url": "https://example.com/sunlit_lounge.png",
        "n":         1,
        "size":      "1024x1024",
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${N}/images/edits", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
// 若网关支持 multipart，可用 CURLFile 上传 image/mask
$ch = curl_init('${N}/images/edits');
$post = [
    'model' => 'dall-e-2',
    'image' => new CURLFile('sunlit_lounge.png'),
    'mask' => new CURLFile('mask.png'),
    'prompt' => '阳光明媚的室内休息区，带有游泳池',
    'n' => 1,
    'size' => '1024x1024',
];
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => $post,
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['data'][0]['url'];
`},Ks=`{
  "created": 1706000000,
  "data": [
    { "url": "https://..." },
    { "url": "https://..." }
  ]
}`,Js={curl:`curl -X POST "${N}/images/variations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "image=@cat.png" \\
  -F "n=2" \\
  -F "size=1024x1024"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${N}",
)

response = client.images.create_variation(
    model="dall-e-2",
    image=open("cat.png", "rb"),
    n=2,
    size="1024x1024",
)

for image in response.data:
    print(image.url)`,javascript:`import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${N}'
});

const response = await client.images.createVariation({
  model: 'dall-e-2',
  image: fs.createReadStream('cat.png'),
  n: 2,
  size: '1024x1024'
});

response.data.forEach(image => console.log(image.url));`,go:`package main

import (
    "bytes"
    "fmt"
    "io"
    "mime/multipart"
    "net/http"
    "os"
)

func main() {
    var b bytes.Buffer
    w := multipart.NewWriter(&b)
    _ = w.WriteField("n", "2")
    _ = w.WriteField("size", "1024x1024")
    f, _ := os.Open("cat.png")
    part, _ := w.CreateFormFile("image", "cat.png")
    io.Copy(part, f)
    f.Close()
    w.Close()
    req, _ := http.NewRequest("POST", "${N}/images/variations", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${N}/images/variations');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => [
        'image' => new CURLFile('cat.png'),
        'n' => 2,
        'size' => '1024x1024',
    ],
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
foreach ($data['data'] as $img) echo $img['url'] . "\\n";
`},Xs="/* 二进制音频文件，例如 MP3 */",Ys={curl:`curl -X POST "${N}/audio/speech" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "tts-1-hd",
    "voice": "nova",
    "input": "Hello, welcome to our API!"
  }' \\
  --output speech.mp3`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${N}",
)

response = client.audio.speech.create(
    model="tts-1-hd",
    voice="nova",
    input="Hello, welcome to our API!",
)

response.stream_to_file("speech.mp3")`,javascript:`import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${N}'
});

const response = await client.audio.speech.create({
  model: 'tts-1-hd',
  voice: 'nova',
  input: 'Hello, welcome to our API!'
});

const buffer = Buffer.from(await response.arrayBuffer());
fs.writeFileSync('speech.mp3', buffer);`,go:`package main

import (
    "bytes"
    "encoding/json"
    "io"
    "net/http"
    "os"
)

func main() {
    body, _ := json.Marshal(map[string]interface{}{
        "model": "tts-1-hd", "voice": "nova", "input": "Hello, welcome to our API!",
    })
    req, _ := http.NewRequest("POST", "${N}/audio/speech", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    f, _ := os.Create("speech.mp3")
    defer f.Close()
    io.Copy(f, resp.Body)
}`,php:`<?php
$ch = curl_init('${N}/audio/speech');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'tts-1-hd',
        'voice' => 'nova',
        'input' => 'Hello, welcome to our API!'
    ])
]);
$audio = curl_exec($ch);
curl_close($ch);
file_put_contents('speech.mp3', $audio);
`},Qs=`{
  "text": "Hello, this is a test of the transcription API."
}`,Zs={curl:`curl -X POST "${N}/audio/transcriptions" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F file="@audio.mp3" \\
  -F model="whisper-1" \\
  -F language="en"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${N}",
)

with open("audio.mp3", "rb") as audio_file:
    response = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
        language="en",
    )

print(response.text)`,javascript:`import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${N}'
});

const response = await client.audio.transcriptions.create({
  model: 'whisper-1',
  file: fs.createReadStream('audio.mp3'),
  language: 'en'
});

console.log(response.text);`,go:`package main

import (
    "bytes"
    "fmt"
    "io"
    "mime/multipart"
    "net/http"
    "os"
)

func main() {
    var b bytes.Buffer
    w := multipart.NewWriter(&b)
    _ = w.WriteField("model", "whisper-1")
    _ = w.WriteField("language", "en")
    f, _ := os.Open("audio.mp3")
    part, _ := w.CreateFormFile("file", "audio.mp3")
    io.Copy(part, f)
    f.Close()
    w.Close()
    req, _ := http.NewRequest("POST", "${N}/audio/transcriptions", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${N}/audio/transcriptions');
$file = new CURLFile('audio.mp3', 'audio/mpeg', 'audio.mp3');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => ['file' => $file, 'model' => 'whisper-1', 'language' => 'en'],
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['text'];
`},er=`{
  "text": "Hello, my name is Wolfgang and I come from Germany. Where are you from?"
}`,tr={curl:`curl -X POST "${N}/audio/translations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "file=@german_audio.mp3" \\
  -F "model=whisper-1"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${N}",
)

with open("german_audio.mp3", "rb") as audio_file:
    response = client.audio.translations.create(
        model="whisper-1",
        file=audio_file,
    )

print(response.text)`,javascript:`import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${N}'
});

const response = await client.audio.translations.create({
  model: 'whisper-1',
  file: fs.createReadStream('german_audio.mp3')
});

console.log(response.text);`,go:`package main

import (
    "bytes"
    "fmt"
    "io"
    "mime/multipart"
    "net/http"
    "os"
)

func main() {
    var b bytes.Buffer
    w := multipart.NewWriter(&b)
    _ = w.WriteField("model", "whisper-1")
    f, _ := os.Open("german_audio.mp3")
    part, _ := w.CreateFormFile("file", "german_audio.mp3")
    io.Copy(part, f)
    f.Close()
    w.Close()
    req, _ := http.NewRequest("POST", "${N}/audio/translations", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${N}/audio/translations');
$file = new CURLFile('german_audio.mp3', 'audio/mpeg', 'german_audio.mp3');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => ['file' => $file, 'model' => 'whisper-1'],
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['text'];
`},nr=`{
  "object": "list",
  "data": [
    {
      "id": "gpt-5.4",
      "object": "model",
      "created": 1706000000,
      "owned_by": "openai"
    },
    {
      "id": "claude-sonnet-4-6",
      "object": "model",
      "created": 1706000000,
      "owned_by": "anthropic"
    },
    {
      "id": "gemini-2.5-flash",
      "object": "model",
      "created": 1706000000,
      "owned_by": "google"
    }
  ]
}`,ne="https://atomflow.vip/v1",or={curl:`curl "${ne}/models" \\
  -H "Authorization: Bearer sk-your-api-key"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${ne}",
)

models = client.models.list()

for model in models.data:
    print(f"{model.id} ({model.owned_by})")`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${ne}'
});

const models = await client.models.list();

for (const model of models.data) {
  console.log(\`\${model.id} (\${model.owned_by})\`);
}`,go:`package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "${ne}/models", nil)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")

    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()

    var payload struct {
        Data []struct {
            ID      string \`json:"id"\`
            OwnedBy string \`json:"owned_by"\`
        } \`json:"data"\`
    }

    json.NewDecoder(resp.Body).Decode(&payload)

    for _, model := range payload.Data {
        fmt.Printf("%s (%s)\\n", model.ID, model.OwnedBy)
    }
}`,php:`<?php
$ch = curl_init('${ne}/models');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer sk-your-api-key'
    ]
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
foreach ($data['data'] as $model) {
    echo "{$model['id']} ({$model['owned_by']})\\n";
}
`},B=ne,ae="https://atomflow.vip",ar=`{
  "id": "gpt-5.4",
  "object": "model",
  "created": 1706000000,
  "owned_by": "openai"
}`,sr={curl:`curl "${B}/models/gpt-5.4" \\
  -H "Authorization: Bearer sk-your-api-key"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${B}"
)

model = client.models.retrieve("gpt-5.4")
print(f"Model: {model.id}, Provider: {model.owned_by}")`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${B}'
});

const model = await client.models.retrieve('gpt-5.4');
console.log(\`Model: \${model.id}, Provider: \${model.owned_by}\`);`,go:`package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "${B}/models/gpt-5.4", nil)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var model map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&model)
    fmt.Printf("Model: %v, Provider: %v\\n", model["id"], model["owned_by"])
}`,php:`<?php
$ch = curl_init('${B}/models/gpt-5.4');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key']
]);
$response = curl_exec($ch);
curl_close($ch);
$model = json_decode($response, true);
echo "Model: {$model['id']}, Provider: {$model['owned_by']}\\n";
`},rr=`{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1706000000,
  "model": "gpt-4o",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 9,
    "total_tokens": 29
  }
}`,ir={curl:`curl -X POST "${B}/chat/completions" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ],
    "temperature": 0.7,
    "max_tokens": 1000
  }'`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${B}"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${B}'
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Hello!' }
  ],
  temperature: 0.7,
  max_tokens: 1000
});

console.log(response.choices[0].message.content);`,go:`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "gpt-4o",
        "messages": []map[string]string{
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello!"},
        },
        "temperature": 0.7,
        "max_tokens": 1000,
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${B}/chat/completions", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    fmt.Println(string(b))
}`,php:`<?php
$ch = curl_init('${B}/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'gpt-4o',
        'messages' => [
            ['role' => 'system', 'content' => 'You are a helpful assistant.'],
            ['role' => 'user', 'content' => 'Hello!']
        ],
        'temperature' => 0.7,
        'max_tokens' => 1000
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['choices'][0]['message']['content'];
`},lr=`{
  "id": "resp_abc123",
  "object": "response",
  "created": 1706000000,
  "model": "gpt-4o",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {"type": "text", "text": "Hello! How can I help you today?"}
      ]
    }
  ],
  "usage": {
    "input_tokens": 10,
    "output_tokens": 12,
    "total_tokens": 22
  }
}`,cr={curl:`curl -X POST "${B}/responses" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "input": [
      {"type": "message", "role": "user", "content": "Hello!"}
    ],
    "max_output_tokens": 1000
  }'`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${B}"
)

response = client.responses.create(
    model="gpt-4o",
    input=[
        {"type": "message", "role": "user", "content": "Hello!"}
    ],
    max_output_tokens=1000
)

print(response.output)`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${B}'
});

const response = await client.responses.create({
  model: 'gpt-4o',
  input: [
    { type: 'message', role: 'user', content: 'Hello!' }
  ],
  max_output_tokens: 1000
});

console.log(response.output);`,go:`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "gpt-4o",
        "input": []map[string]interface{}{
            {"type": "message", "role": "user", "content": "Hello!"},
        },
        "max_output_tokens": 1000,
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${B}/responses", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${B}/responses');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'gpt-4o',
        'input' => [
            ['type' => 'message', 'role' => 'user', 'content' => 'Hello!']
        ],
        'max_output_tokens' => 1000
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r($data['output']);
`},ur=`{
  "id": "msg_abc123",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Hello! How can I help you today?"
    }
  ],
  "model": "claude-sonnet-4-6",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 15,
    "output_tokens": 10
  }
}`,dr={curl:`curl -X POST "${ae}/v1/messages" \\
  -H "x-api-key: sk-your-api-key" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-sonnet-4-6",
    "max_tokens": 1024,
    "system": "You are a helpful assistant.",
    "messages": [
      {"role": "user", "content": "Hello, Claude!"}
    ]
  }'`,python:`from anthropic import Anthropic

client = Anthropic(
    api_key="sk-your-api-key",
    base_url="${ae}"
)

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a helpful assistant.",
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content[0].text)`,javascript:`import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: 'sk-your-api-key',
  baseURL: '${ae}'
});

const message = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  system: 'You are a helpful assistant.',
  messages: [
    { role: 'user', content: 'Hello, Claude!' }
  ]
});

console.log(message.content[0].text);`,go:`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model":      "claude-sonnet-4-6",
        "max_tokens": 1024,
        "system":     "You are a helpful assistant.",
        "messages": []map[string]string{
            {"role": "user", "content": "Hello, Claude!"},
        },
    }
    jsonData, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${ae}/v1/messages", bytes.NewBuffer(jsonData))
    req.Header.Set("x-api-key", "sk-your-api-key")
    req.Header.Set("anthropic-version", "2023-06-01")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,php:`<?php
$payload = [
    'model' => 'claude-sonnet-4-6',
    'max_tokens' => 1024,
    'system' => 'You are a helpful assistant.',
    'messages' => [
        ['role' => 'user', 'content' => 'Hello, Claude!']
    ]
];
$ch = curl_init('${ae}/v1/messages');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'x-api-key: sk-your-api-key',
        'anthropic-version: 2023-06-01',
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode($payload)
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['content'][0]['text'];
`},pr=`{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [0.0023, -0.0194, 0.0081]
    }
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 9,
    "total_tokens": 9
  }
}`,mr={curl:`curl -X POST "${B}/embeddings" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-embedding-3-small",
    "input": "The quick brown fox jumps over the lazy dog"
  }'`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${B}"
)

response = client.embeddings.create(
    model="text-embedding-3-small",
    input="The quick brown fox jumps over the lazy dog"
)

embedding = response.data[0].embedding
print(f"Embedding dimension: {len(embedding)}")
print(f"First 5 values: {embedding[:5]}")`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${B}'
});

const response = await client.embeddings.create({
  model: 'text-embedding-3-small',
  input: 'The quick brown fox jumps over the lazy dog'
});

console.log(response.data[0].embedding.slice(0, 5));`,go:`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "text-embedding-3-small",
        "input": "The quick brown fox jumps over the lazy dog",
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${B}/embeddings", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${B}/embeddings');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'text-embedding-3-small',
        'input' => 'The quick brown fox jumps over the lazy dog'
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r(array_slice($data['data'][0]['embedding'], 0, 5));
`},fr=`{
  "results": [
    {
      "index": 0,
      "relevance_score": 0.95,
      "document": "Machine learning is a subset of AI"
    },
    {
      "index": 2,
      "relevance_score": 0.82,
      "document": "Deep learning uses neural networks"
    }
  ],
  "model": "BAAI/bge-reranker-v2-m3",
  "usage": {
    "prompt_tokens": 45,
    "total_tokens": 45
  }
}`,hr={curl:`curl -X POST "${B}/rerank" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "BAAI/bge-reranker-v2-m3",
    "query": "What is machine learning?",
    "documents": [
      "Machine learning is a subset of AI",
      "The weather is nice today",
      "Deep learning uses neural networks"
    ],
    "top_n": 2,
    "return_documents": true
  }'`,python:`import requests

response = requests.post(
    "${B}/rerank",
    headers={"Authorization": "Bearer sk-your-api-key"},
    json={
        "model": "BAAI/bge-reranker-v2-m3",
        "query": "What is machine learning?",
        "documents": [
            "Machine learning is a subset of AI",
            "The weather is nice today",
            "Deep learning uses neural networks"
        ],
        "top_n": 2
    }
)

print(response.json())`,javascript:`const response = await fetch('${B}/rerank', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk-your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'BAAI/bge-reranker-v2-m3',
    query: 'What is machine learning?',
    documents: [
      'Machine learning is a subset of AI',
      'The weather is nice today',
      'Deep learning uses neural networks'
    ],
    top_n: 2
  })
});

const data = await response.json();
console.log(data.results);`,go:`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "BAAI/bge-reranker-v2-m3",
        "query": "What is machine learning?",
        "documents": []string{
            "Machine learning is a subset of AI",
            "The weather is nice today",
            "Deep learning uses neural networks",
        },
        "top_n": 2,
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${B}/rerank", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${B}/rerank');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'BAAI/bge-reranker-v2-m3',
        'query' => 'What is machine learning?',
        'documents' => [
            'Machine learning is a subset of AI',
            'The weather is nice today',
            'Deep learning uses neural networks'
        ],
        'top_n' => 2
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r($data['results']);
`};function vr(e){return e.replace(/\.html$/,"").replace(/\/$/,"")||"/"}function _r(e){const t=vr(e);return t==="/api/ai-model/models"||t.endsWith("/api/ai-model/models/list/listmodels")?{snippets:{...or},response:nr}:t.endsWith("/api/ai-model/models/get-model")?{snippets:sr,response:ar}:t.endsWith("/api/ai-model/chat/openai/createchatcompletion")?{snippets:ir,response:rr}:t.endsWith("/api/ai-model/chat/openai/createresponse")?{snippets:cr,response:lr}:t.endsWith("/api/ai-model/chat/createmessage")?{snippets:dr,response:ur}:t.endsWith("/api/ai-model/embeddings/createembedding")?{snippets:mr,response:pr}:t.endsWith("/api/ai-model/rerank/creatererank")?{snippets:hr,response:fr}:t.endsWith("/api/ai-model/images/create-image")?{snippets:zs,response:Fs}:t.endsWith("/api/ai-model/images/edit-image")?{snippets:Gs,response:Ws}:t.endsWith("/api/ai-model/images/create-variation")?{snippets:Js,response:Ks}:t.endsWith("/api/ai-model/audio/create-speech")?{snippets:Ys,response:Xs}:t.endsWith("/api/ai-model/audio/create-transcription")?{snippets:Zs,response:Qs}:t.endsWith("/api/ai-model/audio/create-translation")?{snippets:tr,response:er}:null}const yr={key:0,class:"td-api-aside-tryit"},gr={class:"td-api-aside-card td-api-aside-card--request"},kr={class:"td-api-aside-card__toolbar"},br={class:"td-api-aside-tabs",role:"tablist"},$r=["aria-selected","onClick"],Pr=["aria-label"],Tr={key:0,class:"td-api-aside-copied"},Sr={class:"td-api-aside-pre td-api-aside-pre--request"},wr={class:"td-api-aside-card td-api-aside-card--response"},Lr={class:"td-api-aside-card__toolbar"},Ar=["aria-label"],Cr={key:0,class:"td-api-aside-copied"},Or={class:"td-api-aside-pre td-api-aside-pre--response"},Rr=y({__name:"ApiAsideTryIt",setup(e){function t(C,I){const q=C.replace(/\/$/,"");let J=I.startsWith("/")?I:`/${I}`;return/\/v1$/i.test(q)&&/^\/v1(\/|$)/.test(J)&&!/^\/v1beta/i.test(J)&&(J=J.replace(/^\/v1(\/|$)/,"/"),J===""&&(J="/")),`${q}${J}`}const n=["curl","python","javascript","go","php"],o={curl:"cURL",python:"Python",javascript:"JavaScript",go:"Go",php:"PHP"},a=te(),{frontmatter:i}=Pe(),c=A(null);let p=null;function m(C){c.value=C,p&&clearTimeout(p),p=setTimeout(()=>{c.value=null,p=null},1600)}async function T(C,I){try{await navigator.clipboard.writeText(C),m(I)}catch{}}const b=_(()=>(i.value.apiBaseUrl??"https://atomflow.vip/v1").toString().replace(/\/$/,"")),v=_(()=>i.value.apiAside),w=_(()=>_r(a.path)),$=_(()=>{const C=v.value;if(C===!1)return{};const I=C&&typeof C=="object"&&C.snippets&&typeof C.snippets=="object"?C.snippets:{},q=w.value;return q?{...q.snippets,...I}:{...I}}),L=_(()=>{const C=v.value;if(C&&typeof C=="object"&&typeof C.response=="string"&&C.response.trim())return C.response.trim();const I=w.value;return I?I.response:`{
  "note": "响应示例见正文"
}`}),H=_(()=>{const C=(i.value.apiMethod??i.value.method??"").toString().trim().toUpperCase(),I=(i.value.apiPath??"").toString().trim();if(!C||!I||!/^GET|POST|PUT|PATCH|DELETE|HEAD$/.test(C))return"";const q=t(b.value,I);return C==="GET"||C==="HEAD"?`curl "${q}" \\
  -H "Authorization: Bearer sk-your-api-key"`:`curl -X ${C} "${q}" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{}'`}),M=_(()=>{const C={...$.value};return n.filter(q=>C[q]&&C[q].trim()).length===0&&H.value?{curl:H.value}:C}),E=_(()=>n.filter(C=>{var I;return(I=M.value[C])==null?void 0:I.trim()})),g=A("curl");U(E,C=>{C.length&&!C.includes(g.value)&&(g.value=C[0])},{immediate:!0});const D=_(()=>{var I;const C=g.value;return((I=M.value[C])==null?void 0:I.trim())??""}),Y=_(()=>!a.path.startsWith("/api/")||i.value.aside===!1||v.value===!1?!1:E.value.length>0);return U(()=>[a.path,Y.value],()=>{typeof document>"u"||document.documentElement.classList.toggle("td-api-aside-tryit",Y.value)},{immediate:!0}),Z(()=>{typeof document<"u"&&document.documentElement.classList.remove("td-api-aside-tryit")}),(C,I)=>Y.value?(s(),u("div",yr,[r("div",gr,[r("div",kr,[r("div",br,[(s(!0),u(V,null,j(E.value,q=>(s(),u("button",{key:q,type:"button",role:"tab","aria-selected":g.value===q,class:x(["td-api-aside-tab",{"is-active":g.value===q}]),onClick:J=>g.value=q},R(o[q]),11,$r))),128))]),r("button",{type:"button",class:"td-api-aside-icon-btn","aria-label":c.value==="req"?"已复制":"复制请求示例",onClick:I[0]||(I[0]=q=>T(D.value,"req"))},[I[2]||(I[2]=r("span",{class:"td-api-aside-copy-icon","aria-hidden":"true"},null,-1)),c.value==="req"?(s(),u("span",Tr,"已复制")):h("",!0)],8,Pr)]),r("pre",Sr,[r("code",null,R(D.value),1)])]),r("div",wr,[r("div",Lr,[I[4]||(I[4]=r("div",{class:"td-api-aside-tabs td-api-aside-tabs--single",role:"presentation"},[r("span",{class:"td-api-aside-tab is-active is-static",role:"heading"},"Response")],-1)),r("button",{type:"button",class:"td-api-aside-icon-btn","aria-label":c.value==="res"?"已复制":"复制响应示例",onClick:I[1]||(I[1]=q=>T(L.value,"res"))},[I[3]||(I[3]=r("span",{class:"td-api-aside-copy-icon","aria-hidden":"true"},null,-1)),c.value==="res"?(s(),u("span",Cr,"已复制")):h("",!0)],8,Ar)]),r("pre",Or,[r("code",null,R(L.value),1)])])])):h("",!0)}}),Er=S(Rr,[["__scopeId","data-v-9c745794"]]),Ir={key:0,class:"td-api-endpoint-fallback"},Hr={key:0,class:"td-api-endpoint-fallback__path"},Nr=y({__name:"ApiDocChrome",setup(e){const t=te(),{frontmatter:n}=Pe(),o=A(!1);let a=null;const i=_(()=>{const b=(n.value.apiMethod??n.value.method??"").toString().trim().toUpperCase();return b&&/^GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS$/.test(b)?b:""}),c=_(()=>(n.value.apiPath??"").toString().trim());function p(){a==null||a.disconnect(),a=null}function m(){if(typeof document>"u")return;const b=i.value;if(!t.path.startsWith("/api/")||!b){o.value=!1;return}const w=document.querySelectorAll(".vp-doc .vp-code-group");o.value=w.length===0,w.forEach($=>{const L=$.querySelector(":scope > .tabs");if(!L||!(L instanceof HTMLElement)||L.querySelector(".td-api-http-method-pill"))return;const H=document.createElement("span");H.className=`td-api-http-method-pill td-api-http-method-pill--${b.toLowerCase()}`,H.textContent=b,H.setAttribute("aria-label",`HTTP ${b}`),L.insertBefore(H,L.firstChild)})}async function T(){const b=t.path.startsWith("/api/");if(typeof document<"u"&&document.documentElement.classList.toggle("td-api-reference",b),p(),!b){o.value=!1;return}if(typeof document>"u")return;await Se(),m();const v=document.querySelector(".vp-doc");v&&(a=new MutationObserver(()=>{m()}),a.observe(v,{childList:!0,subtree:!0}))}return U(()=>[t.path,n.value.apiMethod,n.value.method,n.value.apiPath],()=>{T()},{flush:"post",immediate:!0}),Z(()=>{p(),typeof document<"u"&&document.documentElement.classList.remove("td-api-reference")}),(b,v)=>o.value&&l(t).path.startsWith("/api/")&&i.value?(s(),u("div",Ir,[r("span",{class:x(["td-api-http-method-pill",`td-api-http-method-pill--${i.value.toLowerCase()}`])},R(i.value),3),c.value?(s(),u("code",Hr,R(c.value),1)):h("",!0)])):h("",!0)}}),xr={class:"td-site-legal-footer td-lp-new__footer",role:"contentinfo"},Vr={class:"td-legal-modal__panel"},Br={class:"td-legal-modal__head"},qr={class:"td-legal-modal__frame-wrap"},Mr=["title","src"],He="td-legal-modal-title",Ne=y({__name:"SiteLegalFooter",setup(e){const t=A(null),n=A(null),o=_(()=>t.value==="privacy"?`${se("/legal-privacy-standalone.html")}?embed=1`:t.value==="terms"?`${se("/legal-terms-standalone.html")}?embed=1`:""),a=_(()=>t.value==="privacy"?"隐私政策":t.value==="terms"?"用户协议":"");let i=null;function c(){if(typeof document>"u"||i)return;const $=document.body;i={overflow:$.style.overflow,paddingRight:$.style.paddingRight};const L=window.innerWidth-document.documentElement.clientWidth;$.style.overflow="hidden",L>0&&($.style.paddingRight=`${L}px`)}function p(){if(typeof document>"u"||!i)return;const $=document.body;$.style.overflow=i.overflow,$.style.paddingRight=i.paddingRight,i=null}function m(){t.value="privacy"}function T(){t.value="terms"}function b(){t.value=null}function v($){$.key==="Escape"&&b()}function w($){if(!$.data||$.data.type!=="td-legal-doc-height")return;const L=n.value;if(!L||$.source!==L.contentWindow)return;const H=Math.floor(window.innerHeight*.78);L.style.height=`${Math.min(Math.ceil($.data.height),H)}px`}return U(t,($,L)=>{typeof document>"u"||($&&!L?(c(),document.addEventListener("keydown",v)):!$&&L&&(p(),document.removeEventListener("keydown",v)))}),G(()=>{window.addEventListener("message",w)}),Z(()=>{document.removeEventListener("keydown",v),window.removeEventListener("message",w),p()}),($,L)=>(s(),u("footer",xr,[L[2]||(L[2]=r("div",{class:"td-lp-new__section-head td-lp-new__footer-head"},[r("span",{class:"td-icon td-lp-new__footer-icon","aria-hidden":"true"},"policy"),r("h2",{class:"td-lp-new__label td-lp-new__label--mute"},"合规与声明")],-1)),r("div",{class:"td-lp-new__legal"},[L[1]||(L[1]=r("p",null," AtomFlow（原流）致力于为合法合规的业务需求提供技术基础设施。用户在使用本服务时必须遵守当地法律法规。本平台不提供任何违反特定国家政策的非法访问途径。所有模型接口均通过官方正规渠道聚合，我们仅作为技术中间层提供优化加速与管理工具。如有任何疑问或合规需求，请联系我们的法务部门。 ",-1)),r("div",{class:"td-lp-new__legal-links"},[L[0]||(L[0]=r("span",null,"© 2026 AtomFlow（原流）",-1)),r("button",{type:"button",class:"td-legal-footer-link",onClick:m},"Privacy Policy"),r("button",{type:"button",class:"td-legal-footer-link",onClick:T},"Terms of Service")])]),(s(),P(Ue,{to:"body"},[t.value?(s(),u("div",{key:0,class:"td-legal-modal",role:"dialog","aria-modal":"true","aria-labelledby":He},[r("div",{class:"td-legal-modal__backdrop","aria-hidden":"true",onClick:b}),r("div",Vr,[r("header",Br,[r("h2",{id:He,class:"td-legal-modal__title"},R(a.value),1),r("button",{type:"button",class:"td-legal-modal__close","aria-label":"关闭",onClick:b}," 关闭 ")]),r("div",qr,[(s(),u("iframe",{ref_key:"iframeRef",ref:n,key:t.value,class:"td-legal-modal__iframe",title:a.value,src:o.value,loading:"lazy",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Mr))])])])):h("",!0)]))]))}}),Dr={class:"td-sidebar-heading",role:"heading","aria-level":"2"},jr=y({__name:"Layout",setup(e){const t=Xe.Layout,n=te(),o=_(()=>n.path.startsWith("/api/")?"API 参考":"文档导航");return(a,i)=>(s(),P(l(t),null,{"sidebar-nav-before":f(()=>[r("div",Dr,R(o.value),1)]),"doc-before":f(()=>[k(Nr)]),"aside-outline-before":f(()=>[k(Er)]),"doc-after":f(()=>[k(Ne)]),"page-bottom":f(()=>[k(Ne)]),_:1}))}}),Ur={class:"td-qs-playground"},Fr={class:"td-qs-playground__modal",role:"dialog","aria-modal":"true","aria-labelledby":"td-qs-playground-title"},zr={class:"td-qs-playground__top"},Wr={class:"td-qs-playground__top-actions"},Gr=["disabled"],Kr={class:"td-qs-playground__body"},Jr={class:"td-qs-playground__form"},Xr={class:"td-qs-playground__collapse",open:""},Yr={class:"td-qs-playground__fields"},Qr={class:"td-qs-playground__field"},Zr={class:"td-qs-playground__field"},ei={class:"td-qs-playground__field"},ti={class:"td-qs-playground__code-col"},ni={class:"td-qs-playground__code"},oi={class:"td-qs-playground__pre"},ai={key:0,class:"td-qs-playground__alert td-qs-playground__alert--err"},si={key:1,class:"td-qs-playground__response"},ri={class:"td-qs-playground__response-pre"},ve="https://atomflow.vip/v1/chat/completions",ii=y({__name:"QuickStartChatPlayground",setup(e){const t=A(!1),n=A(""),o=A("gpt-5.4-mini"),a=A("Hello!"),i=A(!1),c=A(""),p=A("");function m(E){return`'${E.replace(/'/g,"'\\''")}'`}function T(E){const g=E.trim();if(!g)return E;try{return JSON.stringify(JSON.parse(g),null,2)}catch{return E}}const b=_(()=>JSON.stringify({model:o.value.trim()||"gpt-5.4-mini",messages:[{role:"user",content:a.value}]})),v=_(()=>{const E=n.value.trim();return E.length?E:"sk-your-api-key"}),w=_(()=>{const E=m(b.value);return`curl ${ve} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${v.value}" \\
  -d ${E}`});function $(){t.value=!1}function L(E){E.key==="Escape"&&t.value&&(E.preventDefault(),$())}U(t,E=>{typeof document>"u"||document.documentElement.classList.toggle("td-qs-playground-lock",E)}),G(()=>window.addEventListener("keydown",L)),Z(()=>{window.removeEventListener("keydown",L),document.documentElement.classList.remove("td-qs-playground-lock")});async function H(){try{await navigator.clipboard.writeText(w.value)}catch{}}async function M(){c.value="",p.value="";const E=n.value.trim();if(!E){c.value="请先填写令牌。";return}i.value=!0;try{const g=await fetch(ve,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${E}`},body:b.value}),D=await g.text();p.value=T(D),g.ok||(c.value=`HTTP ${g.status}`)}catch(g){c.value=g instanceof Error?g.message:String(g)}finally{i.value=!1}}return(E,g)=>(s(),u("div",Ur,[r("button",{type:"button",class:"td-btn td-btn--primary td-qs-playground__trigger",onClick:g[0]||(g[0]=D=>t.value=!0)}," 试一试 "),(s(),P(Ue,{to:"body"},[oe(r("div",{class:"td-qs-playground__backdrop",role:"presentation",onClick:je($,["self"])},null,512),[[Ee,t.value]]),oe(r("div",Fr,[r("header",zr,[r("div",{class:"td-qs-playground__method-path"},[g[4]||(g[4]=r("span",{class:"td-qs-playground__pill"},"POST",-1)),r("code",{class:"td-qs-playground__path"},R(ve))]),r("div",Wr,[r("button",{type:"button",class:"td-btn td-btn--primary td-qs-playground__send",disabled:i.value,onClick:M},[...g[5]||(g[5]=[r("span",{class:"td-qs-playground__play","aria-hidden":"true"},"▶",-1),F(" 发送 ",-1)])],8,Gr),r("button",{type:"button",class:"td-qs-playground__icon-btn","aria-label":"关闭",onClick:$}," × ")])]),r("div",Kr,[r("div",Jr,[g[13]||(g[13]=r("h2",{id:"td-qs-playground-title",class:"td-qs-playground__title"},"创建聊天补全",-1)),g[14]||(g[14]=r("p",{class:"td-qs-playground__desc"},"填写参数后，右侧 cURL 会同步更新；也可直接发送请求（受浏览器跨域策略影响）。响应正文显示在 cURL 下方。",-1)),r("details",Xr,[g[12]||(g[12]=r("summary",null,"请求参数",-1)),r("div",Yr,[r("label",Qr,[g[6]||(g[6]=r("span",{class:"td-qs-playground__field-head"},[r("span",{class:"td-qs-playground__name"},"令牌"),r("span",{class:"td-qs-playground__type"},"string"),r("span",{class:"td-qs-playground__req"},"必填")],-1)),g[7]||(g[7]=r("span",{class:"td-qs-playground__hint"},[F("对应请求头 "),r("code",null,"Authorization: Bearer …")],-1)),oe(r("input",{"onUpdate:modelValue":g[1]||(g[1]=D=>n.value=D),class:"td-qs-playground__input",type:"password",autocomplete:"off",placeholder:"输入 sk-…"},null,512),[[fe,n.value]])]),r("label",Zr,[g[8]||(g[8]=r("span",{class:"td-qs-playground__field-head"},[r("span",{class:"td-qs-playground__name"},"model"),r("span",{class:"td-qs-playground__type"},"string")],-1)),g[9]||(g[9]=r("span",{class:"td-qs-playground__hint"},"请求体中的模型 ID",-1)),oe(r("input",{"onUpdate:modelValue":g[2]||(g[2]=D=>o.value=D),class:"td-qs-playground__input",type:"text",autocomplete:"off"},null,512),[[fe,o.value]])]),r("label",ei,[g[10]||(g[10]=r("span",{class:"td-qs-playground__field-head"},[r("span",{class:"td-qs-playground__name"},"用户消息 content"),r("span",{class:"td-qs-playground__type"},"string")],-1)),g[11]||(g[11]=r("span",{class:"td-qs-playground__hint"},[F("作为 "),r("code",null,"messages[0].content"),F("（role 固定为 user）")],-1)),oe(r("textarea",{"onUpdate:modelValue":g[3]||(g[3]=D=>a.value=D),class:"td-qs-playground__textarea",rows:"4"},null,512),[[fe,a.value]])])])])]),r("div",ti,[r("div",ni,[r("div",{class:"td-qs-playground__code-bar"},[g[15]||(g[15]=r("span",null,"cURL",-1)),r("button",{type:"button",class:"td-qs-playground__icon-btn","aria-label":"复制 cURL",onClick:H}," ⧉ ")]),r("pre",oi,[r("code",null,R(w.value),1)])]),c.value?(s(),u("p",ai,R(c.value),1)):h("",!0),p.value?(s(),u("div",si,[g[16]||(g[16]=r("div",{class:"td-qs-playground__response-bar"},"响应",-1)),r("pre",ri,R(p.value),1)])):h("",!0)])])],512),[[Ee,t.value]])]))]))}}),li=S(ii,[["__scopeId","data-v-dfa26a60"]]),ui={extends:Xe,Layout:jr,enhanceApp(e){e.app.component("QuickStartChatPlayground",li)}};export{ui as R,wa as c,O as u};
