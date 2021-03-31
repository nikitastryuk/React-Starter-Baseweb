(self.webpackChunkreact_starter=self.webpackChunkreact_starter||[]).push([[377],{5877:(r,e,t)=>{"use strict";t.d(e,{Z:()=>X});var o=t(7294),n=t(7265),a=t(1075);function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function c(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var p=(0,n.zo)("button",(function(r){var e=r.$theme,t=r.$size,o=r.$kind,n=r.$shape,i=r.$isLoading,c=r.$isSelected,p=r.$disabled;return l(l(l(l(l({display:"inline-flex",flexDirection:i?"column":"row",alignItems:"center",justifyContent:"center",borderLeftWidth:0,borderTopWidth:0,borderRightWidth:0,borderBottomWidth:0,borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",outline:"none",boxShadow:r.$isFocusVisible?"inset 0 0 0 3px ".concat(e.colors.accent):"none",textDecoration:"none",WebkitAppearance:"none",transitionProperty:"background",transitionDuration:e.animation.timing200,transitionTimingFunction:e.animation.linearCurve,cursor:"pointer",":disabled":{cursor:"not-allowed",backgroundColor:e.colors.buttonDisabledFill,color:e.colors.buttonDisabledText},marginLeft:0,marginTop:0,marginRight:0,marginBottom:0},function(r){var e=r.$theme;switch(r.$size){case a.NO.mini:return e.typography.font150;case a.NO.compact:return e.typography.font250;case a.NO.large:return e.typography.font450;default:return e.typography.font350}}({$theme:e,$size:t})),function(r){var e=r.$size,t=r.$shape,o=r.$theme.borders.buttonBorderRadius;return t===a.X3.pill?o=e===a.NO.compact?"30px":e===a.NO.large?"42px":"38px":t!==a.X3.circle&&t!==a.X3.round||(o="50%"),{borderTopRightRadius:o,borderBottomRightRadius:o,borderTopLeftRadius:o,borderBottomLeftRadius:o}}({$theme:e,$size:t,$shape:n})),function(r){var e=r.$theme,t=r.$size,o=r.$shape,n=o===a.X3.square||o===a.X3.circle||o===a.X3.round;switch(t){case a.NO.mini:return{paddingTop:e.sizing.scale200,paddingBottom:e.sizing.scale200,paddingLeft:n?e.sizing.scale200:e.sizing.scale300,paddingRight:n?e.sizing.scale200:e.sizing.scale300};case a.NO.compact:return{paddingTop:e.sizing.scale400,paddingBottom:e.sizing.scale400,paddingLeft:n?e.sizing.scale400:e.sizing.scale500,paddingRight:n?e.sizing.scale400:e.sizing.scale500};case a.NO.large:return{paddingTop:e.sizing.scale600,paddingBottom:e.sizing.scale600,paddingLeft:n?e.sizing.scale600:e.sizing.scale700,paddingRight:n?e.sizing.scale600:e.sizing.scale700};default:return{paddingTop:e.sizing.scale550,paddingBottom:e.sizing.scale550,paddingLeft:n?e.sizing.scale550:e.sizing.scale600,paddingRight:n?e.sizing.scale550:e.sizing.scale600}}}({$theme:e,$size:t,$shape:n})),function(r){var e=r.$theme,t=r.$isLoading,o=r.$isSelected,n=r.$kind;if(r.$disabled)return Object.freeze({});switch(n){case a.TO.primary:return o?{color:e.colors.buttonPrimarySelectedText,backgroundColor:e.colors.buttonPrimarySelectedFill}:{color:e.colors.buttonPrimaryText,backgroundColor:e.colors.buttonPrimaryFill,":hover":{backgroundColor:t?e.colors.buttonPrimaryActive:e.colors.buttonPrimaryHover},":active":{backgroundColor:e.colors.buttonPrimaryActive}};case a.TO.secondary:return o?{color:e.colors.buttonPrimaryText,backgroundColor:e.colors.buttonPrimaryFill}:{color:e.colors.buttonSecondaryText,backgroundColor:e.colors.buttonSecondaryFill,":hover":{backgroundColor:t?e.colors.buttonSecondaryActive:e.colors.buttonSecondaryHover},":active":{backgroundColor:e.colors.buttonSecondaryActive}};case a.TO.tertiary:return o?{color:e.colors.buttonTertiarySelectedText,backgroundColor:e.colors.buttonTertiarySelectedFill}:{color:e.colors.buttonTertiaryText,backgroundColor:e.colors.buttonTertiaryFill,":hover":{backgroundColor:t?e.colors.buttonTertiaryActive:e.colors.buttonTertiaryHover},":active":{backgroundColor:e.colors.buttonTertiaryActive}};case a.TO.minimal:return o?{color:e.colors.buttonMinimalSelectedText,backgroundColor:e.colors.buttonMinimalSelectedFill}:{color:e.colors.buttonMinimalText,backgroundColor:e.colors.buttonMinimalFill,":hover":{backgroundColor:t?e.colors.buttonMinimalActive:e.colors.buttonMinimalHover},":active":{backgroundColor:e.colors.buttonMinimalActive}};default:return Object.freeze({})}}({$theme:e,$kind:o,$isLoading:i,$isSelected:c,$disabled:p})),function(r){var e=r.$shape,t=r.$size;if(e===a.X3.circle||e===a.X3.square){var o,n;switch(t){case a.NO.mini:o="28px",n="28px";break;case a.NO.compact:o="36px",n="36px";break;case a.NO.large:o="56px",n="56px";break;case a.NO.default:default:o="48px",n="48px"}return{height:o,width:n,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}return{}}({$theme:e,$shape:n,$size:t}))}));p.displayName="BaseButton";var u=(0,n.zo)("div",(function(r){var e=r.$theme;return c({display:"flex"},"rtl"===e.direction?"marginRight":"marginLeft",e.sizing.scale500)}));u.displayName="EndEnhancer";var d=(0,n.zo)("div",(function(r){var e=r.$theme;return c({display:"flex"},"rtl"===e.direction?"marginLeft":"marginRight",e.sizing.scale500)}));d.displayName="StartEnhancer";var s=(0,n.zo)("div",(function(r){var e=r.$theme,t=r.$size,o="3px";return t!==a.NO.mini&&t!==a.NO.compact||(o=e.sizing.scale0),t===a.NO.large&&(o=e.sizing.scale100),{lineHeight:0,position:"static",marginBottom:o,marginTop:o}}));s.displayName="LoadingSpinnerContainer";var f=(0,n.zo)("span",(function(r){var e=r.$theme,t=r.$kind,o=r.$disabled,n=r.$size,i=function(r){var e=r.$theme,t=r.$kind;if(r.$disabled)return{foreground:e.colors.buttonDisabledSpinnerForeground,background:e.colors.buttonDisabledSpinnerBackground};switch(t){case a.TO.secondary:return{foreground:e.colors.buttonSecondarySpinnerForeground,background:e.colors.buttonSecondarySpinnerBackground};case a.TO.tertiary:return{foreground:e.colors.buttonTertiarySpinnerForeground,background:e.colors.buttonTertiarySpinnerBackground};case a.TO.minimal:return{foreground:e.colors.buttonMinimalSpinnerForeground,background:e.colors.buttonMinimalSpinnerBackground};case a.TO.primary:default:return{foreground:e.colors.buttonPrimarySpinnerForeground,background:e.colors.buttonPrimarySpinnerBackground}}}({$theme:e,$kind:t,$disabled:o}),l=i.foreground,c=i.background,p=e.sizing.scale550;return n!==a.NO.mini&&n!==a.NO.compact||(p=e.sizing.scale500),n===a.NO.large&&(p=e.sizing.scale600),{height:p,width:p,borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",borderLeftStyle:"solid",borderTopStyle:"solid",borderRightStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:e.sizing.scale0,borderTopWidth:e.sizing.scale0,borderRightWidth:e.sizing.scale0,borderBottomWidth:e.sizing.scale0,borderTopColor:l,borderLeftColor:c,borderBottomColor:c,borderRightColor:c,boxSizing:"border-box",display:"inline-block",animationDuration:e.animation.timing700,animationTimingFunction:"linear",animationIterationCount:"infinite",animationName:{to:{transform:"rotate(360deg)"},from:{transform:"rotate(0deg)"}}}}));function m(r){return{$disabled:r.disabled,$isLoading:r.isLoading,$isSelected:r.isSelected,$kind:r.kind,$shape:r.shape,$size:r.size}}f.displayName="LoadingSpinner";var g=t(9864),y=t(2338);function b(){return(b=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}function h(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,n=!1,a=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(r){n=!0,a=r}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return t}}(r,e)||function(r,e){if(r){if("string"==typeof r)return v(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function w(r){var e=r.Enhancer,t=function(r,e){if(null==r)return{};var t,o,n=function(r,e){if(null==r)return{};var t,o,n={},a=Object.keys(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}(r,["Enhancer"]);return"string"==typeof e?e:g.isValidElementType(e)?o.createElement(e,t):e}function $(r){var e=r.children,t=r.overrides,n=void 0===t?{}:t,a=r.startEnhancer,i=r.endEnhancer,l=h((0,y.jb)(n.StartEnhancer,d),2),c=l[0],p=l[1],s=h((0,y.jb)(n.EndEnhancer,u),2),f=s[0],g=s[1],v=m(r);return o.createElement(o.Fragment,null,null!=a&&o.createElement(c,b({},v,p),o.createElement(w,{Enhancer:a})),e,null!=i&&o.createElement(f,b({},v,g),o.createElement(w,{Enhancer:i})))}var S={disabled:!1,isLoading:!1,isSelected:!1,kind:a.TO.primary,overrides:{},shape:a.X3.default,size:a.NO.default},O=t(3495);function R(r){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function k(){return(k=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}function P(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function E(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?P(Object(t),!0).forEach((function(e){A(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function C(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,n=!1,a=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(r){n=!0,a=r}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return t}}(r,e)||function(r,e){if(r){if("string"==typeof r)return j(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function x(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function T(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function L(r,e){return(L=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function z(r,e){return!e||"object"!==R(e)&&"function"!=typeof e?N(r):e}function N(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function M(r){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var B=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&L(r,e)}(l,r);var e,t,n,a,i=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,e=M(n);if(a){var t=M(this).constructor;r=Reflect.construct(e,arguments,t)}else r=e.apply(this,arguments);return z(this,r)});function l(){var r;x(this,l);for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return A(N(r=i.call.apply(i,[this].concat(t))),"state",{isFocusVisible:!1}),A(N(r),"internalOnClick",(function(){for(var e=r.props,t=e.isLoading,o=e.onClick,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];t?a[0].preventDefault():o&&o.apply(void 0,a)})),A(N(r),"handleFocus",(function(e){(0,O.E)(e)&&r.setState({isFocusVisible:!0})})),A(N(r),"handleBlur",(function(e){!1!==r.state.isFocusVisible&&r.setState({isFocusVisible:!1})})),r}return e=l,(t=[{key:"render",value:function(){var r,e=this.props,t=e.overrides,n=void 0===t?{}:t,a=(e.size,e.kind,e.shape,e.isLoading),i=(e.isSelected,e.startEnhancer,e.endEnhancer,e.children,e.forwardedRef),l=function(r,e){if(null==r)return{};var t,o,n=function(r,e){if(null==r)return{};var t,o,n={},a=Object.keys(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}(e,["overrides","size","kind","shape","isLoading","isSelected","startEnhancer","endEnhancer","children","forwardedRef"]),c=C((0,y.jb)(n.BaseButton||n.Root,p),2),u=c[0],d=c[1],g=C((0,y.jb)(n.LoadingSpinner,f),2),b=g[0],h=g[1],v=C((0,y.jb)(n.LoadingSpinnerContainer,s),2),w=v[0],S=v[1],R=E(E({},m(this.props)),{},{$isFocusVisible:this.state.isFocusVisible});return o.createElement(u,k({ref:i,"data-baseweb":"button"},a?(A(r={},"aria-label","loading ".concat("string"==typeof this.props.children?this.props.children:"")),A(r,"aria-busy","true"),r):{},R,l,d,{onClick:this.internalOnClick,onFocus:(0,O.Ah)(E(E({},l),d),this.handleFocus),onBlur:(0,O.Z5)(E(E({},l),d),this.handleBlur)}),a?o.createElement(o.Fragment,null,o.createElement("div",{style:{opacity:0,display:"flex",height:"0px"}},o.createElement($,this.props)),o.createElement(w,k({},R,S),o.createElement(b,k({},R,h)))):o.createElement($,this.props))}}])&&T(e.prototype,t),l}(o.Component);A(B,"defaultProps",S);var H=o.forwardRef((function(r,e){return o.createElement(B,k({forwardedRef:e},r))}));H.displayName="Button";const X=H},1075:(r,e,t)=>{"use strict";t.d(e,{TO:()=>o,X3:()=>n,NO:()=>a});var o={primary:"primary",secondary:"secondary",tertiary:"tertiary",minimal:"minimal"},n={default:"default",pill:"pill",round:"round",circle:"circle",square:"square"},a={mini:"mini",default:"default",compact:"compact",large:"large"}},2922:(r,e,t)=>{"use strict";t.d(e,{nN:()=>g,io:()=>y});var o=t(7294),n=t(1141);function a(r){return void 0===r?null:r}function i(r,e){if(r)return r[e]}var l=(0,t(7265).zo)("div",(function(r){var e=r.$theme,t=e.breakpoints,o=e.colors,l=e.typography,c=e.sizing,p=function(r,e){return r[e]},u=function(r){return c[r]||r},d=function(r){var e={},t=(0,n.W)(r);return{apply:function(r){var o=r.property,n=r.transform,i=void 0===n?function(r){return r}:n,l=r.value;null!=l&&(Array.isArray(l)?l.forEach((function(r,n){if(0!==n){var l=t[n-1];e[l]||(e[l]={}),e[l][o]=a(i(r))}else e[o]=a(i(r))})):e[o]=a(i(l)))},value:function(){return e}}}(t);return d.apply({property:"color",value:p(r,"$color"),transform:function(r){return o[r]||r}}),d.apply({property:"backgroundAttachment",value:p(r,"$backgroundAttachment")}),d.apply({property:"backgroundClip",value:p(r,"$backgroundClip")}),d.apply({property:"backgroundColor",value:p(r,"$backgroundColor"),transform:function(r){return o[r]||r}}),d.apply({property:"backgroundImage",value:p(r,"$backgroundImage")}),d.apply({property:"backgroundOrigin",value:p(r,"$backgroundOrigin")}),d.apply({property:"backgroundPosition",value:p(r,"$backgroundPosition")}),d.apply({property:"backgroundRepeat",value:p(r,"$backgroundRepeat")}),d.apply({property:"backgroundSize",value:p(r,"$backgroundSize")}),d.apply({property:"fontFamily",value:p(r,"$font"),transform:function(r){return i(l[r],"fontFamily")}}),d.apply({property:"fontWeight",value:p(r,"$font"),transform:function(r){return i(l[r],"fontWeight")}}),d.apply({property:"fontSize",value:p(r,"$font"),transform:function(r){return i(l[r],"fontSize")}}),d.apply({property:"lineHeight",value:p(r,"$font"),transform:function(r){return i(l[r],"lineHeight")}}),d.apply({property:"alignContent",value:p(r,"$alignContent")}),d.apply({property:"alignItems",value:p(r,"$alignItems")}),d.apply({property:"alignSelf",value:p(r,"$alignSelf")}),d.apply({property:"display",value:p(r,"$display")}),d.apply({property:"flex",value:p(r,"$flex")}),d.apply({property:"flexDirection",value:p(r,"$flexDirection")}),d.apply({property:"grid",value:p(r,"$grid")}),d.apply({property:"gridArea",value:p(r,"$gridArea")}),d.apply({property:"gridAutoColumns",value:p(r,"$gridAutoColumns")}),d.apply({property:"gridAutoFlow",value:p(r,"$gridAutoFlow")}),d.apply({property:"gridAutoRows",value:p(r,"$gridAutoRows")}),d.apply({property:"gridColumn",value:p(r,"$gridColumn")}),d.apply({property:"gridColumnEnd",value:p(r,"$gridColumnEnd")}),d.apply({property:"gridColumnGap",value:p(r,"$gridColumnGap"),transform:u}),d.apply({property:"gridColumnStart",value:p(r,"$gridColumnStart")}),d.apply({property:"gridGap",value:p(r,"$gridGap"),transform:u}),d.apply({property:"gridRow",value:p(r,"$gridRow")}),d.apply({property:"gridRowEnd",value:p(r,"$gridRowEnd")}),d.apply({property:"gridRowGap",value:p(r,"$gridRowGap"),transform:u}),d.apply({property:"gridRowStart",value:p(r,"$gridRowStart")}),d.apply({property:"gridTemplate",value:p(r,"$gridTemplate")}),d.apply({property:"gridTemplateAreas",value:p(r,"$gridTemplateAreas")}),d.apply({property:"gridTemplateColumns",value:p(r,"$gridTemplateColumns")}),d.apply({property:"gridTemplateRows",value:p(r,"$gridTemplateRows")}),d.apply({property:"justifyContent",value:p(r,"$justifyContent")}),d.apply({property:"justifyItems",value:p(r,"$justifyItems")}),d.apply({property:"justifySelf",value:p(r,"$justifySelf")}),d.apply({property:"position",value:p(r,"$position")}),d.apply({property:"width",value:p(r,"$width"),transform:u}),d.apply({property:"minWidth",value:p(r,"$minWidth"),transform:u}),d.apply({property:"maxWidth",value:p(r,"$maxWidth"),transform:u}),d.apply({property:"height",value:p(r,"$height"),transform:u}),d.apply({property:"minHeight",value:p(r,"$minHeight"),transform:u}),d.apply({property:"maxHeight",value:p(r,"$maxHeight"),transform:u}),d.apply({property:"overflowX",value:p(r,"$overflow"),transform:function(r){return"scrollX"===r?"scroll":null}}),d.apply({property:"overflowY",value:p(r,"$overflow"),transform:function(r){return"scrollY"===r?"scroll":null}}),d.apply({property:"overflow",value:p(r,"$overflow"),transform:function(r){return"scrollX"!==r&&"scrollY"!==r?r:null}}),d.apply({property:"margin",value:p(r,"$margin"),transform:u}),d.apply({property:"marginTop",value:p(r,"$marginTop"),transform:u}),d.apply({property:"marginRight",value:p(r,"$marginRight"),transform:u}),d.apply({property:"marginBottom",value:p(r,"$marginBottom"),transform:u}),d.apply({property:"marginLeft",value:p(r,"$marginLeft"),transform:u}),d.apply({property:"padding",value:p(r,"$padding"),transform:u}),d.apply({property:"paddingTop",value:p(r,"$paddingTop"),transform:u}),d.apply({property:"paddingRight",value:p(r,"$paddingRight"),transform:u}),d.apply({property:"paddingBottom",value:p(r,"$paddingBottom"),transform:u}),d.apply({property:"paddingLeft",value:p(r,"$paddingLeft"),transform:u}),d.apply({property:"placeContent",value:p(r,"$placeContent")}),d.apply({property:"placeItems",value:p(r,"$placeItems")}),d.apply({property:"placeSelf",value:p(r,"$placeSelf")}),d.apply({property:"flexWrap",value:p(r,"$flexWrap"),transform:function(){return"wrap"}}),d.apply({property:"top",value:p(r,"$top"),transform:u}),d.apply({property:"right",value:p(r,"$right"),transform:u}),d.apply({property:"left",value:p(r,"$left"),transform:u}),d.apply({property:"bottom",value:p(r,"$bottom"),transform:u}),d.apply({property:"textOverflow",value:p(r,"$textOverflow")}),d.apply({property:"whiteSpace",value:p(r,"$whiteSpace")}),d.value()}));l.displayName="StyledBlock";var c=t(2338);function p(){return(p=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}function u(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function d(r){var e,t,n=r.forwardedRef,a=r.children,i=r.as,d=void 0===i?"div":i,s=r.overrides,f=void 0===s?{}:s,m=r.color,g=r.backgroundAttachment,y=r.backgroundClip,b=r.backgroundColor,h=r.backgroundImage,v=r.backgroundOrigin,w=r.backgroundPosition,$=r.backgroundRepeat,S=r.backgroundSize,O=r.font,R=r.alignContent,k=r.alignItems,P=r.alignSelf,E=r.flexDirection,C=r.display,j=r.flex,x=r.grid,T=r.gridArea,L=r.gridAutoColumns,z=r.gridAutoFlow,N=r.gridAutoRows,M=r.gridColumn,A=r.gridColumnEnd,B=r.gridColumnGap,H=r.gridColumnStart,X=r.gridGap,D=r.gridRow,F=r.gridRowEnd,I=r.gridRowGap,W=r.gridRowStart,G=r.gridTemplate,_=r.gridTemplateAreas,V=r.gridTemplateColumns,q=r.gridTemplateRows,U=r.justifyContent,Y=r.justifyItems,Z=r.justifySelf,J=r.position,K=r.width,Q=r.minWidth,rr=r.maxWidth,er=r.height,tr=r.minHeight,or=r.maxHeight,nr=r.overflow,ar=r.margin,ir=r.marginTop,lr=r.marginRight,cr=r.marginBottom,pr=r.marginLeft,ur=r.padding,dr=r.paddingTop,sr=r.paddingRight,fr=r.paddingBottom,mr=r.paddingLeft,gr=r.placeContent,yr=r.placeItems,br=r.placeSelf,hr=r.flexWrap,vr=r.left,wr=r.top,$r=r.right,Sr=r.bottom,Or=r.textOverflow,Rr=r.whiteSpace,kr=function(r,e){if(null==r)return{};var t,o,n=function(r,e){if(null==r)return{};var t,o,n={},a=Object.keys(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}(r,["forwardedRef","children","as","overrides","color","backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundRepeat","backgroundSize","font","alignContent","alignItems","alignSelf","flexDirection","display","flex","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnGap","gridColumnStart","gridGap","gridRow","gridRowEnd","gridRowGap","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","justifyContent","justifyItems","justifySelf","position","width","minWidth","maxWidth","height","minHeight","maxHeight","overflow","margin","marginTop","marginRight","marginBottom","marginLeft","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","placeContent","placeItems","placeSelf","flexWrap","left","top","right","bottom","textOverflow","whiteSpace"]),Pr=(e=(0,c.jb)(f.Block,l),t=2,function(r){if(Array.isArray(r))return r}(e)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,n=!1,a=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(r){n=!0,a=r}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return t}}(e,t)||function(r,e){if(r){if("string"==typeof r)return u(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),Er=Pr[0],Cr=Pr[1];return o.createElement(Er,p({ref:n,$as:d,$color:m,$backgroundAttachment:g,$backgroundClip:y,$backgroundColor:b,$backgroundImage:h,$backgroundOrigin:v,$backgroundPosition:w,$backgroundRepeat:$,$backgroundSize:S,$font:O,$alignContent:R,$alignItems:k,$alignSelf:P,$flexDirection:E,$display:C,$flex:j,$grid:x,$gridArea:T,$gridAutoColumns:L,$gridAutoFlow:z,$gridAutoRows:N,$gridColumn:M,$gridColumnEnd:A,$gridColumnGap:B,$gridColumnStart:H,$gridGap:X,$gridRow:D,$gridRowEnd:F,$gridRowGap:I,$gridRowStart:W,$gridTemplate:G,$gridTemplateAreas:_,$gridTemplateColumns:V,$gridTemplateRows:q,$justifyContent:U,$justifyItems:Y,$justifySelf:Z,$position:J,$width:K,$minWidth:Q,$maxWidth:rr,$height:er,$minHeight:tr,$maxHeight:or,$overflow:nr,$margin:ar,$marginTop:ir,$marginRight:lr,$marginBottom:cr,$marginLeft:pr,$padding:ur,$paddingTop:dr,$paddingRight:sr,$paddingBottom:fr,$paddingLeft:mr,$placeContent:gr,$placeItems:yr,$placeSelf:br,$flexWrap:hr,$left:vr,$top:wr,$right:$r,$bottom:Sr,$textOverflow:Or,$whiteSpace:Rr,"data-baseweb":"block"},kr,Cr),a)}var s=o.forwardRef((function(r,e){return o.createElement(d,p({},r,{forwardedRef:e}))}));s.displayName="Block";const f=s;function m(){return(m=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}var g=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displaylarge"},r,{font:r.font||"DisplayLarge",color:r.color||"contentPrimary",ref:e}))}));g.displayName="DisplayLarge";var y=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displaymedium"},r,{font:r.font||"DisplayMedium",color:r.color||"contentPrimary",ref:e}))}));y.displayName="DisplayMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displaysmall"},r,{font:r.font||"DisplaySmall",color:r.color||"contentPrimary",ref:e}))})).displayName="DisplaySmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displayxsmall"},r,{font:r.font||"DisplayXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="DisplayXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingxxlarge",as:r.as||"h1"},r,{font:r.font||"HeadingXXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingXXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingxlarge",as:r.as||"h2"},r,{font:r.font||"HeadingXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headinglarge",as:r.as||"h3"},r,{font:r.font||"HeadingLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingmedium",as:r.as||"h4"},r,{font:r.font||"HeadingMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingsmall",as:r.as||"h5"},r,{font:r.font||"HeadingSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingxsmall",as:r.as||"h6"},r,{font:r.font||"HeadingXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labellarge"},r,{font:r.font||"LabelLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="LabelLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labelmedium"},r,{font:r.font||"LabelMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="LabelMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labelsmall"},r,{font:r.font||"LabelSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="LabelSmall";var b=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labelxsmall"},r,{font:r.font||"LabelXSmall",color:r.color||"contentPrimary",ref:e}))}));b.displayName="LabelXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphlarge",as:r.as||"p"},r,{font:r.font||"ParagraphLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="ParagraphLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphmedium",as:r.as||"p"},r,{font:r.font||"ParagraphMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="ParagraphMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphsmall",as:r.as||"p"},r,{font:r.font||"ParagraphSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="ParagraphSmall";var h=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphxsmall",as:r.as||"p"},r,{font:r.font||"ParagraphXSmall",color:r.color||"contentPrimary",ref:e}))}));h.displayName="ParagraphXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplaylarge"},r,{font:r.font||"MonoDisplayLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplayLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplaymedium"},r,{font:r.font||"MonoDisplayMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplayMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplaysmall"},r,{font:r.font||"MonoDisplaySmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplaySmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplayxsmall"},r,{font:r.font||"MonoDisplayXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplayXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingxxlarge",as:r.as||"h1"},r,{font:r.font||"MonoHeadingXXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingXXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingxlarge",as:r.as||"h2"},r,{font:r.font||"MonoHeadingXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadinglarge",as:r.as||"h3"},r,{font:r.font||"MonoHeadingLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingmedium",as:r.as||"h4"},r,{font:r.font||"MonoHeadingMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingsmall",as:r.as||"h5"},r,{font:r.font||"MonoHeadingSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingxsmall",as:r.as||"h6"},r,{font:r.font||"MonoHeadingXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabellarge"},r,{font:r.font||"MonoLabelLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabelmedium"},r,{font:r.font||"MonoLabelMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabelsmall"},r,{font:r.font||"MonoLabelSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabelxsmall"},r,{font:r.font||"MonoLabelXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphlarge",as:r.as||"p"},r,{font:r.font||"MonoParagraphLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphmedium",as:r.as||"p"},r,{font:r.font||"MonoParagraphMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphsmall",as:r.as||"p"},r,{font:r.font||"MonoParagraphSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphxsmall",as:r.as||"p"},r,{font:r.font||"MonoParagraphXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphXSmall";var v=h,w=b;o.forwardRef((function(r,e){return o.createElement(v,m({},r,{color:r.color||"contentSecondary",ref:e}))})).displayName="Caption1",o.forwardRef((function(r,e){return o.createElement(w,m({},r,{color:r.color||"contentSecondary"}))})).displayName="Caption2"},3495:(r,e,t)=>{"use strict";t.d(e,{E:()=>o,Ah:()=>n,Z5:()=>a});function o(r){try{return r.target.matches(":focus-visible")}catch(r){}return true}var n=function(r,e){return function(t){"function"==typeof r.onFocus&&r.onFocus(t),e(t)}},a=function(r,e){return function(t){"function"==typeof r.onBlur&&r.onBlur(t),e(t)}}}}]);