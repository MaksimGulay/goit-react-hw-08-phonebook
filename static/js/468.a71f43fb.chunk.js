"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[468],{4468:function(n,e,r){r.r(e),r.d(e,{default:function(){return rn}});var t,i,o,d,a,c,s,x,p,l,u,m,f,b,h,Z,g,j,v=r(168),y=r(5867),w=y.ZP.h1(t||(t=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  color: #333;\n  margin-bottom: 10px;\n"]))),P=y.ZP.h2(i||(i=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  color: #333;\n  margin-bottom: 10px;\n"]))),k=r(1413),z=r(2791),C=r(5705),_=r(6727),q=r(5984),I=r(9434),L=r(3634),F=function(n){var e=n.contacts,r=n.filter.filter.toLowerCase().trim();return r?e.contacts.filter((function(n){return n.name.toLowerCase().includes(r)})):e.contacts},R=(0,y.ZP)(C.l0)(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),S=y.ZP.div(d||(d=(0,v.Z)(["\n  width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),N=y.ZP.label(a||(a=(0,v.Z)(["\n  font-size: 16px;\n  margin-bottom: 5px;\n"]))),T=(0,y.ZP)(C.gN)(c||(c=(0,v.Z)(["\n  width: 376px;\n  padding: 10px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 15px;\n"]))),K=y.ZP.button(s||(s=(0,v.Z)(["\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n"]))),V=y.ZP.p(x||(x=(0,v.Z)(["\n  color: red;\n  font-size: 0.8rem;\n  margin-top: 4px;\n"]))),A=(0,y.ZP)(C.Bc)(p||(p=(0,v.Z)(["\n  color: red;\n  font-size: 0.8rem;\n  margin-top: 4px;\n"]))),B=r(184),D=_.Ry().shape({name:_.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:_.Z_().matches(/^\d{3}-\d{2}-\d{2}$/,"Invalid phone number format").required("Required")}),E=function(){var n=(0,I.I0)(),e=(0,I.v9)(F);return(0,B.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:D,onSubmit:function(r,t){var i=r.name;if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})))alert("".concat(i," is already in contacts."));else{var o=(0,k.Z)((0,k.Z)({},r),{},{id:(0,q.x0)()});n((0,L.uK)(o)),t.resetForm(),t.setSubmitting(!1)}},children:function(){return(0,B.jsx)(S,{children:(0,B.jsxs)(R,{children:[(0,B.jsx)(N,{children:"Name"}),(0,B.jsx)(T,{id:"name",type:"text",name:"name",placeholder:"\u041e\u0441\u0442\u0430\u043f"}),(0,B.jsx)(V,{children:(0,B.jsx)(A,{name:"name"})}),(0,B.jsx)(N,{children:"Number"}),(0,B.jsx)(T,{id:"number",type:"text",name:"number",placeholder:"123-45-67"}),(0,B.jsx)(V,{children:(0,B.jsx)(A,{name:"number"})}),(0,B.jsx)(K,{type:"submit",children:"Add contact"})]})})}})},G=y.ZP.div(l||(l=(0,v.Z)(["\n  display: flex;\n  width: 400px;\n  margin: 0 auto;\n  padding: 0px 20px 0px 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),J=y.ZP.ul(u||(u=(0,v.Z)(["\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"]))),$=y.ZP.li(m||(m=(0,v.Z)(["\n  text-align: center;\n  width: 400px;\n  padding: 10px;\n"]))),H=y.ZP.div(f||(f=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]))),M=y.ZP.span(b||(b=(0,v.Z)(["\n  font-weight: bold;\n"]))),O=y.ZP.button(h||(h=(0,v.Z)(["\n  background-color: #ff6347;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 15px;\n  cursor: pointer;\n"]))),Q=function(){var n=(0,I.I0)(),e=(0,I.v9)(F);return(0,B.jsx)(G,{children:(0,B.jsx)(J,{children:e.map((function(e){return(0,B.jsx)($,{children:(0,B.jsxs)(H,{children:[(0,B.jsxs)(M,{children:[e.name,":"]})," ",e.number,(0,B.jsx)(O,{onClick:function(){return r=e.id,void n((0,L.GK)(r));var r},children:"Delete"})]})},e.id)}))})})},U=r(4808),W=y.ZP.div(Z||(Z=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 400px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),X=y.ZP.label(g||(g=(0,v.Z)(["\n  font-size: 16px;\n  margin-bottom: 5px;\n  display: block;\n"]))),Y=y.ZP.input(j||(j=(0,v.Z)(["\n  width: 376px;\n  padding: 10px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]))),nn=function(){var n=(0,I.I0)(),e=(0,I.v9)((function(n){return n.filter.filter}));return(0,B.jsxs)(W,{children:[(0,B.jsx)(X,{children:"Find contact by name"}),(0,B.jsx)(Y,{type:"text",name:"Find contact by name",value:e,onChange:function(e){n((0,U.T)(e.target.value))}})]})},en=r(1538);function rn(){var n=(0,I.I0)(),e=(0,I.v9)(en.Vc);return(0,z.useEffect)((function(){n((0,L.yF)())}),[n]),(0,B.jsxs)("div",{children:[(0,B.jsx)(w,{children:"Phonebook"}),(0,B.jsx)(E,{}),(0,B.jsx)(P,{children:"Contacts"}),e?(0,B.jsx)("b",{children:"Request in progress..."}):null,(0,B.jsx)(nn,{}),(0,B.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=468.a71f43fb.chunk.js.map