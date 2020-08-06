(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(90)),s=a(96),l=a(97),c={id:"css-variables",title:"css/variables",sidebar_label:"css/variables"},i={unversionedId:"formats/css-variables",id:"formats/css-variables",isDocsHomePage:!1,title:"css/variables",description:"A format for generate single css file with all tokens.",source:"@site/docs/formats/css-variables.mdx",permalink:"/themekit/docs/formats/css-variables",editUrl:"https://github.com/yarastqt/themekit/edit/master/website/docs/formats/css-variables.mdx",sidebar_label:"css/variables",sidebar:"sidebar",previous:{title:"name/mapper",permalink:"/themekit/docs/transforms/name-mapper"},next:{title:"css/whitepaper",permalink:"/themekit/docs/formats/css-whitepaper"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A format for generate single css file with all tokens."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Configure tool:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="themekit.config.json" {12}',title:'"themekit.config.json"',"{12}":!0}),'{\n  "entry": {\n    "default": "./themes/default.theme.json"\n  },\n  "output": {\n    "css": {\n      "transforms": ["name/cti/kebab"],\n      "buildPath": "./themes",\n      "files": [\n        {\n          "destination": "[entry]/root.css",\n          "format": "css/variables",\n          "options": {\n            "selector": ".Theme",\n            "useAliasVariables": true\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(o.b)("p",null,"Configure theme:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="themes/default.theme.json"',title:'"themes/default.theme.json"'}),'{\n  "sources": ["./themes/tokens/*.tokens.yml"]\n}\n')),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Option"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selector ",Object(o.b)("em",{parentName:"td"},"(string)")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},'":root"')),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A css-selector for storage variables.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"useAliasVariables ",Object(o.b)("em",{parentName:"td"},"(boolean)")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"false")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Save aliases as css-variables.")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(s.a,{defaultValue:"yml",values:[{label:"tokens/yaml",value:"yml"},{label:"css",value:"css"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'palette:\n  primary:\n    value: "#000"\n  secondary:\n    value: "#fff"\n\ncolor:\n  controls:\n    typeAaction:\n      typoColor:\n        base:\n          value: "{palette.primary.value}"\n      fillColor:\n        base:\n          value: "{palette.secondary.value}"\n'))),Object(o.b)(l.a,{value:"css",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".Theme {\n    --palette-primary: #000;\n    --palette-secondary: #000;\n    --color-controls-type-action-typo-color-base: var(--palette-primary);\n    --color-controls-type-action-fill-color-base: var(--palette-secondary);\n}\n")))))}p.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?r.a.createElement(f,l(l({ref:t},i),{},{components:a})):r.a.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},94:function(e,t,a){"use strict";var n=a(0),r=a(93);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(94),s=a(91),l=a(47),c=a.n(l);const i=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:u,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[d,O]=Object(n.useState)(l),[j,y]=Object(n.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==d&&u.some(t=>t.value===e)&&O(e)}const v=e=>{O(e),null!=p&&f(p,e)},g=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},w=()=>{y(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",w)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),style:j?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),h(e)},onFocus:()=>v(e),onClick:()=>{v(e),y(!1)},onPointerDown:()=>y(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);