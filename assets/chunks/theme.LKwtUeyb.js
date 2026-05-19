const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.Cav-kkRr.js","assets/chunks/framework.oFDsBAuP.js"])))=>i.map(i=>d[i]);
import{d as y,c as u,r as p,n as V,o as s,a as z,t as O,b as k,w as f,T as $e,e as h,_ as T,u as ce,i as Xe,f as Ye,g as se,h as _,j as r,k as l,l as Q,m as _e,p as w,q as F,s as ue,v as K,x as Z,y as Pe,z as Qe,A as Ze,F as B,B as U,C as ee,D as de,E as g,G as Ne,H as W,I as xe,J as te,K as Y,L as pe,M as et,N as Ve,O as ye,P as Te,Q as Be,R as me,S as tt,U as nt,V as ot,W as qe,X as Me,Y as at,Z as st,$ as rt,a0 as De,a1 as it,a2 as je,a3 as oe,a4 as Re,a5 as he}from"./framework.oFDsBAuP.js";const lt=y({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(s(),u("span",{class:V(["VPBadge",e.type])},[p(t.$slots,"default",{},()=>[z(O(e.text),1)])],2))}}),ct={key:0,class:"VPBackdrop"},ut=y({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(s(),k($e,{name:"fade"},{default:f(()=>[e.show?(s(),u("div",ct)):h("",!0)]),_:1}))}}),dt=T(ut,[["__scopeId","data-v-c79a1216"]]),R=ce;function pt(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function ge(e){return e.startsWith("/")?e:`/${e}`}function Se(e){const{pathname:t,search:n,hash:o,protocol:a}=new URL(e,"http://a.com");if(Xe(e)||e.startsWith("#")||!a.startsWith("http")||!Ye(t))return e;const{site:i}=R(),c=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${n}${o}`);return se(c)}function re({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:a,hash:i}=R(),c=_(()=>{var m,b;return{label:(m=t.value.locales[n.value])==null?void 0:m.label,link:((b=t.value.locales[n.value])==null?void 0:b.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:_(()=>Object.entries(t.value.locales).flatMap(([m,b])=>c.value.label===b.label?[]:{text:b.label,link:mt(b.link||(m==="root"?"/":`/${m}/`),a.value.i18nRouting!==!1&&e,o.value.relativePath.slice(c.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:c}}function mt(e,t,n,o){return t?e.replace(/\/$/,"")+ge(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const ft={class:"NotFound"},ht={class:"code"},vt={class:"title"},_t={class:"quote"},yt={class:"action"},gt=["href","aria-label"],kt=y({__name:"NotFound",setup(e){const{theme:t}=R(),{currentLang:n}=re();return(o,a)=>{var i,c,d,m,b;return s(),u("div",ft,[r("p",ht,O(((i=l(t).notFound)==null?void 0:i.code)??"404"),1),r("h1",vt,O(((c=l(t).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=r("div",{class:"divider"},null,-1)),r("blockquote",_t,O(((d=l(t).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),r("div",yt,[r("a",{class:"link",href:l(se)(l(n).link),"aria-label":((m=l(t).notFound)==null?void 0:m.linkLabel)??"go to home"},O(((b=l(t).notFound)==null?void 0:b.linkText)??"Take me home"),9,gt)])])}}}),bt=T(kt,[["__scopeId","data-v-d6be1790"]]);function Ue(e,t){if(Array.isArray(e))return ie(e);if(e==null)return[];t=ge(t);const n=Object.keys(e).sort((a,i)=>i.split("/").length-a.split("/").length).find(a=>t.startsWith(ge(a))),o=n?e[n]:[];return Array.isArray(o)?ie(o):ie(o.items,o.base)}function $t(e){const t=[];let n=0;for(const o in e){const a=e[o];if(a.items){n=t.push(a);continue}t[n]||t.push({items:[]}),t[n].items.push(a)}return t}function Pt(e){const t=[];function n(o){for(const a of o)a.text&&a.link&&t.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(e),t}function ke(e,t){return Array.isArray(t)?t.some(n=>ke(e,n)):Q(e,t.link)?!0:t.items?ke(e,t.items):!1}function ie(e,t){return[...e].map(n=>{const o={...n},a=o.base||t;return a&&o.link&&(o.link=a+o.link),o.items&&(o.items=ie(o.items,a)),o})}function J(){const{frontmatter:e,page:t,theme:n}=R(),o=_e("(min-width: 960px)"),a=w(!1),i=_(()=>{const L=n.value.sidebar,N=t.value.relativePath;return L?Ue(L,N):[]}),c=w(i.value);F(i,(L,N)=>{JSON.stringify(L)!==JSON.stringify(N)&&(c.value=i.value)});const d=_(()=>e.value.sidebar!==!1&&c.value.length>0&&e.value.layout!=="home"),m=_(()=>b?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),b=_(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),P=_(()=>d.value&&o.value),v=_(()=>d.value?$t(c.value):[]);function S(){a.value=!0}function C(){a.value=!1}function E(){a.value?C():S()}return{isOpen:a,sidebar:c,sidebarGroups:v,hasSidebar:d,hasAside:b,leftAside:m,isSidebarEnabled:P,open:S,close:C,toggle:E}}function Tt(e,t){let n;ue(()=>{n=e.value?document.activeElement:void 0}),K(()=>{window.addEventListener("keyup",o)}),Z(()=>{window.removeEventListener("keyup",o)});function o(a){a.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function St(e){const{page:t,hash:n}=R(),o=w(!1),a=_(()=>e.value.collapsed!=null),i=_(()=>!!e.value.link),c=w(!1),d=()=>{c.value=Q(t.value.relativePath,e.value.link)};F([t,e,n],d),K(d);const m=_(()=>c.value?!0:e.value.items?ke(t.value.relativePath,e.value.items):!1),b=_(()=>!!(e.value.items&&e.value.items.length));ue(()=>{o.value=!!(a.value&&e.value.collapsed)}),Pe(()=>{(c.value||m.value)&&(o.value=!1)});function P(){a.value&&(o.value=!o.value)}return{collapsed:o,collapsible:a,isLink:i,isActiveLink:c,hasActiveLink:m,hasChildren:b,toggle:P}}function Lt(){const{hasSidebar:e}=J(),t=_e("(min-width: 960px)"),n=_e("(min-width: 1280px)");return{isAsideEnabled:_(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const wt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,be=[];function Fe(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Le(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{element:n,title:At(n),link:"#"+n.id,level:o}});return Ct(t,e)}function At(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(wt.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Ct(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return Et(e,o,a)}function Ot(e,t){const{isAsideEnabled:n}=Lt(),o=pt(i,100);let a=null;K(()=>{requestAnimationFrame(i),window.addEventListener("scroll",o)}),Qe(()=>{c(location.hash)}),Z(()=>{window.removeEventListener("scroll",o)});function i(){if(!n.value)return;const d=window.scrollY,m=window.innerHeight,b=document.body.offsetHeight,P=Math.abs(d+m-b)<1,v=be.map(({element:C,link:E})=>({link:E,top:Rt(C)})).filter(({top:C})=>!Number.isNaN(C)).sort((C,E)=>C.top-E.top);if(!v.length){c(null);return}if(d<1){c(null);return}if(P){c(v[v.length-1].link);return}let S=null;for(const{link:C,top:E}of v){if(E>d+Ze()+4)break;S=C}c(S)}function c(d){a&&a.classList.remove("active"),d==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const m=a;m?(m.classList.add("active"),t.value.style.top=m.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Rt(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function Et(e,t,n){be.length=0;const o=[],a=[];return e.forEach(i=>{const c={...i,children:[]};let d=a[a.length-1];for(;d&&d.level>=c.level;)a.pop(),d=a[a.length-1];if(c.element.classList.contains("ignore-header")||d&&"shouldIgnore"in d){a.push({level:c.level,shouldIgnore:!0});return}c.level>n||c.level<t||(be.push({element:c.element,link:c.link}),d?d.children.push(c):o.push(c),a.push(c))}),o}const It=["href","title"],Ht=y({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const o=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(o));a==null||a.focus({preventScroll:!0})}return(n,o)=>{const a=ee("VPDocOutlineItem",!0);return s(),u("ul",{class:V(["VPDocOutlineItem",e.root?"root":"nested"])},[(s(!0),u(B,null,U(e.headers,({children:i,link:c,title:d})=>(s(),u("li",null,[r("a",{class:"outline-link",href:c,onClick:t,title:d},O(d),9,It),i!=null&&i.length?(s(),k(a,{key:0,headers:i},null,8,["headers"])):h("",!0)]))),256))],2)}}}),ze=T(Ht,[["__scopeId","data-v-b933a997"]]),Nt={class:"content"},xt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Vt=y({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=R(),o=Ne([]);de(()=>{o.value=Le(t.value.outline??n.value.outline)});const a=w(),i=w();return Ot(a,i),(c,d)=>(s(),u("nav",{"aria-labelledby":"doc-outline-aria-label",class:V(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:a},[r("div",Nt,[r("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),r("div",xt,O(l(Fe)(l(n))),1),g(ze,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),Bt=T(Vt,[["__scopeId","data-v-a5bbad30"]]),qt={class:"VPDocAsideCarbonAds"},Mt=y({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,o)=>(s(),u("div",qt,[g(l(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Dt={class:"VPDocAside"},jt=y({__name:"VPDocAside",setup(e){const{theme:t}=R();return(n,o)=>(s(),u("div",Dt,[p(n.$slots,"aside-top",{},void 0,!0),p(n.$slots,"aside-outline-before",{},void 0,!0),g(Bt),p(n.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=r("div",{class:"spacer"},null,-1)),p(n.$slots,"aside-ads-before",{},void 0,!0),l(t).carbonAds?(s(),k(Mt,{key:0,"carbon-ads":l(t).carbonAds},null,8,["carbon-ads"])):h("",!0),p(n.$slots,"aside-ads-after",{},void 0,!0),p(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Ut=T(jt,[["__scopeId","data-v-3f215769"]]);function Ft(){const{theme:e,page:t}=R();return _(()=>{const{text:n="Edit this page",pattern:o=""}=e.value.editLink||{};let a;return typeof o=="function"?a=o(t.value):a=o.replace(/:path/g,t.value.filePath),{url:a,text:n}})}function zt(){const{page:e,theme:t,frontmatter:n}=R();return _(()=>{var b,P,v,S,C,E,L,N;const o=Ue(t.value.sidebar,e.value.relativePath),a=Pt(o),i=Wt(a,M=>M.link.replace(/[?#].*$/,"")),c=i.findIndex(M=>Q(e.value.relativePath,M.link)),d=((b=t.value.docFooter)==null?void 0:b.prev)===!1&&!n.value.prev||n.value.prev===!1,m=((P=t.value.docFooter)==null?void 0:P.next)===!1&&!n.value.next||n.value.next===!1;return{prev:d?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((v=i[c-1])==null?void 0:v.docFooterText)??((S=i[c-1])==null?void 0:S.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((C=i[c-1])==null?void 0:C.link)},next:m?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((E=i[c+1])==null?void 0:E.docFooterText)??((L=i[c+1])==null?void 0:L.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((N=i[c+1])==null?void 0:N.link)}}})}function Wt(e,t){const n=new Set;return e.filter(o=>{const a=t(o);return n.has(a)?!1:n.add(a)})}const G=y({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=_(()=>t.tag??(t.href?"a":"span")),o=_(()=>t.href&&xe.test(t.href)||t.target==="_blank");return(a,i)=>(s(),k(W(n.value),{class:V(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?l(Se)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:f(()=>[p(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Gt={class:"VPLastUpdated"},Kt=["datetime"],Jt=y({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:o}=R(),a=_(()=>new Date(n.value.lastUpdated)),i=_(()=>a.value.toISOString()),c=w("");return K(()=>{ue(()=>{var d,m,b;c.value=new Intl.DateTimeFormat((m=(d=t.value.lastUpdated)==null?void 0:d.formatOptions)!=null&&m.forceLocale?o.value:void 0,((b=t.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(d,m)=>{var b;return s(),u("p",Gt,[z(O(((b=l(t).lastUpdated)==null?void 0:b.text)||l(t).lastUpdatedText||"Last updated")+": ",1),r("time",{datetime:i.value},O(c.value),9,Kt)])}}}),Xt=T(Jt,[["__scopeId","data-v-e98dd255"]]),Yt={key:0,class:"VPDocFooter"},Qt={key:0,class:"edit-info"},Zt={key:0,class:"edit-link"},en={key:1,class:"last-updated"},tn={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},nn={class:"pager"},on=["innerHTML"],an=["innerHTML"],sn={class:"pager"},rn=["innerHTML"],ln=["innerHTML"],cn=y({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:o}=R(),a=Ft(),i=zt(),c=_(()=>t.value.editLink&&o.value.editLink!==!1),d=_(()=>n.value.lastUpdated),m=_(()=>c.value||d.value||i.value.prev||i.value.next);return(b,P)=>{var v,S,C,E;return m.value?(s(),u("footer",Yt,[p(b.$slots,"doc-footer-before",{},void 0,!0),c.value||d.value?(s(),u("div",Qt,[c.value?(s(),u("div",Zt,[g(G,{class:"edit-link-button",href:l(a).url,"no-icon":!0},{default:f(()=>[P[0]||(P[0]=r("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),z(" "+O(l(a).text),1)]),_:1},8,["href"])])):h("",!0),d.value?(s(),u("div",en,[g(Xt)])):h("",!0)])):h("",!0),(v=l(i).prev)!=null&&v.link||(S=l(i).next)!=null&&S.link?(s(),u("nav",tn,[P[1]||(P[1]=r("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),r("div",nn,[(C=l(i).prev)!=null&&C.link?(s(),k(G,{key:0,class:"pager-link prev",href:l(i).prev.link},{default:f(()=>{var L;return[r("span",{class:"desc",innerHTML:((L=l(t).docFooter)==null?void 0:L.prev)||"Previous page"},null,8,on),r("span",{class:"title",innerHTML:l(i).prev.text},null,8,an)]}),_:1},8,["href"])):h("",!0)]),r("div",sn,[(E=l(i).next)!=null&&E.link?(s(),k(G,{key:0,class:"pager-link next",href:l(i).next.link},{default:f(()=>{var L;return[r("span",{class:"desc",innerHTML:((L=l(t).docFooter)==null?void 0:L.next)||"Next page"},null,8,rn),r("span",{class:"title",innerHTML:l(i).next.text},null,8,ln)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),un=T(cn,[["__scopeId","data-v-e257564d"]]),dn={class:"container"},pn={class:"aside-container"},mn={class:"aside-content"},fn={class:"content"},hn={class:"content-container"},vn={class:"main"},_n=y({__name:"VPDoc",setup(e){const{theme:t}=R(),n=te(),{hasSidebar:o,hasAside:a,leftAside:i}=J(),c=_(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(d,m)=>{const b=ee("Content");return s(),u("div",{class:V(["VPDoc",{"has-sidebar":l(o),"has-aside":l(a)}])},[p(d.$slots,"doc-top",{},void 0,!0),r("div",dn,[l(a)?(s(),u("div",{key:0,class:V(["aside",{"left-aside":l(i)}])},[m[0]||(m[0]=r("div",{class:"aside-curtain"},null,-1)),r("div",pn,[r("div",mn,[g(Ut,null,{"aside-top":f(()=>[p(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[p(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[p(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[p(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[p(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[p(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),r("div",fn,[r("div",hn,[p(d.$slots,"doc-before",{},void 0,!0),r("main",vn,[g(b,{class:V(["vp-doc",[c.value,l(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(un,null,{"doc-footer-before":f(()=>[p(d.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(d.$slots,"doc-after",{},void 0,!0)])])]),p(d.$slots,"doc-bottom",{},void 0,!0)],2)}}}),yn=T(_n,[["__scopeId","data-v-39a288b8"]]),gn=y({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=_(()=>t.href&&xe.test(t.href)),o=_(()=>t.tag||(t.href?"a":"button"));return(a,i)=>(s(),k(W(o.value),{class:V(["VPButton",[e.size,e.theme]]),href:e.href?l(Se)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:f(()=>[z(O(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),kn=T(gn,[["__scopeId","data-v-fa7799d5"]]),bn=["src","alt"],$n=y({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const o=ee("VPImage",!0);return e.image?(s(),u(B,{key:0},[typeof e.image=="string"||"src"in e.image?(s(),u("img",Y({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:l(se)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,bn)):(s(),u(B,{key:1},[g(o,Y({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),g(o,Y({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),le=T($n,[["__scopeId","data-v-8426fc1a"]]),Pn={class:"container"},Tn={class:"main"},Sn={class:"heading"},Ln=["innerHTML"],wn=["innerHTML"],An=["innerHTML"],Cn={key:0,class:"actions"},On={key:0,class:"image"},Rn={class:"image-container"},En=y({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=pe("hero-image-slot-exists");return(n,o)=>(s(),u("div",{class:V(["VPHero",{"has-image":e.image||l(t)}])},[r("div",Pn,[r("div",Tn,[p(n.$slots,"home-hero-info-before",{},void 0,!0),p(n.$slots,"home-hero-info",{},()=>[r("h1",Sn,[e.name?(s(),u("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Ln)):h("",!0),e.text?(s(),u("span",{key:1,innerHTML:e.text,class:"text"},null,8,wn)):h("",!0)]),e.tagline?(s(),u("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,An)):h("",!0)],!0),p(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(s(),u("div",Cn,[(s(!0),u(B,null,U(e.actions,a=>(s(),u("div",{key:a.link,class:"action"},[g(kn,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),p(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||l(t)?(s(),u("div",On,[r("div",Rn,[o[0]||(o[0]=r("div",{class:"image-bg"},null,-1)),p(n.$slots,"home-hero-image",{},()=>[e.image?(s(),k(le,{key:0,class:"image-src",image:e.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),In=T(En,[["__scopeId","data-v-4f9c455b"]]),Hn=y({__name:"VPHomeHero",setup(e){const{frontmatter:t}=R();return(n,o)=>l(t).hero?(s(),k(In,{key:0,class:"VPHomeHero",name:l(t).hero.name,text:l(t).hero.text,tagline:l(t).hero.tagline,image:l(t).hero.image,actions:l(t).hero.actions},{"home-hero-info-before":f(()=>[p(n.$slots,"home-hero-info-before")]),"home-hero-info":f(()=>[p(n.$slots,"home-hero-info")]),"home-hero-info-after":f(()=>[p(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":f(()=>[p(n.$slots,"home-hero-actions-after")]),"home-hero-image":f(()=>[p(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),Nn={class:"box"},xn={key:0,class:"icon"},Vn=["innerHTML"],Bn=["innerHTML"],qn=["innerHTML"],Mn={key:4,class:"link-text"},Dn={class:"link-text-value"},jn=y({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(s(),k(G,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:f(()=>[r("article",Nn,[typeof e.icon=="object"&&e.icon.wrap?(s(),u("div",xn,[g(le,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(s(),k(le,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(s(),u("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Vn)):h("",!0),r("h2",{class:"title",innerHTML:e.title},null,8,Bn),e.details?(s(),u("p",{key:3,class:"details",innerHTML:e.details},null,8,qn)):h("",!0),e.linkText?(s(),u("div",Mn,[r("p",Dn,[z(O(e.linkText)+" ",1),n[0]||(n[0]=r("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Un=T(jn,[["__scopeId","data-v-a3976bdc"]]),Fn={key:0,class:"VPFeatures"},zn={class:"container"},Wn={class:"items"},Gn=y({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=_(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,a)=>e.features?(s(),u("div",Fn,[r("div",zn,[r("div",Wn,[(s(!0),u(B,null,U(e.features,i=>(s(),u("div",{key:i.title,class:V(["item",[n.value]])},[g(Un,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),Kn=T(Gn,[["__scopeId","data-v-a6181336"]]),Jn=y({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=R();return(n,o)=>l(t).features?(s(),k(Kn,{key:0,class:"VPHomeFeatures",features:l(t).features},null,8,["features"])):h("",!0)}}),Xn=y({__name:"VPHomeContent",setup(e){const{width:t}=et({initialWidth:0,includeScrollbar:!1});return(n,o)=>(s(),u("div",{class:"vp-doc container",style:Ve(l(t)?{"--vp-offset":`calc(50% - ${l(t)/2}px)`}:{})},[p(n.$slots,"default",{},void 0,!0)],4))}}),Yn=T(Xn,[["__scopeId","data-v-8e2d4988"]]),Qn=y({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=R();return(o,a)=>{const i=ee("Content");return s(),u("div",{class:V(["VPHome",{"external-link-icon-enabled":l(n).externalLinkIcon}])},[p(o.$slots,"home-hero-before",{},void 0,!0),g(Hn,null,{"home-hero-info-before":f(()=>[p(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[p(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[p(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[p(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[p(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(o.$slots,"home-hero-after",{},void 0,!0),p(o.$slots,"home-features-before",{},void 0,!0),g(Jn),p(o.$slots,"home-features-after",{},void 0,!0),l(t).markdownStyles!==!1?(s(),k(Yn,{key:0},{default:f(()=>[g(i)]),_:1})):(s(),k(i,{key:1}))],2)}}}),Zn=T(Qn,[["__scopeId","data-v-8b561e3d"]]),eo={},to={class:"VPPage"};function no(e,t){const n=ee("Content");return s(),u("div",to,[p(e.$slots,"page-top"),g(n),p(e.$slots,"page-bottom")])}const oo=T(eo,[["render",no]]),ao=y({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=R(),{hasSidebar:o}=J();return(a,i)=>(s(),u("div",{class:V(["VPContent",{"has-sidebar":l(o),"is-home":l(n).layout==="home"}]),id:"VPContent"},[l(t).isNotFound?p(a.$slots,"not-found",{key:0},()=>[g(bt)],!0):l(n).layout==="page"?(s(),k(oo,{key:1},{"page-top":f(()=>[p(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[p(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(n).layout==="home"?(s(),k(Zn,{key:2},{"home-hero-before":f(()=>[p(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[p(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[p(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[p(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[p(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[p(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[p(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[p(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[p(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(n).layout&&l(n).layout!=="doc"?(s(),k(W(l(n).layout),{key:3})):(s(),k(yn,{key:4},{"doc-top":f(()=>[p(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[p(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":f(()=>[p(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[p(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[p(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":f(()=>[p(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":f(()=>[p(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[p(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[p(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[p(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":f(()=>[p(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),so=T(ao,[["__scopeId","data-v-1428d186"]]),ro={class:"container"},io=["innerHTML"],lo=["innerHTML"],co=y({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=R(),{hasSidebar:o}=J();return(a,i)=>l(t).footer&&l(n).footer!==!1?(s(),u("footer",{key:0,class:V(["VPFooter",{"has-sidebar":l(o)}])},[r("div",ro,[l(t).footer.message?(s(),u("p",{key:0,class:"message",innerHTML:l(t).footer.message},null,8,io)):h("",!0),l(t).footer.copyright?(s(),u("p",{key:1,class:"copyright",innerHTML:l(t).footer.copyright},null,8,lo)):h("",!0)])],2)):h("",!0)}}),uo=T(co,[["__scopeId","data-v-e315a0ad"]]);function po(){const{theme:e,frontmatter:t}=R(),n=Ne([]),o=_(()=>n.value.length>0);return de(()=>{n.value=Le(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:o}}const mo={class:"menu-text"},fo={class:"header"},ho={class:"outline"},vo=y({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=R(),o=w(!1),a=w(0),i=w(),c=w();function d(v){var S;(S=i.value)!=null&&S.contains(v.target)||(o.value=!1)}F(o,v=>{if(v){document.addEventListener("click",d);return}document.removeEventListener("click",d)}),ye("Escape",()=>{o.value=!1}),de(()=>{o.value=!1});function m(){o.value=!o.value,a.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function b(v){v.target.classList.contains("outline-link")&&(c.value&&(c.value.style.transition="none"),Te(()=>{o.value=!1}))}function P(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,S)=>(s(),u("div",{class:"VPLocalNavOutlineDropdown",style:Ve({"--vp-vh":a.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(s(),u("button",{key:0,onClick:m,class:V({open:o.value})},[r("span",mo,O(l(Fe)(l(n))),1),S[0]||(S[0]=r("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(s(),u("button",{key:1,onClick:P},O(l(n).returnToTopLabel||"Return to top"),1)),g($e,{name:"flyout"},{default:f(()=>[o.value?(s(),u("div",{key:0,ref_key:"items",ref:c,class:"items",onClick:b},[r("div",fo,[r("a",{class:"top-link",href:"#",onClick:P},O(l(n).returnToTopLabel||"Return to top"),1)]),r("div",ho,[g(ze,{headers:e.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),_o=T(vo,[["__scopeId","data-v-8a42e2b4"]]),yo={class:"container"},go=["aria-expanded"],ko={class:"menu-text"},bo=y({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=R(),{hasSidebar:o}=J(),{headers:a}=po(),{y:i}=Be(),c=w(0);K(()=>{c.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),de(()=>{a.value=Le(n.value.outline??t.value.outline)});const d=_(()=>a.value.length===0),m=_(()=>d.value&&!o.value),b=_(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:d.value,fixed:m.value}));return(P,v)=>l(n).layout!=="home"&&(!m.value||l(i)>=c.value)?(s(),u("div",{key:0,class:V(b.value)},[r("div",yo,[l(o)?(s(),u("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=S=>P.$emit("open-menu"))},[v[1]||(v[1]=r("span",{class:"vpi-align-left menu-icon"},null,-1)),r("span",ko,O(l(t).sidebarMenuLabel||"Menu"),1)],8,go)):h("",!0),g(_o,{headers:l(a),navHeight:c.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),$o=T(bo,[["__scopeId","data-v-a6f0e41e"]]);function Po(){const e=w(!1);function t(){e.value=!0,window.addEventListener("resize",a)}function n(){e.value=!1,window.removeEventListener("resize",a)}function o(){e.value?n():t()}function a(){window.outerWidth>=768&&n()}const i=te();return F(()=>i.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:o}}const To={},So={class:"VPSwitch",type:"button",role:"switch"},Lo={class:"check"},wo={key:0,class:"icon"};function Ao(e,t){return s(),u("button",So,[r("span",Lo,[e.$slots.default?(s(),u("span",wo,[p(e.$slots,"default",{},void 0,!0)])):h("",!0)])])}const Co=T(To,[["render",Ao],["__scopeId","data-v-1d5665e3"]]),Oo=y({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=R(),o=pe("toggle-appearance",()=>{t.value=!t.value}),a=w("");return Pe(()=>{a.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,c)=>(s(),k(Co,{title:a.value,class:"VPSwitchAppearance","aria-checked":l(t),onClick:l(o)},{default:f(()=>[...c[0]||(c[0]=[r("span",{class:"vpi-sun sun"},null,-1),r("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),we=T(Oo,[["__scopeId","data-v-5337faa4"]]),Ro={key:0,class:"VPNavBarAppearance"},Eo=y({__name:"VPNavBarAppearance",setup(e){const{site:t}=R();return(n,o)=>l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(s(),u("div",Ro,[g(we)])):h("",!0)}}),Io=T(Eo,[["__scopeId","data-v-6c893767"]]),Ae=w();let We=!1,ve=0;function Ho(e){const t=w(!1);if(me){!We&&No(),ve++;const n=F(Ae,o=>{var a,i,c;o===e.el.value||(a=e.el.value)!=null&&a.contains(o)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(c=e.onBlur)==null||c.call(e))});Z(()=>{n(),ve--,ve||xo()})}return tt(t)}function No(){document.addEventListener("focusin",Ge),We=!0,Ae.value=document.activeElement}function xo(){document.removeEventListener("focusin",Ge)}function Ge(){Ae.value=document.activeElement}const Vo={class:"VPMenuLink"},Bo=["innerHTML"],qo=y({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=R();return(n,o)=>(s(),u("div",Vo,[g(G,{class:V({active:l(Q)(l(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,Bo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),fe=T(qo,[["__scopeId","data-v-35975db6"]]),Mo={class:"VPMenuGroup"},Do={key:0,class:"title"},jo=y({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(s(),u("div",Mo,[e.text?(s(),u("p",Do,O(e.text),1)):h("",!0),(s(!0),u(B,null,U(e.items,o=>(s(),u(B,null,["link"in o?(s(),k(fe,{key:0,item:o},null,8,["item"])):h("",!0)],64))),256))]))}}),Uo=T(jo,[["__scopeId","data-v-69e747b5"]]),Fo={class:"VPMenu"},zo={key:0,class:"items"},Wo=y({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(s(),u("div",Fo,[e.items?(s(),u("div",zo,[(s(!0),u(B,null,U(e.items,o=>(s(),u(B,{key:JSON.stringify(o)},["link"in o?(s(),k(fe,{key:0,item:o},null,8,["item"])):"component"in o?(s(),k(W(o.component),Y({key:1,ref_for:!0},o.props),null,16)):(s(),k(Uo,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):h("",!0),p(t.$slots,"default",{},void 0,!0)]))}}),Go=T(Wo,[["__scopeId","data-v-b98bc113"]]),Ko=["aria-expanded","aria-label"],Jo={key:0,class:"text"},Xo=["innerHTML"],Yo={key:1,class:"vpi-more-horizontal icon"},Qo={class:"menu"},Zo=y({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=w(!1),n=w();Ho({el:n,onBlur:o});function o(){t.value=!1}return(a,i)=>(s(),u("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:i[1]||(i[1]=c=>t.value=!0),onMouseleave:i[2]||(i[2]=c=>t.value=!1)},[r("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=c=>t.value=!t.value)},[e.button||e.icon?(s(),u("span",Jo,[e.icon?(s(),u("span",{key:0,class:V([e.icon,"option-icon"])},null,2)):h("",!0),e.button?(s(),u("span",{key:1,innerHTML:e.button},null,8,Xo)):h("",!0),i[3]||(i[3]=r("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(s(),u("span",Yo))],8,Ko),r("div",Qo,[g(Go,{items:e.items},{default:f(()=>[p(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Ce=T(Zo,[["__scopeId","data-v-cf11d7a2"]]),ea=["href","aria-label","innerHTML"],ta=y({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=w();K(async()=>{var i;await Te();const a=(i=n.value)==null?void 0:i.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=_(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(a,i)=>(s(),u("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,ea))}}),na=T(ta,[["__scopeId","data-v-bd121fe5"]]),oa={class:"VPSocialLinks"},aa=y({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(s(),u("div",oa,[(s(!0),u(B,null,U(e.links,({link:o,icon:a,ariaLabel:i})=>(s(),k(na,{key:o,icon:a,link:o,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Oe=T(aa,[["__scopeId","data-v-7bc22406"]]),sa={key:0,class:"group translations"},ra={class:"trans-title"},ia={key:1,class:"group"},la={class:"item appearance"},ca={class:"label"},ua={class:"appearance-action"},da={key:2,class:"group"},pa={class:"item social-links"},ma=y({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=R(),{localeLinks:o,currentLang:a}=re({correspondingLink:!0}),i=_(()=>o.value.length&&a.value.label||t.value.appearance||n.value.socialLinks);return(c,d)=>i.value?(s(),k(Ce,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:f(()=>[l(o).length&&l(a).label?(s(),u("div",sa,[r("p",ra,O(l(a).label),1),(s(!0),u(B,null,U(l(o),m=>(s(),k(fe,{key:m.link,item:m},null,8,["item"]))),128))])):h("",!0),l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(s(),u("div",ia,[r("div",la,[r("p",ca,O(l(n).darkModeSwitchLabel||"Appearance"),1),r("div",ua,[g(we)])])])):h("",!0),l(n).socialLinks?(s(),u("div",da,[r("div",pa,[g(Oe,{class:"social-links-list",links:l(n).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),fa=T(ma,[["__scopeId","data-v-bb2aa2f0"]]),ha=["aria-expanded"],va=y({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(s(),u("button",{type:"button",class:V(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[r("span",{class:"container"},[r("span",{class:"top"}),r("span",{class:"middle"}),r("span",{class:"bottom"})],-1)])],10,ha))}}),_a=T(va,[["__scopeId","data-v-e5dd9c1c"]]),ya=["innerHTML"],ga=y({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=R();return(n,o)=>(s(),k(G,{class:V({VPNavBarMenuLink:!0,active:l(Q)(l(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,ya)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ka=T(ga,[["__scopeId","data-v-e56f3d57"]]),ba=y({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=R(),o=i=>"component"in i?!1:"link"in i?Q(n.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(o),a=_(()=>o(t.item));return(i,c)=>(s(),k(Ce,{class:V({VPNavBarMenuGroup:!0,active:l(Q)(l(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||a.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),$a={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Pa=y({__name:"VPNavBarMenu",setup(e){const{theme:t}=R();return(n,o)=>l(t).nav?(s(),u("nav",$a,[o[0]||(o[0]=r("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(s(!0),u(B,null,U(l(t).nav,a=>(s(),u(B,{key:JSON.stringify(a)},["link"in a?(s(),k(ka,{key:0,item:a},null,8,["item"])):"component"in a?(s(),k(W(a.component),Y({key:1,ref_for:!0},a.props),null,16)):(s(),k(ba,{key:2,item:a},null,8,["item"]))],64))),128))])):h("",!0)}}),Ta=T(Pa,[["__scopeId","data-v-dc692963"]]);function Sa(e){const{localeIndex:t,theme:n}=R();function o(a){var E,L,N;const i=a.split("."),c=(E=n.value.search)==null?void 0:E.options,d=c&&typeof c=="object",m=d&&((N=(L=c.locales)==null?void 0:L[t.value])==null?void 0:N.translations)||null,b=d&&c.translations||null;let P=m,v=b,S=e;const C=i.pop();for(const M of i){let I=null;const $=S==null?void 0:S[M];$&&(I=S=$);const j=v==null?void 0:v[M];j&&(I=v=j);const A=P==null?void 0:P[M];A&&(I=P=A),$||(S=I),j||(v=I),A||(P=I)}return(P==null?void 0:P[C])??(v==null?void 0:v[C])??(S==null?void 0:S[C])??""}return o}const La=["aria-label"],wa={class:"DocSearch-Button-Container"},Aa={class:"DocSearch-Button-Placeholder"},Ee=y({__name:"VPNavBarSearchButton",setup(e){const n=Sa({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,a)=>(s(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(n)("button.buttonAriaLabel")},[r("span",wa,[a[0]||(a[0]=r("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),r("span",Aa,O(l(n)("button.buttonText")),1)]),a[1]||(a[1]=r("span",{class:"DocSearch-Button-Keys"},[r("kbd",{class:"DocSearch-Button-Key"}),r("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,La))}}),Ca={class:"VPNavBarSearch"},Oa={id:"local-search"},Ra={key:1,id:"docsearch"},Ea=y({__name:"VPNavBarSearch",setup(e){const t=nt(()=>ot(()=>import("./VPLocalSearchBox.Cav-kkRr.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:o}=R(),a=w(!1),i=w(!1);K(()=>{});function c(){a.value||(a.value=!0,setTimeout(d,16))}function d(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||d()},16)}function m(v){const S=v.target,C=S.tagName;return S.isContentEditable||C==="INPUT"||C==="SELECT"||C==="TEXTAREA"}const b=w(!1);ye("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),b.value=!0)}),ye("/",v=>{m(v)||(v.preventDefault(),b.value=!0)});const P="local";return(v,S)=>{var C;return s(),u("div",Ca,[l(P)==="local"?(s(),u(B,{key:0},[b.value?(s(),k(l(t),{key:0,onClose:S[0]||(S[0]=E=>b.value=!1)})):h("",!0),r("div",Oa,[g(Ee,{onClick:S[1]||(S[1]=E=>b.value=!0)})])],64)):l(P)==="algolia"?(s(),u(B,{key:1},[a.value?(s(),k(l(n),{key:0,algolia:((C=l(o).search)==null?void 0:C.options)??l(o).algolia,onVnodeBeforeMount:S[2]||(S[2]=E=>i.value=!0)},null,8,["algolia"])):h("",!0),i.value?h("",!0):(s(),u("div",Ra,[g(Ee,{onClick:c})]))],64)):h("",!0)])}}}),Ia=y({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=R();return(n,o)=>l(t).socialLinks?(s(),k(Oe,{key:0,class:"VPNavBarSocialLinks",links:l(t).socialLinks},null,8,["links"])):h("",!0)}}),Ha=T(Ia,[["__scopeId","data-v-0394ad82"]]),Na=["href","rel","target"],xa=["innerHTML"],Va={key:2},Ba=y({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=R(),{hasSidebar:o}=J(),{currentLang:a}=re(),i=_(()=>{var m;return typeof n.value.logoLink=="string"?n.value.logoLink:(m=n.value.logoLink)==null?void 0:m.link}),c=_(()=>{var m;return typeof n.value.logoLink=="string"||(m=n.value.logoLink)==null?void 0:m.rel}),d=_(()=>{var m;return typeof n.value.logoLink=="string"||(m=n.value.logoLink)==null?void 0:m.target});return(m,b)=>(s(),u("div",{class:V(["VPNavBarTitle",{"has-sidebar":l(o)}])},[r("a",{class:"title",href:i.value??l(Se)(l(a).link),rel:c.value,target:d.value},[p(m.$slots,"nav-bar-title-before",{},void 0,!0),l(n).logo?(s(),k(le,{key:0,class:"logo",image:l(n).logo},null,8,["image"])):h("",!0),l(n).siteTitle?(s(),u("span",{key:1,innerHTML:l(n).siteTitle},null,8,xa)):l(n).siteTitle===void 0?(s(),u("span",Va,O(l(t).title),1)):h("",!0),p(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,Na)],2))}}),qa=T(Ba,[["__scopeId","data-v-1168a8e4"]]),Ma={class:"items"},Da={class:"title"},ja=y({__name:"VPNavBarTranslations",setup(e){const{theme:t}=R(),{localeLinks:n,currentLang:o}=re({correspondingLink:!0});return(a,i)=>l(n).length&&l(o).label?(s(),k(Ce,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(t).langMenuLabel||"Change language"},{default:f(()=>[r("div",Ma,[r("p",Da,O(l(o).label),1),(s(!0),u(B,null,U(l(n),c=>(s(),k(fe,{key:c.link,item:c},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Ua=T(ja,[["__scopeId","data-v-88af2de4"]]),Fa={class:"wrapper"},za={class:"container"},Wa={class:"title"},Ga={class:"content"},Ka={class:"content-body"},Ja=y({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Be(),{hasSidebar:o}=J(),{frontmatter:a}=R(),i=w({});return Pe(()=>{i.value={"has-sidebar":o.value,home:a.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(c,d)=>(s(),u("div",{class:V(["VPNavBar",i.value])},[r("div",Fa,[r("div",za,[r("div",Wa,[g(qa,null,{"nav-bar-title-before":f(()=>[p(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[p(c.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),r("div",Ga,[r("div",Ka,[p(c.$slots,"nav-bar-content-before",{},void 0,!0),g(Ea,{class:"search"}),g(Ta,{class:"menu"}),g(Ua,{class:"translations"}),g(Io,{class:"appearance"}),g(Ha,{class:"social-links"}),g(fa,{class:"extra"}),p(c.$slots,"nav-bar-content-after",{},void 0,!0),g(_a,{class:"hamburger",active:e.isScreenOpen,onClick:d[0]||(d[0]=m=>c.$emit("toggle-screen"))},null,8,["active"])])])])]),d[1]||(d[1]=r("div",{class:"divider"},[r("div",{class:"divider-line"})],-1))],2))}}),Xa=T(Ja,[["__scopeId","data-v-6aa21345"]]),Ya={key:0,class:"VPNavScreenAppearance"},Qa={class:"text"},Za=y({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=R();return(o,a)=>l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(s(),u("div",Ya,[r("p",Qa,O(l(n).darkModeSwitchLabel||"Appearance"),1),g(we)])):h("",!0)}}),es=T(Za,[["__scopeId","data-v-b44890b2"]]),ts=["innerHTML"],ns=y({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=pe("close-screen");return(n,o)=>(s(),k(G,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:l(t)},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,ts)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),os=T(ns,[["__scopeId","data-v-df37e6dd"]]),as=["innerHTML"],ss=y({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=pe("close-screen");return(n,o)=>(s(),k(G,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:l(t)},{default:f(()=>[r("span",{innerHTML:e.item.text},null,8,as)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ke=T(ss,[["__scopeId","data-v-3e9c20e4"]]),rs={class:"VPNavScreenMenuGroupSection"},is={key:0,class:"title"},ls=y({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(s(),u("div",rs,[e.text?(s(),u("p",is,O(e.text),1)):h("",!0),(s(!0),u(B,null,U(e.items,o=>(s(),k(Ke,{key:o.text,item:o},null,8,["item"]))),128))]))}}),cs=T(ls,[["__scopeId","data-v-8133b170"]]),us=["aria-controls","aria-expanded"],ds=["innerHTML"],ps=["id"],ms={key:0,class:"item"},fs={key:1,class:"item"},hs={key:2,class:"group"},vs=y({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=w(!1),o=_(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(i,c)=>(s(),u("div",{class:V(["VPNavScreenMenuGroup",{open:n.value}])},[r("button",{class:"button","aria-controls":o.value,"aria-expanded":n.value,onClick:a},[r("span",{class:"button-text",innerHTML:e.text},null,8,ds),c[0]||(c[0]=r("span",{class:"vpi-plus button-icon"},null,-1))],8,us),r("div",{id:o.value,class:"items"},[(s(!0),u(B,null,U(e.items,d=>(s(),u(B,{key:JSON.stringify(d)},["link"in d?(s(),u("div",ms,[g(Ke,{item:d},null,8,["item"])])):"component"in d?(s(),u("div",fs,[(s(),k(W(d.component),Y({ref_for:!0},d.props,{"screen-menu":""}),null,16))])):(s(),u("div",hs,[g(cs,{text:d.text,items:d.items},null,8,["text","items"])]))],64))),128))],8,ps)],2))}}),_s=T(vs,[["__scopeId","data-v-b9ab8c58"]]),ys={key:0,class:"VPNavScreenMenu"},gs=y({__name:"VPNavScreenMenu",setup(e){const{theme:t}=R();return(n,o)=>l(t).nav?(s(),u("nav",ys,[(s(!0),u(B,null,U(l(t).nav,a=>(s(),u(B,{key:JSON.stringify(a)},["link"in a?(s(),k(os,{key:0,item:a},null,8,["item"])):"component"in a?(s(),k(W(a.component),Y({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(s(),k(_s,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),ks=y({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=R();return(n,o)=>l(t).socialLinks?(s(),k(Oe,{key:0,class:"VPNavScreenSocialLinks",links:l(t).socialLinks},null,8,["links"])):h("",!0)}}),bs={class:"list"},$s=y({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=re({correspondingLink:!0}),o=w(!1);function a(){o.value=!o.value}return(i,c)=>l(t).length&&l(n).label?(s(),u("div",{key:0,class:V(["VPNavScreenTranslations",{open:o.value}])},[r("button",{class:"title",onClick:a},[c[0]||(c[0]=r("span",{class:"vpi-languages icon lang"},null,-1)),z(" "+O(l(n).label)+" ",1),c[1]||(c[1]=r("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),r("ul",bs,[(s(!0),u(B,null,U(l(t),d=>(s(),u("li",{key:d.link,class:"item"},[g(G,{class:"link",href:d.link},{default:f(()=>[z(O(d.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),Ps=T($s,[["__scopeId","data-v-858fe1a4"]]),Ts={class:"container"},Ss=y({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=w(null),n=qe(me?document.body:null);return(o,a)=>(s(),k($e,{name:"fade",onEnter:a[0]||(a[0]=i=>n.value=!0),onAfterLeave:a[1]||(a[1]=i=>n.value=!1)},{default:f(()=>[e.open?(s(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[r("div",Ts,[p(o.$slots,"nav-screen-content-before",{},void 0,!0),g(gs,{class:"menu"}),g(Ps,{class:"translations"}),g(es,{class:"appearance"}),g(ks,{class:"social-links"}),p(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),Ls=T(Ss,[["__scopeId","data-v-f2779853"]]),ws={key:0,class:"VPNav"},As=y({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:o}=Po(),{frontmatter:a}=R(),i=_(()=>a.value.navbar!==!1);return Me("close-screen",n),ue(()=>{me&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(c,d)=>i.value?(s(),u("header",ws,[g(Xa,{"is-screen-open":l(t),onToggleScreen:l(o)},{"nav-bar-title-before":f(()=>[p(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[p(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[p(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[p(c.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(Ls,{open:l(t)},{"nav-screen-content-before":f(()=>[p(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[p(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),Cs=T(As,[["__scopeId","data-v-ae24b3ad"]]),Os=["role","tabindex"],Rs={key:1,class:"items"},Es=y({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:o,isLink:a,isActiveLink:i,hasActiveLink:c,hasChildren:d,toggle:m}=St(_(()=>t.item)),b=_(()=>d.value?"section":"div"),P=_(()=>a.value?"a":"div"),v=_(()=>d.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),S=_(()=>a.value?void 0:"button"),C=_(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:n.value},{"is-link":a.value},{"is-active":i.value},{"has-active":c.value}]);function E(N){"key"in N&&N.key!=="Enter"||!t.item.link&&m()}function L(){t.item.link&&m()}return(N,M)=>{const I=ee("VPSidebarItem",!0);return s(),k(W(b.value),{class:V(["VPSidebarItem",C.value])},{default:f(()=>[e.item.text?(s(),u("div",Y({key:0,class:"item",role:S.value},at(e.item.items?{click:E,keydown:E}:{},!0),{tabindex:e.item.items&&0}),[M[1]||(M[1]=r("div",{class:"indicator"},null,-1)),e.item.link?(s(),k(G,{key:0,tag:P.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:f(()=>[(s(),k(W(v.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(s(),k(W(v.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(s(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:L,onKeydown:st(L,["enter"]),tabindex:"0"},[...M[0]||(M[0]=[r("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,Os)):h("",!0),e.item.items&&e.item.items.length?(s(),u("div",Rs,[e.depth<5?(s(!0),u(B,{key:0},U(e.item.items,$=>(s(),k(I,{key:$.text,item:$,depth:e.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),Is=T(Es,[["__scopeId","data-v-b3fd67f8"]]),Hs=y({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=w(!0);let n=null;return K(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),rt(()=>{n!=null&&(clearTimeout(n),n=null)}),(o,a)=>(s(!0),u(B,null,U(e.items,i=>(s(),u("div",{key:i.text,class:V(["group",{"no-transition":t.value}])},[g(Is,{item:i,depth:0},null,8,["item"])],2))),128))}}),Ns=T(Hs,[["__scopeId","data-v-c40bc020"]]),xs={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Vs=y({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=J(),o=e,a=w(null),i=qe(me?document.body:null);F([o,a],()=>{var d;o.open?(i.value=!0,(d=a.value)==null||d.focus()):i.value=!1},{immediate:!0,flush:"post"});const c=w(0);return F(t,()=>{c.value+=1},{deep:!0}),(d,m)=>l(n)?(s(),u("aside",{key:0,class:V(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:a,onClick:m[0]||(m[0]=De(()=>{},["stop"]))},[m[2]||(m[2]=r("div",{class:"curtain"},null,-1)),r("nav",xs,[m[1]||(m[1]=r("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),p(d.$slots,"sidebar-nav-before",{},void 0,!0),(s(),k(Ns,{items:l(t),key:c.value},null,8,["items"])),p(d.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),Bs=T(Vs,[["__scopeId","data-v-319d5ca6"]]),qs=y({__name:"VPSkipLink",setup(e){const{theme:t}=R(),n=te(),o=w();F(()=>n.path,()=>o.value.focus());function a({target:i}){const c=document.getElementById(decodeURIComponent(i.hash).slice(1));if(c){const d=()=>{c.removeAttribute("tabindex"),c.removeEventListener("blur",d)};c.setAttribute("tabindex","-1"),c.addEventListener("blur",d),c.focus(),window.scrollTo(0,0)}}return(i,c)=>(s(),u(B,null,[r("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),r("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},O(l(t).skipToContentLabel||"Skip to content"),1)],64))}}),Ms=T(qs,[["__scopeId","data-v-0b0ada53"]]),Ds=y({__name:"Layout",setup(e){const{isOpen:t,open:n,close:o}=J(),a=te();F(()=>a.path,o),Tt(t,o);const{frontmatter:i}=R(),c=it(),d=_(()=>!!c["home-hero-image"]);return Me("hero-image-slot-exists",d),(m,b)=>{const P=ee("Content");return l(i).layout!==!1?(s(),u("div",{key:0,class:V(["Layout",l(i).pageClass])},[p(m.$slots,"layout-top",{},void 0,!0),g(Ms),g(dt,{class:"backdrop",show:l(t),onClick:l(o)},null,8,["show","onClick"]),g(Cs,null,{"nav-bar-title-before":f(()=>[p(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[p(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[p(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[p(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":f(()=>[p(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[p(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g($o,{open:l(t),onOpenMenu:l(n)},null,8,["open","onOpenMenu"]),g(Bs,{open:l(t)},{"sidebar-nav-before":f(()=>[p(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":f(()=>[p(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(so,null,{"page-top":f(()=>[p(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[p(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":f(()=>[p(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":f(()=>[p(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[p(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[p(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[p(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[p(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[p(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[p(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[p(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[p(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":f(()=>[p(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[p(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[p(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":f(()=>[p(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[p(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":f(()=>[p(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[p(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[p(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[p(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[p(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[p(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(uo),p(m.$slots,"layout-bottom",{},void 0,!0)],2)):(s(),k(P,{key:1}))}}}),js=T(Ds,[["__scopeId","data-v-5d98c3a5"]]),Je={Layout:js,enhanceApp:({app:e})=>{e.component("Badge",lt)}},x="https://api.atomflow.vip/v1",Us=`{
  "created": 1706000000,
  "data": [
    {
      "url": "https://...",
      "revised_prompt": "A fluffy white cat with bright eyes..."
    }
  ]
}`,Fs={curl:`curl -X POST "${x}/images/generations" \\
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
    base_url="${x}",
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
  baseURL: '${x}'
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
    req, _ := http.NewRequest("POST", "${x}/images/generations", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${x}/images/generations');
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
`},zs=`{
  "created": 1706000000,
  "data": [
    {
      "url": "https://..."
    }
  ]
}`,Ws={curl:`curl -X POST "${x}/images/edits" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "image=@sunlit_lounge.png" \\
  -F "mask=@mask.png" \\
  -F "prompt=阳光明媚的室内休息区，带有游泳池" \\
  -F "n=1" \\
  -F "size=1024x1024"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${x}",
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
  baseURL: '${x}'
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
    req, _ := http.NewRequest("POST", "${x}/images/edits", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
// 若网关支持 multipart，可用 CURLFile 上传 image/mask
$ch = curl_init('${x}/images/edits');
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
`},Gs=`{
  "created": 1706000000,
  "data": [
    { "url": "https://..." },
    { "url": "https://..." }
  ]
}`,Ks={curl:`curl -X POST "${x}/images/variations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "image=@cat.png" \\
  -F "n=2" \\
  -F "size=1024x1024"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${x}",
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
  baseURL: '${x}'
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
    req, _ := http.NewRequest("POST", "${x}/images/variations", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${x}/images/variations');
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
`},Js="/* 二进制音频文件，例如 MP3 */",Xs={curl:`curl -X POST "${x}/audio/speech" \\
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
    base_url="${x}",
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
  baseURL: '${x}'
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
    req, _ := http.NewRequest("POST", "${x}/audio/speech", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    f, _ := os.Create("speech.mp3")
    defer f.Close()
    io.Copy(f, resp.Body)
}`,php:`<?php
$ch = curl_init('${x}/audio/speech');
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
`},Ys=`{
  "text": "Hello, this is a test of the transcription API."
}`,Qs={curl:`curl -X POST "${x}/audio/transcriptions" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F file="@audio.mp3" \\
  -F model="whisper-1" \\
  -F language="en"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${x}",
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
  baseURL: '${x}'
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
    req, _ := http.NewRequest("POST", "${x}/audio/transcriptions", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${x}/audio/transcriptions');
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
`},Zs=`{
  "text": "Hello, my name is Wolfgang and I come from Germany. Where are you from?"
}`,er={curl:`curl -X POST "${x}/audio/translations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "file=@german_audio.mp3" \\
  -F "model=whisper-1"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${x}",
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
  baseURL: '${x}'
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
    req, _ := http.NewRequest("POST", "${x}/audio/translations", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${x}/audio/translations');
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
`},tr=`{
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
}`,ne="https://api.atomflow.vip/v1",nr={curl:`curl "${ne}/models" \\
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
`},q=ne,ae="https://api.atomflow.vip",or=`{
  "id": "gpt-5.4",
  "object": "model",
  "created": 1706000000,
  "owned_by": "openai"
}`,ar={curl:`curl "${q}/models/gpt-5.4" \\
  -H "Authorization: Bearer sk-your-api-key"`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${q}"
)

model = client.models.retrieve("gpt-5.4")
print(f"Model: {model.id}, Provider: {model.owned_by}")`,javascript:`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${q}'
});

const model = await client.models.retrieve('gpt-5.4');
console.log(\`Model: \${model.id}, Provider: \${model.owned_by}\`);`,go:`package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "${q}/models/gpt-5.4", nil)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var model map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&model)
    fmt.Printf("Model: %v, Provider: %v\\n", model["id"], model["owned_by"])
}`,php:`<?php
$ch = curl_init('${q}/models/gpt-5.4');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key']
]);
$response = curl_exec($ch);
curl_close($ch);
$model = json_decode($response, true);
echo "Model: {$model['id']}, Provider: {$model['owned_by']}\\n";
`},sr=`{
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
}`,rr={curl:`curl -X POST "${q}/chat/completions" \\
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
    base_url="${q}"
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
  baseURL: '${q}'
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
    req, _ := http.NewRequest("POST", "${q}/chat/completions", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    fmt.Println(string(b))
}`,php:`<?php
$ch = curl_init('${q}/chat/completions');
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
`},ir=`{
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
}`,lr={curl:`curl -X POST "${q}/responses" \\
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
    base_url="${q}"
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
  baseURL: '${q}'
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
    req, _ := http.NewRequest("POST", "${q}/responses", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${q}/responses');
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
`},cr=`{
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
}`,ur={curl:`curl -X POST "${ae}/v1/messages" \\
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
`},dr=`{
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
}`,pr={curl:`curl -X POST "${q}/embeddings" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-embedding-3-small",
    "input": "The quick brown fox jumps over the lazy dog"
  }'`,python:`from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${q}"
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
  baseURL: '${q}'
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
    req, _ := http.NewRequest("POST", "${q}/embeddings", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${q}/embeddings');
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
`},mr=`{
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
}`,fr={curl:`curl -X POST "${q}/rerank" \\
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
    "${q}/rerank",
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

print(response.json())`,javascript:`const response = await fetch('${q}/rerank', {
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
    req, _ := http.NewRequest("POST", "${q}/rerank", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,php:`<?php
$ch = curl_init('${q}/rerank');
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
`};function hr(e){return e.replace(/\.html$/,"").replace(/\/$/,"")||"/"}function vr(e){const t=hr(e);return t==="/api/ai-model/models"||t.endsWith("/api/ai-model/models/list/listmodels")?{snippets:{...nr},response:tr}:t.endsWith("/api/ai-model/models/get-model")?{snippets:ar,response:or}:t.endsWith("/api/ai-model/chat/openai/createchatcompletion")?{snippets:rr,response:sr}:t.endsWith("/api/ai-model/chat/openai/createresponse")?{snippets:lr,response:ir}:t.endsWith("/api/ai-model/chat/createmessage")?{snippets:ur,response:cr}:t.endsWith("/api/ai-model/embeddings/createembedding")?{snippets:pr,response:dr}:t.endsWith("/api/ai-model/rerank/creatererank")?{snippets:fr,response:mr}:t.endsWith("/api/ai-model/images/create-image")?{snippets:Fs,response:Us}:t.endsWith("/api/ai-model/images/edit-image")?{snippets:Ws,response:zs}:t.endsWith("/api/ai-model/images/create-variation")?{snippets:Ks,response:Gs}:t.endsWith("/api/ai-model/audio/create-speech")?{snippets:Xs,response:Js}:t.endsWith("/api/ai-model/audio/create-transcription")?{snippets:Qs,response:Ys}:t.endsWith("/api/ai-model/audio/create-translation")?{snippets:er,response:Zs}:null}const _r={key:0,class:"td-api-aside-tryit"},yr={class:"td-api-aside-card td-api-aside-card--request"},gr={class:"td-api-aside-card__toolbar"},kr={class:"td-api-aside-tabs",role:"tablist"},br=["aria-selected","onClick"],$r=["aria-label"],Pr={key:0,class:"td-api-aside-copied"},Tr={class:"td-api-aside-pre td-api-aside-pre--request"},Sr={class:"td-api-aside-card td-api-aside-card--response"},Lr={class:"td-api-aside-card__toolbar"},wr=["aria-label"],Ar={key:0,class:"td-api-aside-copied"},Cr={class:"td-api-aside-pre td-api-aside-pre--response"},Or=y({__name:"ApiAsideTryIt",setup(e){function t(A,H){const D=A.replace(/\/$/,"");let X=H.startsWith("/")?H:`/${H}`;return/\/v1$/i.test(D)&&/^\/v1(\/|$)/.test(X)&&!/^\/v1beta/i.test(X)&&(X=X.replace(/^\/v1(\/|$)/,"/"),X===""&&(X="/")),`${D}${X}`}const n=["curl","python","javascript","go","php"],o={curl:"cURL",python:"Python",javascript:"JavaScript",go:"Go",php:"PHP"},a=te(),{frontmatter:i}=ce(),c=w(null);let d=null;function m(A){c.value=A,d&&clearTimeout(d),d=setTimeout(()=>{c.value=null,d=null},1600)}async function b(A,H){try{await navigator.clipboard.writeText(A),m(H)}catch{}}const P=_(()=>(i.value.apiBaseUrl??"https://api.atomflow.vip/v1").toString().replace(/\/$/,"")),v=_(()=>i.value.apiAside),S=_(()=>vr(a.path)),C=_(()=>{const A=v.value;if(A===!1)return{};const H=A&&typeof A=="object"&&A.snippets&&typeof A.snippets=="object"?A.snippets:{},D=S.value;return D?{...D.snippets,...H}:{...H}}),E=_(()=>{const A=v.value;if(A&&typeof A=="object"&&typeof A.response=="string"&&A.response.trim())return A.response.trim();const H=S.value;return H?H.response:`{
  "note": "响应示例见正文"
}`}),L=_(()=>{const A=(i.value.apiMethod??i.value.method??"").toString().trim().toUpperCase(),H=(i.value.apiPath??"").toString().trim();if(!A||!H||!/^GET|POST|PUT|PATCH|DELETE|HEAD$/.test(A))return"";const D=t(P.value,H);return A==="GET"||A==="HEAD"?`curl "${D}" \\
  -H "Authorization: Bearer sk-your-api-key"`:`curl -X ${A} "${D}" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{}'`}),N=_(()=>{const A={...C.value};return n.filter(D=>A[D]&&A[D].trim()).length===0&&L.value?{curl:L.value}:A}),M=_(()=>n.filter(A=>{var H;return(H=N.value[A])==null?void 0:H.trim()})),I=w("curl");F(M,A=>{A.length&&!A.includes(I.value)&&(I.value=A[0])},{immediate:!0});const $=_(()=>{var H;const A=I.value;return((H=N.value[A])==null?void 0:H.trim())??""}),j=_(()=>!a.path.startsWith("/api/")||i.value.aside===!1||v.value===!1?!1:M.value.length>0);return F(()=>[a.path,j.value],()=>{typeof document>"u"||document.documentElement.classList.toggle("td-api-aside-tryit",j.value)},{immediate:!0}),Z(()=>{typeof document<"u"&&document.documentElement.classList.remove("td-api-aside-tryit")}),(A,H)=>j.value?(s(),u("div",_r,[r("div",yr,[r("div",gr,[r("div",kr,[(s(!0),u(B,null,U(M.value,D=>(s(),u("button",{key:D,type:"button",role:"tab","aria-selected":I.value===D,class:V(["td-api-aside-tab",{"is-active":I.value===D}]),onClick:X=>I.value=D},O(o[D]),11,br))),128))]),r("button",{type:"button",class:"td-api-aside-icon-btn","aria-label":c.value==="req"?"已复制":"复制请求示例",onClick:H[0]||(H[0]=D=>b($.value,"req"))},[H[2]||(H[2]=r("span",{class:"td-api-aside-copy-icon","aria-hidden":"true"},null,-1)),c.value==="req"?(s(),u("span",Pr,"已复制")):h("",!0)],8,$r)]),r("pre",Tr,[r("code",null,O($.value),1)])]),r("div",Sr,[r("div",Lr,[H[4]||(H[4]=r("div",{class:"td-api-aside-tabs td-api-aside-tabs--single",role:"presentation"},[r("span",{class:"td-api-aside-tab is-active is-static",role:"heading"},"Response")],-1)),r("button",{type:"button",class:"td-api-aside-icon-btn","aria-label":c.value==="res"?"已复制":"复制响应示例",onClick:H[1]||(H[1]=D=>b(E.value,"res"))},[H[3]||(H[3]=r("span",{class:"td-api-aside-copy-icon","aria-hidden":"true"},null,-1)),c.value==="res"?(s(),u("span",Ar,"已复制")):h("",!0)],8,wr)]),r("pre",Cr,[r("code",null,O(E.value),1)])])])):h("",!0)}}),Rr=T(Or,[["__scopeId","data-v-a2933d80"]]),Er={key:0,class:"td-api-endpoint-fallback"},Ir={key:0,class:"td-api-endpoint-fallback__path"},Hr=y({__name:"ApiDocChrome",setup(e){const t=te(),{frontmatter:n}=ce(),o=w(!1);let a=null;const i=_(()=>{const P=(n.value.apiMethod??n.value.method??"").toString().trim().toUpperCase();return P&&/^GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS$/.test(P)?P:""}),c=_(()=>(n.value.apiPath??"").toString().trim());function d(){a==null||a.disconnect(),a=null}function m(){if(typeof document>"u")return;const P=i.value;if(!t.path.startsWith("/api/")||!P){o.value=!1;return}const S=document.querySelectorAll(".vp-doc .vp-code-group");o.value=S.length===0,S.forEach(C=>{const E=C.querySelector(":scope > .tabs");if(!E||!(E instanceof HTMLElement)||E.querySelector(".td-api-http-method-pill"))return;const L=document.createElement("span");L.className=`td-api-http-method-pill td-api-http-method-pill--${P.toLowerCase()}`,L.textContent=P,L.setAttribute("aria-label",`HTTP ${P}`),E.insertBefore(L,E.firstChild)})}async function b(){const P=t.path.startsWith("/api/");if(typeof document<"u"&&document.documentElement.classList.toggle("td-api-reference",P),d(),!P){o.value=!1;return}if(typeof document>"u")return;await Te(),m();const v=document.querySelector(".vp-doc");v&&(a=new MutationObserver(()=>{m()}),a.observe(v,{childList:!0,subtree:!0}))}return F(()=>[t.path,n.value.apiMethod,n.value.method,n.value.apiPath],()=>{b()},{flush:"post",immediate:!0}),Z(()=>{d(),typeof document<"u"&&document.documentElement.classList.remove("td-api-reference")}),(P,v)=>o.value&&l(t).path.startsWith("/api/")&&i.value?(s(),u("div",Er,[r("span",{class:V(["td-api-http-method-pill",`td-api-http-method-pill--${i.value.toLowerCase()}`])},O(i.value),3),c.value?(s(),u("code",Ir,O(c.value),1)):h("",!0)])):h("",!0)}}),Nr={class:"td-site-legal-footer td-lp-new__footer",role:"contentinfo"},xr={class:"td-lp-new__legal"},Vr={class:"td-lp-new__legal-links"},Br={class:"td-legal-modal__panel"},qr={class:"td-legal-modal__head"},Mr={class:"td-legal-modal__frame-wrap"},Dr=["title","src"],Ie="td-legal-modal-title",He=y({__name:"SiteLegalFooter",setup(e){const{theme:t}=ce(),n=_(()=>t.value.tdBrand),o=w(null),a=w(null),i=_(()=>o.value==="privacy"?`${se("/legal-privacy-standalone.html")}?embed=1`:o.value==="terms"?`${se("/legal-terms-standalone.html")}?embed=1`:""),c=_(()=>o.value==="privacy"?"隐私政策":o.value==="terms"?"用户协议":"");let d=null;function m(){if(typeof document>"u"||d)return;const L=document.body;d={overflow:L.style.overflow,paddingRight:L.style.paddingRight};const N=window.innerWidth-document.documentElement.clientWidth;L.style.overflow="hidden",N>0&&(L.style.paddingRight=`${N}px`)}function b(){if(typeof document>"u"||!d)return;const L=document.body;L.style.overflow=d.overflow,L.style.paddingRight=d.paddingRight,d=null}function P(){o.value="privacy"}function v(){o.value="terms"}function S(){o.value=null}function C(L){L.key==="Escape"&&S()}function E(L){if(!L.data||L.data.type!=="td-legal-doc-height")return;const N=a.value;if(!N||L.source!==N.contentWindow)return;const M=Math.floor(window.innerHeight*.78);N.style.height=`${Math.min(Math.ceil(L.data.height),M)}px`}return F(o,(L,N)=>{typeof document>"u"||(L&&!N?(m(),document.addEventListener("keydown",C)):!L&&N&&(b(),document.removeEventListener("keydown",C)))}),K(()=>{window.addEventListener("message",E)}),Z(()=>{document.removeEventListener("keydown",C),window.removeEventListener("message",E),b()}),(L,N)=>{var M,I;return s(),u("footer",Nr,[N[0]||(N[0]=r("div",{class:"td-lp-new__section-head td-lp-new__footer-head"},[r("span",{class:"td-icon td-lp-new__footer-icon","aria-hidden":"true"},"policy"),r("h2",{class:"td-lp-new__label td-lp-new__label--mute"},"合规与声明")],-1)),r("div",xr,[r("p",null,O((M=n.value)==null?void 0:M.footerLegalText),1),r("div",Vr,[r("span",null,O((I=n.value)==null?void 0:I.footerCopyright),1),r("button",{type:"button",class:"td-legal-footer-link",onClick:P},"Privacy Policy"),r("button",{type:"button",class:"td-legal-footer-link",onClick:v},"Terms of Service")])]),(s(),k(je,{to:"body"},[o.value?(s(),u("div",{key:0,class:"td-legal-modal",role:"dialog","aria-modal":"true","aria-labelledby":Ie},[r("div",{class:"td-legal-modal__backdrop","aria-hidden":"true",onClick:S}),r("div",Br,[r("header",qr,[r("h2",{id:Ie,class:"td-legal-modal__title"},O(c.value),1),r("button",{type:"button",class:"td-legal-modal__close","aria-label":"关闭",onClick:S}," 关闭 ")]),r("div",Mr,[(s(),u("iframe",{ref_key:"iframeRef",ref:a,key:o.value,class:"td-legal-modal__iframe",title:c.value,src:i.value,loading:"lazy",referrerpolicy:"strict-origin-when-cross-origin"},null,8,Dr))])])])):h("",!0)]))])}}}),jr={class:"td-sidebar-heading",role:"heading","aria-level":"2"},Ur=y({__name:"Layout",setup(e){const t=Je.Layout,n=te(),o=_(()=>n.path.startsWith("/api/")?"API 参考":"文档导航");return(a,i)=>(s(),k(l(t),null,{"sidebar-nav-before":f(()=>[r("div",jr,O(o.value),1)]),"doc-before":f(()=>[g(Hr)]),"aside-outline-before":f(()=>[g(Rr)]),"doc-after":f(()=>[g(He)]),"page-bottom":f(()=>[g(He)]),_:1}))}}),Fr={class:"td-qs-playground"},zr={class:"td-qs-playground__modal",role:"dialog","aria-modal":"true","aria-labelledby":"td-qs-playground-title"},Wr={class:"td-qs-playground__top"},Gr={class:"td-qs-playground__top-actions"},Kr=["disabled"],Jr={class:"td-qs-playground__body"},Xr={class:"td-qs-playground__form"},Yr={class:"td-qs-playground__collapse",open:""},Qr={class:"td-qs-playground__fields"},Zr={class:"td-qs-playground__field"},ei={class:"td-qs-playground__field"},ti={class:"td-qs-playground__field"},ni={class:"td-qs-playground__code-col"},oi={class:"td-qs-playground__code"},ai={class:"td-qs-playground__pre"},si={key:0,class:"td-qs-playground__alert td-qs-playground__alert--err"},ri={key:1,class:"td-qs-playground__response"},ii={class:"td-qs-playground__response-pre"},li=y({__name:"QuickStartChatPlayground",setup(e){const t="https://api.atomflow.vip/v1/chat/completions",n=w(!1),o=w(""),a=w("gpt-5.4-mini"),i=w("Hello!"),c=w(!1),d=w(""),m=w("");function b(I){return`'${I.replace(/'/g,"'\\''")}'`}function P(I){const $=I.trim();if(!$)return I;try{return JSON.stringify(JSON.parse($),null,2)}catch{return I}}const v=_(()=>JSON.stringify({model:a.value.trim()||"gpt-5.4-mini",messages:[{role:"user",content:i.value}]})),S=_(()=>{const I=o.value.trim();return I.length?I:"sk-your-api-key"}),C=_(()=>{const I=b(v.value);return`curl ${t} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${S.value}" \\
  -d ${I}`});function E(){n.value=!1}function L(I){I.key==="Escape"&&n.value&&(I.preventDefault(),E())}F(n,I=>{typeof document>"u"||document.documentElement.classList.toggle("td-qs-playground-lock",I)}),K(()=>window.addEventListener("keydown",L)),Z(()=>{window.removeEventListener("keydown",L),document.documentElement.classList.remove("td-qs-playground-lock")});async function N(){try{await navigator.clipboard.writeText(C.value)}catch{}}async function M(){d.value="",m.value="";const I=o.value.trim();if(!I){d.value="请先填写令牌。";return}c.value=!0;try{const $=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},body:v.value}),j=await $.text();m.value=P(j),$.ok||(d.value=`HTTP ${$.status}`)}catch($){d.value=$ instanceof Error?$.message:String($)}finally{c.value=!1}}return(I,$)=>(s(),u("div",Fr,[r("button",{type:"button",class:"td-btn td-qs-playground__trigger",onClick:$[0]||($[0]=j=>n.value=!0)}," 试一试 "),(s(),k(je,{to:"body"},[oe(r("div",{class:"td-qs-playground__backdrop",role:"presentation",onClick:De(E,["self"])},null,512),[[Re,n.value]]),oe(r("div",zr,[r("header",Wr,[r("div",{class:"td-qs-playground__method-path"},[$[4]||($[4]=r("span",{class:"td-qs-playground__pill"},"POST",-1)),r("code",{class:"td-qs-playground__path"},O(t))]),r("div",Gr,[r("button",{type:"button",class:"td-btn td-qs-playground__send",disabled:c.value,onClick:M},[...$[5]||($[5]=[r("span",{class:"td-qs-playground__play","aria-hidden":"true"},"▶",-1),z(" 发送 ",-1)])],8,Kr),r("button",{type:"button",class:"td-qs-playground__icon-btn","aria-label":"关闭",onClick:E}," × ")])]),r("div",Jr,[r("div",Xr,[$[13]||($[13]=r("h2",{id:"td-qs-playground-title",class:"td-qs-playground__title"},"创建聊天补全",-1)),$[14]||($[14]=r("p",{class:"td-qs-playground__desc"},"填写参数后，右侧 cURL 会同步更新；也可直接发送请求（受浏览器跨域策略影响）。响应正文显示在 cURL 下方。",-1)),r("details",Yr,[$[12]||($[12]=r("summary",null,"请求参数",-1)),r("div",Qr,[r("label",Zr,[$[6]||($[6]=r("span",{class:"td-qs-playground__field-head"},[r("span",{class:"td-qs-playground__name"},"令牌"),r("span",{class:"td-qs-playground__type"},"string"),r("span",{class:"td-qs-playground__req"},"必填")],-1)),$[7]||($[7]=r("span",{class:"td-qs-playground__hint"},[z("对应请求头 "),r("code",null,"Authorization: Bearer …")],-1)),oe(r("input",{"onUpdate:modelValue":$[1]||($[1]=j=>o.value=j),class:"td-qs-playground__input",type:"password",autocomplete:"off",placeholder:"输入 sk-…"},null,512),[[he,o.value]])]),r("label",ei,[$[8]||($[8]=r("span",{class:"td-qs-playground__field-head"},[r("span",{class:"td-qs-playground__name"},"model"),r("span",{class:"td-qs-playground__type"},"string")],-1)),$[9]||($[9]=r("span",{class:"td-qs-playground__hint"},"请求体中的模型 ID",-1)),oe(r("input",{"onUpdate:modelValue":$[2]||($[2]=j=>a.value=j),class:"td-qs-playground__input",type:"text",autocomplete:"off"},null,512),[[he,a.value]])]),r("label",ti,[$[10]||($[10]=r("span",{class:"td-qs-playground__field-head"},[r("span",{class:"td-qs-playground__name"},"用户消息 content"),r("span",{class:"td-qs-playground__type"},"string")],-1)),$[11]||($[11]=r("span",{class:"td-qs-playground__hint"},[z("作为 "),r("code",null,"messages[0].content"),z("（role 固定为 user）")],-1)),oe(r("textarea",{"onUpdate:modelValue":$[3]||($[3]=j=>i.value=j),class:"td-qs-playground__textarea",rows:"4"},null,512),[[he,i.value]])])])])]),r("div",ni,[r("div",oi,[r("div",{class:"td-qs-playground__code-bar"},[$[15]||($[15]=r("span",null,"cURL",-1)),r("button",{type:"button",class:"td-qs-playground__icon-btn","aria-label":"复制 cURL",onClick:N}," ⧉ ")]),r("pre",ai,[r("code",null,O(C.value),1)])]),d.value?(s(),u("p",si,O(d.value),1)):h("",!0),m.value?(s(),u("div",ri,[$[16]||($[16]=r("div",{class:"td-qs-playground__response-bar"},"响应",-1)),r("pre",ii,O(m.value),1)])):h("",!0)])])],512),[[Re,n.value]])]))]))}}),ci=T(li,[["__scopeId","data-v-837ac7d5"]]),di={extends:Je,Layout:Ur,enhanceApp(e){e.app.component("QuickStartChatPlayground",ci)}};export{di as R,Sa as c,R as u};
