(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{nrle:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("ZZ/e"),i=u("18Le"),r=u("gREL"),o=u("CUZT"),b=function(){function l(l,n,u,e,t){var i=this;this.navCtrl=l,this.loaderService=n,this.authenticationService=u,this.loadingController=e,this.alertService=t,this.authenticationService.getPush().then((function(l){i.pushId=l}))}return l.prototype.ngOnInit=function(){},l.prototype.login=function(l){var n=this;this.loaderService.showLoader("Signing in ..."),this.authenticationService.login(l.value.username,l.value.password,this.pushId).subscribe((function(l){n.loaderService.hideLoader(),l.success?n.navCtrl.navigateRoot("/pages/dashboard"):n.alertService.presentToast("Invalid login!")}),(function(l){n.loaderService.hideLoader(),n.alertService.presentToast("Server not available")}))},l}(),s=function(){return function(){}}(),a=u("pMnS"),d=u("oBZk"),c=u("gIcY"),g=e.rb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--background:#3880ff;--color:#fff}ion-col[_ngcontent-%COMP%]{--color:#fff}ion-content[_ngcontent-%COMP%]{--background:#fff}"]],data:{}});function p(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"ion-header",[],null,null,null,d.bb,d.q)),e.sb(1,49152,null,0,t.C,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,d.vb,d.K)),e.sb(3,49152,null,0,t.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(4,0,null,0,2,"ion-title",[],null,null,null,d.ub,d.J)),e.sb(5,49152,null,0,t.Bb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Login"])),(l()(),e.tb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.Q,d.f)),e.sb(8,49152,null,0,t.m,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,11).onClick(u)&&t),t}),d.N,d.c)),e.sb(10,49152,null,0,t.h,[e.h,e.k,e.z],null,null),e.sb(11,16384,null,0,t.i,[[2,t.jb],t.Jb],null,null),(l()(),e.tb(12,0,null,null,47,"ion-content",[["padding",""]],null,null,null,d.X,d.m)),e.sb(13,49152,null,0,t.v,[e.h,e.k,e.z],null,null),e.sb(14,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(15,0,null,0,44,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Fb(l,17).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,17).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.login(e.Fb(l,17))&&t),t}),null,null)),e.sb(16,16384,null,0,c.m,[],null,null),e.sb(17,4210688,[["form",4]],0,c.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Ib(2048,null,c.a,null,[c.h]),e.sb(19,16384,null,0,c.g,[[4,c.a]],null,null),(l()(),e.tb(20,0,null,null,39,"ion-grid",[],null,null,null,d.ab,d.p)),e.sb(21,49152,null,0,t.B,[e.h,e.k,e.z],null,null),(l()(),e.tb(22,0,null,0,37,"ion-row",[["color","primary"],["justify-content-center",""]],null,null,null,d.nb,d.C)),e.sb(23,49152,null,0,t.kb,[e.h,e.k,e.z],null,null),e.sb(24,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(25,0,null,0,34,"ion-col",[["align-self-center",""],["size-lg","5"],["size-md","6"],["size-xs","12"]],null,null,null,d.W,d.l)),e.sb(26,49152,null,0,t.u,[e.h,e.k,e.z],null,null),e.sb(27,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(28,0,null,0,2,"div",[["text-center",""]],null,null,null,null,null)),e.sb(29,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(30,0,null,null,0,"img",[["alt","Logo"],["src","assets/icon/logo.png"],["title","Logo"]],null,null,null,null,null)),(l()(),e.tb(31,0,null,0,23,"div",[["padding",""]],null,null,null,null,null)),e.sb(32,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(33,0,null,null,10,"ion-item",[],null,null,null,d.gb,d.t)),e.sb(34,49152,null,0,t.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(35,0,null,0,8,"ion-input",[["name","username"],["ngModel",""],["placeholder","Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,38)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,38)._handleInputEvent(u.target)&&t),t}),d.db,d.s)),e.sb(36,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.sb(38,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.sb(40,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},null),e.Ib(2048,null,c.e,null,[c.i]),e.sb(42,16384,null,0,c.f,[[4,c.e]],null,null),e.sb(43,49152,null,0,t.H,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.tb(44,0,null,null,10,"ion-item",[],null,null,null,d.gb,d.t)),e.sb(45,49152,null,0,t.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(46,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,49)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,49)._handleInputEvent(u.target)&&t),t}),d.db,d.s)),e.sb(47,16384,null,0,c.j,[],{required:[0,"required"]},null),e.Ib(1024,null,c.c,(function(l){return[l]}),[c.j]),e.sb(49,16384,null,0,t.Pb,[e.k],null,null),e.Ib(1024,null,c.d,(function(l){return[l]}),[t.Pb]),e.sb(51,671744,null,0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},null),e.Ib(2048,null,c.e,null,[c.i]),e.sb(53,16384,null,0,c.f,[[4,c.e]],null,null),e.sb(54,49152,null,0,t.H,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.tb(55,0,null,0,4,"div",[["padding",""]],null,null,null,null,null)),e.sb(56,16384,null,0,t.e,[e.k],null,null),(l()(),e.tb(57,0,null,null,2,"ion-button",[["color","primary"],["expand","block"],["size","large"],["type","submit"]],null,null,null,d.P,d.e)),e.sb(58,49152,null,0,t.l,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],size:[3,"size"],type:[4,"type"]},null),(l()(),e.Lb(-1,0,["Login"]))],(function(l,n){l(n,3,0,"primary"),l(n,36,0,""),l(n,40,0,"username",""),l(n,43,0,"username","Username","","text"),l(n,47,0,""),l(n,51,0,"password",""),l(n,54,0,"password","Password","","password"),l(n,58,0,"primary",e.Fb(n,17).invalid,"block","large","submit")}),(function(l,n){l(n,15,0,e.Fb(n,19).ngClassUntouched,e.Fb(n,19).ngClassTouched,e.Fb(n,19).ngClassPristine,e.Fb(n,19).ngClassDirty,e.Fb(n,19).ngClassValid,e.Fb(n,19).ngClassInvalid,e.Fb(n,19).ngClassPending),l(n,35,0,e.Fb(n,36).required?"":null,e.Fb(n,42).ngClassUntouched,e.Fb(n,42).ngClassTouched,e.Fb(n,42).ngClassPristine,e.Fb(n,42).ngClassDirty,e.Fb(n,42).ngClassValid,e.Fb(n,42).ngClassInvalid,e.Fb(n,42).ngClassPending),l(n,46,0,e.Fb(n,47).required?"":null,e.Fb(n,53).ngClassUntouched,e.Fb(n,53).ngClassTouched,e.Fb(n,53).ngClassPristine,e.Fb(n,53).ngClassDirty,e.Fb(n,53).ngClassValid,e.Fb(n,53).ngClassInvalid,e.Fb(n,53).ngClassPending)}))}function h(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-login",[],null,null,null,p,g)),e.sb(1,114688,null,0,b,[t.Jb,o.a,i.a,t.Hb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.pb("app-login",b,h,{},{},[]),v=u("Ip0R"),f=u("ZYCi");u.d(n,"LoginPageModuleNgFactory",(function(){return k}));var k=e.qb(s,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,m]],[3,e.j],e.x]),e.Db(4608,v.l,v.k,[e.u,[2,v.r]]),e.Db(4608,c.l,c.l,[]),e.Db(4608,t.c,t.c,[e.z,e.g]),e.Db(4608,t.Ib,t.Ib,[t.c,e.j,e.q]),e.Db(4608,t.Mb,t.Mb,[t.c,e.j,e.q]),e.Db(1073742336,v.b,v.b,[]),e.Db(1073742336,c.k,c.k,[]),e.Db(1073742336,c.b,c.b,[]),e.Db(1073742336,t.Fb,t.Fb,[]),e.Db(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),e.Db(1073742336,s,s,[]),e.Db(1024,f.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);