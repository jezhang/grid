(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{GU7r:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r("8LU1"),s=r("fXoL"),o=r("HDdC"),c=r("XNiG");r("Kj3r");let i=(()=>{class e{create(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(s.Fb)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),b=(()=>{class e{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){const t=Object(n.e)(e);return new o.a(e=>{const r=this._observeElement(t).subscribe(e);return()=>{r.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const t=new c.a,r=this._mutationObserverFactory.create(e=>t.next(e));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}}return e.\u0275fac=function(t){return new(t||e)(s.Sb(i))},e.\u0275prov=Object(s.Fb)({factory:function(){return new e(Object(s.Sb)(i))},token:e,providedIn:"root"}),e})(),u=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},providers:[i]}),e})()}}]);