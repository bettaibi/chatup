(this.webpackJsonpchatup=this.webpackJsonpchatup||[]).push([[14],{268:function(e,s,c){},298:function(e,s,c){"use strict";c.r(s);var i=c(5),n=c(0),t=c.n(n),l=c(288),a=c(150),d=c(3),o=function(e){var s=e.children,c=e.hiddenFor,i=Object(a.a)().breakpoint;return c.includes(i)?null:Object(d.jsx)(t.a.Fragment,{children:s})},r=(c(268),c(286)),j=c(270),m=r.a.Title,u=r.a.Text,h=function(e){var s=e.item,c="missing"===s.type?"#ffecec":"outgoing"===s.type?"#e6ffc8":"#dee3ff";return Object(d.jsxs)("div",{className:"call shadow__sm d__flex row__gap",children:[Object(d.jsx)(j.a,{shape:"square",size:"large",src:"/chatup/img/avatar.jpg"}),Object(d.jsxs)("div",{style:{flex:1},className:"d__flex flex__column",children:[Object(d.jsx)(m,{type:"missing"===s.type?"danger":void 0,className:"m__0",level:5,children:"Nour Ben Mohammed"}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)(u,{children:[s.type," call"]}),Object(d.jsx)("span",{children:" \u2022 "}),Object(d.jsx)(u,{type:"secondary",children:"3 minutes 23 seconds"})]}),Object(d.jsx)("div",{style:{marginTop:"0.25rem"},children:Object(d.jsx)(u,{disabled:!0,children:"Yesterday, 12pm"})})]}),Object(d.jsx)("div",{className:"call__icon",style:{backgroundColor:c},children:Object(d.jsx)("img",{src:"/chatup/img/icons/".concat(s.type,".png"),alt:"I"})})]})},b=[{id:1,type:"missing"},{id:2,type:"incoming"},{id:3,type:"outgoing"},{id:4,type:"outgoing"},{id:5,type:"missing"}];s.default=function(){var e=Object(n.useState)("all"),s=Object(i.a)(e,2),c=s[0],t=s[1];return Object(d.jsxs)("div",{id:"calls",children:[Object(d.jsx)(l.a,{onBack:function(){return window.history.back()},title:"My Calls",subTitle:"History",className:"calls__header"}),Object(d.jsxs)("div",{className:"content d__flex scrollabe",children:[Object(d.jsx)(o,{hiddenFor:["xs","sm"],children:Object(d.jsxs)("ul",{className:"options shadow__sm",children:[Object(d.jsx)("li",{className:"all"===c?"active":"",onClick:function(){t("all")},children:"All"}),Object(d.jsx)("li",{className:"incoming"===c?"active":"",onClick:function(){t("incoming")},children:"Incoming Calls"}),Object(d.jsx)("li",{className:"outgoing"===c?"active":"",onClick:function(){t("outgoing")},children:"Outgoing Calls"}),Object(d.jsx)("li",{className:"missing"===c?"active":"",onClick:function(){t("missing")},children:"Missing Calls"})]})}),Object(d.jsx)("div",{className:"calls__list",children:b.map((function(e){return Object(d.jsx)(h,{item:e},e.id)}))})]})]})}}}]);
//# sourceMappingURL=14.14269425.chunk.js.map