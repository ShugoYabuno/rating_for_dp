(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{355:function(e,t,r){"use strict";r.r(t);r(0);var n=r(9),o=(r(57),r(46)),m=r(165),l=Object(o.a)({setup:function(){var e=Object(o.d)({form:{email:"",password:""}}),t=Object(m.b)().userProvider,r=function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,null==t?void 0:t.signIn(e.form.email,e.form.password);case 2:n=r.sent,console.log(n);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{handleSignIn:r,state:e}}}),c=l,f=r(69),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSignIn()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.state.form.email,expression:"state.form.email"}],attrs:{type:"text"},domProps:{value:e.state.form.email},on:{input:function(t){t.target.composing||e.$set(e.state.form,"email",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.state.form.password,expression:"state.form.password"}],attrs:{type:"password"},domProps:{value:e.state.form.password},on:{input:function(t){t.target.composing||e.$set(e.state.form,"password",t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("新規登録")])])])}),[],!1,null,null,null);t.default=component.exports}}]);