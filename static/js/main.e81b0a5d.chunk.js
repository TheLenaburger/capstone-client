(this["webpackJsonpcapstone-client"]=this["webpackJsonpcapstone-client"]||[]).push([[0],{69:function(e,a,t){},70:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(23),r=t.n(s),c=(t(69),t(49)),i=t(6),o=t(7),l=t(99),u=(t(70),t(52)),d=t(1);var j=function(e){var a=e.variant,t=e.heading,s=e.message,r=Object(n.useState)(!0),c=Object(i.a)(r,2),o=c[0],l=c[1],j=Object(n.useState)(null),b=Object(i.a)(j,2),m=b[0],h=b[1];return console.log(m),Object(n.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return h(e),function(){clearTimeout(m)}}),[]),Object(d.jsx)(u.a,{variant:a,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u.a.Heading,{children:t}),Object(d.jsx)("p",{className:"alert-body",children:s})]})})},b=t(64),m=t(40),h=t(63),O=t(13),p=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),g=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(d.jsx)(O.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),x=Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O.c,{to:"/",className:"nav-link",children:"Home"})}),v=function(e){var a=e.user;return Object(d.jsx)(m.a,{bg:"primary",variant:"dark",expand:"md",children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(m.a.Brand,{children:Object(d.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"react-auth-template"})}),Object(d.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(b.a,{className:"ms-auto",children:[a&&Object(d.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",a.email]}),x,a?p:g]})})]})})},f=t(20),w=t.n(f),S=t(27),y="https://aqueous-atoll-85096.herokuapp.com",C="http://localhost:8000",k="localhost"===window.location.hostname?C:y,N=t(39),P=t.n(N),F=function(e,a,t){return P.a.post(k+"/sign-up/",{credentials:{email:e,password:a,password_confirmation:t}})},I=function(e,a){return P.a.post(k+"/sign-in/",{credentials:{email:e,password:a}})},A=function(e){return P.a.delete(k+"/sign-out/",{headers:{Authorization:"Token ".concat(e.token)}})},U=function(e,a,t){return P.a.patch(k+"/change-pw/",{passwords:{old:e,new:a}},{headers:{Authorization:"Token ".concat(t.token)}})},q=t(9),E=t(32),G=function(e){var a=e.msgAlert,t=e.setUser,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],l=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),p=O[0],g=O[1],x=Object(n.useState)(!1),v=Object(i.a)(x,2),f=v[0],y=v[1],C=function(){var e=Object(S.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,F(c,b,p);case 4:return e.next=6,I(c,b);case 6:s=e.sent,t(s.data.user),a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),y(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),l(""),m(""),g(""),a({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(a){return e.apply(this,arguments)}}();return f?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(q.a,{onSubmit:C,children:[Object(d.jsxs)(q.a.Group,{controlId:"email",children:[Object(d.jsx)(q.a.Label,{children:"Email address"}),Object(d.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"password",children:[Object(d.jsx)(q.a.Label,{children:"Password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"passwordConfirmation",children:[Object(d.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(q.a.Control,{required:!0,name:"passwordConfirmation",value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return g(e.target.value)}})]}),Object(d.jsx)(E.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},L=function(e){var a=e.msgAlert,t=e.setUser,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],l=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),p=O[0],g=O[1],x=function(){var e=Object(S.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,I(c,b);case 4:s=e.sent,t(s.data.user),a({heading:"Sign In Success",message:"Welcome!",variant:"success"}),g(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),l(""),m(""),a({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}();return p?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(q.a,{onSubmit:x,children:[Object(d.jsxs)(q.a.Group,{controlId:"email",children:[Object(d.jsx)(q.a.Label,{children:"Email address"}),Object(d.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"password",children:[Object(d.jsx)(q.a.Label,{children:"Password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(d.jsx)(E.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},T=function(e){var a=e.msgAlert,t=e.clearUser,s=e.user,r=Object(n.useState)(!1),c=Object(i.a)(r,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(s);case 2:a({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),t(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!s||l?Object(d.jsx)(o.a,{to:"/"}):""},D=function(e){var a=e.msgAlert,t=e.user,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],l=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),p=O[0],g=O[1],x=function(){var e=Object(S.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,U(c,b,t);case 4:a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),g(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),m(""),a({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return!t||p?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Change Password"}),Object(d.jsxs)(q.a,{onSubmit:x,children:[Object(d.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(d.jsx)(q.a.Label,{children:"Old password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(d.jsx)(q.a.Label,{children:"New Password"}),Object(d.jsx)(q.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return m(e.target.value)}})]}),Object(d.jsx)(E.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},z=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)([]),u=Object(i.a)(r,2),b=u[0],m=u[1],h=function(e){var a=e.heading,t=e.message,n=e.variant,s=Object(l.a)();m((function(e){return[].concat(Object(c.a)(e),[{heading:a,message:t,variant:n,id:s}])}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{user:t}),b.map((function(e){return Object(d.jsx)(j,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(d.jsx)("main",{className:"container",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/sign-up",element:Object(d.jsx)(G,{msgAlert:h,setUser:s})}),Object(d.jsx)(o.b,{path:"/sign-in",element:Object(d.jsx)(L,{msgAlert:h,setUser:s})}),Object(d.jsx)(o.b,{path:"/sign-out",element:Object(d.jsx)(T,{msgAlert:h,clearUser:function(){return s(null)},user:t})}),Object(d.jsx)(o.b,{path:"/change-password",element:Object(d.jsx)(D,{msgAlert:h,user:t})})]})})]})},B=Object(d.jsx)(O.a,{basename:"/capstone-client",children:Object(d.jsx)(z,{})});r.a.render(B,document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.e81b0a5d.chunk.js.map