(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ah5c:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("ZZ/e"),i=u("18Le"),r=u("gREL"),b=u("CUZT"),s=function(){function l(l,n,u,e,t){this.router=l,this.authenticationService=n,this.loadingController=u,this.alertService=e,this.loaderService=t}return l.prototype.ngOnInit=function(){},l.prototype.register=function(l){var n=this;this.loaderService.showLoader("Registering ..."),this.authenticationService.register(l.value.username,l.value.email,l.value.password).subscribe((function(l){n.loaderService.hideLoader(),l.success?n.router.navigate(["/pages/dashboard"]):n.alertService.presentToast(l.message)}),(function(l){n.loaderService.hideLoader()}))},l}(),a=function(){return function(){}}(),o=u("pMnS"),d=u("oBZk"),g=u("gIcY"),c=u("ZYCi"),h=e.rb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--background:#3880ff;--color:#fff}ion-col[_ngcontent-%COMP%]{--color:#fff}ion-content[_ngcontent-%COMP%]{--background:#fff}"]],data:{}});function p(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"ion-header",[],null,null,null,d.bb,d.q)),e.sb(1,49152,null,0,t.C,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,d.vb,d.K)),e.sb(3,49152,null,0,t.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(4,0,null,0,2,"ion-title",[],null,null,null,d.ub,d.J)),e.sb(5,49152,null,0,t.Bb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Register"])),(l()(),e.tb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.Q,d.f)),e.sb(8,49152,null,0,t.m,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,11).onClick(u)&&t),t}),d.N,d.c)),e.sb(10,49152,null,0,t.h,[e.h,e.k,e.z],null,null),e.sb(11,16384,null,0,t.i,[[2,t.jb],t.Jb],null,null),(l()(),e.tb(12,0,null,null,57,"ion-content",[],null,null,null,d.X,d.m)),e.sb(13,49152,null,0,t.v,[e.h,e.k,e.z],null,null),(l()(),e.tb(14,0,null,0,55,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Fb(l,16).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,16).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.register(e.Fb(l,16))&&t),t}),null,null)),e.sb(15,16384,null,0,g.m,[],null,null),e.sb(16,4210688,[["form",4]],0,g.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Ib(2048,null,g.a,null,[g.h]),e.sb(18,16384,null,0,g.g,[[4,g.a]],null,null),(l()(),e.tb(19,0,null,null,50,"ion-grid",[],null,null,null,d.ab,d.p)),e.sb(20,49152,null,0,t.B,[e.h,e.k,e.z],null,null),(l()(),e.tb(21,0,null,0,48,"ion-row",[["justify-content-center",""]],null,null,null,d.nb,d.C)),e.sb(22,49152,null,0,t.kb,[e.h,e.k,e.z],null,null),e.sb(23,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(24,0,null,0,45,"ion-col",[["align-self-center",""],["size-lg","5"],["size-md","6"],["size-xs","12"]],null,null,null,d.W,d.l)),e.sb(25,49152,null,0,t.u,[e.h,e.k,e.z],null,null),e.sb(26,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(27,0,null,0,2,"div",[["padding",""],["text-center",""]],null,null,null,null,null)),e.sb(28,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(29,0,null,null,0,"img",[["alt","Logo"],["src","assets/icon/logo.png"],["title","Logo"]],null,null,null,null,null)),(l()(),e.tb(30,0,null,0,34,"div",[["padding",""]],null,null,null,null,null)),e.sb(31,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(32,0,null,null,10,"ion-item",[],null,null,null,d.gb,d.t)),e.sb(33,49152,null,0,t.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(34,0,null,0,8,"ion-input",[["name","username"],["ngModel",""],["placeholder","Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,37)._handleInputEvent(u.target)&&t),t}),d.db,d.s)),e.sb(35,16384,null,0,g.j,[],{required:[0,"required"]},null),e.Ib(1024,null,g.c,(function(l){return[l]}),[g.j]),e.sb(37,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,g.d,(function(l){return[l]}),[t.Pb]),e.sb(39,671744,null,0,g.i,[[2,g.a],[6,g.c],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},null),e.Ib(2048,null,g.e,null,[g.i]),e.sb(41,16384,null,0,g.f,[[4,g.e]],null,null),e.sb(42,49152,null,0,t.H,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.tb(43,0,null,null,10,"ion-item",[],null,null,null,d.gb,d.t)),e.sb(44,49152,null,0,t.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(45,0,null,0,8,"ion-input",[["name","email"],["ngModel",""],["placeholder","your@email.com"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,48)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,48)._handleInputEvent(u.target)&&t),t}),d.db,d.s)),e.sb(46,16384,null,0,g.j,[],{required:[0,"required"]},null),e.Ib(1024,null,g.c,(function(l){return[l]}),[g.j]),e.sb(48,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,g.d,(function(l){return[l]}),[t.Pb]),e.sb(50,671744,null,0,g.i,[[2,g.a],[6,g.c],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},null),e.Ib(2048,null,g.e,null,[g.i]),e.sb(52,16384,null,0,g.f,[[4,g.e]],null,null),e.sb(53,49152,null,0,t.H,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.tb(54,0,null,null,10,"ion-item",[],null,null,null,d.gb,d.t)),e.sb(55,49152,null,0,t.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(56,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,59)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,59)._handleInputEvent(u.target)&&t),t}),d.db,d.s)),e.sb(57,16384,null,0,g.j,[],{required:[0,"required"]},null),e.Ib(1024,null,g.c,(function(l){return[l]}),[g.j]),e.sb(59,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,g.d,(function(l){return[l]}),[t.Pb]),e.sb(61,671744,null,0,g.i,[[2,g.a],[6,g.c],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},null),e.Ib(2048,null,g.e,null,[g.i]),e.sb(63,16384,null,0,g.f,[[4,g.e]],null,null),e.sb(64,49152,null,0,t.H,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.tb(65,0,null,0,4,"div",[["padding",""]],null,null,null,null,null)),e.sb(66,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(67,0,null,null,2,"ion-button",[["expand","block"],["size","large"],["type","submit"]],null,null,null,d.P,d.e)),e.sb(68,49152,null,0,t.l,[e.h,e.k,e.z],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),e.Lb(-1,0,["Register "]))],(function(l,n){l(n,3,0,"primary"),l(n,35,0,""),l(n,39,0,"username",""),l(n,42,0,"username","Username","","text"),l(n,46,0,""),l(n,50,0,"email",""),l(n,53,0,"email","your@email.com","","email"),l(n,57,0,""),l(n,61,0,"password",""),l(n,64,0,"password","Password","","password"),l(n,68,0,e.Fb(n,16).invalid,"block","large","submit")}),(function(l,n){l(n,14,0,e.Fb(n,18).ngClassUntouched,e.Fb(n,18).ngClassTouched,e.Fb(n,18).ngClassPristine,e.Fb(n,18).ngClassDirty,e.Fb(n,18).ngClassValid,e.Fb(n,18).ngClassInvalid,e.Fb(n,18).ngClassPending),l(n,34,0,e.Fb(n,35).required?"":null,e.Fb(n,41).ngClassUntouched,e.Fb(n,41).ngClassTouched,e.Fb(n,41).ngClassPristine,e.Fb(n,41).ngClassDirty,e.Fb(n,41).ngClassValid,e.Fb(n,41).ngClassInvalid,e.Fb(n,41).ngClassPending),l(n,45,0,e.Fb(n,46).required?"":null,e.Fb(n,52).ngClassUntouched,e.Fb(n,52).ngClassTouched,e.Fb(n,52).ngClassPristine,e.Fb(n,52).ngClassDirty,e.Fb(n,52).ngClassValid,e.Fb(n,52).ngClassInvalid,e.Fb(n,52).ngClassPending),l(n,56,0,e.Fb(n,57).required?"":null,e.Fb(n,63).ngClassUntouched,e.Fb(n,63).ngClassTouched,e.Fb(n,63).ngClassPristine,e.Fb(n,63).ngClassDirty,e.Fb(n,63).ngClassValid,e.Fb(n,63).ngClassInvalid,e.Fb(n,63).ngClassPending)}))}function m(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-register",[],null,null,null,p,h)),e.sb(1,114688,null,0,s,[c.m,i.a,t.Hb,r.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.pb("app-register",s,m,{},{},[]),v=u("Ip0R");u.d(n,"RegisterPageModuleNgFactory",(function(){return C}));var C=e.qb(a,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,f]],[3,e.j],e.x]),e.Db(4608,v.l,v.k,[e.u,[2,v.r]]),e.Db(4608,g.l,g.l,[]),e.Db(4608,t.c,t.c,[e.z,e.g]),e.Db(4608,t.Ib,t.Ib,[t.c,e.j,e.q]),e.Db(4608,t.Mb,t.Mb,[t.c,e.j,e.q]),e.Db(1073742336,v.b,v.b,[]),e.Db(1073742336,g.k,g.k,[]),e.Db(1073742336,g.b,g.b,[]),e.Db(1073742336,t.Fb,t.Fb,[]),e.Db(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.Db(1073742336,a,a,[]),e.Db(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);