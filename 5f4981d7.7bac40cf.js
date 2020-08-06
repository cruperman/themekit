(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(90)),c=(n(96),n(97),{id:"name-cti-constant",title:"name/cti/constant",sidebar_label:"name/cti/constant"}),i={unversionedId:"transforms/name-cti-constant",id:"transforms/name-cti-constant",isDocsHomePage:!1,title:"name/cti/constant",source:"@site/docs/transforms/name-cti-constant.mdx",permalink:"/themekit/docs/transforms/name-cti-constant",editUrl:"https://github.com/yarastqt/themekit/edit/master/website/docs/transforms/name-cti-constant.mdx",sidebar_label:"name/cti/constant",sidebar:"sidebar",previous:{title:"name/cti/kebab",permalink:"/themekit/docs/transforms/name-cti-kebab"},next:{title:"name/mapper",permalink:"/themekit/docs/transforms/name-mapper"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}))}l.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,b=f["".concat(c,".").concat(p)]||f[p]||m[p]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},93:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},94:function(e,t,n){"use strict";var r=n(0),a=n(93);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(94),c=n(91),i=n(47),s=n.n(i);const u=37,l=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:f,groupId:m}=e,{tabGroupChoices:p,setTabGroupChoices:b}=Object(o.a)(),[d,y]=Object(r.useState)(i),[v,O]=Object(r.useState)(!1);if(null!=m){const e=p[m];null!=e&&e!==d&&f.some(t=>t.value===e)&&y(e)}const w=e=>{y(e),null!=m&&b(m,e)},h=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},j=()=>{O(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",j)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},f.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":d===e}),style:v?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),g(e)},onFocus:()=>w(e),onClick:()=>{w(e),O(!1)},onPointerDown:()=>O(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);