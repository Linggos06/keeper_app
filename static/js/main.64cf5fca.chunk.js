(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{143:function(e,n,t){e.exports=t(263)},154:function(e,n){},155:function(e,n){},156:function(e,n){},161:function(e,n){},163:function(e,n){},174:function(e,n){},176:function(e,n){},203:function(e,n){},205:function(e,n){},206:function(e,n){},211:function(e,n){},213:function(e,n){},232:function(e,n){},244:function(e,n){},247:function(e,n){},261:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=261},263:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(14),l=t.n(r),o=t(139),u=t(45),i=t(135),f=t.n(i);var m=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(f.a,null),"Keeper"))},E=(t(153),t(137)),p=t.n(E);var s=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(p.a,null)))};var v=function(){return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()))},d=t(54),b=t(81),O=t(138),h=t.n(O),k=t(280),j=t(281);var C=function(e){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),r=t[0],l=t[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),f=i[0],m=i[1];function E(e){var n=e.target,t=n.name,a=n.value;m((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},t,a))}))}return c.a.createElement("div",null,c.a.createElement("form",{className:"create-note"},r&&c.a.createElement("input",{onChange:E,value:f.title,name:"title",placeholder:"Title"}),c.a.createElement("textarea",{onChange:E,onClick:function(){l(!0)},value:f.content,name:"content",placeholder:"Take a note...",rows:r?3:1}),c.a.createElement(j.a,{in:r},c.a.createElement(k.a,{onClick:function(n){e.onClick(f),m({title:"",content:""}),n.preventDefault()}},c.a.createElement(h.a,null)))))};var w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1];function l(e){r((function(n){return n.filter((function(n,t){return t!==e}))}))}return c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(C,{onClick:function(e){r((function(n){return[].concat(Object(o.a)(n),[e])}))}}),t.map((function(e,n){return c.a.createElement(s,{key:n,id:n,title:e.title,content:e.content,onDelete:l})})),c.a.createElement(v,null))};l.a.render(c.a.createElement(w,null),document.querySelector("#root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.64cf5fca.chunk.js.map