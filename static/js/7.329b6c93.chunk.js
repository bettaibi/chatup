(this.webpackJsonpchatup=this.webpackJsonpchatup||[]).push([[7],{235:function(e,t,n){},237:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(270),i=n(98),r=n(284),l=n(1),o=n(10),j=n(278),u=n(279),b=n(280),d=n(281),h=n(282),x=n(283),O=n(3),f=[{icon:Object(O.jsx)(j.a,{}),title:"My Profile",path:"/chatup/profile",route:"profile"},{icon:Object(O.jsx)(u.a,{}),title:"Conversations",path:"/chatup",route:""},{icon:Object(O.jsx)(b.a,{}),title:"Calls History",path:"/chatup/calls",route:"calls"},{icon:Object(O.jsx)(d.a,{}),title:"Shorts",path:"/chatup/shorts",route:"shorts"},{icon:Object(O.jsx)(h.a,{}),title:"Notifications",path:"/chatup/notifications",route:"notifications"},{icon:Object(O.jsx)(x.a,{}),title:"Settings",path:"/chatup/settings",route:"settings"}],_=(n(235),function(e){var t=e.item,n=Object(l.g)()["*"]===t.route;return Object(O.jsx)("li",{className:"".concat(n?"active":""),children:Object(O.jsx)(i.a,{title:t.title,children:Object(O.jsx)(o.b,{to:t.path,className:"shadow__sm",children:Object(O.jsx)("span",{children:t.icon})})})})}),p=function(){return Object(O.jsx)("ul",{children:f.map((function(e,t){return Object(O.jsx)(_,{item:e},t)}))})},m=n(5),g=n(236),v=n.n(g);var w=function(){var e=s.a.useState(""),t=Object(m.a)(e,2),n=t[0],c=t[1];s.a.useEffect((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),s.a.useEffect((function(){var e=i(window.innerWidth);c(e)}),[]);var a=v()((function(){var e=i(window.innerWidth);c(e)}),200);function i(e){switch(!0){case e<576:return"xs";case e>=576&&e<=768:return"sm";case e>768&&e<=992:return"md";case e>992:return"lg";default:return""}}return{breakpoint:n}},y=n(238),N=n(285),k=n(273),z=n(264),C=function(e){var t=e.item,n=e.closeSidebar,c=Object(l.g)()["*"],s="".concat(c===t.route?"active":"");return Object(O.jsxs)("li",{children:[Object(O.jsx)(o.b,{to:t.path,className:s,onClick:n,children:Object(O.jsx)("span",{className:"icon",children:t.icon})}),Object(O.jsx)("h5",{children:t.title})]})},S=function(e){var t=e.closeHandler,n=s.a.useCallback((function(){setTimeout((function(){t(),clearTimeout(undefined)}),500)}),[]);return Object(O.jsxs)("ul",{children:[f.map((function(e,t){return Object(O.jsx)(C,{item:e,closeSidebar:n},t)})),Object(O.jsxs)("li",{children:[Object(O.jsx)("a",{role:"button",children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)(r.a,{})})}),Object(O.jsx)("h5",{children:"Sign out"})]})]})},E=(n(237),174),P={type:"spring",damping:10,stiffness:100},T=function(){var e=Object(y.a)(E),t=Object(N.a)(),n=[E,0],c=Object(k.a)(e,n,[0,1]),a=Object(k.a)(e,n,[-2,88888]),i=Object(k.a)(e,n,["#1DA57A","rgba(255, 255, 255, 0.6)"]);var r=s.a.useCallback((function(){0===e.get()&&t.start({x:E})}),[]);return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(z.a.div,{className:"mobile__sidebar bg__gredient",style:{opacity:c,zIndex:a},onTap:function(){return r()}}),Object(O.jsxs)(z.a.div,{className:"draggable",style:{x:e},transition:{spring:P,duration:.5},animate:t,children:[Object(O.jsx)(z.a.div,{className:"handler__container",whileTap:{scale:1.12},onPan:function(t,n){return function(t,n){if(t.stopPropagation(),n.offset.x<0){var c=E-Math.abs(n.offset.x);if(e.get()<=0)return void e.set(0);e.set(c)}if(n.offset.x>0){var s=n.offset.x-E;if(e.get()>=164)return;if(s<0)return void e.set(E+s);s>0&&s<E&&e.set(s)}}(t,n)},onPanEnd:function(n,c){e.get()>100?t.start({x:E}):t.start({x:0})},children:Object(O.jsx)(z.a.div,{className:"handler",style:{backgroundColor:i}})}),Object(O.jsx)("div",{className:"mobile__sidebar__content scrollabe",children:Object(O.jsx)(S,{closeHandler:r})})]})]})},H=function(){var e=w().breakpoint;return console.log("sidebar compoent"),Object(O.jsx)(O.Fragment,{children:"md"===e||"lg"===e?Object(O.jsxs)("div",{className:"sidebar scrollabe d__flex flex__column justify__content__around h__100",style:{backgroundColor:"transparent",width:"80px"},children:[Object(O.jsx)("div",{className:"d__flex align__item__center justify__content__center ",children:Object(O.jsx)("img",{src:"./chatup/img/57.png",alt:"app_logo"})}),Object(O.jsx)(p,{}),Object(O.jsx)("div",{className:"d__flex flex__column align__item__center w__100",children:Object(O.jsx)(i.a,{title:"Sign out",children:Object(O.jsx)("a",{role:"button",className:"shadow__sm signout__btn",children:Object(O.jsx)("span",{children:Object(O.jsx)(r.a,{})})})})})]}):Object(O.jsx)(T,{})})},A=Object(c.lazy)((function(){return n.e(16).then(n.bind(null,258))})),F=Object(c.lazy)((function(){return n.e(15).then(n.bind(null,259))})),J=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,260))})),L=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,261))})),M=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,262))})),W=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,263))})),D=a.a.Content;t.default=function(){return Object(O.jsx)("div",{className:"bg__gredient p__sm__16",children:Object(O.jsxs)(a.a,{className:"glass__blur responsive_layout d__flex flex__row",style:{overflow:"hidden"},children:[Object(O.jsx)(H,{}),Object(O.jsx)(D,{className:"main__content p__16",children:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)("span",{children:"inner loading..."}),children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",element:Object(O.jsx)(J,{})}),Object(O.jsx)(l.a,{path:"/profile",element:Object(O.jsx)(M,{})}),Object(O.jsx)(l.a,{path:"/settings",element:Object(O.jsx)(F,{})}),Object(O.jsx)(l.a,{path:"/notifications",element:Object(O.jsx)(L,{})}),Object(O.jsx)(l.a,{path:"/shorts",element:Object(O.jsx)(A,{})}),Object(O.jsx)(l.a,{path:"/calls",element:Object(O.jsx)(W,{})})]})})})]})})}}}]);
//# sourceMappingURL=7.329b6c93.chunk.js.map