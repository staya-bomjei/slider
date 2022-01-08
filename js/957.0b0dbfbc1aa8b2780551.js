"use strict";(self.webpackChunkrange_slider=self.webpackChunkrange_slider||[]).push([[957],{451:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(923),n=i(s(837)),r=s(590),a=i(s(607));class l extends n.default{constructor(t){super(),this.options={};const e=t?Object.assign(Object.assign({},r.defaultOptions),t):r.defaultOptions;this.setOptions(e)}getOptions(){return this.options}setOptions(t){l.checkTypes(t),this.checkRange(t),!1===t.isRange&&delete this.options.valueTo,l.checkStrings(t);const e=(0,o.calcNewOptions)(this.options,t);if(0===Object.keys(e).length)return;const s=this.validateStrings(e),i=Object.assign(Object.assign({},this.options),s);l.checkOptions(i),this.options=i,this.broadcast(s)}validateStrings(t){const{strings:e,isRange:s}=t;if(void 0!==e){const i=Object.assign({min:0,max:e.length-1,step:1,valueFrom:0,scaleParts:e.length-1},t);return(this.options.isRange||s)&&(i.valueTo=e.length-1),i}return t}static checkTypes(t){Object.keys(t).forEach((e=>{(0,o.checkType)(t[e],r.optionsTypes[e])||l.throwError(e,`${e} must be ${r.optionsTypes[e]}`)}))}checkRange(t){const{valueTo:e,isRange:s}=t;s&&void 0===e&&l.throwError("isRange","valueTo is expected instead of isRange: true");const{isRange:i}=this.options;!i&&!s&&void 0!==e&&l.throwError("isRange",`valueTo(${e}) not allowed when isRange: false`)}static checkStrings(t){const{min:e,max:s,step:i,strings:o}=t;void 0!==o&&(void 0!==e||void 0!==s||void 0!==i)&&l.throwError("strings","you can't set strings with min, max, step")}static checkOptions(t){const{min:e,max:s,step:i,valueFrom:n,valueTo:r,scaleParts:a}=t;e>=s&&l.throwError("min","min cannot be greater than or equal to max"),i<=0&&l.throwError("step","step cannot be less than or equal to zero"),(n>s||n<e)&&l.throwError("valueFrom",`valueFrom(${n}) must be between ${e} and ${s}`),n!==s&&n!==(0,o.calcNearestStepValue)(n,i,e)&&l.throwError("valueFrom",`valueFrom(${n}) must be a multiple of ${i}`),void 0!==r&&(r>s||r<e)&&l.throwError("valueTo",`valueTo(${r}) must be between ${e} and ${s}`),void 0!==r&&r!==(0,o.calcNearestStepValue)(r,i,e)&&r!==s&&l.throwError("valueTo",`valueTo(${r}) must be a multiple of ${i}`),void 0!==r&&n>r&&l.throwError("valueFrom",`valueFrom(${n}) must be less than ${r}`);let c=(s-e)/i;c=Math.trunc(c)+Math.ceil(c%1),(a<1||a>c)&&l.throwError("scaleParts",`scaleParts(${a}) must be between 1 and ${c}`)}static throwError(t,e){throw new a.default(t,e)}}e.default=l},590:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.optionsTypes=e.defaultOptions=void 0,e.defaultOptions={min:0,max:100,step:1,valueFrom:50,orientation:"horizontal",scaleParts:4,isRange:!1,showScale:!0,showTooltip:!0,showProgress:!0},e.optionsTypes={min:"number",max:"number",step:"number",strings:"string[]",valueFrom:"number",valueTo:"number",isRange:"boolean",orientation:"orientation",showScale:"boolean",scaleParts:"number",showTooltip:"boolean",showProgress:"boolean"}},174:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(923),n=i(s(451)),r=i(s(708)),a=s(283),l=i(s(925)),c=i(s(692)),h=i(s(965)),u=s(683);e.default=class{constructor(t){this.model=new n.default,this.view=new r.default(t),this.thumbDragged=!1;const e=this.model.getOptions();setTimeout((()=>this.handleModelChange(e)),0),this.attachEventHandlers()}attachEventHandlers(){this.model.subscribe((t=>this.handleModelChange(t))),this.view.subscribe((t=>this.handleViewChange(t)))}handleModelChange(t){const e=this.convertToViewOptions(t);this.view.setOptions(e),this.handleTooltipsOverlap()}handleViewChange({view:t,event:e}){if(t instanceof l.default)this.handleThumbPointerDown(t,e);else if(t instanceof h.default)this.handleScaleItemPointerDown(t);else{if(!(t instanceof c.default))throw new Error(`Unknown view event: ${t} ${e}`);this.handleTrackPointerDown(e)}}handleScaleItemPointerDown(t){const{position:e}=t.getOptions(),{isRange:s}=this.model.getOptions(),{leftThumb:i,rightThumb:n}=this.view.subViews,r=i.getOptions().position,a=n.getOptions().position,l=!s||(0,o.isFirstCloser)(e,r,a)||e<r?"valueFrom":"valueTo";this.model.setOptions({[l]:this.percentToValue(e)})}handleTrackPointerDown(t){const{isRange:e}=this.model.getOptions(),{isVertical:s}=this.view.getOptions(),{leftThumb:i,rightThumb:n}=this.view.subViews,{el:r}=i,{el:a}=n,l=r.getBoundingClientRect(),c=a.getBoundingClientRect(),h=s?l.y:l.x,u=s?c.y:c.x,d=s?t.clientY:t.clientX,p=!e||(0,o.isFirstCloser)(d,h,u)||h>d?i:n;this.handleThumbPointerDown(p,t)}handleTooltipsOverlap(){const{isRange:t,valueFrom:e,valueTo:s}=this.model.getOptions();if(!t||!this.isTooltipsOverlap()||e===s)return;const i=`${this.calcTooltipText(!0)} — ${this.calcTooltipText(!1)}`,o="right"!==this.thumbDragged?i:"",n="right"!==this.thumbDragged?"":i;this.view.setOptions({leftTooltip:{text:o},rightTooltip:{text:n}})}handleThumbPointerDown(t,e){const{leftThumb:s}=this.view.subViews,i=t===s,{el:o}=t;this.thumbDragged=i?"left":"right",o.classList.add(a.THUMB_DRAGGED),this.moveThumbTo(t,e);const n=e=>{this.moveThumbTo(t,e)},r=()=>{this.thumbDragged=!1,o.classList.remove(a.THUMB_DRAGGED),document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r)};document.addEventListener("pointermove",n),document.addEventListener("pointerup",r)}moveThumbTo(t,e){const{isRange:s}=this.model.getOptions(),{leftThumb:i,rightThumb:o}=this.view.subViews,n=t===i,{position:r}=i.getOptions(),{position:a}=o.getOptions(),l=n?r:a,c=n?a:r;let h=this.calcNearestPosition(e);const u=(n&&h>c||!n&&h<c)&&l!==c;if(u&&(h=c),(!s||(u||n?h<=c:h>=c))&&h!==l){const t=n?"valueFrom":"valueTo",e=this.percentToValue(h);this.model.setOptions({[t]:e})}}calcTooltipText(t){const{valueFrom:e,valueTo:s,strings:i}=this.model.getOptions(),o=t?e:s;return void 0===i?String(o):i[o]}calcNearestPosition(t){const{min:e,max:s,step:i}=this.model.getOptions(),{isVertical:n}=this.view.getOptions(),{track:r}=this.view.subViews,a=r.el.getBoundingClientRect(),l=n?t.clientY:t.clientX,c=n?a.top:a.left,h=n?a.height:a.width,d=(0,o.valueToPercent)(i,s-e);let p=(0,o.valueToPercent)(l-c,h);p=Math.max(p,u.MIN_POSITION);const b=(0,o.calcNearestStepValue)(p,d,u.MIN_POSITION);return(0,o.isFirstCloser)(p,u.MAX_POSITION,b)?u.MAX_POSITION:b}percentToValue(t){const{min:e,max:s,step:i}=this.model.getOptions(),n=t*(s-e)/u.MAX_POSITION+e;return n>=s?s:(0,o.calcNearestStepValue)(n,i,e)}isTooltipsOverlap(){const{leftTooltip:{el:t},rightTooltip:{el:e}}=this.view.subViews,s=t.getBoundingClientRect(),i=e.getBoundingClientRect();return(0,o.rectsIntersect)(s,i)}convertToViewOptions(t){const{min:e,max:s,step:i,strings:n,valueFrom:r,valueTo:a,isRange:l,orientation:c,showScale:h,scaleParts:d,showTooltip:p,showProgress:b}=this.model.getOptions(),v={},g=s-e,m=(0,o.valueToPercent)(r-e,g),T=(0,o.valueToPercent)(a-e,g),f=r===a,O=f&&r===s,_=f&&a===e;return(0,o.callFunctionsForNewOptions)({},t,[{dependencies:["orientation"],callback:()=>{v.isVertical="vertical"===c}},{dependencies:["valueFrom","valueTo","isRange","min","max","showProgress"],callback:()=>{v.progress={from:l?m:u.MIN_POSITION,to:l?T:m,visible:b}}},{dependencies:["min","max","step","strings","scaleParts","showScale"],callback:()=>{v.scale={min:e,max:s,step:i,strings:n,partsCounter:d,visible:h}}},{dependencies:["valueFrom","min","max"],callback:()=>{v.leftThumb={position:m,visible:!0,isHigher:O}}},{dependencies:["valueTo","min","max","isRange"],callback:()=>{v.rightThumb={position:T,visible:l,isHigher:_}}},{dependencies:["valueFrom","valueTo","min","max","showTooltip"],callback:()=>{v.leftTooltip={text:this.calcTooltipText(!0),visible:p},v.rightTooltip={text:this.calcTooltipText(!1),visible:l&&p}}}]),v}}},683:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MIN_POSITION=e.MAX_POSITION=void 0,e.MAX_POSITION=100,e.MIN_POSITION=0},708:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(923),n=i(s(837)),r=i(s(692)),a=i(s(449)),l=i(s(827)),c=i(s(925)),h=i(s(478)),u=s(283);class d extends n.default{constructor(t){super(),this.subViews={},this.options={},this.el=t,this.render(),this.attachEventHandlers()}getOptions(){return this.options}setOptions(t){const{isVertical:e,progress:s,scale:i,leftThumb:n,rightThumb:r,leftTooltip:a,rightTooltip:l}=t;(0,o.callFunctionsForNewOptions)(this.options,t,[{dependencies:["isVertical"],callback:()=>this.updateOrientation(e)},{dependencies:["progress"],callback:()=>this.subViews.progress.setOptions(s)},{dependencies:["scale"],callback:()=>this.subViews.scale.setOptions(i)},{dependencies:["leftThumb"],callback:()=>this.subViews.leftThumb.setOptions(n)},{dependencies:["rightThumb"],callback:()=>this.subViews.rightThumb.setOptions(r)},{dependencies:["leftTooltip"],callback:()=>this.subViews.leftTooltip.setOptions(a)},{dependencies:["rightTooltip"],callback:()=>this.subViews.rightTooltip.setOptions(l)}]),this.options=Object.assign(Object.assign({},this.options),t)}render(){this.el.className=`${u.RANGE_SLIDER}`,this.el.innerHTML=`\n      <div class="${u.WRAPPER}">\n        <div class="${u.TRACK}">\n          <div class="${u.PROGRESS}"></div>\n          <div class="${u.THUMB}">\n            <div class="${u.TOOLTIP}"></div>\n          </div>\n          <div class="${u.THUMB}">\n            <div class="${u.TOOLTIP}"></div>\n          </div>\n        </div>\n        <div class="${u.SCALE}"></div>\n      </div>\n    `,this.setSubViews()}setSubViews(){const[t]=this.el.children,[e,s]=t.children,[i,o,n]=e.children,[u]=o.children,[d]=n.children,p=new r.default(e),b=new a.default(s),v=new l.default(i),g=new c.default(o),m=new c.default(n),T=new h.default(u),f=new h.default(d);this.subViews={track:p,progress:v,scale:b,leftThumb:g,rightThumb:m,leftTooltip:T,rightTooltip:f}}attachEventHandlers(){const{track:t,scale:e,leftThumb:s,rightThumb:i}=this.subViews;t.subscribe((t=>this.broadcast(t))),e.subscribe((t=>this.broadcast(t))),s.subscribe((t=>this.broadcast(t))),i.subscribe((t=>this.broadcast(t)))}updateOrientation(t){t?this.el.classList.add(u.RANGE_SLIDER_VERTICAL):this.el.classList.remove(u.RANGE_SLIDER_VERTICAL)}}e.default=d},283:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TOOLTIP_HIDDEN=e.THUMB_HIGHER=e.THUMB_DRAGGED=e.THUMB_HIDDEN=e.SCALE_HIDDEN=e.PROGRESS_HIDDEN=e.RANGE_SLIDER_VERTICAL=e.TOOLTIP=e.THUMB=e.SCALE_ITEM=e.SCALE=e.PROGRESS=e.TRACK=e.WRAPPER=e.RANGE_SLIDER=void 0;e.RANGE_SLIDER="range-slider",e.WRAPPER="range-slider__wrapper",e.TRACK="range-slider__track";const s="range-slider__progress";e.PROGRESS=s;const i="range-slider__scale";e.SCALE=i,e.SCALE_ITEM="range-slider__scale-item";const o="range-slider__thumb";e.THUMB=o;const n="range-slider__tooltip";e.TOOLTIP=n,e.RANGE_SLIDER_VERTICAL="range-slider_vertical";const r=`${s}_hidden`;e.PROGRESS_HIDDEN=r;const a=`${i}_hidden`;e.SCALE_HIDDEN=a;const l=`${o}_hidden`;e.THUMB_HIDDEN=l;const c=`${o}_dragged`;e.THUMB_DRAGGED=c;const h=`${o}_higher`;e.THUMB_HIGHER=h;const u=`${n}_hidden`;e.TOOLTIP_HIDDEN=u},827:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(923),o=s(283);e.default=class{constructor(t){this.options={},this.el=t}getOptions(){return this.options}setOptions(t){const e=this.options;this.options=Object.assign(Object.assign({},e),t),(0,i.callFunctionsForNewOptions)(e,t,[{dependencies:["from","to"],callback:()=>this.updatePosition()},{dependencies:["visible"],callback:()=>this.updateVisibility()}])}updateVisibility(){const{visible:t}=this.options;t?this.el.classList.remove(o.PROGRESS_HIDDEN):this.el.classList.add(o.PROGRESS_HIDDEN)}updatePosition(){const{from:t,to:e}=this.options;this.el.style.width=e-t+"%",this.el.style.left=`${t}%`}}},449:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(s(837)),n=s(923),r=s(283),a=i(s(965));class l extends o.default{constructor(t){super(),this.items=[],this.options={},this.el=t}getOptions(){return this.options}setOptions(t){const e=this.options;this.options=Object.assign(Object.assign({},e),t),(0,n.callFunctionsForNewOptions)(e,t,[{dependencies:["min","max","step","strings","partsCounter"],callback:()=>this.updateItems()},{dependencies:["visible"],callback:()=>this.updateVisibility()}])}renderItems(){const{partsCounter:t}=this.options;this.el.innerHTML="<div></div>".repeat(t+1),this.items=[],Array.from(this.el.children).forEach((t=>{this.items.push(new a.default(t))}))}attachEventHandlers(){this.items.forEach((t=>{t.subscribe((t=>this.broadcast(t)))}))}updateVisibility(){const{visible:t}=this.options;t?this.el.classList.remove(r.SCALE_HIDDEN):this.el.classList.add(r.SCALE_HIDDEN)}updateItems(){this.renderItems(),this.attachEventHandlers();const t=this.calcCorrectValues(),e=this.calcCorrectPositions(t),s=this.calcCorrectTexts(t);this.items.forEach(((t,i)=>{t.setOptions({position:e[i],text:s[i]})}))}calcCorrectValues(){const{min:t,max:e,step:s,partsCounter:i}=this.options,o=(e-t)/i,r=[...Array(i)];return r.forEach(((e,i)=>{const a=o*i+t,l=(0,n.calcNearestStepValue)(a,s,t);r[i]=l})),r.push(e),r}calcCorrectPositions(t){const{min:e,max:s}=this.options;return t.map((t=>(0,n.valueToPercent)(t-e,s-e)))}calcCorrectTexts(t){const{strings:e}=this.options;return t.map((t=>void 0!==e?e[t]:String(t)))}}e.default=l},965:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(s(837)),n=s(283);class r extends o.default{constructor(t){super(),this.options={},this.el=t,this.render(),this.attachEventHandlers()}getOptions(){return this.options}setOptions(t){this.options=Object.assign(Object.assign({},this.options),t),this.updateView()}render(){this.el.classList.add(n.SCALE_ITEM),this.el.innerHTML=""}attachEventHandlers(){this.el.addEventListener("pointerdown",(t=>{t.preventDefault(),t.stopPropagation(),this.broadcast({view:this,event:t})}))}updateView(){this.updatePosition(),this.updateText()}updatePosition(){const{position:t}=this.options;this.el.style.left=`${t}%`}updateText(){const{text:t}=this.options;this.el.innerHTML=t}}e.default=r},925:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(s(837)),n=s(923),r=s(283);class a extends o.default{constructor(t){super(),this.options={},this.el=t,this.attachEventHandlers()}getOptions(){return this.options}setOptions(t){const e=this.options;this.options=Object.assign(Object.assign({},e),t),(0,n.callFunctionsForNewOptions)(e,t,[{dependencies:["position"],callback:()=>this.updatePosition()},{dependencies:["visible"],callback:()=>this.updateVisibility()},{dependencies:["isHigher"],callback:()=>this.updateZIndex()}])}attachEventHandlers(){this.el.addEventListener("pointerdown",(t=>{t.preventDefault(),t.stopPropagation(),this.broadcast({view:this,event:t})})),this.el.ondragstart=null}updateVisibility(){const{visible:t}=this.options;t?this.el.classList.remove(r.THUMB_HIDDEN):this.el.classList.add(r.THUMB_HIDDEN)}updatePosition(){const{position:t}=this.options;this.el.style.left=`${t}%`}updateZIndex(){const{isHigher:t}=this.options;t?this.el.classList.add(r.THUMB_HIGHER):this.el.classList.remove(r.THUMB_HIGHER)}}e.default=a},478:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(923),o=s(283);e.default=class{constructor(t){this.options={},this.el=t}getOptions(){return this.options}setOptions(t){const e=this.options;this.options=Object.assign(Object.assign({},e),t),(0,i.callFunctionsForNewOptions)(e,t,[{dependencies:["text"],callback:()=>this.updateText()},{dependencies:["visible"],callback:()=>this.updateVisibility()}])}updateVisibility(){const{visible:t}=this.options;t?this.el.classList.remove(o.TOOLTIP_HIDDEN):this.el.classList.add(o.TOOLTIP_HIDDEN)}updateText(){const{text:t}=this.options;this.el.innerHTML=t}}},692:function(t,e,s){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(s(837));class n extends o.default{constructor(t){super(),this.el=t,this.attachEventHandlers()}attachEventHandlers(){this.el.addEventListener("pointerdown",(t=>{t.preventDefault(),t.stopPropagation(),this.broadcast({view:this,event:t})}))}}e.default=n},837:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.observers=[]}subscribe(t){this.observers.push(t)}unsubscribe(t){this.observers=this.observers.filter((e=>e!==t))}broadcast(t){this.observers.forEach((e=>e(t)))}}},607:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class s extends Error{constructor(t,e){super(e),this.name="IncorrectValueError",this.value=t}}e.default=s},923:(t,e)=>{function s(t,e){return Number(t.toFixed(e))}function i(t,e){const s={};return Object.keys(e).forEach((i=>{t[i]!==e[i]&&void 0!==e[i]&&(s[i]=e[i])})),s}Object.defineProperty(e,"__esModule",{value:!0}),e.checkType=e.isFirstCloser=e.rectsIntersect=e.callFunctionsForNewOptions=e.calcNewOptions=e.valueToPercent=e.calcNearestStepValue=void 0,e.calcNearestStepValue=function(t,e,i,o=12){if(e<0)throw new Error("Step can't be less than zero");const n=t-i;if(n%e==0)return t;let r=Math.trunc(n/e)*e+i;r=s(r,o);const a=t-r;let l=(Math.trunc(n/e)+1)*e+i;return l=s(l,o),a<l-t?r:l},e.valueToPercent=function(t,e){return t/e*100},e.calcNewOptions=i,e.callFunctionsForNewOptions=function(t,e,s){const o=i(t,e),n=Object.keys(o);s.forEach((({dependencies:t,callback:e})=>{t.some((t=>n.some((e=>e===t))))&&e()}))},e.rectsIntersect=function(t,e){return(0!==t.height||0!==e.height)&&t.left+t.width>e.left&&t.right-t.width<e.right&&t.top+t.height>e.top&&t.bottom-t.height<e.bottom},e.isFirstCloser=function(t,e,s){return Math.abs(t-e)<Math.abs(t-s)},e.checkType=function(t,e){switch(e){case"number":case"boolean":return void 0!==t&&typeof t===e;case"string[]":return void 0!==t&&Array.isArray(t)&&t.every((t=>"string"==typeof t));case"orientation":return void 0!==t&&("vertical"===t||"horizontal"===t);default:throw new Error(`Unknown type '${e}'`)}}},957:(t,e,s)=>{var i,o=s(174),n=s.n(o);(i=jQuery).fn.rangeSlider=function(t,e){const s={init(t){return this.each((function(e,s){const o=new(n())(s);o.model.setOptions(t),i(s).data().rangeSlider=o}))},get(){const t=i(this).data("rangeSlider"),{model:e}=t;return e.getOptions()},set(t){const e=i(this).data("rangeSlider"),{model:s}=e;s.setOptions(t)},onchange(t){const e=i(this).data("rangeSlider"),{model:s}=e;s.subscribe(t)}};if(s[t])return s[t].apply(this,[e]);if("object"==typeof t||!t){const e=t||{};return s.init.call(this,e)}return i.error(`Unknown method '${t}'`),null}}}]);