(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),u=(n(14),n(4)),i=n(1);var l=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),d=l[0],f=l[1];return c.a.createElement("div",null,c.a.createElement("h1",null,"To-Do List"),c.a.createElement("input",{type:"text",value:d,onChange:function(t){return f(t.target.value)}}),c.a.createElement("button",{onClick:function(){return function(t){var e={id:Math.random(),todo:t};o([].concat(Object(u.a)(n),[e])),f("")}(d)}},"Add"),c.a.createElement("ul",null,n.map(function(t){return c.a.createElement("li",{key:t.id},t.todo,c.a.createElement("button",{onClick:function(){return function(t){var e=n.filter(function(e){return e.id!==t});o(e)}(t.id)}},"\xd7"))})))},d=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,17)).then(function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null))),d()},5:function(t,e,n){t.exports=n(16)}},[[5,3,2]]]);
//# sourceMappingURL=main.ed23020c.chunk.js.map