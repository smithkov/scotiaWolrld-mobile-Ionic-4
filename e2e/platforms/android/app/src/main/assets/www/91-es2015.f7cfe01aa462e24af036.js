(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{fD4w:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_range",(function(){return s}));var n=i("dSyh"),a=(i("AfW+"),i("aiEM")),r=i("Dl6n");const s=class{constructor(t){Object(n.l)(this,t),this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=t=>Object(a.c)(this.min,t,this.max),this.ensureValueInBounds=t=>this.dualKnobs?{lower:this.clampBounds(t.lower),upper:this.clampBounds(t.upper)}:this.clampBounds(t),this.handleKeyboard=(t,e)=>{let i=this.step;i=i>0?i:1,i/=this.max-this.min,e||(i*=-1),"A"===t?this.ratioA=Object(a.c)(0,this.ratioA+i,1):this.ratioB=Object(a.c)(0,this.ratioB+i,1),this.updateValue()},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},this.ionChange=Object(n.d)(this,"ionChange",7),this.ionStyle=Object(n.d)(this,"ionStyle",7),this.ionFocus=Object(n.d)(this,"ionFocus",7),this.ionBlur=Object(n.d)(this,"ionBlur",7)}debounceChanged(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async componentDidLoad(){const t=this.rangeSlider;t&&(this.gesture=(await Promise.resolve().then(i.bind(null,"mUkt"))).createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(this.disabled))}getValue(){const t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(t){const e=this.rect=this.rangeSlider.getBoundingClientRect(),i=t.currentX;let n=Object(a.c)(0,(i-e.left)/e.width,1);"rtl"===document.dir&&(n=1-n),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B",this.setFocus(this.pressedKnob),this.update(i)}onMove(t){this.update(t.currentX)}onEnd(t){this.update(t.currentX),this.pressedKnob=void 0}update(t){const e=this.rect;let i=Object(a.c)(0,(t-e.left)/e.width,1);"rtl"===document.dir&&(i=1-i),this.snaps&&(i=l(d(i,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=i:this.ratioB=i,this.updateValue()}get valA(){return d(this.ratioA,this.min,this.max,this.step)}get valB(){return d(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:e,max:i}=this;this.dualKnobs?(this.ratioA=l(t.lower,e,i),this.ratioB=l(t.upper,e,i)):this.ratioA=l(t,e,i)}updateValue(){this.noUpdate=!0;const{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}render(){const{min:t,max:e,step:i,el:s,handleKeyboard:d,pressedKnob:h,disabled:b,pin:g,ratioLower:c,ratioUpper:p}=this,u=Object(n.e)(this),m="rtl"===document.dir,k=m?"right":"left",f=t=>({[k]:t[k]}),v={[k]:`${100*c}%`,[m?"left":"right"]:`${100-100*p}%`},x=[];if(this.snaps&&this.ticks)for(let n=t;n<=e;n+=i){const i=l(n,t,e),a={ratio:i,active:i>=c&&i<=p};a[k]=`${100*i}%`,x.push(a)}return Object(a.a)(!0,s,this.name,JSON.stringify(this.getValue()),b),Object(n.i)(n.a,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},Object(r.a)(this.color)),{[u]:!0,"in-item":Object(r.c)("ion-item",s),"range-disabled":b,"range-pressed":void 0!==h,"range-has-pin":g})},Object(n.i)("slot",{name:"start"}),Object(n.i)("div",{class:"range-slider",ref:t=>this.rangeSlider=t},x.map(t=>Object(n.i)("div",{style:f(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active}})),Object(n.i)("div",{class:"range-bar",role:"presentation"}),Object(n.i)("div",{class:"range-bar range-bar-active",role:"presentation",style:v}),o(m,{knob:"A",pressed:"A"===h,value:this.valA,ratio:this.ratioA,pin:g,disabled:b,handleKeyboard:d,min:t,max:e}),this.dualKnobs&&o(m,{knob:"B",pressed:"B"===h,value:this.valB,ratio:this.ratioB,pin:g,disabled:b,handleKeyboard:d,min:t,max:e})),Object(n.i)("slot",{name:"end"}))}get el(){return Object(n.f)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:"";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}'}},o=(t,{knob:e,value:i,ratio:a,min:r,max:s,disabled:o,pressed:d,pin:l,handleKeyboard:h})=>{const b=t?"right":"left";return Object(n.i)("div",{onKeyDown:t=>{const i=t.key;"ArrowLeft"===i||"ArrowDown"===i?(h(e,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==i&&"ArrowUp"!==i||(h(e,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":d,"range-knob-min":i===r,"range-knob-max":i===s},style:(()=>{const t={};return t[b]=`${100*a}%`,t})(),role:"slider",tabindex:o?-1:0,"aria-valuemin":r,"aria-valuemax":s,"aria-disabled":o?"true":null,"aria-valuenow":i},l&&Object(n.i)("div",{class:"range-pin",role:"presentation"},Math.round(i)),Object(n.i)("div",{class:"range-knob",role:"presentation"}))},d=(t,e,i,n)=>{let r=(i-e)*t;return n>0&&(r=Math.round(r/n)*n+e),Object(a.c)(e,r,i)},l=(t,e,i)=>Object(a.c)(0,(t-e)/(i-e),1)}}]);