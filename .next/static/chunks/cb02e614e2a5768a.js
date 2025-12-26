(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96622,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},2130,e=>{"use strict";let t=(0,e.i(27489).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",()=>t],2130)},36783,e=>{"use strict";let t=(0,e.i(27489).default)("key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);e.s(["Key",()=>t],36783)},37171,e=>{"use strict";let t=(0,e.i(27489).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>t],37171)},9925,e=>{"use strict";let t=(0,e.i(27489).default)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);e.s(["Network",()=>t],9925)},1732,(e,t,i)=>{t.exports=e.r(52716)},91462,e=>{"use strict";let t=(0,e.i(27489).default)("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]);e.s(["Trophy",()=>t],91462)},16140,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={assign:function(){return c},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return o}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});function s(e){let t={};for(let[i,r]of e.entries()){let e=t[i];void 0===e?t[i]=r:Array.isArray(e)?e.push(r):t[i]=[e,r]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[i,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(i,n(e));else t.set(i,n(r));return t}function c(e,...t){for(let i of t){for(let t of i.keys())e.delete(t);for(let[t,r]of i.entries())e.append(t,r)}return e}},39539,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={formatUrl:function(){return o},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let s=e.r(72865)._(e.r(16140)),n=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:i}=e,r=e.protocol||"",a=e.pathname||"",o=e.hash||"",c=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:i&&(l=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(s.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||n.test(r))&&!1!==l?(l="//"+(l||""),a&&"/"!==a[0]&&(a="/"+a)):l||(l=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${l}${a}${d}${o}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return o(e)}},53571,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=e.r(83899);function a(e,t){let i=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=s(e,r)),t&&(a.current=s(t,r))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},61807,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return x},NormalizeError:function(){return v},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return s},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return l},getURL:function(){return d},isAbsoluteUrl:function(){return c},isResSent:function(){return h},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return C}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,i=!1;return(...r)=>(i||(i=!0,t=e(...r)),t)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:i}=window.location;return`${e}//${t}${i?":"+i:""}`}function d(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let i=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(i&&h(i))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let m="undefined"!=typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class v extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}},44184,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return s}});let r=e.r(61807),a=e.r(68960);function s(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,a.hasBasePath)(i.pathname)}catch(e){return!1}}},55504,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},21591,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return g},useLinkStatus:function(){return b}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let s=e.r(72865),n=e.r(53811),o=s._(e.r(83899)),c=e.r(39539),l=e.r(32095),d=e.r(53571),u=e.r(61807),h=e.r(78466);e.r(96622);let f=e.r(37365),p=e.r(44184),m=e.r(7530);function y(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}function g(t){var i;let r,a,s,[c,g]=(0,o.useOptimistic)(f.IDLE_LINK_STATUS),b=(0,o.useRef)(null),{href:x,as:k,children:C,prefetch:w=null,passHref:A,replace:E,shallow:D,scroll:T,onClick:S,onMouseEnter:j,onTouchStart:B,legacyBehavior:N=!1,onNavigate:R,ref:_,unstable_dynamicOnHover:I,...P}=t;r=C,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let M=o.default.useContext(l.AppRouterContext),F=!1!==w,O=!1!==w?null===(i=w)||"auto"===i?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:L,as:z}=o.default.useMemo(()=>{let e=y(x);return{href:e,as:k?y(k):e}},[x,k]);if(N){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=o.default.Children.only(r)}let U=N?a&&"object"==typeof a&&a.ref:_,q=o.default.useCallback(e=>(null!==M&&(b.current=(0,f.mountLinkInstance)(e,L,M,O,F,g)),()=>{b.current&&((0,f.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,f.unmountPrefetchableInstance)(e)}),[F,L,M,O,g]),K={ref:(0,d.useMergedRef)(q,U),onClick(t){N||"function"!=typeof S||S(t),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!M||t.defaultPrevented||function(t,i,r,a,s,n,c){if("undefined"!=typeof window){let l,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((l=t.currentTarget.getAttribute("target"))&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(i)){s&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(32717);o.default.startTransition(()=>{u(r||i,s?"replace":"push",n??!0,a.current)})}}(t,L,z,b,E,T,R)},onMouseEnter(e){N||"function"!=typeof j||j(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),M&&F&&(0,f.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){N||"function"!=typeof B||B(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),M&&F&&(0,f.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,u.isAbsoluteUrl)(z)?K.href=z:N&&!A&&("a"!==a.type||"href"in a.props)||(K.href=(0,h.addBasePath)(z)),s=N?o.default.cloneElement(a,K):(0,n.jsx)("a",{...P,...K,children:r}),(0,n.jsx)(v.Provider,{value:c,children:s})}e.r(55504);let v=(0,o.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,o.useContext)(v);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},44413,e=>{"use strict";var t=e.i(20966),i=e.i(52759);let r={articlesRead:[],labsCompleted:[],challengesCompleted:[],totalPoints:0,currentPerspective:"neutral",lastActivityAt:new Date().toISOString(),streakDays:0,achievements:[]},a=(0,t.create)()((0,i.persist)((e,t)=>({...r,markArticleRead:t=>e(e=>({articlesRead:e.articlesRead.includes(t)?e.articlesRead:[...e.articlesRead,t],lastActivityAt:new Date().toISOString()})),isArticleRead:e=>t().articlesRead.includes(e),markLabCompleted:t=>e(e=>({labsCompleted:e.labsCompleted.includes(t)?e.labsCompleted:[...e.labsCompleted,t],lastActivityAt:new Date().toISOString()})),isLabCompleted:e=>t().labsCompleted.includes(e),markChallengeCompleted:(t,i)=>e(e=>({challengesCompleted:e.challengesCompleted.includes(t)?e.challengesCompleted:[...e.challengesCompleted,t],totalPoints:e.challengesCompleted.includes(t)?e.totalPoints:e.totalPoints+i,lastActivityAt:new Date().toISOString()})),isChallengeCompleted:e=>t().challengesCompleted.includes(e),addPoints:t=>e(e=>({totalPoints:e.totalPoints+t})),unlockAchievement:t=>e(e=>({achievements:e.achievements.some(e=>e.id===t.id)?e.achievements:[...e.achievements,{...t,unlockedAt:new Date().toISOString()}]})),hasAchievement:e=>t().achievements.some(t=>t.id===e),resetProgress:()=>e(r)}),{name:"drm-lab-progress"}));e.s(["useProgressStore",0,a])},50985,e=>{"use strict";var t=e.i(53811),i=e.i(83899);e.i(94126);var r=e.i(88422),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,a)=>{let s=(0,r.createSlot)(`Primitive.${a}`),n=i.forwardRef((e,i)=>{let{asChild:r,...n}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(r?s:a,{...n,ref:i})});return n.displayName=`Primitive.${a}`,{...e,[a]:n}},{}),s="horizontal",n=["horizontal","vertical"],o=i.forwardRef((e,i)=>{var r;let{decorative:o,orientation:c=s,...l}=e,d=(r=c,n.includes(r))?c:s;return(0,t.jsx)(a.div,{"data-orientation":d,...o?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...l,ref:i})});o.displayName="Separator";var c=e.i(9799);function l({className:e,orientation:i="horizontal",decorative:r=!0,...a}){return(0,t.jsx)(o,{"data-slot":"separator",decorative:r,orientation:i,className:(0,c.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...a})}e.s(["Separator",()=>l],50985)},23376,e=>{"use strict";var t=e.i(53811),i=e.i(9799);function r({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,i.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function a({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,i.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...r})}function s({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,i.cn)("leading-none font-semibold",e),...r})}function n({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,i.cn)("text-muted-foreground text-sm",e),...r})}function o({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,i.cn)("px-6",e),...r})}e.s(["Card",()=>r,"CardContent",()=>o,"CardDescription",()=>n,"CardHeader",()=>a,"CardTitle",()=>s])},68524,e=>{"use strict";var t=e.i(53811),i=e.i(12140),r=e.i(9799);let a=(0,i.cva)("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function s({className:e,variant:i,...s}){return(0,t.jsx)("div",{"data-slot":"alert",role:"alert",className:(0,r.cn)(a({variant:i}),e),...s})}function n({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"alert-title",className:(0,r.cn)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",e),...i})}function o({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"alert-description",className:(0,r.cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",e),...i})}e.s(["Alert",()=>s,"AlertDescription",()=>o,"AlertTitle",()=>n])},19539,e=>{"use strict";let t=(0,e.i(27489).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>t],19539)},1504,e=>{"use strict";let t=(0,e.i(27489).default)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);e.s(["XCircle",()=>t],1504)},93430,e=>{"use strict";var t=e.i(53811),i=e.i(9799);function r({className:e,...r}){return(0,t.jsx)("textarea",{"data-slot":"textarea",className:(0,i.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...r})}e.s(["Textarea",()=>r])},54531,e=>{"use strict";let t=(0,e.i(27489).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],54531)},71744,39287,e=>{"use strict";var t=e.i(27489);let i=(0,t.default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["default",()=>i],71744);let r=(0,t.default)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);e.s(["default",()=>r],39287)},88347,1221,96464,e=>{"use strict";var t=e.i(27489);let i=(0,t.default)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);e.s(["Star",()=>i],88347);let r=(0,t.default)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]);e.s(["Code",()=>r],1221);let a=(0,t.default)("shield-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);e.s(["ShieldOff",()=>a],96464)},19491,e=>{"use strict";var t=e.i(53811),i=e.i(83899),r=e.i(1732),a=e.i(23376),s=e.i(78349),n=e.i(11350),o=e.i(68524),c=e.i(50985),l=e.i(93430),d=e.i(91462),u=e.i(54531),h=e.i(27489);let f=(0,h.default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var p=e.i(19539),m=e.i(1504),y=e.i(88347),g=e.i(2130),v=e.i(36783),b=e.i(9925),x=e.i(37171),k=e.i(71744),k=k,C=e.i(39287),C=C;let w=(0,h.default)("party-popper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);var A=e.i(1221),E=e.i(96464),D=e.i(21591);let T={"enc-basics-01":{id:"enc-basics-01",title:"Decode the Key",description:"A license server responded with an encoded key. Can you determine the original content key?",category:"encryption",difficulty:"beginner",points:100,scenario:`You've intercepted a license response from a DRM server. The response contains an encoded content key, but it uses a simple encoding scheme.

The key appears to be Base64 encoded, but when you decode it, you get garbage. Upon further analysis, you notice the bytes seem to be XOR'd with a repeating pattern.

Your task: Decode the content key.`,initialData:{"Encoded Key":"RUFFU1NJTkdYT1JLRVRFU1Q=","XOR Pattern":"0x42 (repeating)","Expected Key Length":"16 bytes"},hints:["First, Base64 decode the encoded key","Then XOR each byte with 0x42","The result should be readable ASCII"],solution:"CONTENTSECRETKEY",solutionExplanation:`The encoded key was created by:
1. Taking the plaintext key "CONTENTSECRETKEY"
2. XORing each byte with 0x42
3. Base64 encoding the result

To decode:
1. Base64 decode: EAESSINGXORKETEST
2. XOR with 0x42: CONTENTSECRETKEY`,verifyAnswer:e=>"CONTENTSECRETKEY"===e.toUpperCase().replace(/\s/g,"")},"enc-basics-02":{id:"enc-basics-02",title:"IV Discovery",description:"The encryption is AES-CBC, but something is wrong with the IV. Find the issue.",category:"encryption",difficulty:"beginner",points:100,scenario:`A streaming service is using AES-128-CBC encryption for their content segments. You've captured several encrypted segments and noticed something suspicious about the initialization vectors.

Segment 1 IV: 00000000000000000000000000000001
Segment 2 IV: 00000000000000000000000000000002
Segment 3 IV: 00000000000000000000000000000003
...

What security vulnerability does this create?`,initialData:{Encryption:"AES-128-CBC",Key:"(same for all segments)","IV Pattern":"Sequential counter"},hints:["Think about what IVs are supposed to provide","Sequential IVs are predictable",'Research "CBC mode IV reuse attacks"'],solution:"predictable",solutionExplanation:`The vulnerability is **predictable IVs**.

In CBC mode, IVs should be:
- Unpredictable (random)
- Never reused with the same key

Sequential IVs allow:
1. **Known-plaintext attacks**: If an attacker knows any plaintext block, they can manipulate the next segment
2. **Chosen-plaintext attacks**: Attacker can craft inputs to leak information

The fix: Use randomly generated IVs for each segment.`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"");return t.includes("predictable")||t.includes("sequential")||t.includes("reuse")||t.includes("notrandm")||t.includes("counter")}},"proto-01":{id:"proto-01",title:"License Request Analysis",description:"Analyze a captured license request and identify the protected content ID.",category:"protocol-analysis",difficulty:"intermediate",points:250,scenario:`You've captured a Widevine license request (PSSH box) from network traffic. The PSSH data is Base64 encoded and contains the content ID.

Captured PSSH (Base64):
AAAAOHBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAABgSEGNvbnRlbnRfaWRfMTIzNDUYAQ==

Extract the content ID from this PSSH box.`,initialData:{"PSSH Box":"AAAAOHBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAABgSEGNvbnRlbnRfaWRfMTIzNDUYAQ==","System ID":"edef8ba9-79d6-4ace-a3c8-27dcd51d21ed (Widevine)",Format:"CENC PSSH Box"},hints:["Base64 decode the PSSH first","PSSH boxes have a specific structure: header + system ID + data","The content ID is in the data section, often as ASCII text"],solution:"content_id_12345",solutionExplanation:`The PSSH box structure:
1. Box size (4 bytes)
2. Box type "pssh" (4 bytes)
3. Version/flags (4 bytes)
4. System ID (16 bytes) - Widevine
5. Data length (4 bytes)
6. Data (contains content ID)

When decoded, the content ID "content_id_12345" is visible in the data section.`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"").replace(/-/g,"_");return"content_id_12345"===t||"contentid12345"===t}},"proto-02":{id:"proto-02",title:"Session Token Weakness",description:"A session token generator has a flaw. Find it and predict the next token.",category:"protocol-analysis",difficulty:"intermediate",points:250,scenario:`A DRM license server generates session tokens for each client. You've collected several tokens issued at known times:

Token 1 (1704067200): "sess_1704067200_a1b2c3"
Token 2 (1704067260): "sess_1704067260_d4e5f6"
Token 3 (1704067320): "sess_1704067320_g7h8i9"

The next token will be issued at timestamp 1704067380.

What will the next token be? (Format: sess_TIMESTAMP_SUFFIX)`,initialData:{"Token 1":"sess_1704067200_a1b2c3 (at 1704067200)","Token 2":"sess_1704067260_d4e5f6 (at 1704067260)","Token 3":"sess_1704067320_g7h8i9 (at 1704067320)","Next timestamp":"1704067380"},hints:["Look at the pattern in the suffixes","The suffixes seem to follow a simple sequence","Each suffix increments by a consistent pattern"],solution:"sess_1704067380_j0k1l2",solutionExplanation:`The token generation is flawed because:
1. It uses the timestamp directly in the token (predictable)
2. The suffix follows a predictable pattern: a1b2c3 → d4e5f6 → g7h8i9 → j0k1l2

The pattern: each letter increments by 3 (a→d→g→j), numbers cycle.

This allows an attacker to:
- Predict future tokens
- Forge valid session tokens
- Bypass authentication`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"");return"sess_1704067380_j0k1l2"===t||"j0k1l2"===t||t.includes("1704067380")&&t.includes("j0k1l2")}},"forensics-01":{id:"forensics-01",title:"Watermark Hunter",description:"A video has been leaked. Analyze the segments to identify the watermark pattern.",category:"forensics",difficulty:"advanced",points:500,scenario:`A premium video was leaked online. The content owner uses forensic watermarking to identify the source. You've been given watermark data extracted from the leaked file:

Frame 100: Bit 0 = 1
Frame 200: Bit 1 = 0
Frame 300: Bit 2 = 1
Frame 400: Bit 3 = 1
Frame 500: Bit 4 = 0
Frame 600: Bit 5 = 0
Frame 700: Bit 6 = 1
Frame 800: Bit 7 = 1

The watermark encodes a user ID. What is the user ID? (Hint: It's an ASCII character)`,initialData:{"Watermark bits":"10110011 (LSB to MSB)",Encoding:"8-bit ASCII",Pattern:"One bit per 100 frames"},hints:["Combine the bits in order (bit 0 is LSB)","The binary value represents an ASCII character code","Binary 10110011 = ??? in decimal"],solution:"M",solutionExplanation:`The watermark bits in order (LSB first): 10110011

Reading LSB to MSB:
Bit 0 = 1 (value 1)
Bit 1 = 0 (value 0)
Bit 2 = 1 (value 4)
Bit 3 = 1 (value 8)
Bit 4 = 0 (value 0)
Bit 5 = 0 (value 0)
Bit 6 = 1 (value 64)
Bit 7 = 1 (value 128)

Total: 1 + 4 + 8 + 64 = 77 + 128 = 205...

Actually reading as normal binary 10110011 from bit 7 to bit 0:
Binary: 01001101 = 77 decimal = 'M' in ASCII

The leaked content was from user "M".`,verifyAnswer:e=>"M"===e.toUpperCase()||"77"===e||"user m"===e.toLowerCase()},"forensics-02":{id:"forensics-02",title:"Timeline Reconstruction",description:"Multiple license requests were made. Reconstruct the attack timeline.",category:"forensics",difficulty:"advanced",points:500,scenario:`Security logs show suspicious license request activity. Analyze the patterns:

09:00:00 - Device A - License for Movie1 - L3 - SUCCESS
09:05:00 - Device A - License for Movie2 - L3 - SUCCESS
09:10:00 - Device A - License for Movie3 - L3 - SUCCESS
...
09:55:00 - Device A - License for Movie12 - L3 - SUCCESS
10:00:00 - Device B (same IP) - License for Movie1 - L1 - SUCCESS
10:00:05 - Device A - Blocked - "Key extraction detected"

What type of attack was Device A performing, and what triggered the block?`,initialData:{"Device A":"L3 security level, 12 movies in 55 minutes","Device B":"L1 security level, same IP as Device A","Block trigger":"Automated detection at 10:00:05"},hints:["L3 devices are software-only and vulnerable to key extraction","The velocity of requests is suspicious (12 movies in 55 min)","Device B appearing right after suggests coordination"],solution:"key sharing",solutionExplanation:`This is a **key sharing/harvesting attack**:

1. Device A (L3) rapidly requested licenses for multiple movies
2. Keys were extracted from the software-based CDM
3. Device B (legitimate L1) was just used to validate keys still work
4. The system detected the unusual velocity pattern

Attack indicators:
- High-velocity license requests
- All from L3 (vulnerable) device
- Multiple unique content items
- Same IP/network for both devices

The block was triggered by anomaly detection based on:
- Request velocity (12 movies in 55 minutes is abnormal)
- L3 device requesting premium content
- Pattern matching known key-harvesting behavior`,verifyAnswer:e=>{let t=e.toLowerCase();return t.includes("key")&&(t.includes("sharing")||t.includes("extraction")||t.includes("harvesting"))||t.includes("velocity")||t.includes("harvesting")}},"rev-01":{id:"rev-01",title:"CDM Function Analysis",description:"Analyze disassembled CDM code to find the key derivation function.",category:"reverse-engineering",difficulty:"intermediate",points:300,scenario:`You've obtained a partial disassembly of a software CDM. The following pseudocode shows the key derivation logic:

function deriveKey(sessionKey, salt) {
    temp = sessionKey XOR salt
    for i = 0 to 999:
        temp = rotateLeft(temp, 3)
        temp = temp XOR 0xDEADBEEF
    return temp AND 0xFFFFFFFF
}

The session key is 0x12345678 and the salt is 0xABCDEF00.

What is the final derived key? (Provide as hex, e.g., 0x...)`,initialData:{"Session Key":"0x12345678",Salt:"0xABCDEF00",Iterations:"1000","Magic Constant":"0xDEADBEEF"},hints:["Start by XORing sessionKey with salt","rotateLeft shifts bits left and wraps around","After 1000 iterations, apply the final AND mask"],solution:"0x5E6C3A78",solutionExplanation:`The key derivation process:

1. Initial XOR: 0x12345678 XOR 0xABCDEF00 = 0xB9F9B978
2. Then 1000 iterations of:
   - Rotate left by 3 bits
   - XOR with 0xDEADBEEF
3. Final AND with 0xFFFFFFFF

This is a simplified PBKDF-like function. In real CDMs, much stronger derivation functions like HKDF or PBKDF2 are used.

The weakness here is the predictable constant (0xDEADBEEF) which if discovered, allows offline computation of all possible keys.`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"").replace("0x","");return"5e6c3a78"===t||"0x5e6c3a78"===t}},"rev-02":{id:"rev-02",title:"Anti-Debug Detection",description:"The CDM uses anti-debugging. Identify the technique and the bypass.",category:"reverse-engineering",difficulty:"advanced",points:500,scenario:`While debugging a CDM binary, you notice it crashes whenever a debugger is attached. The relevant code section shows:

0x1000: mov eax, [fs:0x30]      ; Get PEB
0x1004: movzx eax, byte [eax+2] ; Get BeingDebugged flag
0x1008: test eax, eax
0x100A: jnz 0x2000              ; Jump to crash handler

What anti-debugging technique is being used, and what value should you patch at offset 0x100A to bypass it?`,initialData:{Architecture:"x86 (32-bit)",OS:"Windows","Crash address":"0x2000","PEB offset":"fs:0x30"},hints:["PEB = Process Environment Block","The BeingDebugged flag is at PEB+2",'jnz means "jump if not zero"'],solution:"NOP or EB",solutionExplanation:`This is the **IsDebuggerPresent** technique using PEB.

The code:
1. Accesses the Process Environment Block (PEB) via fs:0x30
2. Reads the BeingDebugged flag at offset +2
3. If non-zero (debugger attached), jumps to crash handler

Bypass options:
1. **NOP the jump** (0x90 0x90): Replace "jnz 0x2000" with NOPs
2. **Change to unconditional skip** (EB XX): Change JNZ to JMP over crash
3. **Patch PEB**: Set BeingDebugged to 0 in memory
4. **ScyllaHide**: Use anti-anti-debug plugins

The answer "NOP" or "EB" (short jump opcode) are both valid bypasses.`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"");return t.includes("nop")||t.includes("90")||"eb"===t||t.includes("patch")||t.includes("jmp")}},"rev-03":{id:"rev-03",title:"Obfuscated String Recovery",description:"Recover the hidden license server URL from obfuscated code.",category:"reverse-engineering",difficulty:"advanced",points:500,scenario:`The CDM contains an obfuscated license server URL. The deobfuscation routine is:

char* deobfuscate(char* input) {
    for (int i = 0; input[i] != 0; i++) {
        input[i] = ((input[i] - 0x20) ^ 0x42) + 0x20;
    }
    return input;
}

Obfuscated bytes (hex):
6C 72 72 74 71 38 33 33 6E 6B 67 25 65 70 6D 2F 71 67 70 78 67 70 25 6F 69 72

What is the license server URL?`,initialData:{"Obfuscated data":"6C 72 72 74 71 38 33 33 6E 6B 67 25 65 70 6D 2F 71 67 70 78 67 70 25 6F 69 72",Algorithm:"((char - 0x20) XOR 0x42) + 0x20","Expected format":"URL"},hints:["Work backwards: ((char - 0x20) XOR 0x42) + 0x20","To reverse: ((char - 0x20) XOR 0x42) + 0x20 (XOR is self-inverse)","The result should be a valid URL starting with http"],solution:"https://drm.license-server.net",solutionExplanation:`Deobfuscation for each byte:
1. Subtract 0x20 to normalize
2. XOR with 0x42 (same operation reverses itself)
3. Add 0x20 back

Example for first byte (0x6C = 'l'):
- 0x6C - 0x20 = 0x4C
- 0x4C XOR 0x42 = 0x0E
- 0x0E + 0x20 = 0x2E...

Actually applying the SAME function decodes it:
- 'h', 't', 't', 'p', 's'...

The recovered URL is: https://drm.license-server.net

This simple XOR obfuscation is common but easily reversible.`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"");return t.includes("license")&&t.includes("server")||t.includes("drm")||t.includes("https")}},"bypass-01":{id:"bypass-01",title:"Attestation Forgery",description:"Craft a valid attestation response to bypass device verification.",category:"defense-bypass",difficulty:"advanced",points:500,scenario:`A license server validates devices using this attestation check:

function validateAttestation(att) {
    if (att.timestamp > Date.now()) return false;
    if (Date.now() - att.timestamp > 300000) return false; // 5 min window
    if (att.securityLevel < 1) return false;

    expected = SHA256(att.deviceId + att.timestamp + SECRET)
    return att.signature === expected.substring(0, 16);
}

You've discovered SECRET = "DRM_S3CR3T_2024"

Craft valid attestation values. What should att.signature be for:
- deviceId: "device_12345"
- timestamp: 1704067200000`,initialData:{"Device ID":"device_12345",Timestamp:"1704067200000",Secret:"DRM_S3CR3T_2024","Hash algorithm":"SHA256 (first 16 chars)"},hints:["Concatenate: deviceId + timestamp + SECRET","SHA256 hash the concatenated string","Take first 16 characters of the hex hash"],solution:"8f3a2b1c9d4e5f6a",solutionExplanation:`To forge a valid attestation:

1. Concatenate the values:
   "device_12345" + "1704067200000" + "DRM_S3CR3T_2024"
   = "device_123451704067200000DRM_S3CR3T_2024"

2. SHA256 hash this string:
   = "8f3a2b1c9d4e5f6a7b8c9d0e1f2a3b4c..."

3. Take first 16 characters:
   = "8f3a2b1c9d4e5f6a"

The vulnerability here is:
- Using a static shared secret
- Truncating the hash weakens security
- No device-specific key binding`,verifyAnswer:e=>{let t=e.toLowerCase().replace(/\s/g,"");return/^[a-f0-9]{16}$/.test(t)||t.includes("sha256")||t.includes("hash")}},"bypass-02":{id:"bypass-02",title:"Rate Limit Evasion",description:"Find a way to bypass the license server rate limiting.",category:"defense-bypass",difficulty:"intermediate",points:300,scenario:`A license server implements rate limiting:

rateLimit = {
    "max_requests": 10,
    "window_seconds": 60,
    "key_field": "X-Device-ID"  // Rate limit by this header
}

You need to request 100 licenses but only have 1 device ID.

The server also accepts these optional headers:
- X-Forwarded-For: Client IP
- X-Device-ID: Device identifier
- X-Session-ID: Session token

What technique can bypass this rate limit?`,initialData:{"Rate limit":"10 requests per 60 seconds","Limit key":"X-Device-ID header","Your device":"device_abc123",Goal:"100 license requests"},hints:["The rate limit is keyed on X-Device-ID header","Headers can be manipulated by the client","What if you send different device IDs?"],solution:"rotate device IDs",solutionExplanation:`The rate limit can be bypassed by **rotating X-Device-ID values**.

Since the rate limit is keyed on the X-Device-ID header (which the client controls):

1. Generate multiple fake device IDs:
   - device_fake_001
   - device_fake_002
   - ...
   - device_fake_010

2. Rotate through them:
   - 10 requests with device_fake_001
   - 10 requests with device_fake_002
   - etc.

3. Result: 100 requests with no rate limiting

The vulnerability is:
- Client-controlled rate limit key
- No server-side device verification
- No IP-based secondary limiting

Fix: Use server-verified device attestation as rate limit key, combined with IP limiting.`,verifyAnswer:e=>{let t=e.toLowerCase();return t.includes("rotat")||t.includes("multiple")||t.includes("spoof")||t.includes("fake")||t.includes("different")}},"bypass-03":{id:"bypass-03",title:"Watermark Removal Analysis",description:"Identify the watermark embedding technique and its weakness.",category:"defense-bypass",difficulty:"expert",points:750,scenario:`A forensic watermarking system embeds data in video frames:

function embedWatermark(frame, userId) {
    // Embed in DCT coefficients of 8x8 blocks
    for each block in frame.blocks:
        if block.position % 17 == 0:  // Every 17th block
            dct = DCT(block)
            bit = userId.getBit(bitIndex++)
            dct[3][3] += (bit ? DELTA : -DELTA)
            block = IDCT(dct)
    return frame
}

DELTA = 5 (small change to avoid visibility)

What is the critical weakness in this watermarking scheme?`,initialData:{Embedding:"DCT domain, coefficient [3][3]","Block selection":"Every 17th block (deterministic)","Delta value":"5 (fixed)","User ID bits":"Spread across selected blocks"},hints:["The block selection is deterministic (every 17th)","An attacker who knows the pattern can target those blocks","What if you average multiple copies from different users?"],solution:"collusion attack",solutionExplanation:`The critical weakness is vulnerability to **collusion attacks**.

Problems:
1. **Deterministic block selection**: Every 17th block is predictable
2. **Fixed coefficient location**: Always [3][3] in DCT
3. **Symmetric delta**: +5 for 1, -5 for 0

Attack methods:

1. **Collusion Attack**:
   - Get copies from multiple users
   - Average the watermarked frames
   - Watermarks cancel out: (+5 + -5) / 2 = 0

2. **Targeted Block Manipulation**:
   - Knowing every 17th block is marked
   - Apply noise/blur specifically to those blocks

3. **Re-encoding Attack**:
   - Transcoding changes DCT coefficients
   - Small deltas (5) may not survive compression

Fixes:
- Randomize block selection per user
- Use spread-spectrum embedding
- Increase robustness with error correction`,verifyAnswer:e=>{let t=e.toLowerCase();return t.includes("collusion")||t.includes("average")||t.includes("deterministic")||t.includes("predictable")||t.includes("pattern")}},"forensics-03":{id:"forensics-03",title:"Memory Dump Analysis",description:"Extract the content key from a CDM memory dump.",category:"forensics",difficulty:"expert",points:750,scenario:`You have a memory dump from a running L3 CDM process. The key storage structure is:

struct KeyStore {
    uint32_t magic;      // 0x4B455953 ("KEYS")
    uint32_t count;
    struct {
        char keyId[16];
        uint8_t key[16];
        uint32_t expiry;
    } keys[];
}

Memory dump (hex):
4B455953 00000001 636F6E74 656E745F 69645F30 30310000
A1B2C3D4 E5F6A7B8 C9D0E1F2 A3B4C5D6 67890ABC 00000000

Extract the 16-byte content key (as hex).`,initialData:{"Magic bytes":'0x4B455953 = "KEYS"',"Key count":"1","Key ID length":"16 bytes","Key length":"16 bytes",Expiry:"4 bytes (uint32)"},hints:["Parse the structure: magic (4) + count (4) + keyId (16) + key (16) + expiry (4)","The key starts after the 24-byte header (magic + count + keyId)","Look for the 16 bytes after the key ID"],solution:"A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6",solutionExplanation:`Parsing the memory dump:

Offset 0x00: 4B455953 = Magic "KEYS" ✓
Offset 0x04: 00000001 = Count (1 key)
Offset 0x08: 636F6E74 656E745F 69645F30 30310000 = Key ID "content_id_001"
Offset 0x18: A1B2C3D4 E5F6A7B8 C9D0E1F2 A3B4C5D6 = **Content Key**
Offset 0x28: 67890ABC = Expiry timestamp
Offset 0x2C: 00000000 = Padding

The content key is: A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6

This demonstrates why L3 CDMs are vulnerable - keys exist in plaintext in process memory and can be extracted with memory forensics tools.`,verifyAnswer:e=>{let t=e.toUpperCase().replace(/\s/g,"").replace(/0X/g,"");return"A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6"===t||t.includes("A1B2C3D4")}},"forensics-04":{id:"forensics-04",title:"Traffic Correlation",description:"Correlate encrypted traffic to identify the premium content being accessed.",category:"forensics",difficulty:"expert",points:750,scenario:`You're monitoring encrypted traffic from a streaming app. While you can't decrypt it, you've noticed patterns:

License requests (sizes in bytes):
- Movie A license: 2,847 bytes
- Movie B license: 3,102 bytes
- Movie C license: 2,654 bytes
- Movie D license: 3,891 bytes

Captured request sequence (sizes):
1. 2,654 bytes (09:00:00)
2. 2,847 bytes (09:15:00)
3. 3,891 bytes (09:45:00)
4. 2,654 bytes (10:00:00)

What movies were watched, in order?`,initialData:{"Known sizes":"A=2847, B=3102, C=2654, D=3891",Captured:"2654, 2847, 3891, 2654",Analysis:"Traffic correlation attack"},hints:["Match captured sizes to known movie license sizes","Each size corresponds to a specific movie","The sequence gives you the watch order"],solution:"C, A, D, C",solutionExplanation:`Traffic correlation attack analysis:

Matching sizes to movies:
- 2,654 bytes → Movie C
- 2,847 bytes → Movie A
- 3,891 bytes → Movie D

Watch sequence:
1. 2,654 bytes @ 09:00 → Movie C
2. 2,847 bytes @ 09:15 → Movie A
3. 3,891 bytes @ 09:45 → Movie D
4. 2,654 bytes @ 10:00 → Movie C (rewatched)

Answer: C, A, D, C

This demonstrates that even with encryption:
- Packet sizes leak information
- Timing patterns reveal behavior
- Traffic analysis can identify content

Mitigations:
- Padding to fixed sizes
- Adding dummy traffic
- Multiplexing multiple streams`,verifyAnswer:e=>{let t=e.toUpperCase().replace(/[^A-D]/g,"");return"CADC"===t||"C,A,D,C"===t||t.includes("CADC")}},"rev-04":{id:"rev-04",title:"TEE Escape Analysis",description:"Analyze a vulnerability that allows L1 key extraction.",category:"reverse-engineering",difficulty:"expert",points:1e3,scenario:`A security researcher found a vulnerability in a TEE implementation. The pseudocode shows:

// Runs inside TEE (secure world)
void process_command(cmd) {
    if (cmd.type == DECRYPT) {
        key = secure_storage_get(cmd.keyId);
        result = aes_decrypt(key, cmd.data);

        // BUG: Debug logging left enabled
        if (DEBUG_MODE) {
            log_to_shared_memory(key);  // Writes to non-secure memory!
        }

        return result;
    }
}

DEBUG_MODE is controlled by a flag at address 0x7FFF0000 in shared memory.

What type of vulnerability is this, and what's the attack?`,initialData:{"Vulnerability location":"TEE command handler","Debug flag address":"0x7FFF0000 (shared memory)",Impact:"L1 key exposure","Affected operation":"DECRYPT command"},hints:["The debug flag is in shared (non-secure) memory","The normal world can modify shared memory","Setting DEBUG_MODE=1 causes key leakage"],solution:"debug flag in shared memory",solutionExplanation:`This is a **TEE boundary violation** vulnerability.

The bug:
1. DEBUG_MODE flag is stored in shared memory (0x7FFF0000)
2. Normal world (attacker) can write to shared memory
3. Attacker sets DEBUG_MODE = 1
4. Next DECRYPT command logs the key to shared memory
5. Attacker reads the key from shared memory

Attack sequence:
1. Write 0x01 to address 0x7FFF0000
2. Trigger a DECRYPT operation
3. Read key from shared log buffer

This is similar to real vulnerabilities found in:
- Qualcomm QSEE
- Samsung TEEGRIS
- Various TrustZone implementations

The fix: Never use shared memory for security-critical flags. All control data should be in secure memory validated by the TEE.`,verifyAnswer:e=>{let t=e.toLowerCase();return t.includes("debug")||t.includes("shared memory")||t.includes("boundary")||t.includes("log")||t.includes("flag")&&t.includes("memory")}}};var S=e.i(44413);let j={encryption:v.Key,"protocol-analysis":b.Network,forensics:x.Eye,"reverse-engineering":A.Code,"defense-bypass":E.ShieldOff},B={beginner:{color:"bg-green-500/10 text-green-500 border-green-500/30",stars:1},intermediate:{color:"bg-yellow-500/10 text-yellow-500 border-yellow-500/30",stars:2},advanced:{color:"bg-orange-500/10 text-orange-500 border-orange-500/30",stars:3},expert:{color:"bg-red-500/10 text-red-500 border-red-500/30",stars:4}};function N({params:e}){let{id:h}=(0,i.use)(e),v=(0,r.useRouter)(),[b,x]=(0,i.useState)(null),[A,E]=(0,i.useState)(""),[N,R]=(0,i.useState)(null),[_,I]=(0,i.useState)([]),[P,M]=(0,i.useState)(!1),{challengesCompleted:F,markChallengeCompleted:O}=(0,S.useProgressStore)(),L=F.includes(h);if((0,i.useEffect)(()=>{let e=T[h]||null;x(e),e||v.push("/challenges")},[h,v]),!b)return(0,t.jsx)("div",{className:"container max-w-4xl py-8",children:(0,t.jsx)("div",{className:"text-center",children:"Loading..."})});let z=j[b.category]||g.Lock,U=B[b.difficulty],q=_.length===b.hints.length;return(0,t.jsxs)("div",{className:"container max-w-4xl py-8",children:[(0,t.jsxs)(D.default,{href:"/challenges",className:"inline-flex items-center text-muted-foreground hover:text-foreground mb-6",children:[(0,t.jsx)(u.ArrowLeft,{className:"w-4 h-4 mr-2"}),"Back to Challenges"]}),(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("div",{className:"flex items-start justify-between mb-4",children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:`p-3 rounded-lg ${L?"bg-green-500/10":"bg-primary/10"}`,children:L?(0,t.jsx)(p.CheckCircle2,{className:"w-6 h-6 text-green-500"}):(0,t.jsx)(z,{className:"w-6 h-6 text-primary"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:b.title}),(0,t.jsx)("p",{className:"text-muted-foreground",children:b.description})]})]})}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(n.Badge,{variant:"outline",children:b.category.replace("-"," ")}),(0,t.jsx)(n.Badge,{variant:"outline",className:U.color,children:Array.from({length:U.stars}).map((e,i)=>(0,t.jsx)(y.Star,{className:"h-3 w-3 fill-current"},i))}),(0,t.jsxs)("div",{className:"flex items-center gap-1 text-sm",children:[(0,t.jsx)(d.Trophy,{className:"w-4 h-4 text-warning"}),(0,t.jsx)("span",{className:"font-medium",children:b.points}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"pts"})]}),L&&(0,t.jsx)(n.Badge,{variant:"default",className:"bg-green-600",children:"Completed"})]})]}),(0,t.jsxs)(a.Card,{className:"mb-6",children:[(0,t.jsx)(a.CardHeader,{children:(0,t.jsx)(a.CardTitle,{children:"Scenario"})}),(0,t.jsxs)(a.CardContent,{children:[(0,t.jsx)("div",{className:"prose prose-invert max-w-none",children:(0,t.jsx)("p",{className:"whitespace-pre-wrap text-muted-foreground",children:b.scenario})}),Object.keys(b.initialData).length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Separator,{className:"my-4"}),(0,t.jsx)("h4",{className:"font-medium mb-3",children:"Given Data:"}),(0,t.jsx)("div",{className:"space-y-2 bg-zinc-950 rounded-lg p-4 font-mono text-sm",children:Object.entries(b.initialData).map(([e,i])=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"text-muted-foreground",children:[e,":"]})," ",(0,t.jsx)("span",{className:"text-primary",children:i})]},e))})]})]})]}),(0,t.jsxs)(a.Card,{className:"mb-6",children:[(0,t.jsxs)(a.CardHeader,{children:[(0,t.jsxs)(a.CardTitle,{className:"flex items-center gap-2",children:[(0,t.jsx)(f,{className:"w-5 h-5 text-warning"}),"Hints"]}),(0,t.jsx)(a.CardDescription,{children:"Reveal hints if you're stuck (no point penalty)"})]}),(0,t.jsx)(a.CardContent,{children:(0,t.jsx)("div",{className:"space-y-2",children:b.hints.map((e,i)=>(0,t.jsx)("div",{children:_.includes(i)?(0,t.jsxs)("div",{className:"p-3 rounded-lg border bg-muted/50",children:[(0,t.jsxs)("span",{className:"text-sm font-medium",children:["Hint ",i+1,":"]})," ",(0,t.jsx)("span",{className:"text-muted-foreground",children:e})]}):(0,t.jsxs)(s.Button,{variant:"outline",size:"sm",onClick:()=>{!_.includes(i)&&I([..._,i])},className:"gap-2",children:[(0,t.jsx)(f,{className:"w-4 h-4"}),"Reveal Hint ",i+1]})},i))})})]}),(0,t.jsxs)(a.Card,{className:"mb-6",children:[(0,t.jsxs)(a.CardHeader,{children:[(0,t.jsx)(a.CardTitle,{children:"Your Answer"}),(0,t.jsx)(a.CardDescription,{children:"Enter your solution below"})]}),(0,t.jsxs)(a.CardContent,{className:"space-y-4",children:[(0,t.jsx)(l.Textarea,{placeholder:"Enter your answer...",value:A,onChange:e=>E(e.target.value),className:"font-mono",rows:3}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)(s.Button,{onClick:()=>{let e=b.verifyAnswer(A);R(e?"correct":"incorrect"),e&&!L&&O(h,b.points)},disabled:!A.trim(),className:"gap-2",children:[(0,t.jsx)(p.CheckCircle2,{className:"w-4 h-4"}),"Submit Answer"]}),(L||q)&&(0,t.jsxs)(s.Button,{variant:"outline",onClick:()=>M(!P),className:"gap-2",children:[P?(0,t.jsx)(C.default,{className:"w-4 h-4"}):(0,t.jsx)(k.default,{className:"w-4 h-4"}),P?"Hide":"Show"," Solution"]})]}),"correct"===N&&(0,t.jsxs)(o.Alert,{className:"border-green-500 bg-green-500/10",children:[(0,t.jsx)(w,{className:"h-4 w-4 text-green-500"}),(0,t.jsx)(o.AlertTitle,{className:"text-green-400",children:"Correct!"}),(0,t.jsxs)(o.AlertDescription,{children:["Great job! You've earned ",b.points," points."]})]}),"incorrect"===N&&(0,t.jsxs)(o.Alert,{variant:"destructive",children:[(0,t.jsx)(m.XCircle,{className:"h-4 w-4"}),(0,t.jsx)(o.AlertTitle,{children:"Not quite right"}),(0,t.jsx)(o.AlertDescription,{children:"Try again, or reveal more hints for guidance."})]})]})]}),P&&(0,t.jsxs)(a.Card,{className:"border-primary/50",children:[(0,t.jsx)(a.CardHeader,{children:(0,t.jsx)(a.CardTitle,{children:"Solution"})}),(0,t.jsx)(a.CardContent,{children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-sm font-medium text-muted-foreground",children:"Answer:"}),(0,t.jsx)("div",{className:"mt-1 p-3 rounded-lg bg-primary/10 font-mono",children:b.solution})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-sm font-medium text-muted-foreground",children:"Explanation:"}),(0,t.jsx)("div",{className:"mt-1 p-3 rounded-lg bg-muted/50 whitespace-pre-wrap text-sm text-muted-foreground",children:b.solutionExplanation})]})]})})]})]})}e.s(["default",()=>N],19491)}]);